import { useEffect, useRef, useState } from 'react'
import './CertificationsCarousel.css'

import {
  FiAward,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiZoomIn
} from 'react-icons/fi'

/* Toutes les images dans src/assets/certs/ sont chargées automatiquement.
   Il suffit que le nom du fichier corresponde au champ "file" ci-dessous. */
const IMAGES = import.meta.glob('../assets/cerf/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
})

const getImage = file => {
  const key = Object.keys(IMAGES).find(path => path.endsWith(`/${file}`))
  return key ? IMAGES[key] : null
}

/* Nombre de compétences affichées sur la carte (toutes dans la lightbox) */
const MAX_CARD_SKILLS = 4

/* Triés du plus récent au plus ancien.
   Compétences : celles des badges Credly pour DevNet, CCNA SRWE, CCNA ITN
   et AWS ; déduites du titre du cours pour les autres. */
const CERTS = [
  {
    name: 'DevNet Associate',
    issuer: 'Cisco Networking Academy',
    year: 'Jan 2026',
    file: 'devnet.jpeg',
    skills: [
      'Python',
      'Automation',
      'DevOps',
      'Software Development',
      'Application Deployment',
      'Application Security',
      'Cloud',
      'Infrastructure and Automation',
      'JSON',
      'IoT',
      'Network Infrastructure',
      'Software Design',
      'Cisco Platforms & Development'
    ]
  },
  {
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    year: 'Jan 2026',
    file: 'SW.jpeg',
    skills: [
      'Switching Protocols',
      'Routing',
      'Wireless LAN Controllers',
      'High Availability',
      'First-hop Redundancy',
      'Access Security',
      'Access Connectivity',
      'IP Services'
    ]
  },
  {
    name: 'Building Transformer-Based NLP Applications',
    issuer: 'NVIDIA',
    year: 'Dec 2025',
    file: 'LLM.png',
    skills: ['Transformers', 'NLP', 'Deep Learning']
  },
  {
    name: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    year: 'Nov 2025',
    file: 'ethical.jpeg',
    skills: ['Ethical Hacking', 'Network Security']
  },
  {
    name: 'Hashgraph Developer Course',
    issuer: 'The Hashgraph Association',
    year: 'Apr 2025',
    file: 'hashgrah.jpeg',
    skills: ['Hashgraph', 'Distributed Ledger']
  },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: 'Feb 2025',
    file: 'CCNA.jpeg',
    skills: [
      'Network Fundamentals',
      'IPv4 & IPv6 Addressing',
      'IP Subnetting',
      'Ethernet',
      'Switching',
      'IP Connectivity',
      'IP Services',
      'Security Fundamentals'
    ]
  },
  {
    name: 'Intro to Deep Learning',
    issuer: 'Kaggle',
    year: 'Feb 2025',
    file: 'kaggle.jpeg',
    skills: ['Deep Learning', 'Neural Networks']
  },
  {
    name: 'AWS Academy Graduate: Cloud Foundations',
    issuer: 'AWS Academy',
    year: 'Jan 2025',
    file: 'aws.jpeg',
    skills: [
      'AWS Cloud',
      'AWS Core Services',
      'AWS Architecture',
      'AWS Pricing',
      'AWS Support'
    ]
  }
]

/* 3 cartes sur desktop, 2 sur tablette, 1 sur mobile */
function usePageSize() {
  const compute = () => {
    if (typeof window === 'undefined') return 3
    if (window.matchMedia('(max-width: 700px)').matches) return 1
    if (window.matchMedia('(max-width: 1050px)').matches) return 2
    return 3
  }

  const [size, setSize] = useState(compute)

  useEffect(() => {
    const onResize = () => setSize(compute())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return size
}

function CertPreview({ cert, large = false }) {
  const src = getImage(cert.file)

  if (src) {
    return (
      <img
        src={src}
        alt={`Certificat : ${cert.name}`}
        className={large ? 'cert-lightbox-img' : 'cert-card-img'}
        loading="lazy"
        draggable="false"
      />
    )
  }

  return (
    <div className="cert-placeholder">
      <FiAward />
      <span>{cert.issuer}</span>
    </div>
  )
}

export default function CertificationsCarousel() {
  const pageSize = usePageSize()
  const [page, setPage] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const touchStartX = useRef(null)

  const pageCount = Math.ceil(CERTS.length / pageSize)
  const currentPage = Math.min(page, pageCount - 1)
  const start = currentPage * pageSize
  const visible = CERTS.slice(start, start + pageSize)
  const rangeEnd = Math.min(start + pageSize, CERTS.length)

  const goTo = target =>
    setPage(Math.max(0, Math.min(pageCount - 1, target)))
  const prev = () => goTo(currentPage - 1)
  const next = () => goTo(currentPage + 1)

  /* Clavier : flèches pour la pagination, Échap + flèches dans la lightbox */
  useEffect(() => {
    const onKey = event => {
      if (lightbox !== null) {
        if (event.key === 'Escape') setLightbox(null)
        if (event.key === 'ArrowLeft')
          setLightbox(i => (i - 1 + CERTS.length) % CERTS.length)
        if (event.key === 'ArrowRight')
          setLightbox(i => (i + 1) % CERTS.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  /* Empêche le scroll de la page quand la lightbox est ouverte */
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightbox])

  const onTouchStart = event => {
    touchStartX.current = event.touches[0].clientX
  }

  const onTouchEnd = event => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)()
    touchStartX.current = null
  }

  const active = lightbox !== null ? CERTS[lightbox] : null

  return (
    <section id="certifications" className="skills-section cert-section">
      <div className="section-heading">
        <p className="section-eyebrow">Credentials</p>
        <h2>Certifications</h2>
        <p>Cliquez sur un certificat pour le voir en grand.</p>
      </div>

      <div
        className="cert-carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="cert-track"
          key={`${currentPage}-${pageSize}`}
          style={{ '--cols': pageSize }}
        >
          {visible.map((cert, i) => (
            <button
              type="button"
              key={cert.name}
              className="cert-card"
              onClick={() => setLightbox(start + i)}
              aria-label={`Agrandir : ${cert.name}`}
            >
              <div className="cert-card-media">
                <CertPreview cert={cert} />
                <span className="cert-zoom" aria-hidden="true">
                  <FiZoomIn />
                </span>
              </div>

              <div className="cert-card-info">
                <h3>{cert.name}</h3>
                <p>
                  {cert.issuer} · {cert.year}
                </p>

                <ul className="cert-skills">
                  {cert.skills.slice(0, MAX_CARD_SKILLS).map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                  {cert.skills.length > MAX_CARD_SKILLS && (
                    <li className="cert-skills-more">
                      +{cert.skills.length - MAX_CARD_SKILLS}
                    </li>
                  )}
                </ul>
              </div>
            </button>
          ))}
        </div>

        {/* ===== PAGINATION ===== */}
        <nav className="cert-pagination" aria-label="Pagination des certifications">
          <button
            type="button"
            className="cert-arrow"
            onClick={prev}
            disabled={currentPage === 0}
            aria-label="Page précédente"
          >
            <FiChevronLeft />
            <span>Préc.</span>
          </button>

          <div className="cert-pages">
            <ol className="cert-page-list">
              {Array.from({ length: pageCount }, (_, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className={
                      index === currentPage
                        ? 'cert-page cert-page-active'
                        : 'cert-page'
                    }
                    onClick={() => goTo(index)}
                    aria-label={`Page ${index + 1}`}
                    aria-current={index === currentPage ? 'page' : undefined}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ol>

            <p className="cert-counter" aria-live="polite">
              {pageSize === 1
                ? `Certificat ${start + 1} sur ${CERTS.length}`
                : `${start + 1}–${rangeEnd} sur ${CERTS.length} certificats`}
            </p>
          </div>

          <button
            type="button"
            className="cert-arrow"
            onClick={next}
            disabled={currentPage === pageCount - 1}
            aria-label="Page suivante"
          >
            <span>Suiv.</span>
            <FiChevronRight />
          </button>
        </nav>
      </div>

      {/* ===== LIGHTBOX ===== */}
      {active && (
        <div
          className="cert-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="cert-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <FiX />
          </button>

          <button
            type="button"
            className="cert-lightbox-nav cert-lightbox-prev"
            onClick={event => {
              event.stopPropagation()
              setLightbox((lightbox - 1 + CERTS.length) % CERTS.length)
            }}
            aria-label="Certificat précédent"
          >
            <FiChevronLeft />
          </button>

          <figure
            className="cert-lightbox-content"
            onClick={event => event.stopPropagation()}
          >
            <CertPreview cert={active} large />
            <figcaption>
              <strong>{active.name}</strong>
              <span>
                {active.issuer} · {active.year} · {lightbox + 1} / {CERTS.length}
              </span>

              <ul className="cert-skills cert-skills-lightbox">
                {active.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </figcaption>
          </figure>

          <button
            type="button"
            className="cert-lightbox-nav cert-lightbox-next"
            onClick={event => {
              event.stopPropagation()
              setLightbox((lightbox + 1) % CERTS.length)
            }}
            aria-label="Certificat suivant"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}