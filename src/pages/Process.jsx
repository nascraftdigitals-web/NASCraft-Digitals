import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlus, FiMinus, FiCheck, FiMessageSquare, FiClock, FiDollarSign, FiRefreshCw } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import { processSteps, tools, faqs, projectTimeline, clientNeeds, revisionPolicy, paymentStructure, communicationMethods } from '../data/index'
import styles from './Process.module.css'

export default function Process() {
  const [openFaq, setOpenFaq] = useState(null)
  const revRef = useRevealAll()

  return (
     <main className="page-content" ref={revRef}>
       <PageHero tag="HOW WE WORK" title="Our <em>Process</em>" />

      {/* PROCESS STEPS */}
      <section className="section">
        <div className="container">
          <span className="sec-tag reveal">STEP BY STEP</span>
          <h2 className="sec-h2 reveal d1">From Idea to <em>Launch</em></h2>
          <div className={styles.steps}>
            {processSteps.map((s, i) => (
              <div key={i} className={`${styles.step} ${i % 2 ? styles.stepRight : ''} reveal d${(i % 3)+1}`}>
                <div className={styles.stepConnector}>
                  <div className={styles.stepDot} />
                  {i < processSteps.length - 1 && <div className={styles.stepLine} />}
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>STEP {s.n}</div>
                  <div className={styles.stepIco}>{s.icon}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className={`section ${styles.toolsSection}`}>
        <div className="container">
          <span className="sec-tag reveal">TOOLS WE USE</span>
          <h2 className="sec-h2 reveal d1">Our <em>Stack</em></h2>
          <div className={styles.toolsGrid}>
            {tools.map((t, i) => (
              <div key={i} className={`${styles.toolCard} card-base reveal d${i % 5 + 1}`} data-hover>
                <span className={styles.toolCat}>{t.cat}</span>
                <span className={styles.toolName}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE EXPECTATIONS */}
      <section className="section">
        <div className="container">
          <span className="sec-tag reveal">TIMELINE</span>
          <h2 className="sec-h2 reveal d1">Project <em>Duration</em></h2>
          <div className={styles.timelineGrid}>
            {projectTimeline.map((t, i) => (
              <div key={i} className={`${styles.timelineCard} card-base reveal d${i % 3 + 1}`}>
                <div className={styles.timelineIcon}><FiClock size={24} /></div>
                <h3 className={styles.timelineType}>{t.type}</h3>
                <div className={styles.timelineDuration}>{t.duration}</div>
                <p className={styles.timelineDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNICATION */}
      <section className={`section ${styles.commSection}`}>
        <div className="container">
          <span className="sec-tag reveal">COMMUNICATION</span>
          <h2 className="sec-h2 reveal d1">How We <em>Stay Connected</em></h2>
          <div className={styles.commGrid}>
            {communicationMethods.map((c, i) => (
              <div key={i} className={`${styles.commCard} reveal d${i % 4 + 1}`}>
                <div className={styles.commIcon}>{c.icon}</div>
                <h3 className={styles.commTitle}>{c.title}</h3>
                <p className={styles.commDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE NEED FROM YOU */}
      <section className="section">
        <div className="container">
          <span className="sec-tag reveal">CLIENT REQUIREMENTS</span>
          <h2 className="sec-h2 reveal d1">What We Need <em>From You</em></h2>
          <div className={styles.needsGrid}>
            {clientNeeds.map((n, i) => (
              <div key={i} className={`${styles.needCard} card-base reveal d${i % 3 + 1}`}>
                <div className={styles.needIcon}>{n.icon}</div>
                <h3 className={styles.needTitle}>{n.title}</h3>
                <ul className={styles.needList}>
                  {n.items.map((item, j) => (
                    <li key={j}><FiCheck size={14} color="var(--teal)" /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVISION & PAYMENT POLICY */}
      <section className={`section ${styles.policySection}`}>
        <div className="container">
          <div className={styles.policyGrid}>
            {/* REVISION POLICY */}
            <div className={`${styles.policyCard} reveal`}>
              <div className={styles.policyIcon}><FiRefreshCw size={32} /></div>
              <h3 className={styles.policyTitle}>Revision Policy</h3>
              {revisionPolicy.map((p, i) => (
                <div key={i} className={styles.policyItem}>
                  <FiCheck size={14} color="var(--teal)" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            {/* PAYMENT STRUCTURE */}
            <div className={`${styles.policyCard} reveal d1`}>
              <div className={styles.policyIcon}><FiDollarSign size={32} /></div>
              <h3 className={styles.policyTitle}>Payment Structure</h3>
              {paymentStructure.map((p, i) => (
                <div key={i} className={styles.policyItem}>
                  <FiCheck size={14} color="var(--mag)" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <span className="sec-tag reveal">FAQ</span>
          <h2 className="sec-h2 reveal d1">Common <em>Questions</em></h2>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div key={i} className={`${styles.faqItem} reveal d${i % 3 + 1}`}>
                <button
                  className={`${styles.faqQ} ${openFaq === i ? styles.faqOpen : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-hover
                >
                  {f.q}
                  <span className={styles.faqIcon}>{openFaq === i ? <FiMinus /> : <FiPlus />}</span>
                </button>
                {openFaq === i && (
                  <div className={styles.faqA}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className={`${styles.ctaTitle} reveal`}>Ready to Start <em>Your Project?</em></h2>
          <p className={`${styles.ctaSub} reveal d1`}>We follow the same proven process for every client — and it works.</p>
          <div className="reveal d2" style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/booking" className="btn-p">BOOK A FREE CALL <FiArrowRight /></Link>
            <Link to="/contact" className="btn-outline">SEND A MESSAGE</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
