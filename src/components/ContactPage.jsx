import {
  FiArrowUp,
  FiArrowUpRight,
  FiBriefcase,
  FiClock,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin
} from 'react-icons/fi'

   import './ContactPage.css'

/* ===== À MODIFIER ICI ===== */
const EMAIL = 'insaf.fares@etudiant-enit.utm.tn'
const LINKEDIN_URL = 'https://www.linkedin.com/in/insaf-fares-b6995b320'
const GITHUB_URL = 'https://github.com/insaf178'
const AVAILABILITY = 'Available now'

const OPEN_TO = [
  {
    icon: FiBriefcase,
    title: 'Roles',
    text: 'Network Automation · QA/Test Automation · DevOps · Python Backend'
  },
  {
    icon: FiGlobe,
    title: 'Location',
    text: 'Tunisia · France · Europe · Remote'
  },
  {
    icon: FiClock,
    title: 'Availability',
    text: AVAILABILITY
  }
]

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' }
]

export default function ContactSection() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* ================= OPEN TO ================= */}
      <section id="open-to" className="skills-section">
        <div className="section-heading">
          <p className="section-eyebrow">Open to</p>
          <h2>What I'm looking for</h2>
        </div>

        <div className="ct-open-grid">
          {OPEN_TO.map(item => {
            const Icon = item.icon
            return (
              <article className="ct-open-card" key={item.title}>
                <span className="ct-icon">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="skills-section">
        <div className="section-heading">
          <p className="section-eyebrow">Let's Connect</p>
          <h2>
            Have an opportunity, project or idea{' '}
            <span className="ct-accent">in mind?</span>
          </h2>
          <p>
            I'm open to engineering opportunities across network automation,
            software development, data &amp; AI, QA automation and intelligent
            connected systems.
          </p>
        </div>

        <div className="ct-availability">
          <span className="ct-dot"></span>
          Open to opportunities
        </div>

        <div className="ct-methods">
          <a
            href={`mailto:${EMAIL}`}
            className="ct-method ct-method-main"
          >
            <span className="ct-icon">
              <FiMail />
            </span>
            <div>
              <small>Email</small>
              <h3>Start a conversation</h3>
              <p>{EMAIL}</p>
            </div>
            <FiArrowUpRight className="ct-arrow" />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="ct-method"
          >
            <span className="ct-icon">
              <FiLinkedin />
            </span>
            <div>
              <small>LinkedIn</small>
              <h3>Connect professionally</h3>
              <p>Insaf Fares</p>
            </div>
            <FiArrowUpRight className="ct-arrow" />
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="ct-method"
          >
            <span className="ct-icon">
              <FiGithub />
            </span>
            <div>
              <small>GitHub</small>
              <h3>Explore my work</h3>
              <p>github.com/insaf178</p>
            </div>
            <FiArrowUpRight className="ct-arrow" />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="ct-footer">
        <div className="ct-footer-inner">
          <div className="ct-footer-grid">
            <div className="ct-footer-brand">
              <div className="ct-brand-row">
                <span className="ct-logo">IF</span>
                <strong>Insaf Fares</strong>
              </div>
              <p>Network &amp; Test Automation Engineer</p>

              <div className="ct-socials">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a href={`mailto:${EMAIL}`} aria-label="Email">
                  <FiMail />
                </a>
              </div>
            </div>

            <div className="ct-footer-col">
              <h4>Get In Touch</h4>

              <a href={`mailto:${EMAIL}`} className="ct-info">
                <span className="ct-icon ct-icon-sm">
                  <FiMail />
                </span>
                <div>
                  <strong>Email</strong>
                  <span>{EMAIL}</span>
                </div>
              </a>

              <div className="ct-info">
                <span className="ct-icon ct-icon-sm">
                  <FiMapPin />
                </span>
                <div>
                  <strong>Location</strong>
                  <span>Tunis, Tunisia</span>
                </div>
              </div>
            </div>

            <div className="ct-footer-col">
              <h4>Quick Links</h4>
              <ul className="ct-links">
                {QUICK_LINKS.map(link => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ct-footer-bottom">
            <p>© 2026 Insaf Fares. All rights reserved.</p>

            <button
              type="button"
              className="ct-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <FiArrowUp />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}