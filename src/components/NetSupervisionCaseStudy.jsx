import '../App.css'

import ResourceLinks, { DemoVideo } from './ResourceLinks'
import { RESOURCES } from '../data/resources'

import architectureImage
  from '../assets/projects/netsupervision/architecture.png'

import workflowImage
  from '../assets/projects/netsupervision/workflow.png'

import {
  FiArrowLeft,
  FiGithub,
  FiClock,
  FiLayers,
  FiActivity,
  FiCpu
} from 'react-icons/fi'

function NetSupervisionCaseStudy({ onBack }) {

  return (

    <main className="case-study-page">

      {/* BACK */}

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

      <section
        id="netsupervision-case-study"
        className="case-study-section"
      >

        {/* ================= HERO ================= */}

        <div className="case-hero">

          <div className="case-hero-top">
            <div>
              <p className="section-eyebrow">
                Professional Case Study · TELNET
              </p>

              <h1 className="case-title">
                NetSupervision
              </h1>

              <h2 className="case-subtitle">
                Distributed Network Validation & Regression
                Platform for IPv6 / DS-Lite Home Gateways
              </h2>
            </div>

            <span className="case-year">
              2026
            </span>
          </div>

          <p className="case-intro">
            NetSupervision is a centralized engineering platform
            designed to automate PCP and UPnP validation,
            execute distributed network tests, inspect Home
            Gateway behavior, run regression campaigns and
            assist engineers during failure analysis.
          </p>

          <div className="case-meta">
            <div>
              <span>Company</span>
              <strong>TELNET</strong>
            </div>

            <div>
              <span>Period</span>
              <strong>Feb — Jun 2026</strong>
            </div>

            <div>
              <span>Role</span>
              <strong>Network Validation & Automation</strong>
            </div>

            <div>
              <span>Environment</span>
              <strong>IPv6 · DS-Lite · HGW</strong>
            </div>
          </div>

          <div className="case-stack">
            <span>Python</span>
            <span>Flask</span>
            <span>Socket.IO</span>
            <span>IPv6</span>
            <span>DS-Lite</span>
            <span>PCP</span>
            <span>UPnP</span>
            <span>Scapy</span>
            <span>Linux</span>
            <span>AI-Assisted Debugging</span>
          </div>

        </div>

        {/* ================= IMPACT ================= */}

        <div className="case-impact-grid">

          <div className="impact-card">
            <FiClock />
            <strong>98.3%</strong>
            <span>PCP validation time reduction</span>
            <small>≈ 5 min → ≈ 5 sec</small>
          </div>

          <div className="impact-card">
            <FiActivity />
            <strong>98.2%</strong>
            <span>PCP error campaign reduction</span>
            <small>≈ 6h30 → ≈ 7 min</small>
          </div>

          <div className="impact-card">
            <FiLayers />
            <strong>13</strong>
            <span>PCP error scenarios automated</span>
            <small>Repeatable regression execution</small>
          </div>

          <div className="impact-card">
            <FiCpu />
            <strong>99.4%</strong>
            <span>Debug analysis reduction</span>
            <small>≈ 15 min → ≈ 5 sec</small>
          </div>

        </div>

        {/* ================= DEMO VIDEO ================= */}

        <DemoVideo
          src={RESOURCES.telnet.demoEmbed}
          title="NetSupervision demo"
        />

        {/* ================= 01 CHALLENGE ================= */}

        <div className="case-block">

          <div className="case-number">01</div>

          <div className="case-block-content">

            <p className="section-eyebrow">The Challenge</p>

            <h3>A fragmented validation workflow</h3>

            <p>
              Home Gateway validation required engineers
              to combine protocol clients, Telnet sessions,
              packet captures, gateway data-model inspection,
              server logs and debug archives.
            </p>

            <p>
              Repeating these operations after firmware changes
              made regression testing time-consuming and failure
              investigation difficult.
            </p>

            <div className="before-flow">
              <span>Protocol Request</span>
              <b>→</b>
              <span>Packet Capture</span>
              <b>→</b>
              <span>HGW Inspection</span>
              <b>→</b>
              <span>Logs</span>
              <b>→</b>
              <span>Manual Analysis</span>
            </div>

          </div>

        </div>

        {/* ================= 02 SOLUTION ================= */}

        <div className="case-block">

          <div className="case-number">02</div>

          <div className="case-block-content">

            <p className="section-eyebrow">The Solution</p>

            <h3>
              Centralized orchestration.
              Distributed network execution.
            </h3>

            <p>
              I designed NetSupervision to centralize
              validation orchestration while preserving the
              actual network environment required for PCP
              and UPnP execution.
            </p>

            <div className="solution-grid">

              <div>
                <strong>Central Platform</strong>
                <p>
                  Test orchestration, regression,
                  mappings, users, logs, results
                  and analysis.
                </p>
              </div>

              <div>
                <strong>LAN Agent</strong>
                <p>
                  Executes operations from the workstation
                  physically connected to the Home Gateway.
                </p>
              </div>

              <div>
                <strong>PCP Validation Server</strong>
                <p>
                  Provides mapping management,
                  resource policies and controlled
                  PCP error scenarios.
                </p>
              </div>

              <div>
                <strong>Evidence & Debug Layer</strong>
                <p>
                  Correlates protocol responses,
                  gateway states, packets, logs
                  and debug information.
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
              From centralized orchestration
              to the real validation network
            </h3>

            <p>
              The platform separates centralized software
              orchestration from network-local execution
              through persistent communication with
              distributed LAN Agents.
            </p>

            <div className="case-image-wrapper">
              <img
                src={architectureImage}
                alt="NetSupervision system architecture"
              />
            </div>

          </div>

        </div>

        {/* ================= 04 WORKFLOW ================= */}

        <div className="case-block case-visual-block">

          <div className="case-number">04</div>

          <div className="case-block-content">

            <p className="section-eyebrow">Validation Workflow</p>

            <h3>Validation beyond the protocol response</h3>

            <p>
              NetSupervision correlates protocol results
              with Home Gateway state, packet captures,
              mapping information and execution evidence.
            </p>

            <div className="case-image-wrapper">
              <img
                src={workflowImage}
                alt="NetSupervision validation workflow"
              />
            </div>

            <div className="double-validation">

              <div>
                <span>01</span>
                <strong>Protocol-Level Validation</strong>
                <p>
                  Response code, mapping parameters,
                  lifetime and assigned external port.
                </p>
              </div>

              <div className="validation-plus">+</div>

              <div>
                <span>02</span>
                <strong>Gateway-Level Validation</strong>
                <p>
                  Firewall.PCP state, WAN information,
                  DS-Lite state and internal HGW behavior.
                </p>
              </div>

              <div className="validation-equals">=</div>

              <div className="validation-result">
                <FiActivity />
                <strong>Verified Result</strong>
                <p>Complete technical evidence.</p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= 05 REGRESSION ================= */}

        <div className="case-block">

          <div className="case-number">05</div>

          <div className="case-block-content">

            <p className="section-eyebrow">Regression Automation</p>

            <h3>
              From individual tests to repeatable
              validation campaigns
            </h3>

            <p>
              The regression engine executes predefined
              PCP and UPnP scenarios, collects evidence
              and automatically compares expected and
              observed behavior.
            </p>

            <div className="regression-flow">

              <div>
                <span>01</span>
                <strong>Load Test Case</strong>
                <p>Parameters and expected behavior.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Execute Scenario</strong>
                <p>PCP or UPnP through the LAN Agent.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Collect Evidence</strong>
                <p>Protocol, HGW, mappings and logs.</p>
              </div>

              <div>
                <span>04</span>
                <strong>Compare Results</strong>
                <p>Expected versus observed behavior.</p>
              </div>

              <div>
                <span>05</span>
                <strong>Generate Verdict</strong>
                <p>PASS, FAIL or ERROR.</p>
              </div>

            </div>

            <div className="engineering-note">
              <span>ENGINEERING DETAIL</span>
              <p>
                An expected PCP error can produce a PASS
                verdict when the expected error is correctly
                returned and propagated by the Home Gateway.
              </p>
            </div>

          </div>

        </div>

        {/* ================= 06 AI ================= */}

        <div className="case-block">

          <div className="case-number">06</div>

          <div className="case-block-content">

            <p className="section-eyebrow">AI-Assisted Troubleshooting</p>

            <h3>Deterministic testing. AI-assisted investigation.</h3>

            <p>
              PASS, FAIL and ERROR remain deterministic.
              AI is used only afterward to interpret
              complex evidence and assist root-cause
              investigation.
            </p>

            <div className="ai-pipeline">

              <div className="ai-step">
                <span>01</span>
                <strong>Failed / Complex Result</strong>
                <p>Execution requires deeper investigation.</p>
              </div>

              <div className="ai-arrow">↓</div>

              <div className="ai-step">
                <span>02</span>
                <strong>Rule-Based Classification</strong>
                <p>Associate the failure with a technical category.</p>
              </div>

              <div className="ai-arrow">↓</div>

              <div className="ai-step">
                <span>03</span>
                <strong>Structured Evidence</strong>
                <p>
                  Protocol values, gateway state,
                  server status and execution context.
                </p>
              </div>

              <div className="ai-arrow">↓</div>

              <div className="ai-step">
                <span>04</span>
                <strong>Sanitization</strong>
                <p>Sensitive laboratory information is removed.</p>
              </div>

              <div className="ai-arrow">↓</div>

              <div className="ai-step ai-step-final">
                <span>05</span>
                <strong>AI-Assisted Diagnosis</strong>
                <p>
                  Probable component, root cause,
                  evidence and recommended actions.
                </p>
              </div>

            </div>

            <div className="ai-principle">
              <FiCpu />

              <div>
                <strong>
                  AI assists the engineer — it does not
                  replace engineering judgment.
                </strong>

                <p>
                  Original execution evidence remains
                  available for manual verification.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ================= 07 DEBUG ================= */}

        <div className="case-block">

          <div className="case-number">07</div>

          <div className="case-block-content">

            <p className="section-eyebrow">Debug Automation</p>

            <h3>
              Turning raw Home Gateway logs
              into structured evidence
            </h3>

            <p>
              NetSupervision automates debug archive
              collection, extraction, classification
              and comparison.
            </p>

            <div className="debug-flow">

              <div>
                <span>HGW</span>
                <strong>Debug Archive</strong>
              </div>

              <b>→</b>

              <div>
                <span>01</span>
                <strong>Collection</strong>
              </div>

              <b>→</b>

              <div>
                <span>02</span>
                <strong>Extraction</strong>
              </div>

              <b>→</b>

              <div>
                <span>03</span>
                <strong>Classification</strong>
              </div>

              <b>→</b>

              <div>
                <span>04</span>
                <strong>Comparison</strong>
              </div>

              <b>→</b>

              <div>
                <span>AI</span>
                <strong>Interpretation</strong>
              </div>

            </div>

          </div>

        </div>

        {/* ================= 08 RESULTS ================= */}

        <div className="case-block">

          <div className="case-number">08</div>

          <div className="case-block-content">

            <p className="section-eyebrow">Results & Impact</p>

            <h3>
              Multi-hour validation workflows
              reduced to minutes
            </h3>

            <div className="results-table">

              <div className="results-row results-header">
                <span>Workflow</span>
                <span>Manual</span>
                <span>NetSupervision</span>
                <span>Reduction</span>
              </div>

              <div className="results-row">
                <strong>PCP validation</strong>
                <span>≈ 5 min</span>
                <span>≈ 5 sec</span>
                <b>98.3%</b>
              </div>

              <div className="results-row">
                <strong>UPnP validation</strong>
                <span>≈ 8–9 min</span>
                <span>≈ 8–10 sec</span>
                <b>≈ 98%</b>
              </div>

              <div className="results-row">
                <strong>13 PCP error scenarios</strong>
                <span>≈ 6h30</span>
                <span>≈ 7 min</span>
                <b>98.2%</b>
              </div>

              <div className="results-row">
                <strong>Debug analysis</strong>
                <span>≈ 15 min</span>
                <span>≈ 5 sec</span>
                <b>99.4%</b>
              </div>

            </div>

            <div className="result-highlight">
              <span className="result-big-number">6h30</span>
              <span className="result-arrow">→</span>
              <span className="result-big-number result-final">7 min</span>

              <p>
                Execution time for 13 controlled
                PCP error scenarios.
              </p>
            </div>

          </div>

        </div>

        {/* ================= 09 STACK ================= */}

        <div className="case-block">

          <div className="case-number">09</div>

          <div className="case-block-content">

            <p className="section-eyebrow">Engineering Stack</p>

            <h3>Technologies behind NetSupervision</h3>

            <div className="tech-groups">

              <div>
                <span>Backend</span>
                <strong>Python · Flask · SQLAlchemy · SQLite</strong>
              </div>

              <div>
                <span>Communication</span>
                <strong>
                  Socket.IO · WebSockets · UDP ·
                  Socket Programming
                </strong>
              </div>

              <div>
                <span>Networking</span>
                <strong>
                  IPv6 · DS-Lite · PCP · UPnP ·
                  NAT · CGNAT
                </strong>
              </div>

              <div>
                <span>Validation</span>
                <strong>
                  Scapy · Wireshark · tcpdump ·
                  miniupnpc
                </strong>
              </div>

              <div>
                <span>Gateway</span>
                <strong>Telnet · TFTP · Firewall.PCP</strong>
              </div>

              <div>
                <span>Platform</span>
                <strong>Linux · systemd · Git · GitLab</strong>
              </div>

              <div>
                <span>AI Pipeline</span>
                <strong>
                  Classification · Sanitization ·
                  Structured Prompting · LLM Analysis
                </strong>
              </div>

            </div>

          </div>

        </div>

        {/* ================= 10 RESOURCES ================= */}

        <div className="case-block">

          <div className="case-number">10</div>

          <div className="case-block-content">

            <p className="section-eyebrow">Resources</p>

            <h3>Read the report, watch the demo</h3>

            <div style={{ marginTop: 24 }}>
              <ResourceLinks links={RESOURCES.telnet} />
            </div>

          </div>

        </div>

        {/* ================= END ================= */}

        <div className="case-end">

          <div>
            <p className="section-eyebrow">NetSupervision</p>

            <h3>
              Network validation transformed into
              a repeatable engineering workflow.
            </h3>
          </div>

          <div className="case-end-links">

            <a
              href="https://github.com/insaf178/network-validation-automation-platform"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FiGithub />
              View GitHub
            </a>

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

export default NetSupervisionCaseStudy