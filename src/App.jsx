import { useEffect, useState } from 'react'

import './App.css'



import NetSupervisionCaseStudy from './components/NetSupervisionCaseStudy'

import SmartKokusaiCaseStudy from './components/SmartKokusaiCaseStudy'

import ResourceLinks from './components/ResourceLinks'
import { RESOURCES } from './data/resources'


import CertificationsCarousel from './components/CertificationsCarousel'
   import ContactSection from './components/ContactPage'



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
  FiArrowUpRight,
  FiCode,
  FiTool,
  FiDatabase,
  FiActivity,
  FiLayers,
  FiTerminal,
  FiRadio,
  FiSearch,
  FiRepeat,
  FiZap,
  FiEye,
  FiBox,
  FiServer,
  FiClipboard,
  FiBarChart2,
  FiShare2,
  FiCheckSquare,
  FiAlertCircle,
  FiSliders,
  FiWifi,
  FiSend,
  FiKey,
  FiShield,
  FiLock,
  FiList,
  FiMonitor,
  FiGitBranch
} from 'react-icons/fi'

import {
  SiPython,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiPostman,
  SiGrafana,
  SiInfluxdb,
  SiPostgresql,
  SiSqlite,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiWireshark,
  SiLinux,
  SiSocketdotio,
  SiMqtt,
  SiEspressif,
  SiSqlalchemy,
  SiCisco,
  SiAnsible,
  SiGnubash,
  SiKalilinux,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiVite,
  SiPytest
} from 'react-icons/si'





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






const EDUCATION = [
  {
    id: 'enit',
    year: '2026',
    shortTitle: 'Engineering Degree',
    shortSchool: 'ENIT',
    title: 'Telecommunications Engineering Degree',
    school: 'National Engineering School of Tunis (ENIT)',
    period: '2023 — 2026',
    description:
      'My engineering studies focused on telecommunications networks, automation and software validation, with practical work in Python, network protocols, testing and connected systems.',
    details:
      'I developed a strong interest in roles combining network engineering with automation, validation and troubleshooting.',
    mark: 'ENIT'
  },


  {
    id: 'ipeim',
    year: '2023',
    shortTitle: 'Pre-Engineering',
    shortSchool: 'IPEIM',
    title: 'Pre-Engineering Program in Mathematics & Physics',
    school: 'Preparatory Institute for Engineering Studies of Monastir (IPEIM)',
    period: '2021 — 2023',
    description:
      'Two-year Pre-Engineering Program in Mathematics and Physics, with intensive coursework in mathematics, physics and core engineering fundamentals.',
    details:
      'It strengthened my analytical thinking, problem-solving skills and scientific foundation before entering engineering school.',
    mark: 'IPEIM'
  },
  {
    id: 'bac',
    year: '2021',
    shortTitle: 'Mathematics Baccalaureate',
    shortSchool: 'Mathematics',
    title: 'Baccalaureate in Mathematics',
    school: 'Tunisian Baccalaureate',
    period: '2021',
    description:
      'Mathematics-focused secondary education with a strong foundation in analytical reasoning and scientific problem-solving.',
    details: '',
    mark: 'BAC'
  }
]

const SKILL_GROUPS = [
  {
    title: 'Network Engineering',
    icon: FiGlobe,
    items: [
      { name: 'IPv4 / IPv6', icon: FiGlobe, color: '#2563eb' },
      { name: 'TCP / UDP', icon: FiRepeat, color: '#0891b2' },
      { name: 'DS-Lite', icon: FiLayers, color: '#7c3aed' },
      { name: 'PCP', icon: FiSend, color: '#2563eb' },
      { name: 'UPnP', icon: FiWifi, color: '#0891b2' },
      { name: 'NAT / CGNAT', icon: FiShare2, color: '#ea580c' },
      { name: 'Routing (OSPF/BGP)', icon: FiActivity, color: '#16a34a' },
      { name: 'VLAN / STP', icon: FiLayers, color: '#7c3aed' },
      { name: 'Cisco IOS', icon: SiCisco, color: '#049fd9' },
      { name: 'Socket Programming', icon: FiTerminal, color: '#475569' },
      { name: 'Scapy', icon: FiZap, color: '#ca8a04' },
      { name: 'Wireshark', icon: SiWireshark, color: '#1679a7' },
      { name: 'tcpdump', icon: FiSearch, color: '#475569' },
      { name: 'GNS3', icon: FiServer, color: '#2563eb' }
    ]
  },
  {
    title: 'Network Automation',
    icon: FiZap,
    items: [
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'Netmiko', icon: FiTerminal, color: '#0891b2' },
      { name: 'Paramiko', icon: FiKey, color: '#475569' },
      { name: 'Ansible', icon: SiAnsible, color: '#ee0000' },
      { name: 'Jinja2', icon: FiCode, color: '#b41717' },
      { name: 'Bash', icon: SiGnubash, color: '#111827' },
      { name: 'SSH / Telnet', icon: FiTerminal, color: '#475569' },
      { name: 'JSON', icon: FiCode, color: '#ca8a04' },
      { name: 'Config Backup & Rollback', icon: FiDatabase, color: '#7c3aed' },
      { name: 'Regex Parsing', icon: FiSearch, color: '#ea580c' },
      { name: 'Cisco DevNet', icon: SiCisco, color: '#049fd9' }
    ]
  },
  {
    title: 'Network Security',
    icon: FiShield,
    items: [
      { name: 'Firewalls', icon: FiShield, color: '#dc2626' },
      { name: 'VPN', icon: FiLock, color: '#2563eb' },
      { name: 'WPA2 / WPA3', icon: FiWifi, color: '#0891b2' },
      { name: 'ACL', icon: FiList, color: '#7c3aed' },
      { name: 'Kali Linux', icon: SiKalilinux, color: '#557c94' },
      { name: 'Aircrack-ng', icon: FiWifi, color: '#dc2626' },
      { name: 'Ettercap', icon: FiRadio, color: '#7c3aed' },
      { name: 'Ethical Hacking', icon: FiTool, color: '#dc2626' },
      { name: 'Intrusion Detection', icon: FiAlertCircle, color: '#ea580c' }
    ]
  },
  {
    title: 'Backend & Software',
    icon: FiCode,
    items: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Flask', icon: SiFlask, color: '#111827' },
      { name: 'REST APIs', icon: FiShare2, color: '#0891b2' },
      { name: 'Socket.IO', icon: SiSocketdotio, color: '#111827' },
      { name: 'SQLAlchemy', icon: SiSqlalchemy, color: '#d71f00' }
    ]
  },
  {
    title: 'Web Development',
    icon: FiMonitor,
    items: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#ca8a04' },
      { name: 'React', icon: SiReact, color: '#0891b2' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
      { name: 'Vite', icon: SiVite, color: '#8b5cf6' }
    ]
  },
  {
    title: 'QA & Testing',
    icon: FiCheckSquare,
    items: [
      { name: 'pytest', icon: SiPytest, color: '#0a9edc' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'Regression Testing', icon: FiCheckSquare, color: '#16a34a' },
      { name: 'API Testing', icon: FiClipboard, color: '#0891b2' },
      { name: 'Debugging', icon: FiAlertCircle, color: '#dc2626' },
      { name: 'Jira', icon: SiJira, color: '#0052cc' }
    ]
  },
  {
    title: 'DevOps & Version Control',
    icon: FiGitBranch,
    items: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#111827' },
      { name: 'GitLab', icon: SiGitlab, color: '#fc6d26' },
      { name: 'CI/CD', icon: FiRepeat, color: '#16a34a' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Linux', icon: SiLinux, color: '#111827' }
    ]
  },
  {
    title: 'Data, Monitoring & IoT',
    icon: FiDatabase,
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'SQLite', icon: SiSqlite, color: '#003b57' },
      { name: 'InfluxDB', icon: SiInfluxdb, color: '#22adf6' },
      { name: 'Grafana', icon: SiGrafana, color: '#f46800' },
      { name: 'MQTT', icon: SiMqtt, color: '#660066' },
      { name: 'ESP32', icon: SiEspressif, color: '#e7352c' }
    ]
  },
  {
    title: 'Data Science & AI',
    icon: FiCpu,
    items: [
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#f7931e' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
      { name: 'Keras', icon: SiKeras, color: '#d00000' },
      { name: 'CNN / LSTM', icon: FiLayers, color: '#7c3aed' },
      { name: 'NLP', icon: FiCode, color: '#ea580c' },
      { name: 'Computer Vision', icon: FiEye, color: '#4f46e5' }
    ]
  }
]

/* Pastilles qui défilent */
const MARQUEE_SKILLS = [
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'Netmiko', icon: FiTerminal, color: '#0891b2' },
  { name: 'Paramiko', icon: FiKey, color: '#475569' },
  { name: 'Ansible', icon: SiAnsible, color: '#ee0000' },
  { name: 'pytest', icon: SiPytest, color: '#0a9edc' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
  { name: 'Wireshark', icon: SiWireshark, color: '#1679a7' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'GitHub', icon: SiGithub, color: '#111827' },
  { name: 'GitLab', icon: SiGitlab, color: '#fc6d26' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'Flask', icon: SiFlask, color: '#111827' },
  { name: 'React', icon: SiReact, color: '#0891b2' },
  { name: 'JavaScript', icon: SiJavascript, color: '#ca8a04' },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', icon: SiCss, color: '#1572b6' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' }
]

const EXPERIENCES = [
  {
    id: 'telnet',
    logo: telnetLogo,
    company: 'TELNET',
    role: 'Final-Year Engineering Intern',
    domain: 'Network Validation · Software Development · Test Automation · AI',
    date: 'Feb 2026 — Jun 2026',
    summary:
      'Designed and developed a distributed supervision and automated validation platform for Home Gateways operating in IPv6 and DS-Lite environments.',
    highlights: [
      'Built a Flask / Socket.IO platform orchestrating distributed PCP and UPnP tests through LAN agents.',
      'Automated 13 controlled PCP error scenarios, reducing the campaign from 6h30 to 7 min.',
      'Implemented double validation: protocol responses compared with Home Gateway state retrieved via Telnet.',
      'Added a regression engine and an AI-assisted debug pipeline, cutting validation and debug time by about 98%.'
    ],
    tags: ['Python', 'Flask', 'SQLite', 'Socket.IO', 'IPv6', 'DS-Lite', 'PCP', 'UPnP', 'Scapy', 'Wireshark', 'Linux'],
    caseLabel: 'View NetSupervision Case Study'
  },
  {
    id: 'kokusai',
    logo: smartKokusaiLogo,
    company: 'Smart Kokusai',
    role: 'Engineering Intern',
    domain: 'Software Development · Data · AI · IoT · CSR Monitoring',
    date: 'Jul 2025 — Sep 2025',
    summary:
      'Developed a data-driven CSR monitoring platform for collecting, processing and visualizing environmental and social company KPIs.',
    highlights: [
      'Developed FastAPI and PostgreSQL REST APIs for CSR KPIs, forms and role-based access.',
      'Built an ESP32 → MQTT → InfluxDB → Grafana pipeline with thresholds and alerts.',
      'Integrated OCR extraction of water and electricity bills into structured KPI data.'
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'OCR', 'RBAC'],
    caseLabel: 'View CSR Platform Case Study'
  },
  {
    id: 'softifi',
    logo: softifiLogo,
    company: 'SOFTIFI',
    role: 'IoT Engineering Intern',
    domain: 'Smart Lighting · IoT Conception · Energy Efficiency',
    date: 'Jul 2024 — Aug 2024',
    summary:
      'Contributed to the conception of a smart lighting solution for the Smart Center in Zarzis to address excessive electricity usage.',
    highlights: [
      'Studied the integration of sensors and connected devices for automated lighting control.',
      'Contributed to defining the IoT architecture and system communication flow.',
      'Focused on reducing energy consumption based on usage and environmental conditions.'
    ],
    tags: ['IoT', 'Smart Lighting', 'Sensors', 'ESP32', 'Embedded Systems', 'Energy Efficiency']
  }
]

const onActivate = action => event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    action()
  }
}



function App() {



  const [currentPage, setCurrentPage] = useState('portfolio')

  const [activeEducation, setActiveEducation] = useState('enit')

  const selectedEducation =
    EDUCATION.find(education => education.id === activeEducation) ?? EDUCATION[0]

  const dynamicLines = [
    { prefix: 'Passionate about', value: 'Network Automation' },
    { prefix: 'Focused on', value: 'Test Automation' },
    { prefix: 'Building with', value: 'Python Engineering' },
    { prefix: 'Exploring', value: 'AI-Assisted Systems' }
  ]

  const [dynamicIndex, setDynamicIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicIndex(current => (current + 1) % dynamicLines.length)
    }, 2300)

    return () => clearInterval(interval)
  }, [])






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



          <a href="#contact" className="nav-contact-link">
            Contact
            <FiArrowUpRight />
          </a>



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

            <div className="hero-status">
              <span className="availability-dot"></span>
              Open to opportunities
            </div>



            <p className="hero-eyebrow">

              Hi, I'm

            </p>





            <h1>

              Insaf Fares

            </h1>

            <h2 className="hero-role">
              Network & Test Automation Engineer
            </h2>

            <div
              className="hero-dynamic-line"
              key={dynamicIndex}
            >
              <span>{dynamicLines[dynamicIndex].prefix}</span>
              <strong>{dynamicLines[dynamicIndex].value}</strong>
              <span className="typing-cursor">|</span>
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




        {/* =====================================================
            EDUCATIONAL JOURNEY
        ===================================================== */}

        <div className="education-journey">

          <div className="education-heading">

            <p className="section-eyebrow">
              Education
            </p>

            <h3>
              Educational Journey
            </h3>

            <p>
              From a strong mathematics and physics foundation to
              telecommunications engineering focused on networks,
              automation and validation.
            </p>

          </div>


          <div className="education-layout">

            <div
              className="education-tabs"
              role="tablist"
              aria-label="Education timeline"
            >

              {EDUCATION.map((education) => (

                <button
                  key={education.id}
                  type="button"
                  role="tab"
                  aria-selected={activeEducation === education.id}
                  className={
                    activeEducation === education.id
                      ? 'education-tab education-tab-active'
                      : 'education-tab'
                  }
                  onClick={() => setActiveEducation(education.id)}
                >

                  <strong>
                    {education.year}
                  </strong>

                  <div>
                    <span>
                      {education.shortTitle}
                    </span>

                    <small>
                      {education.shortSchool}
                    </small>
                  </div>

                  <i aria-hidden="true"></i>

                </button>

              ))}

            </div>


            <article
              key={selectedEducation.id}
              className="education-detail"
            >

              <div className="education-accent"></div>

              <div className="education-detail-top">

                <div className="education-school">

                  <div
                    className="education-mark"
                    aria-hidden="true"
                  >
                    {selectedEducation.mark}
                  </div>

                  <div>
                    <h4>
                      {selectedEducation.title}
                    </h4>

                    <p>
                      {selectedEducation.school}
                    </p>
                  </div>

                </div>

                <span className="education-period">
                  {selectedEducation.period}
                </span>

              </div>

              <div className="education-divider"></div>

              <p className="education-description">
                {selectedEducation.description}
              </p>

              {selectedEducation.details && (
                <p className="education-details">
                  {selectedEducation.details}
                </p>
              )}

            </article>

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
          {EXPERIENCES.map(exp => {
            const open = { telnet: openNetSupervision, kokusai: openSmartKokusai }[exp.id]

            return (
              <article
                key={exp.id}
                className={open ? 'experience-card experience-card-clickable' : 'experience-card'}
                onClick={open}
                role={open ? 'button' : undefined}
                tabIndex={open ? 0 : undefined}
                aria-label={open ? `Open ${exp.company} case study` : undefined}
                onKeyDown={open ? onActivate(open) : undefined}
              >
                <div className="experience-top">
                  <div className="experience-company">
                    <img src={exp.logo} alt={exp.company} className="company-logo" />
                    <div>
                      <p className="company-name">{exp.company}</p>
                      <h3>{exp.role}</h3>
                      <p className="experience-domain">{exp.domain}</p>
                    </div>
                  </div>
                  <span className="experience-date">{exp.date}</span>
                </div>

                <div className="experience-body">
                  <p>{exp.summary}</p>
                  <ul>
                    {exp.highlights.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tags">
                  {exp.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="experience-footer">
                  {open && (
                    <div className="experience-case-link">
                      {exp.caseLabel}
                      <FiArrowUpRight />
                    </div>
                  )}
                  <ResourceLinks links={RESOURCES[exp.id]} />
                </div>
              </article>
            )
          })}
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


      {/* ================= SKILLS ================= */}

      <section id="skills" className="skills-section">

        <div className="skills-title">
          <h2>
            <FiCpu />
            Technical Skills
          </h2>
          <p>
            Network automation, test engineering, and the tools to build and validate them.
          </p>
        </div>

        {/* Bande défilante : la liste est dupliquée pour une boucle sans coupure */}
        <div className="skills-marquee" aria-hidden="true">
          <div className="skills-marquee-track">
            {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, index) => {
              const Icon = skill.icon
              return (
                <span className="skills-pill" key={`${skill.name}-${index}`}>
                  <Icon style={{ color: skill.color }} />
                  {skill.name}
                </span>
              )
            })}
          </div>
        </div>

        <div className="skills-showcase">
          {SKILL_GROUPS.map(group => {
            const GroupIcon = group.icon
            return (
              <article className="skills-card" key={group.title}>
                <header className="skills-card-head">
                  <span className="skills-card-icon">
                    <GroupIcon />
                  </span>
                  <h3>{group.title}</h3>
                </header>

                <div className="skills-tiles">
                  {group.items.map(skill => {
                    const Icon = skill.icon
                    return (
                      <div className="skills-tile" key={skill.name}>
                        <Icon style={{ color: skill.color }} />
                        <span>{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>

      </section>
            







     <CertificationsCarousel />


      



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

        <ContactSection />



    </main>



  )



}





export default App