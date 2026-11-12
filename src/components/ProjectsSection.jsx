import { useEffect, useState } from 'react'

import {
  FiActivity,
  FiArrowUpRight,
  FiCpu,
  FiFileText,
  FiGithub,
  FiGlobe,
  FiPlayCircle,
  FiShield,
  FiX
} from 'react-icons/fi'

import './ProjectsSection.css'

/* =====================================================
   DÉTECTION AUTOMATIQUE DES FICHIERS
   Dans src/assets/projects/<dossier>/ :
   - cover.png / cover.jpg  -> image de la carte
   - n'importe quel .pdf    -> bouton "Report"
   - n'importe quel .mp4    -> bouton "Video" (lecteur intégré)
===================================================== */
const FILES = import.meta.glob(
  '../assets/projects/*/*.{png,jpg,jpeg,webp,pdf,mp4}',
  { eager: true, query: '?url', import: 'default' }
)

function getFolderFiles(folder) {
  const out = { cover: null, report: null, demo: null }

  Object.entries(FILES).forEach(([path, url]) => {
    const parts = path.split('/')
    if (parts[3] !== folder) return

    const name = parts[4].toLowerCase()

    if (/\.(png|jpe?g|webp)$/.test(name)) {
      if (name.includes('cover') && !out.cover) out.cover = url
    } else if (name.endsWith('.pdf')) {
      if (!out.report) out.report = url
    } else if (name.endsWith('.mp4')) {
      if (!out.demo) out.demo = url
    }
  })

  return out
}

/* =====================================================
   CATÉGORIES (filtres)
===================================================== */
const CATEGORIES = {
  network: { label: 'Networks', icon: FiGlobe },
  ai: { label: 'AI & Data', icon: FiActivity },
  security: { label: 'Cybersecurity', icon: FiShield },
  embedded: { label: 'Embedded & RF', icon: FiCpu }
}

const FILTERS = ['all', 'network', 'ai', 'security', 'embedded']

/* =====================================================
   PROJETS
   links.github / links.video / links.report :
   colle un lien pour afficher le bouton ('' = caché).
   links.report sert aussi pour un PDF placé dans
   public/reports/ , par ex. '/reports/stm32.pdf'
===================================================== */
const RAW_PROJECTS = [
  {
    id: 'netpilot',
    number: '01',
    title: 'NetPilot',
    subtitle: 'Multi-Vendor Network Automation Platform',
    label: 'Network Automation · DevOps',
    description:
      'Python-based network automation platform providing unified workflows for configuration backup, templated deployment, validation and rollback across heterogeneous network devices.',
    tags: ['Python', 'Netmiko', 'Jinja2', 'Docker', 'CI/CD'],
    categories: ['network'],
    folder: 'netpolit',
    caseStudy: true,
    links: { github: '', video: '', report: '' }
  },
  {
    id: 'intrusion-detection',
    number: '02',
    title: 'AI-Based Intrusion Detection',
    subtitle: 'Intelligent Threat Detection for IoT Networks',
    label: 'AI · Cybersecurity · IoT',
    description:
      'IoT cybersecurity project combining network simulation, traffic analysis, feature preparation and a CNN-LSTM model to detect malicious behaviour such as DDoS, MITM and port scanning.',
    tags: ['Python', 'NS-3', 'NetAnim', 'Wireshark', 'CNN-LSTM'],
    categories: ['security', 'ai'],
    folder: 'intrusion-detection',
    caseStudy: true,
    links: { github: '', video: '', report: '' }
  },
  {
    id: 'emergency-alert',
    number: '03',
    title: '5G & Edge AI Emergency Response',
    subtitle: 'Low-Latency Emergency Detection Simulation',
    label: '5G · Edge Computing · IoT',
    description:
      'Python simulation comparing 4G + Cloud processing with 5G + Edge processing for emergency detection latency in a connected-health scenario.',
    tags: ['Python', '5G', 'Edge Computing', 'IoT', 'Simulation'],
    categories: ['network', 'ai'],
    folder: 'emergency-response',
    caseStudy: true,
    links: { github: '', video: '', report: '' }
  },
  
  {
    id: 'hippocampus',
    number: '05',
    title: 'Hippocampus MRI Segmentation',
    subtitle: 'Deep Learning for Medical Imaging',
    label: 'AI · Computer Vision',
    description:
      'Medical-imaging project for automatic hippocampus segmentation from MRI data using preprocessing, augmentation and a U-Net-style deep-learning architecture.',
    tags: ['Python', 'PyTorch', 'U-Net', 'Medical Imaging', 'Computer Vision'],
    categories: ['ai'],
    folder: 'hippocampus',
    links: { github: '', video: '', report: '' }
  },
  {
    id: 'pv-antenna',
    number: '06',
    title: 'AI-Optimized Dual-Function Photovoltaic Antenna',
    subtitle: 'Solar Energy Harvesting + RF Communication',
    label: 'RF · Telecommunications · AI Optimization',
    description:
      'Multifunctional antenna study in which the same structure serves both photovoltaic energy harvesting and RF communication, with optimization of physical and electrical parameters using an evolutionary approach.',
    tags: ['RF', 'Antennas', 'Photovoltaics', 'Graphene', 'Genetic Algorithm'],
    categories: ['embedded', 'ai'],
    folder: 'antenna',
    links: { github: '', video: '', report: '' }
  },
   {
    id: 'sentiment',
    number: '12',
    title: 'Sentiment Analysis',
    subtitle: 'NLP & Text Intelligence',
    label: 'AI · NLP',
    description:
      'Text-analytics project covering preprocessing, feature extraction and machine-learning classification for automatic sentiment analysis.',
    tags: ['Python', 'NLP', 'Machine Learning', 'Text Analytics'],
    categories: ['ai'],
    folder: 'sentiment-analysis',
    links: { github: '', video: '', report: '' }
   },

  {
    id: 'wifi-security',
    number: '07',
    title: 'Wi-Fi Security Assessment',
    subtitle: 'Wireless Network Security Analysis',
    label: 'Cybersecurity · Wireless Networks',
    description:
      'Controlled wireless-security assessment focused on Wi-Fi traffic analysis, authentication security and common attack techniques in WPA2/WPA3 environments.',
    tags: ['Kali Linux', 'Wireshark', 'Aircrack-ng', 'Ettercap', 'WPA2/WPA3'],
    categories: ['security', 'network'],
    folder: 'wifi-security',
    links: { github: '', video: '', report: '' }
  },
  {
    id: 'stm32-spi',
    number: '08',
    title: 'STM32 SPI Communication & Validation',
    subtitle: 'Embedded Communication & Interface Testing',
    label: 'Embedded Systems · Validation',
    description:
      'Embedded-systems laboratory project focused on configuring and validating SPI communication on STM32 hardware using C and STM32 development tools.',
    tags: ['C', 'STM32', 'SPI', 'DMA', 'STM32CubeMX'],
    categories: ['embedded'],
    folder: 'stm32',
    links: { github: '', video: '', report: '' }
  },


  {
  id: 'spam',
  number: '11',
  title: 'SMS Spam Classification',
  subtitle: 'Natural Language Processing',
  label: 'AI · NLP',
  description:
    'NLP classification project that transforms raw SMS text into machine-learning features to distinguish spam messages from legitimate messages.',
  tags: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'Classification'],
  categories: ['ai'],
  folder: 'spam-classifier',

  links: {
    github: 'https://github.com/insaf178/-Sms-spam-classifier.git',
    video: '',
    report: ''
  }
  },
  
  {
    id: 'routing-switching',
    number: '10',
    title: 'Advanced Routing & Switching Labs',
    subtitle: 'Enterprise Network Configuration & Validation',
    label: 'Networks · Routing · Switching',
    description:
      'Practical network-engineering labs covering routing protocols, VLANs, spanning tree, access control, NAT and structured network validation.',
    tags: ['OSPF', 'BGP', 'VLAN', 'STP/RSTP', 'ACL', 'NAT'],
    categories: ['network'],
    folder: 'routing-switching',
    links: { github: '', video: '', report: '' }
  },
  
 

  {
    id: 'eeg',
    number: '04',
    title: 'EEG Seizure Prediction',
    subtitle: 'Deep Learning for Biosignal Analysis',
    label: 'AI · Signal Processing',
    description:
      'Biosignal-analysis project focused on EEG preprocessing and deep-learning analysis of seizure-related patterns using temporal signal information.',
    tags: ['Python', 'MNE-Python', 'EEG', 'Signal Processing', 'CNN-LSTM'],
    categories: ['ai'],
    folder: 'eeg',
    links: { github: '', video: '', report: '' }
  },

  {
    id: 'embedded-linux',
    number: '09',
    title: 'Embedded Linux on BeagleBone Black',
    subtitle: 'Embedded Linux & System Integration',
    label: 'Embedded Linux · Systems',
    description:
      'Hands-on Embedded Linux work using BeagleBone Black, covering Linux system configuration and embedded-system integration concepts.',
    tags: ['Embedded Linux', 'BeagleBone Black', 'Linux', 'Yocto', 'C/C++'],
    categories: ['embedded'],
    folder: 'embedded-linux',
    links: { github: '', video: '', report: '' }
  }
]

const PROJECTS = RAW_PROJECTS.map(project => ({
  ...project,
  files: getFolderFiles(project.folder)
}))

const FEATURED = PROJECTS.filter(project => project.caseStudy)
const ACADEMIC = PROJECTS.filter(project => !project.caseStudy)

/* =====================================================
   CARTE PROJET
===================================================== */
function ProjectCard({ project, onOpenCaseStudy, onPlayVideo }) {
  const { files, links } = project
  const mainCategory = project.categories[0]
  const Icon = CATEGORIES[mainCategory].icon

  const report = links.report || files.report
  const github = links.github
  const localVideo = files.demo
  const externalVideo = links.video

  const hasActions =
    project.caseStudy || report || github || localVideo || externalVideo

  return (
    <article
      className={
        project.caseStudy ? 'pj-card pj-card-featured' : 'pj-card'
      }
    >
      <div className="pj-media">
        {files.cover ? (
          <img
            src={files.cover}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        ) : (
          <div className={`pj-placeholder pj-cat-${mainCategory}`}>
            <Icon />
            <span>{project.number}</span>
          </div>
        )}

        <span className="pj-chip">{project.label}</span>

        {project.caseStudy && (
          <span className="pj-ribbon">Case Study</span>
        )}
      </div>

      <div className="pj-body">
        <p className="pj-subtitle">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="pj-description">{project.description}</p>

        <ul className="pj-tags">
          {project.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {hasActions && (
          <div className="pj-actions">
            {project.caseStudy && (
              <button
                type="button"
                className="pj-btn pj-btn-primary"
                onClick={() => onOpenCaseStudy(project.id)}
              >
                View Case Study
                <FiArrowUpRight />
              </button>
            )}

            {report && (
              <a
                href={report}
                target="_blank"
                rel="noreferrer"
                className="pj-btn"
              >
                <FiFileText />
                Report
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="pj-btn"
              >
                <FiGithub />
                GitHub
              </a>
            )}

            {localVideo ? (
              <button
                type="button"
                className="pj-btn"
                onClick={() =>
                  onPlayVideo({ src: localVideo, title: project.title })
                }
              >
                <FiPlayCircle />
                Demo
              </button>
            ) : (
              externalVideo && (
                <a
                  href={externalVideo}
                  target="_blank"
                  rel="noreferrer"
                  className="pj-btn"
                >
                  <FiPlayCircle />
                  Video
                </a>
              )
            )}
          </div>
        )}
      </div>
    </article>
  )
}

/* =====================================================
   SECTION
===================================================== */
export default function ProjectsSection({ onOpenCaseStudy }) {
  const [filter, setFilter] = useState('all')
  const [video, setVideo] = useState(null)

  const visible =
    filter === 'all'
      ? ACADEMIC
      : ACADEMIC.filter(project => project.categories.includes(filter))

  const countFor = key =>
    key === 'all'
      ? ACADEMIC.length
      : ACADEMIC.filter(project => project.categories.includes(key)).length

  /* Fermeture du lecteur vidéo : Échap + blocage du scroll */
  useEffect(() => {
    if (!video) return undefined

    const onKey = event => {
      if (event.key === 'Escape') setVideo(null)
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [video])

  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="section-eyebrow">Selected Projects</p>
        <h2>Engineering Portfolio</h2>
        <p>
          Selected work across network automation, artificial intelligence,
          telecommunications, cybersecurity, embedded systems and data
          science.
        </p>
      </div>

      {/* ===== FEATURED ===== */}
      <div className="pj-group">
        <div className="pj-group-head">
          <p className="section-eyebrow">Featured Projects</p>
          <h3>Flagship engineering work</h3>
          <p>
            Three projects with dedicated case studies covering network
            automation, AI-driven cybersecurity and 5G / Edge computing.
          </p>
        </div>

        <div className="pj-grid">
          {FEATURED.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              onPlayVideo={setVideo}
            />
          ))}
        </div>
      </div>

      {/* ===== ACADEMIC ===== */}
      <div className="pj-group pj-group-academic">
        <div className="pj-group-head">
          <p className="section-eyebrow">Academic &amp; Engineering Projects</p>
          <h3>AI, telecom, cybersecurity &amp; embedded systems</h3>
          <p>
            Selected university projects and engineering labs demonstrating
            practical work across AI, signal processing, RF, networking and
            embedded systems.
          </p>
        </div>

        <div className="pj-filters" role="tablist" aria-label="Project filters">
          {FILTERS.map(key => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={filter === key}
              className={
                filter === key ? 'pj-filter pj-filter-active' : 'pj-filter'
              }
              onClick={() => setFilter(key)}
            >
              {key === 'all' ? 'All' : CATEGORIES[key].label}
              <span>{countFor(key)}</span>
            </button>
          ))}
        </div>

        <div className="pj-grid" key={filter}>
          {visible.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              onPlayVideo={setVideo}
            />
          ))}
        </div>
      </div>

      {/* ===== LECTEUR VIDÉO ===== */}
      {video && (
        <div
          className="pj-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${video.title} demo`}
          onClick={() => setVideo(null)}
        >
          <button
            type="button"
            className="pj-modal-close"
            onClick={() => setVideo(null)}
            aria-label="Close video"
          >
            <FiX />
          </button>

          <div
            className="pj-modal-content"
            onClick={event => event.stopPropagation()}
          >
            <video src={video.src} controls autoPlay playsInline />
            <p>{video.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}