import { useState } from 'react'

import './App.css'



import NetSupervisionCaseStudy from './components/NetSupervisionCaseStudy'

import SmartKokusaiCaseStudy from './components/SmartKokusaiCaseStudy'

import ContactPage from './components/ContactPage'



import profileImage from './assets/insaf5.png'

import telnetLogo from './assets/telnet1.jpeg'

import smartKokusaiLogo from './assets/smartkokusai.jpeg'

import softifiLogo from './assets/softifi.jpeg'

import NetPilotCaseStudy from './components/NetPilotCaseStudy'

import IntrusionDetectionCaseStudy

  from './components/IntrusionDetectionCaseStudy'



import EmergencyResponseCaseStudy

  from './components/EmergencyResponseCaseStudy'



import {

  FiGithub,

  FiLinkedin,

  FiMail,

  FiDownload,

  FiArrowDown,

  FiMapPin,

  FiBookOpen,

  FiGlobe,

  FiCpu,

  FiArrowUpRight

} from 'react-icons/fi'





const PROJECTS = [
  {
    id: 'netpilot',
    number: '01',
    title: 'NetPilot',
    subtitle: 'Multi-Vendor Network Automation Platform',
    category: 'network',
    label: 'Network Automation · DevOps',
    description:
      'Python-based network automation platform providing unified workflows for configuration backup, templated deployment, validation and rollback across heterogeneous network devices.',
    tags: ['Python', 'Netmiko', 'Jinja2', 'Docker', 'CI/CD'],
    featured: true,
    caseStudy: true
  },
  {
    id: 'intrusion-detection',
    number: '02',
    title: 'AI-Based Intrusion Detection',
    subtitle: 'Intelligent Threat Detection for IoT Networks',
    category: 'security',
    label: 'AI · Cybersecurity · IoT',
    description:
      'IoT cybersecurity project combining network simulation, traffic analysis, feature preparation and a CNN-LSTM model to detect malicious behaviour such as DDoS, MITM and port scanning.',
    tags: ['Python', 'NS-3', 'NetAnim', 'Wireshark', 'CNN-LSTM'],
    featured: true,
    caseStudy: true
  },
  {
    id: 'emergency-alert',
    number: '03',
    title: '5G & Edge AI Emergency Response',
    subtitle: 'Low-Latency Emergency Detection Simulation',
    category: 'iot',
    label: '5G · Edge Computing · IoT',
    description:
      'Python simulation comparing 4G + Cloud processing with 5G + Edge processing for emergency detection latency in a connected-health scenario.',
    tags: ['Python', '5G', 'Edge Computing', 'IoT', 'Simulation'],
    featured: true,
    caseStudy: true
  },

  {
    id: 'eeg',
    number: '04',
    title: 'EEG Seizure Prediction',
    subtitle: 'Deep Learning for Biosignal Analysis',
    category: 'data',
    label: 'AI · Signal Processing',
    description:
      'Biosignal-analysis project focused on EEG preprocessing and deep-learning analysis of seizure-related patterns using temporal signal information.',
    tags: ['Python', 'MNE-Python', 'EEG', 'Signal Processing', 'CNN-LSTM'],
    academic: true
  },
  {
    id: 'hippocampus',
    number: '05',
    title: 'Hippocampus MRI Segmentation',
    subtitle: 'Deep Learning for Medical Imaging',
    category: 'data',
    label: 'AI · Computer Vision',
    description:
      'Medical-imaging project for automatic hippocampus segmentation from MRI data using preprocessing, augmentation and a U-Net-style deep-learning architecture.',
    tags: ['Python', 'PyTorch', 'U-Net', 'Medical Imaging', 'Computer Vision'],
    academic: true
  },
  {
    id: 'pv-antenna',
    number: '06',
    title: 'AI-Optimized Dual-Function Photovoltaic Antenna',
    subtitle: 'Solar Energy Harvesting + RF Communication',
    category: 'telecom',
    label: 'RF · Telecommunications · AI Optimization',
    description:
      'Multifunctional antenna study in which the same structure serves both photovoltaic energy harvesting and RF communication, with optimization of physical and electrical parameters using an evolutionary approach.',
    tags: ['RF', 'Antennas', 'Photovoltaics', 'Graphene', 'Genetic Algorithm'],
    academic: true
  },
  {
    id: 'wifi-security',
    number: '07',
    title: 'Wi-Fi Security Assessment',
    subtitle: 'Wireless Network Security Analysis',
    category: 'security',
    label: 'Cybersecurity · Wireless Networks',
    description:
      'Controlled wireless-security assessment focused on Wi-Fi traffic analysis, authentication security and common attack techniques in WPA2/WPA3 environments.',
    tags: ['Kali Linux', 'Wireshark', 'Aircrack-ng', 'Ettercap', 'WPA2/WPA3'],
    academic: true
  },
  {
    id: 'stm32-spi',
    number: '08',
    title: 'STM32 SPI Communication & Validation',
    subtitle: 'Embedded Communication & Interface Testing',
    category: 'embedded',
    label: 'Embedded Systems · Validation',
    description:
      'Embedded-systems laboratory project focused on configuring and validating SPI communication on STM32 hardware using C and STM32 development tools.',
    tags: ['C', 'STM32', 'SPI', 'DMA', 'STM32CubeMX'],
    academic: true
  },
  {
    id: 'embedded-linux',
    number: '09',
    title: 'Embedded Linux on BeagleBone Black',
    subtitle: 'Embedded Linux & System Integration',
    category: 'embedded',
    label: 'Embedded Linux · Systems',
    description:
      'Hands-on Embedded Linux work using BeagleBone Black, covering Linux system configuration and embedded-system integration concepts.',
    tags: ['Embedded Linux', 'BeagleBone Black', 'Linux', 'Yocto', 'C/C++'],
    academic: true
  },
  {
    id: 'routing-switching',
    number: '10',
    title: 'Advanced Routing & Switching Labs',
    subtitle: 'Enterprise Network Configuration & Validation',
    category: 'network',
    label: 'Networks · Routing · Switching',
    description:
      'Practical network-engineering labs covering routing protocols, VLANs, spanning tree, access control, NAT and structured network validation.',
    tags: ['OSPF', 'BGP', 'VLAN', 'STP/RSTP', 'ACL', 'NAT'],
    academic: true
  },
  {
    id: 'spam',
    number: '11',
    title: 'SMS Spam Classification',
    subtitle: 'Natural Language Processing',
    category: 'data',
    label: 'AI · NLP',
    description:
      'NLP classification project that transforms raw SMS text into machine-learning features to distinguish spam messages from legitimate messages.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'Classification'],
    academic: true
  },
  {
    id: 'sentiment',
    number: '12',
    title: 'Sentiment Analysis',
    subtitle: 'NLP & Text Intelligence',
    category: 'data',
    label: 'AI · NLP',
    description:
      'Text-analytics project covering preprocessing, feature extraction and machine-learning classification for automatic sentiment analysis.',
    tags: ['Python', 'NLP', 'Machine Learning', 'Text Analytics'],
    academic: true
  }
]

const FEATURED_PROJECTS = PROJECTS.filter(project => project.featured)
const ACADEMIC_PROJECTS = PROJECTS.filter(project => project.academic)


const CERTIFICATIONS = [

  {

    name: 'Cisco Certified DevNet Associate',

    issuer: 'Cisco',

    year: '2026',

    url: ''

  },

  {

    name: 'CCNA: Switching, Routing, and Wireless Essentials',

    issuer: 'Cisco Networking Academy',

    year: '2026',

    url: ''

  },

  {

    name: 'CCNA: Introduction to Networks',

    issuer: 'Cisco Networking Academy',

    year: '2025',

    url: ''

  },

  {

    name: 'Ethical Hacker',

    issuer: 'Cisco',

    year: '2025',

    url: ''

  },

  {

    name: 'AWS Academy Graduate: Cloud Foundations',

    issuer: 'Amazon Web Services',

    year: '2025',

    url: ''

  },

  {

    name: 'Building Transformer-Based NLP Applications',

    issuer: 'NVIDIA',

    year: '2025',

    url: ''

  }

]



function App() {



  const [currentPage, setCurrentPage] = useState('portfolio')






  /* =========================

     OPEN NETSUPERVISION

  ========================= */



  const openNetSupervision = () => {



    setCurrentPage('netsupervision')



    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    })



  }





  /* =========================

     OPEN SMART KOKUSAI

  ========================= */



  const openSmartKokusai = () => {



    setCurrentPage('smartkokusai')



    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    })



  }





  /* =========================

     OPEN CONTACT

  ========================= */



  const openContact = () => {



    setCurrentPage('contact')



    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    })



  }





  /* =========================

     BACK TO PORTFOLIO

  ========================= */



  const backToPortfolio = () => {



    setCurrentPage('portfolio')



    setTimeout(() => {



      const experienceSection =

        document.getElementById('experience')



      if (experienceSection) {



        experienceSection.scrollIntoView({

          behavior: 'smooth',

          block: 'start'

        })



      }



    }, 50)



  }





  /* =========================

     BACK TO PORTFOLIO HOME

  ========================= */



  const backToPortfolioHome = () => {



    setCurrentPage('portfolio')



    setTimeout(() => {



      window.scrollTo({

        top: 0,

        behavior: 'smooth'

      })



    }, 50)



  }
const openNetPilot = () => {

    setCurrentPage('netpilot')



    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    })

  }





  const openIntrusionDetection = () => {

    setCurrentPage('intrusion-detection')



    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    })

  }





  const openEmergencyResponse = () => {

    setCurrentPage('emergency-alert')



    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    })

  }













  /* =========================

     NETSUPERVISION PAGE

  ========================= */



  if (currentPage === 'netsupervision') {



    return (

      <NetSupervisionCaseStudy

        onBack={backToPortfolio}

      />

    )



  }





  /* =========================

     SMART KOKUSAI PAGE

  ========================= */



  if (currentPage === 'smartkokusai') {



    return (

      <SmartKokusaiCaseStudy

        onBack={backToPortfolio}

      />

    )



  }



  if (currentPage === 'netpilot') {

    return (

      <NetPilotCaseStudy

        onBack={backToPortfolioHome}

      />

    )

  }



  if (currentPage === 'intrusion-detection') {

    return (

      <IntrusionDetectionCaseStudy

        onBack={backToPortfolioHome}

      />

    )

  }







  if (currentPage === 'emergency-alert') {

    return (

      <EmergencyResponseCaseStudy

        onBack={backToPortfolioHome}

      />

    )

  }





  /* =========================

     CONTACT PAGE

  ========================= */



  if (currentPage === 'contact') {



    return (

      <ContactPage

        onBack={backToPortfolioHome}

      />

    )



  }





  /* =========================

     MAIN PORTFOLIO

  ========================= */



  return (



    <main>





      {/* =====================================================

          NAVBAR

      ===================================================== */}



      <nav className="navbar">



        <a href="#home" className="logo">

          Insaf Fares<span>.</span>

        </a>





        <div className="nav-links">



          <a href="#about">

            About

          </a>



          <a href="#experience">

            Experience

          </a>



          <a href="#projects">

            Projects

          </a>



          <a href="#skills">

            Skills

          </a>



          <button

            type="button"

            className="nav-contact-link"

            onClick={openContact}

          >

            Contact

            <FiArrowUpRight />

          </button>



        </div>



      </nav>







      {/* =====================================================

          HERO

      ===================================================== */}



      <section

        id="home"

        className="hero"

      >



        <div className="hero-content">





          {/* LEFT */}



          <div className="hero-left">



            <p className="hero-eyebrow">

              Hi, I'm

            </p>





            <h1>

              Insaf Fares

            </h1>





            <h2>Network & Test Automation Engineer</h2>



            <div className="hero-specialties">

              <span>Python</span>

              <span>QA Automation</span>

              <span>DevOps</span>

              <span>Backend</span>

            </div>



            <p className="hero-proof">

              Cut PCP validation from 5 min to 5 sec at TELNET.

            </p>



            <p className="hero-description">

              I automate and validate network systems: Python backends,

              regression engines and CI-ready test platforms for IPv6

              and DS-Lite environments.

            </p>







            {/* BUTTONS */}



            <div className="hero-actions">



              <a

                href="#experience"

                className="btn btn-primary"

              >



                Explore My Work



                <FiArrowDown />



              </a>





              <a

                href="/Insaf_Fares_CV.pdf"

                download

                className="btn btn-secondary"

              >



                <FiDownload />



                Download CV



              </a>



            </div>







            {/* SOCIAL */}



            <div className="social-links">





              <a

                href="https://github.com/insaf178"

                target="\_blank"

                rel="noreferrer"

                aria-label="GitHub"

              >



                <FiGithub />



              </a>





              <a

                href="https://www.linkedin.com/in/insaf-fares-b6995b320"

                target="\_blank"

                rel="noreferrer"

                aria-label="LinkedIn"

              >



                <FiLinkedin />



              </a>





              <a

                href="mailto:insaf.fares@etudiant-enit.utm.tn"

                aria-label="Email"

              >



                <FiMail />



              </a>





            </div>



          </div>







          {/* RIGHT */}



          <div className="hero-right">



            <div className="photo-wrapper">



              <div className="photo-glow">

              </div>





              <img

                src={profileImage}

                alt="Insaf Fares"

                className="profile-image"

              />





              <div className="availability">



                <span className="availability-dot">

                </span>



                Open to opportunities



              </div>



            </div>



          </div>





        </div>



      </section>







      {/* =====================================================

          ABOUT

      ===================================================== */}



      <section

        id="about"

        className="about-section"

      >



        <div className="about-grid">





          {/* LEFT */}



          <div className="about-content">



            <p className="section-eyebrow">

              About Me

            </p>





            <h2>



              Building intelligent systems



              <br />



              for connected environments.



            </h2>





            <p className="about-text">



              I am a Telecommunications Engineer graduated from

              the National Engineering School of Tunis (ENIT),

              with a strong interest in network automation,

              software validation, backend development and

              artificial intelligence.



            </p>





            <p className="about-text">



              My work combines networking and software

              engineering: from distributed network validation

              platforms and automated testing to Python

              applications, AI-assisted troubleshooting and

              intelligent network systems.



            </p>





            <p className="about-text">



              I enjoy transforming complex engineering problems

              into practical, automated and reliable solutions.



            </p>







            {/* INFO */}



            <div className="about-info">





              <div className="info-item">



                <FiMapPin />



                <div>



                  <span>

                    Location

                  </span>



                  <strong>

                    Tunis, Tunisia

                  </strong>



                </div>



              </div>





              <div className="info-item">



                <FiBookOpen />



                <div>



                  <span>

                    Education

                  </span>



                  <strong>

                    Telecommunications Engineering · ENIT

                  </strong>



                </div>



              </div>





              <div className="info-item">



                <FiGlobe />



                <div>



                  <span>

                    Languages

                  </span>



                  <strong>

                    Arabic · French · English · German

                  </strong>



                </div>



              </div>





              <div className="info-item">



                <FiCpu />



                <div>



                  <span>

                    Focus

                  </span>



                  <strong>

                    Networks · Automation · QA · AI

                  </strong>



                </div>



              </div>





            </div>





            <a

              href="/Insaf_Fares_CV.pdf"

              download

              className="btn btn-secondary about-cv"

            >



              <FiDownload />



              Download CV



            </a>





          </div>







          {/* RIGHT */}



          <div className="about-stats">

            <div className="stat-card">

              <strong>98%</strong>

              <span>Validation time reduction</span>

              <small>PCP: ≈5 min → ≈5 sec</small>

            </div>

            <div className="stat-card">

              <strong>13</strong>

              <span>PCP error scenarios automated</span>

              <small>6h30 → 7 min</small>

            </div>

            <div className="stat-card">

              <strong>99%</strong>

              <span>Debug analysis reduction</span>

              <small>≈15 min → ≈5 sec</small>

            </div>

            <div className="stat-card">

              <strong>3</strong>

              <span>Engineering internships</span>

              <small>Networks · Backend · IoT</small>

            </div>

          </div>





        </div>



      </section>







      {/* =====================================================

          EXPERIENCE

      ===================================================== */}



      <section

        id="experience"

        className="experience-section"

      >



        <div className="section-heading">



          <p className="section-eyebrow">

            Professional Experience

          </p>





          <h2>

            Engineering Experience

          </h2>





          <p>



            Experience across telecommunications,

            network validation, software development,

            AI, IoT and data-driven monitoring systems.



          </p>



        </div>







        <div className="experience-list">





          {/* =================================================

              TELNET

          ================================================= */}



          <article



            className="

              experience-card

              experience-card-clickable

            "



            onClick={openNetSupervision}



            role="button"



            tabIndex={0}



            aria-label="Open NetSupervision case study"



            onKeyDown={(event) => {



              if (

                event.key === 'Enter' ||

                event.key === ' '

              ) {



                event.preventDefault()



                openNetSupervision()



              }



            }}



          >





            <div className="experience-top">





              <div className="experience-company">





                <img

                  src={telnetLogo}

                  alt="TELNET"

                  className="company-logo"

                />





                <div>



                  <p className="company-name">

                    TELNET

                  </p>





                  <h3>

                    Final-Year Engineering Intern

                  </h3>





                  <p className="experience-domain">



                    Network Validation · Software Development ·

                    Test Automation · AI



                  </p>



                </div>





              </div>





              <span className="experience-date">



                Feb 2026 — Jun 2026



              </span>





            </div>







            <div className="experience-body">





              <p>



                Designed and developed a distributed supervision

                and automated validation platform for Home

                Gateways operating in IPv6 and DS-Lite

                environments.



              </p>





              <ul>



                <li>



                  Developed backend services using Python,

                  Flask, SQLite and Socket.IO for test

                  orchestration, agent communication,

                  result management and execution history.



                </li>





                <li>



                  Built PCP packets directly using socket

                  programming, automated protocol execution

                  and decoded network responses.



                </li>





                <li>



                  Automated PCP/UPnP validation including

                  mapping creation, renewal, deletion,

                  lifetime handling, controlled errors and

                  UPnP-to-PCP interworking.



                </li>





                <li>



                  Implemented double validation by comparing

                  protocol-level results with internal Home

                  Gateway state retrieved through Telnet.



                </li>





                <li>



                  Built a regression engine with sequential

                  execution, expected-vs-actual verification,

                  error injection and reproducible test

                  campaigns.



                </li>





                <li>



                  Developed a debug-analysis pipeline combining

                  regex-based classification, sanitization,

                  structured extraction and AI-assisted

                  failure interpretation.



                </li>





                <li>



                  Integrated packet analysis and troubleshooting

                  using Wireshark, tcpdump and Scapy.



                </li>





                <li>



                  Reduced validation and debugging time by

                  approximately 98% across key workflows.



                </li>



              </ul>





            </div>







            <div className="experience-tags">



              <span>Python</span>

              <span>Flask</span>

              <span>SQLite</span>

              <span>Socket.IO</span>

              <span>Socket Programming</span>

              <span>IPv6</span>

              <span>DS-Lite</span>

              <span>PCP</span>

              <span>UPnP</span>

              <span>Linux</span>

              <span>Wireshark</span>

              <span>Scapy</span>

              <span>AI Debugging</span>



            </div>







            <div className="experience-case-link">



              View NetSupervision Case Study



              <FiArrowUpRight />



            </div>





          </article>







          {/* =================================================

              SMART KOKUSAI

          ================================================= */}



          <article

            className="experience-card experience-card-clickable"

            onClick={openSmartKokusai}

            role="button"

            tabIndex={0}

            aria-label="Open Smart Kokusai CSR case study"



            onKeyDown={(event) => {



              if (

                event.key === 'Enter' ||

                event.key === ' '

              ) {



                event.preventDefault()



                openSmartKokusai()



              }



            }}

          >





            <div className="experience-top">





              <div className="experience-company">





                <img

                  src={smartKokusaiLogo}

                  alt="Smart Kokusai"

                  className="company-logo"

                />





                <div>



                  <p className="company-name">

                    Smart Kokusai

                  </p>





                  <h3>

                    Engineering Intern

                  </h3>





                  <p className="experience-domain">



                    Software Development · Data · AI · IoT ·

                    CSR Monitoring



                  </p>



                </div>





              </div>





              <span className="experience-date">



                Jul 2025 — Sep 2025



              </span>





            </div>







            <div className="experience-body">





              <p>



                Developed a data-driven CSR monitoring

                platform for collecting, processing and

                visualizing environmental and social company

                KPIs.



              </p>





              <ul>





                <li>



                  Developed REST APIs using FastAPI and

                  PostgreSQL for CSR KPI management,

                  employee-related data, forms,

                  role-based access and dashboard integration.



                </li>





                <li>



                  Built an environmental IoT monitoring

                  pipeline using ESP32, sensors and MQTT.



                </li>





                <li>



                  Used InfluxDB for time-series storage and

                  Grafana for real-time and historical KPI

                  monitoring.



                </li>





                <li>



                  Designed dashboards for water,

                  electricity and environmental indicators

                  with configurable thresholds and alerts.



                </li>





                <li>



                  Integrated OCR-based processing of

                  water and electricity bills to extract

                  structured consumption and billing

                  information.



                </li>





                <li>



                  Developed the social CSR module with

                  employee-related indicators, forms,

                  RBAC and role-specific dashboards.



                </li>





                <li>



                  Used Tinkercad for IoT simulation and

                  prototyping.



                </li>





              </ul>





            </div>







            <div className="experience-tags">



              <span>Python</span>

              <span>FastAPI</span>

              <span>PostgreSQL</span>

              <span>REST APIs</span>

              <span>ESP32</span>

              <span>MQTT</span>

              <span>InfluxDB</span>

              <span>Grafana</span>

              <span>OCR</span>

              <span>IoT</span>

              <span>RBAC</span>

              <span>Tinkercad</span>



            </div>





            <div className="experience-case-link">



              View CSR Platform Case Study



              <FiArrowUpRight />



            </div>





          </article>







          {/* =================================================

              SOFTIFI

          ================================================= */}



          <article className="experience-card">





            <div className="experience-top">





              <div className="experience-company">





                <img

                  src={softifiLogo}

                  alt="SOFTIFI"

                  className="company-logo"

                />





                <div>



                  <p className="company-name">

                    SOFTIFI

                  </p>





                  <h3>

                    IoT Engineering Intern

                  </h3>





                  <p className="experience-domain">



                    Smart Lighting · IoT Conception ·

                    Energy Efficiency



                  </p>



                </div>





              </div>





              <span className="experience-date">



                Jul 2024 — Aug 2024



              </span>





            </div>







            <div className="experience-body">





              <p>



                Contributed to the conception of a smart

                lighting solution for the Smart Center in

                Zarzis to address excessive electricity usage.



              </p>





              <ul>





                <li>



                  Studied the integration of sensors and

                  connected devices for automated lighting

                  control.



                </li>





                <li>



                  Contributed to defining the IoT architecture

                  and system communication flow.



                </li>





                <li>



                  Focused on reducing energy consumption

                  through automated lighting management

                  based on usage and environmental conditions.



                </li>





              </ul>





            </div>







            <div className="experience-tags">



              <span>IoT</span>

              <span>Smart Lighting</span>

              <span>Sensors</span>

              <span>ESP32</span>

              <span>Embedded Systems</span>

              <span>Energy Efficiency</span>



            </div>







          </article>





        </div>



      </section>





      {/* =====================================================

          PROJECTS

      ===================================================== */}



      <section

        id="projects"

        className="projects-section"

      >



        <div className="section-heading">



          <p className="section-eyebrow">

            Selected Projects

          </p>



          <h2>

            Engineering Portfolio

          </h2>



          <p>

            Selected work across network automation, artificial intelligence,

            telecommunications, cybersecurity, embedded systems and data science.

          </p>



        </div>



        {/* =========================
            FEATURED PROJECTS
        ========================= */}



        <div className="projects-subsection">



          <div className="projects-subsection-heading">

            <p className="section-eyebrow">

              Featured Projects

            </p>

            <h3>

              Flagship engineering work

            </h3>

            <p>

              Three projects with dedicated case studies covering network automation,

              AI-driven cybersecurity and 5G / Edge computing.

            </p>

          </div>



          <div className="projects-grid">



            {FEATURED_PROJECTS.map(project => (



              <article

                key={project.id}

                className="project-card"

              >



                <div className="project-card-top">



                  <span className="project-number">

                    {project.number}

                  </span>



                  <span className="project-category">

                    {project.label}

                  </span>



                </div>



                <div className="project-card-content">



                  <p className="project-subtitle">

                    {project.subtitle}

                  </p>



                  <h3>

                    {project.title}

                  </h3>



                  <p className="project-description">

                    {project.description}

                  </p>



                </div>



                <div className="project-tags">



                  {project.tags.map(tag => (

                    <span key={tag}>

                      {tag}

                    </span>

                  ))}



                </div>



                <button

                  type="button"

                  className="project-link"

                  aria-label={`Explore ${project.title}`}

                  onClick={() => {

                    if (project.id === 'netpilot') {

                      openNetPilot()

                    }



                    if (project.id === 'intrusion-detection') {

                      openIntrusionDetection()

                    }



                    if (project.id === 'emergency-alert') {

                      openEmergencyResponse()

                    }

                  }}

                >

                  Explore Project

                  <FiArrowUpRight />

                </button>



              </article>



            ))}



          </div>



        </div>



        {/* =========================
            ACADEMIC & ENGINEERING PROJECTS
        ========================= */}



        <div className="projects-subsection projects-subsection-academic">



          <div className="projects-subsection-heading">

            <p className="section-eyebrow">

              Academic & Engineering Projects

            </p>

            <h3>

              AI, telecom, cybersecurity & embedded systems

            </h3>

            <p>

              Selected university projects and engineering labs demonstrating

              practical work across AI, signal processing, RF, networking and embedded systems.

            </p>

          </div>



          <div className="projects-grid">



            {ACADEMIC_PROJECTS.map(project => (



              <article

                key={project.id}

                className="project-card"

              >



                <div className="project-card-top">



                  <span className="project-number">

                    {project.number}

                  </span>



                  <span className="project-category">

                    {project.label}

                  </span>



                </div>



                <div className="project-card-content">



                  <p className="project-subtitle">

                    {project.subtitle}

                  </p>



                  <h3>

                    {project.title}

                  </h3>



                  <p className="project-description">

                    {project.description}

                  </p>



                </div>



                <div className="project-tags">



                  {project.tags.map(tag => (

                    <span key={tag}>

                      {tag}

                    </span>

                  ))}



                </div>



              </article>



            ))}



          </div>



        </div>



      </section>






      {/* =====================================================

          RESEARCH PUBLICATION

      ===================================================== */}

      <section id="publication" className="publication-section">

        <div className="section-heading">

          <p className="section-eyebrow">
            Research & Technical Writing
          </p>

          <h2>
            Research Publication
          </h2>

          <p>
            Peer-reviewed journal submission based on my final-year engineering work
            in automated network validation and protocol testing.
          </p>

        </div>

        <article className="publication-card">

          <div className="publication-top">

            <div>

              <span className="publication-status">
                In Screening
              </span>

              <h3>
                Automated Regression Validation of PCP and UPnP in IPv6/DS-Lite
                Home Gateways with Controlled Error Injection and AI-Assisted Diagnosis
              </h3>

            </div>

            <span className="publication-year">
              2026
            </span>

          </div>

          <p className="publication-journal">
            International Journal of Network Management · Wiley
          </p>

          <p className="publication-type">
            Research Article · Manuscript ID: NEM-26-02669
          </p>

          <p className="publication-description">
            Research article presenting the architecture, automation workflow and
            experimental evaluation of a PCP/UPnP validation platform for IPv6 and
            DS-Lite Home Gateway environments, including regression testing,
            controlled protocol-error injection and AI-assisted diagnosis.
          </p>

          <div className="publication-highlights">

            <div>
              <span>Focus</span>
              <strong>PCP / UPnP Regression Validation</strong>
            </div>

            <div>
              <span>Environment</span>
              <strong>IPv6 · DS-Lite · Home Gateways</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>Submitted 9 October 2026 · In Screening</strong>
            </div>

          </div>

          <div className="publication-tags">
            <span>Python</span>
            <span>PCP</span>
            <span>UPnP</span>
            <span>IPv6</span>
            <span>DS-Lite</span>
            <span>Test Automation</span>
            <span>Regression Testing</span>
            <span>AI-Assisted Diagnosis</span>
          </div>

          <div className="publication-actions">

            <a
              href="https://github.com/insaf178/Network-validation-automation-platform.git"
              target="_blank"
              rel="noreferrer"
              className="publication-secondary-link"
            >
              <FiGithub />
              GitHub
            </a>

          </div>

        </article>

      </section>

      {/* =====================================================

          SKILLS

      ===================================================== */}



      <section

        id="skills"

        className="skills-section"

      >



        <div className="section-heading">



          <p className="section-eyebrow">

            Technical Expertise

          </p>



          <h2>

            Skills & Technologies

          </h2>



          <p>

            A multidisciplinary stack across networks,

            software engineering, automation, AI and data.

          </p>



        </div>





        <div className="skills-bento">





          {/* NETWORK */}



          <article className="skill-bento skill-bento-large">



            <div className="skill-bento-head">



              <span>01</span>



              <p>

                Network & Automation

              </p>



            </div>





            <h3>

              Network Engineering

            </h3>





            <div className="skill-tech-grid">



              <span>IPv4 / IPv6</span>

              <span>TCP / UDP</span>

              <span>DS-Lite</span>

              <span>PCP</span>

              <span>UPnP</span>

              <span>NAT / CGNAT</span>

              <span>Routing</span>

              <span>Socket Programming</span>

              <span>Scapy</span>

              <span>Wireshark</span>

              <span>tcpdump</span>

              <span>GNS3</span>

              <span>Network Automation</span>



            </div>



          </article>





          {/* AI & DATA */}



          <article className="skill-bento skill-bento-large">



            <div className="skill-bento-head">



              <span>02</span>



              <p>

                AI & Data

              </p>



            </div>





            <h3>

              Data Science & AI

            </h3>





            <div className="skill-tech-grid">



              <span>Python</span>

              <span>Pandas</span>

              <span>NumPy</span>

              <span>Scikit-learn</span>

              <span>TensorFlow</span>

              <span>Keras</span>

              <span>Deep Learning</span>

              <span>CNN</span>

              <span>LSTM</span>

              <span>NLP</span>

              <span>Computer Vision</span>

              <span>Data Preprocessing</span>

              <span>Model Evaluation</span>



            </div>



          </article>





          {/* BACKEND */}



          <article className="skill-bento skill-bento-wide">



            <div className="skill-bento-head">



              <span>03</span>



              <p>

                Software Engineering

              </p>



            </div>





            <h3>

              Backend & Software

            </h3>





            <div className="skill-tech-grid">



              <span>Python</span>

              <span>FastAPI</span>

              <span>Flask</span>

              <span>REST APIs</span>

              <span>Socket.IO</span>

              <span>WebSockets</span>

              <span>SQLAlchemy</span>

              <span>Linux</span>



            </div>



          </article>





          {/* DEVOPS / QA */}



          <article className="skill-bento">



            <div className="skill-bento-head">



              <span>04</span>



              <p>

                QA & DevOps

              </p>



            </div>





            <h3>

              Engineering Tools

            </h3>





            <div className="skill-tech-grid">



              <span>Docker</span>

              <span>Git</span>

              <span>GitLab</span>

              <span>Postman</span>

              <span>Jira</span>

              <span>Regression Testing</span>

              <span>API Testing</span>

              <span>Debugging</span>

              <span>Agile</span>



            </div>



          </article>





          {/* DATA INFRA */}



          <article className="skill-bento">



            <div className="skill-bento-head">



              <span>05</span>



              <p>

                Data Infrastructure

              </p>



            </div>





            <h3>

              Databases & Monitoring

            </h3>





            <div className="skill-tech-grid">



              <span>PostgreSQL</span>

              <span>SQLite</span>

              <span>InfluxDB</span>

              <span>SQL</span>

              <span>Grafana</span>

              <span>Data Modeling</span>

              <span>KPI Monitoring</span>



            </div>



          </article>





          {/* IOT */}



          <article className="skill-bento">



            <div className="skill-bento-head">



              <span>06</span>



              <p>

                Connected Systems

              </p>



            </div>





            <h3>

              IoT & Edge

            </h3>





            <div className="skill-tech-grid">



              <span>ESP32</span>

              <span>MQTT</span>

              <span>Sensors</span>

              <span>Tinkercad</span>

              <span>IoT Architecture</span>

              <span>Edge AI</span>



            </div>



          </article>





        </div>



      </section>







      {CERTIFICATIONS.length > 0 && (

      <section id="certifications" className="skills-section">

        <div className="section-heading">

          <p className="section-eyebrow">Credentials</p>

          <h2>Certifications</h2>

        </div>

        <div className="cert-grid">

          {CERTIFICATIONS.map(c => (

            <article key={c.name} className="skill-bento">

              <p className="project-subtitle">{c.issuer} · {c.year}</p>

              <h3>{c.name}</h3>

              {c.url && (

                <a href={c.url} target="\_blank" rel="noreferrer" className="project-link">

                  Verify <FiArrowUpRight />

                </a>

              )}

            </article>

          ))}

        </div>

      </section>

    )}



    <section id="open-to" className="skills-section">

      <div className="section-heading">

        <p className="section-eyebrow">Open to</p>

        <h2>What I'm looking for</h2>

      </div>

      <div className="cert-grid">

        <article className="skill-bento"><h3>Roles</h3>

          <p>Network Automation · QA/Test Automation · DevOps · Python Backend</p></article>

        <article className="skill-bento"><h3>Location</h3>

          <p>Tunisia · France · Europe · Remote</p></article>

        <article className="skill-bento"><h3>Availability</h3>

          <p>From [date]</p></article>

      </div>

    </section>





      {/* =====================================================

          FOOTER

      ===================================================== */}



      <footer className="portfolio-footer portfolio-footer-main">



        <p>

          © 2026 Insaf Fares

        </p>



        <button

          type="button"

          className="footer-contact-button"

          onClick={openContact}

        >

          Contact

          <FiArrowUpRight />

        </button>



      </footer>





    </main>



  )



}





export default App