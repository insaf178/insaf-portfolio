import {
  FiArrowLeft,
  FiGithub,
  FiArrowUpRight,
  FiShield,
  FiGitBranch,
  FiBox,
  FiCheckCircle
} from 'react-icons/fi'

import netpilotCover from '../assets/projects/netpolit/netpilot-cover.png'
import netpilotArchitecture from '../assets/projects/netpolit/Architecture système NetPilotagext.png'
import netpilotWorkflow from '../assets/projects/netpolit/Flux de configuration NetPilot.png'
import netpilotCICD from '../assets/projects/netpolit/Pipeline CI_CD et tests NetPilot.png'

function NetPilotCaseStudy({ onBack }) {
  return (
    <main>
      <section className="case-study-section">

        {/* BACK */}
        <button
          type="button"
          className="case-back-button"
          onClick={onBack}
        >
          <FiArrowLeft />
          Back to portfolio
        </button>


        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="case-hero netpilot-hero">

          <div className="case-hero-top">
            <div>
              <p className="section-eyebrow">
                Network Automation · DevOps
              </p>

              <h1 className="case-title">
                NetPilot
              </h1>

              <h2 className="case-subtitle">
                Multi-Vendor Network Automation Platform
              </h2>
            </div>

            <span className="case-year">
              2026
            </span>
          </div>

          <p className="case-intro">
            A Python-based network automation platform designed to
            abstract vendor-specific CLI differences and provide
            unified workflows for configuration backup, templated
            deployment, validation and rollback across heterogeneous
            network devices.
          </p>


          <div className="case-meta">

            <div>
              <span>Project Type</span>
              <strong>Academic / Portfolio</strong>
            </div>

            <div>
              <span>Domain</span>
              <strong>Network Automation</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Automation · QA · DevOps</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>In Development</strong>
            </div>

          </div>


          <div className="case-stack">
            {[
              'Python',
              'Netmiko',
              'Jinja2',
              'Click',
              'YAML',
              'PyTest',
              'Git',
              'Docker',
              'GitHub Actions'
            ].map(item => (
              <span key={item}>
                {item}
              </span>
            ))}
          </div>

        </div>


        {/* COVER */}

        <div className="case-image-wrapper netpilot-cover">
          <img
            src={netpilotCover}
            alt="NetPilot multi-vendor network automation platform"
          />
        </div>


        {/* =====================================================
            01 — PROBLEM
        ===================================================== */}

        <section className="case-block">

          <div className="case-number">
            01
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              The Problem
            </p>

            <h3>
              Different vendors. Different CLIs.
              One operational problem.
            </h3>

            <p>
              Network teams often manage heterogeneous infrastructure
              where each vendor exposes different command syntax and
              configuration workflows. Manual changes become difficult
              to reproduce, audit and safely roll back.
            </p>

            <div className="solution-grid">

              <div>
                <strong>Vendor-specific CLI</strong>

                <p>
                  Cisco, Juniper, Arista and Huawei devices expose
                  different configuration commands and operational
                  behaviours.
                </p>
              </div>

              <div>
                <strong>Manual configuration</strong>

                <p>
                  Repetitive SSH operations increase execution time
                  and configuration-error risk.
                </p>
              </div>

              <div>
                <strong>Limited traceability</strong>

                <p>
                  Without version-controlled backups, identifying what
                  changed and restoring a previous state becomes harder.
                </p>
              </div>

              <div>
                <strong>Unsafe deployment</strong>

                <p>
                  Configuration changes require validation and a
                  reliable rollback strategy before they can be
                  automated safely.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 — SOLUTION / ARCHITECTURE
        ===================================================== */}

        <section className="case-block">

          <div className="case-number">
            02
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Architecture
            </p>

            <h3>
              One automation layer across heterogeneous devices.
            </h3>

            <p>
              NetPilot separates network operations from vendor-specific
              CLI handling. Devices are defined through a YAML inventory,
              while the Python CLI orchestrates backup, configuration
              rendering, deployment, validation and rollback through
              Netmiko.
            </p>

            <div className="case-image-wrapper">
              <img
                src={netpilotArchitecture}
                alt="NetPilot system architecture"
              />
            </div>

          </div>
        </section>


        {/* =====================================================
            03 — WORKFLOW
        ===================================================== */}

        <section className="case-block">

          <div className="case-number">
            03
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Configuration Lifecycle
            </p>

            <h3>
              Backup. Render. Deploy. Validate. Roll back.
            </h3>

            <p>
              Configuration changes follow a controlled workflow.
              NetPilot preserves the current device state before
              rendering new configuration from reusable templates.
              Dry-run is the default behaviour, and changes are only
              pushed when explicitly requested.
            </p>

            <div className="case-image-wrapper">
              <img
                src={netpilotWorkflow}
                alt="NetPilot configuration workflow"
              />
            </div>


            <div className="engineering-note">
              <span>Safe by default</span>

              <p>
                Deployment is previewed before execution. Real device
                modification requires an explicit
                <code> --apply </code>
                flag.
              </p>
            </div>

          </div>
        </section>


        {/* =====================================================
            04 — TESTABILITY
        ===================================================== */}

        <section className="case-block">

          <div className="case-number">
            04
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Software Quality
            </p>

            <h3>
              Network automation that can be tested without hardware.
            </h3>

            <p>
              Netmiko is isolated behind a small DeviceConnection
              abstraction. During testing, the real SSH connection is
              replaced by an in-memory fake session.
            </p>

            <p>
              This dependency-injection approach allows backup,
              deployment and validation logic to run automatically
              inside CI without physical routers, switches or an
              external lab.
            </p>

            <div className="netpilot-test-flow">

              <div>
                <span>01</span>
                <strong>Application Logic</strong>
                <p>Backup, deploy and validation modules.</p>
              </div>

              <div>
                <span>02</span>
                <strong>DeviceConnection</strong>
                <p>Mockable network interface.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Fake / Real Session</strong>
                <p>PyTest fake session or Netmiko SSH.</p>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 — CI/CD
        ===================================================== */}

        <section className="case-block">

          <div className="case-number">
            05
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              DevOps
            </p>

            <h3>
              Network automation developed like software.
            </h3>

            <p>
              GitHub Actions validates the application on every push
              and pull request through code-quality checks, automated
              tests and container validation.
            </p>

            <div className="case-image-wrapper">
              <img
                src={netpilotCICD}
                alt="NetPilot CI/CD and automated testing pipeline"
              />
            </div>

            <div className="netpilot-pipeline">

              <span>Flake8</span>
              <b>→</b>

              <span>Black</span>
              <b>→</b>

              <span>mypy</span>
              <b>→</b>

              <span>PyTest</span>
              <b>→</b>

              <span>Docker Build</span>
              <b>→</b>

              <span>Smoke Test</span>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 — FEATURES
        ===================================================== */}

        <section className="case-block">

          <div className="case-number">
            06
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Engineering Highlights
            </p>

            <h3>
              Designed around repeatability and operational safety.
            </h3>


            <div className="netpilot-feature-grid">

              <article>
                <FiGitBranch />

                <strong>
                  Inventory as Code
                </strong>

                <p>
                  YAML-based device inventory with credentials
                  injected through environment variables.
                </p>
              </article>


              <article>
                <FiShield />

                <strong>
                  Safe Deployment
                </strong>

                <p>
                  Dry-run by default before configuration is applied
                  to network devices.
                </p>
              </article>


              <article>
                <FiCheckCircle />

                <strong>
                  Validation
                </strong>

                <p>
                  Reachability and configuration-pattern verification
                  after deployment.
                </p>
              </article>


              <article>
                <FiBox />

                <strong>
                  Containerized
                </strong>

                <p>
                  Docker provides a reproducible runtime environment
                  for development and CI.
                </p>
              </article>

            </div>

          </div>
        </section>


        {/* =====================================================
            07 — STATUS
        ===================================================== */}

        <section className="case-block">

          <div className="case-number">
            07
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Project Status
            </p>

            <h3>
              Current implementation and next steps.
            </h3>


            <div className="netpilot-status-grid">

              <div className="netpilot-status">
                <span className="status-done">
                  Implemented
                </span>

                <ul>
                  <li>YAML inventory</li>
                  <li>Multi-vendor Netmiko connection layer</li>
                  <li>Configuration backup</li>
                  <li>Jinja2 template rendering</li>
                  <li>Dry-run / apply workflow</li>
                  <li>Validation</li>
                  <li>Rollback</li>
                  <li>Mocked unit testing</li>
                  <li>Docker packaging</li>
                  <li>GitHub Actions CI</li>
                </ul>
              </div>


              <div className="netpilot-status">
                <span className="status-next">
                  Next
                </span>

                <ul>
                  <li>Parallel multi-device execution</li>
                  <li>Structured JSON CLI output</li>
                  <li>Vendor-native rollback support</li>
                  <li>Optional GNS3 integration testing</li>
                </ul>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            GITHUB CTA
        ===================================================== */}

        <div className="case-next-preview netpilot-github">

          <p className="section-eyebrow">
            Source Code
          </p>

          <h3>
            Explore NetPilot on GitHub
          </h3>

          <p>
            Review the CLI implementation, network abstraction,
            automated tests and CI/CD workflow.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FiGithub />

            View Repository

            <FiArrowUpRight />
          </a>

        </div>

      </section>
    </main>
  )
}

export default NetPilotCaseStudy