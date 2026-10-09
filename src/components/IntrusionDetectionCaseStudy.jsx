import {
  FiArrowLeft,
  FiGithub,
  FiArrowUpRight,
  FiShield,
  FiActivity,
  FiCpu,
  FiCheckCircle
} from 'react-icons/fi'

import idsCover from '../assets/ids-cover.png'
import idsArchitecture from '../assets/ids-architecture.png'
import idsModel from '../assets/ids-cnn-lstm.png'
import idsResults from '../assets/ids-results.png'


function IntrusionDetectionCaseStudy({ onBack }) {
  return (
    <main>
      <section className="case-study-section">

        <button
          type="button"
          className="case-back-button"
          onClick={onBack}
        >
          <FiArrowLeft />
          Back to portfolio
        </button>


        {/* HERO */}
        <div className="case-hero">

          <div className="case-hero-top">
            <div>
              <p className="section-eyebrow">
                AI · Cybersecurity · IoT Networks
              </p>

              <h1 className="case-title">
                AI-Based Intrusion Detection
              </h1>

              <h2 className="case-subtitle">
                Intelligent Threat Detection for IoT Networks
              </h2>
            </div>

            <span className="case-year">
              Academic Project
            </span>
          </div>

          <p className="case-intro">
            An AI-driven intrusion detection system designed to analyse
            IoT network traffic and identify malicious behaviour through
            network simulation, traffic analysis and deep learning.
          </p>

          <div className="case-meta">
            <div>
              <span>Domain</span>
              <strong>Cybersecurity</strong>
            </div>

            <div>
              <span>Environment</span>
              <strong>IoT Networks</strong>
            </div>

            <div>
              <span>Approach</span>
              <strong>CNN-LSTM</strong>
            </div>

            <div>
              <span>Tools</span>
              <strong>NS-3 · Wireshark</strong>
            </div>
          </div>

          <div className="case-stack">
            {[
              'Python',
              'NS-3',
              'NetAnim',
              'Wireshark',
              'TensorFlow',
              'Keras',
              'CNN',
              'LSTM',
              'IoT Security'
            ].map(item => (
              <span key={item}>
                {item}
              </span>
            ))}
          </div>

        </div>


        {/* COVER */}
        <div className="case-image-wrapper">
          <img
            src={idsCover}
            alt="AI-Based Intrusion Detection System for IoT Networks"
          />
        </div>


        {/* 01 — PROBLEM */}
        <section className="case-block">

          <div className="case-number">
            01
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              The Problem
            </p>

            <h3>
              IoT environments introduce a large and heterogeneous
              attack surface.
            </h3>

            <p>
              Connected devices continuously generate network traffic,
              often with limited built-in security capabilities.
              Detecting abnormal behaviour manually becomes difficult
              as the number of devices and traffic flows increases.
            </p>

            <div className="solution-grid">

              <div>
                <strong>DDoS</strong>
                <p>
                  Abnormally high traffic volume can overwhelm network
                  resources and connected services.
                </p>
              </div>

              <div>
                <strong>MITM</strong>
                <p>
                  Intercepted communications can expose or manipulate
                  data exchanged between IoT devices.
                </p>
              </div>

              <div>
                <strong>Port Scanning</strong>
                <p>
                  Reconnaissance activity can reveal exposed services
                  and potential attack vectors.
                </p>
              </div>

              <div>
                <strong>Traffic Complexity</strong>
                <p>
                  Distinguishing legitimate IoT behaviour from malicious
                  activity requires analysing multiple traffic features.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* 02 — ARCHITECTURE */}
        <section className="case-block">

          <div className="case-number">
            02
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              System Architecture
            </p>

            <h3>
              From simulated IoT traffic to automated intrusion detection.
            </h3>

            <p>
              The workflow combines IoT network simulation, packet-level
              traffic analysis, feature preprocessing and a CNN-LSTM
              deep-learning model for intrusion classification.
            </p>

            <div className="case-image-wrapper">
              <img
                src={idsArchitecture}
                alt="Intrusion detection system architecture"
              />
            </div>

          </div>
        </section>


        {/* 03 — NETWORK SIMULATION */}
        <section className="case-block">

          <div className="case-number">
            03
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Network Simulation
            </p>

            <h3>
              Reproducing normal and malicious IoT traffic.
            </h3>

            <p>
              NS-3 was used to model the network environment and traffic
              interactions between connected devices. NetAnim provided
              a visual representation of communication flows, while
              Wireshark supported packet-level inspection.
            </p>

            <div className="ids-flow-grid">

              <div>
                <span>01</span>
                <strong>IoT Topology</strong>
                <p>
                  Connected sensors and devices communicate through the
                  simulated network.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>Attack Scenarios</strong>
                <p>
                  DDoS, MITM and port-scanning behaviour are introduced.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>Traffic Capture</strong>
                <p>
                  Network traces are inspected and transformed into
                  model-ready features.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* 04 — MODEL */}
        <section className="case-block">

          <div className="case-number">
            04
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Deep Learning
            </p>

            <h3>
              CNN for traffic patterns. LSTM for temporal behaviour.
            </h3>

            <p>
              The CNN-LSTM architecture combines convolutional feature
              extraction with temporal modelling. CNN layers identify
              relevant local patterns in network features, while LSTM
              layers learn dependencies across traffic sequences.
            </p>

            <div className="case-image-wrapper">
              <img
                src={idsModel}
                alt="CNN-LSTM intrusion detection model architecture"
              />
            </div>

            <div className="engineering-note">
              <span>Why CNN-LSTM?</span>
              <p>
                Network traffic contains both local feature patterns and
                temporal relationships. Combining both architectures
                allows the model to capture these complementary aspects.
              </p>
            </div>

          </div>
        </section>


        {/* 05 — FEATURES */}
        <section className="case-block">

          <div className="case-number">
            05
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Traffic Features
            </p>

            <h3>
              Transforming packet activity into model-ready sequences.
            </h3>

            <div className="netpilot-feature-grid">

              <article>
                <FiActivity />
                <strong>Packet Behaviour</strong>
                <p>
                  Packet size, inter-arrival time and traffic frequency.
                </p>
              </article>

              <article>
                <FiCpu />
                <strong>Flow Features</strong>
                <p>
                  Protocol type, flow duration and source/destination
                  characteristics.
                </p>
              </article>

              <article>
                <FiShield />
                <strong>Attack Patterns</strong>
                <p>
                  Suspicious changes in communication behaviour and
                  traffic intensity.
                </p>
              </article>

              <article>
                <FiCheckCircle />
                <strong>Preprocessing</strong>
                <p>
                  Cleaning, normalization and sequence construction
                  before model inference.
                </p>
              </article>

            </div>

          </div>
        </section>


        {/* 06 — RESULTS */}
        <section className="case-block">

          <div className="case-number">
            06
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Evaluation
            </p>

            <h3>
              Measuring detection performance across attack classes.
            </h3>

            <p>
              The model was evaluated using standard classification
              metrics and confusion-matrix analysis to compare normal
              traffic with malicious network behaviour.
            </p>

            <div className="case-image-wrapper">
              <img
                src={idsResults}
                alt="Intrusion detection model evaluation results"
              />
            </div>

            <div className="engineering-note">
              <span>Important</span>
              <p>
                Replace the metrics shown in the generated visual with
                your exact experimental values before publishing the
                portfolio if they differ from your real results.
              </p>
            </div>

          </div>
        </section>


        {/* 07 — WHAT I LEARNED */}
        <section className="case-block">

          <div className="case-number">
            07
          </div>

          <div className="case-block-content">

            <p className="section-eyebrow">
              Engineering Takeaways
            </p>

            <h3>
              Connecting networking, cybersecurity and machine learning.
            </h3>

            <div className="solution-grid">

              <div>
                <strong>Network Simulation</strong>
                <p>
                  Modelling connected-device communication and attack
                  behaviour using NS-3.
                </p>
              </div>

              <div>
                <strong>Packet Analysis</strong>
                <p>
                  Understanding network behaviour through captured
                  traffic and protocol-level inspection.
                </p>
              </div>

              <div>
                <strong>Deep Learning</strong>
                <p>
                  Applying CNN-LSTM architectures to sequential network
                  data.
                </p>
              </div>

              <div>
                <strong>Cybersecurity</strong>
                <p>
                  Relating traffic anomalies to real attack scenarios
                  such as DDoS, MITM and scanning.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* CTA */}
        <div className="case-next-preview">

          <p className="section-eyebrow">
            Project
          </p>

          <h3>
            Explore the implementation
          </h3>

          <p>
            Review the simulation workflow, traffic-analysis pipeline
            and CNN-LSTM intrusion-detection approach.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FiGithub />
            View Project
            <FiArrowUpRight />
          </a>

        </div>

      </section>
    </main>
  )
}

export default IntrusionDetectionCaseStudy