import '../App.css'

import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin
} from 'react-icons/fi'


function ContactPage({ onBack }) {

  return (

    <main className="contact-page">


      {/* TOPBAR */}

      <div className="contact-page-topbar">

        <button
          type="button"
          className="case-back-button"
          onClick={onBack}
        >
          <FiArrowLeft />
          Back to Portfolio
        </button>

      </div>



      {/* HERO */}

      <section className="contact-page-hero">


        <div className="contact-hero-content">

          <p className="section-eyebrow">
            Let's Connect
          </p>

          <h1>
            Have an opportunity,
            <br />
            project or idea
            <span> in mind?</span>
          </h1>

          <p className="contact-hero-description">
            I'm open to engineering opportunities across
            network automation, software development,
            data & AI, QA automation and intelligent
            connected systems.
          </p>

          <div className="contact-availability">
            <span className="availability-dot"></span>
            Open to opportunities
          </div>

        </div>



        {/* VISUAL */}

        <div className="contact-visual">

          <div className="contact-orbit orbit-one"></div>
          <div className="contact-orbit orbit-two"></div>
          <div className="contact-orbit orbit-three"></div>

          <div className="contact-visual-center">

            <span>NETWORKS</span>
            <strong>+</strong>
            <span>SOFTWARE</span>
            <strong>+</strong>
            <span>AI / DATA</span>

          </div>

        </div>


      </section>



      {/* CONTACT METHODS */}

      <section className="contact-methods">


        <a
          href="mailto:insaf.fares@etudiant-enit.utm.tn"
          className="contact-method contact-method-main"
        >

          <div className="contact-method-icon">
            <FiMail />
          </div>

          <div>
            <span>Email</span>
            <h3>Start a conversation</h3>
            <p>insaf.fares@etudiant-enit.utm.tn</p>
          </div>

          <FiArrowUpRight className="contact-method-arrow" />

        </a>



        <a
          href="https://www.linkedin.com/in/insaf-fares-b6995b320"
          target="_blank"
          rel="noreferrer"
          className="contact-method"
        >

          <div className="contact-method-icon">
            <FiLinkedin />
          </div>

          <div>
            <span>LinkedIn</span>
            <h3>Connect professionally</h3>
            <p>Insaf Fares</p>
          </div>

          <FiArrowUpRight className="contact-method-arrow" />

        </a>



        <a
          href="https://github.com/insaf178"
          target="_blank"
          rel="noreferrer"
          className="contact-method"
        >

          <div className="contact-method-icon">
            <FiGithub />
          </div>

          <div>
            <span>GitHub</span>
            <h3>Explore my work</h3>
            <p>github.com/insaf178</p>
          </div>

          <FiArrowUpRight className="contact-method-arrow" />

        </a>



        <div className="contact-method">

          <div className="contact-method-icon">
            <FiMapPin />
          </div>

          <div>
            <span>Location</span>
            <h3>Based in Tunisia</h3>
            <p>Tunis, Tunisia</p>
          </div>

        </div>


      </section>



      {/* BOTTOM */}

      <section className="contact-bottom">

        <p>
          Available for graduate opportunities and engineering roles.
        </p>

        <button
          type="button"
          onClick={onBack}
        >
          Explore my work
          <FiArrowUpRight />
        </button>

      </section>


    </main>

  )

}


export default ContactPage
