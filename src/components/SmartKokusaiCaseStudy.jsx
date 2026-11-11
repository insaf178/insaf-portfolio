import '../App.css'

import ResourceLinks, { DemoVideo } from './ResourceLinks'
import { RESOURCES } from '../data/resources'

import architectureImage
  from '../assets/projects/smartkokusai/architecture.png'

import workflowImage
  from '../assets/projects/smartkokusai/workflow.png'

import {
  FiArrowLeft,
  FiDatabase,
  FiActivity,
  FiCpu,
  FiBarChart2
} from 'react-icons/fi'


function SmartKokusaiCaseStudy({ onBack }) {

  return (

    <main className="case-study-page">

      {/* ================= BACK ================= */}

      <div className="case-study-topbar">
        <button
          type="button"
          className="case-back-button"
          onClick={onBack}
        >
          <FiArrowLeft />
          Back to Portfolio
        </button>
      </div>

      <section className="case-study-section">

        {/* ================= HERO ================= */}

        <div className="case-hero">

          <div className="case-hero-top">
            <div>
              <p className="section-eyebrow">
                Professional Case Study · Smart Kokusai
              </p>

              <h1 className="case-title">
                AI & Data-Driven CSR Monitoring Platform
              </h1>

              <h2 className="case-subtitle">
                Backend, IoT, OCR and real-time CSR KPI monitoring
              </h2>
            </div>

            <span className="case-year">2025</span>
          </div>

          <p className="case-intro">
            A CSR monitoring platform combining backend development,
            environmental IoT data acquisition, time-series monitoring,
            OCR-based utility bill extraction and enterprise KPI management.
          </p>

          <div className="case-meta">
            <div>
              <span>Company</span>
              <strong>Smart Kokusai</strong>
            </div>

            <div>
              <span>Period</span>
              <strong>Jul — Sep 2025</strong>
            </div>

            <div>
              <span>My Focus</span>
              <strong>Backend · IoT · Data · OCR</strong>
            </div>

            <div>
              <span>Domain</span>
              <strong>CSR Monitoring</strong>
            </div>
          </div>

          <div className="case-stack">
            <span>Python</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
            <span>ESP32</span>
            <span>MQTT</span>
            <span>InfluxDB</span>
            <span>Grafana</span>
            <span>Tesseract OCR</span>
            <span>RBAC</span>
            <span>Tinkercad</span>
          </div>

        </div>

        {/* ================= QUICK OVERVIEW ================= */}

        <div className="case-impact-grid">

          <div className="impact-card">
            <FiDatabase />
            <strong>FastAPI</strong>
            <span>Backend orchestration and business logic</span>
            <small>REST APIs · CSR KPIs · RBAC</small>
          </div>

          <div className="impact-card">
            <FiActivity />
            <strong>Real-Time</strong>
            <span>Environmental monitoring</span>
            <small>ESP32 → MQTT → InfluxDB</small>
          </div>

          <div className="impact-card">
            <FiCpu />
            <strong>OCR</strong>
            <span>Utility bill data extraction</span>
            <small>Tesseract / pytesseract</small>
          </div>

          <div className="impact-card">
            <FiBarChart2 />
            <strong>Grafana</strong>
            <span>CSR KPI dashboards</span>
            <small>Historical monitoring & alerts</small>
          </div>

        </div>

        {/* ================= DEMO VIDEO ================= */}

        <DemoVideo
          src={RESOURCES.kokusai.demoEmbed}
          title="CSR platform demo"
        />

        {/* ================= 01 BUSINESS PROBLEM ================= */}

        <div className="case-block">

          <div className="case-number">01</div>

          <div className="case-block-content">

            <p className="section-eyebrow">The Business Problem</p>

            <h3>
              CSR information was distributed across multiple data sources
            </h3>

            <p>
              Environmental and social CSR indicators required information
              coming from physical sensors, employee input, utility bills
              and manually monitored KPI values.
            </p>

            <p>
              The goal was to centralize these heterogeneous sources into
              one monitoring environment capable of supporting analysis,
              threshold control and reporting.
            </p>

            <div className="before-flow">
              <span>IoT Sensors</span>
              <b>+</b>
              <span>Employee Data</span>
              <b>+</b>
              <span>Utility Bills</span>
              <b>+</b>
              <span>CSR KPIs</span>
              <b>→</b>
              <span>Unified Monitoring</span>
            </div>

          </div>

        </div>

        {/* ================= 02 MY CONTRIBUTION ================= */}

        <div className="case-block">

          <div className="case-number">02</div>

          <div className="case-block-content">

            <p className="section-eyebrow">My Contribution</p>

            <h3>
              Backend, IoT ingestion and intelligent data extraction
            </h3>

            <p>
              My work focused primarily on the backend, IoT acquisition
              pipeline and Python-based document processing.
            </p>

            <div className="solution-grid">

              <div>
                <strong>FastAPI Backend</strong>
                <p>
                  Developed REST APIs for CSR KPI management,
                  employee-related data, forms, role-based access
                  and application data flows.
                </p>
              </div>

              <div>
                <strong>PostgreSQL</strong>
                <p>
                  Stored structured business data including users,
                  employee data, CSR forms, KPI definitions
                  and extracted document information.
                </p>
              </div>

              <div>
                <strong>IoT Pipeline</strong>
                <p>
                  Built ESP32-based environmental sensing and transmitted
                  measurements using MQTT for real-time monitoring.
                </p>
              </div>

              <div>
                <strong>OCR Processing</strong>
                <p>
                  Used Tesseract / pytesseract to extract structured
                  information from water and electricity bills.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= 03 ARCHITECTURE ================= */}

        <div className="case-block case-visual-block">

          <div className="case-number">03</div>

          <div className="case-block-content">

            <p className="section-eyebrow">System Architecture</p>

            <h3>
              Combining business data, IoT streams and OCR extraction
            </h3>

            <p>
              The platform combines a FastAPI application layer,
              PostgreSQL business data, a dedicated real-time IoT
              monitoring pipeline and OCR-based utility bill processing.
            </p>

            <div className="case-image-wrapper">
              <img
                src={architectureImage}
                alt="Smart Kokusai CSR platform architecture"
              />
            </div>

          </div>

        </div>

        {/* ================= 04 IOT ================= */}

        <div className="case-block">

          <div className="case-number">04</div>

          <div className="case-block-content">

            <p className="section-eyebrow">IoT Environmental Monitoring</p>

            <h3>
              From physical sensors to real-time CSR dashboards
            </h3>

            <p>
              ESP32-based devices collect environmental measurements
              and publish them using MQTT.
            </p>

            <div className="debug-flow">

              <div>
                <span>01</span>
                <strong>ESP32 + Sensors</strong>
              </div>

              <b>→</b>

              <div>
                <span>02</span>
                <strong>MQTT</strong>
              </div>

              <b>→</b>

              <div>
                <span>03</span>
                <strong>InfluxDB</strong>
              </div>

              <b>→</b>

              <div>
                <span>04</span>
                <strong>Grafana</strong>
              </div>

              <b>→</b>

              <div>
                <span>05</span>
                <strong>KPI Monitoring</strong>
              </div>

            </div>

            <div className="engineering-note">
              <span>SENSOR DATA</span>
              <p>
                Measurements included temperature and humidity,
                air quality / gas, waste-level detection,
                water-related measurements and other
                environmental indicators.
              </p>
            </div>

          </div>

        </div>

        {/* ================= 05 OCR ================= */}

        <div className="case-block">

          <div className="case-number">05</div>

          <div className="case-block-content">

            <p className="section-eyebrow">OCR & Utility Bill Processing</p>

            <h3>
              Turning water and electricity bills into structured KPI data
            </h3>

            <p>
              Utility consumption data could also enter the platform
              from water and electricity bills.
            </p>

            <div className="regression-flow">

              <div>
                <span>01</span>
                <strong>Upload Bill</strong>
                <p>Water or electricity document.</p>
              </div>

              <div>
                <span>02</span>
                <strong>OCR</strong>
                <p>Tesseract / pytesseract extracts text.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Python Processing</strong>
                <p>Identify relevant consumption and billing fields.</p>
              </div>

              <div>
                <span>04</span>
                <strong>Validation</strong>
                <p>Convert information into structured data.</p>
              </div>

              <div>
                <span>05</span>
                <strong>KPI Update</strong>
                <p>Feed CSR monitoring and reporting.</p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= 06 WORKFLOW ================= */}

        <div className="case-block case-visual-block">

          <div className="case-number">06</div>

          <div className="case-block-content">

            <p className="section-eyebrow">Data Workflow</p>

            <h3>
              From raw enterprise data to monitored CSR indicators
            </h3>

            <div className="case-image-wrapper">
              <img
                src={workflowImage}
                alt="Smart Kokusai CSR monitoring workflow"
              />
            </div>

          </div>

        </div>

        {/* ================= 07 MONITORING ================= */}

        <div className="case-block">

          <div className="case-number">07</div>

          <div className="case-block-content">

            <p className="section-eyebrow">KPI Monitoring & Alerts</p>

            <h3>Data becomes useful when it supports decisions</h3>

            <p>
              Grafana dashboards provide real-time and historical
              monitoring of environmental CSR indicators.
            </p>

            <p>
              KPI thresholds can be defined to detect excessive
              consumption or abnormal values and support alerts
              when predefined CSR targets are exceeded.
            </p>

            <div className="tech-groups">

              <div>
                <span>Environmental</span>
                <strong>Temperature · Air Quality · Waste · Water</strong>
              </div>

              <div>
                <span>Consumption</span>
                <strong>Water · Electricity · Utility Data</strong>
              </div>

              <div>
                <span>Social</span>
                <strong>Employees · Forms · CSR Activities</strong>
              </div>

              <div>
                <span>Monitoring</span>
                <strong>Grafana · Thresholds · Alerts · History</strong>
              </div>

            </div>

          </div>

        </div>

        {/* ================= 08 STACK ================= */}

        <div className="case-block">

          <div className="case-number">08</div>

          <div className="case-block-content">

            <p className="section-eyebrow">Engineering Stack</p>

            <h3>Technologies behind the CSR platform</h3>

            <div className="tech-groups">

              <div>
                <span>Backend</span>
                <strong>Python · FastAPI · REST APIs</strong>
              </div>

              <div>
                <span>Database</span>
                <strong>PostgreSQL</strong>
              </div>

              <div>
                <span>IoT</span>
                <strong>ESP32 · Environmental Sensors · MQTT</strong>
              </div>

              <div>
                <span>Time-Series</span>
                <strong>InfluxDB</strong>
              </div>

              <div>
                <span>Monitoring</span>
                <strong>Grafana · KPI Dashboards · Alerts</strong>
              </div>

              <div>
                <span>Document Intelligence</span>
                <strong>Tesseract · pytesseract · Python</strong>
              </div>

              <div>
                <span>Security / Access</span>
                <strong>RBAC</strong>
              </div>

              <div>
                <span>Simulation</span>
                <strong>Tinkercad</strong>
              </div>

            </div>

          </div>

        </div>

        {/* ================= 09 RESOURCES ================= */}

        <div className="case-block">

          <div className="case-number">09</div>

          <div className="case-block-content">

            <p className="section-eyebrow">Resources</p>

            <h3>Read the report, watch the demo</h3>

            <div style={{ marginTop: 24 }}>
              <ResourceLinks links={RESOURCES.kokusai} />
            </div>

          </div>

        </div>

        {/* ================= END ================= */}

        <div className="case-end">

          <div>
            <p className="section-eyebrow">Smart Kokusai</p>

            <h3>
              Turning CSR data into measurable and actionable indicators.
            </h3>
          </div>

          <div className="case-end-links">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onBack}
            >
              <FiArrowLeft />
              Back to Portfolio
            </button>
          </div>

        </div>

      </section>

    </main>

  )

}

export default SmartKokusaiCaseStudy