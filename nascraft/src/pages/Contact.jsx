import { useState, useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import emailjs from 'emailjs-com'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import styles from './Contact.module.css'

// ── Replace these with your real EmailJS credentials ──
const EMAILJS_SERVICE  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC   = 'YOUR_PUBLIC_KEY'
const WHATSAPP = 'https://wa.me/919999999999?text=Hi%20Nascraft!%20I%27d%20like%20to%20discuss%20a%20project.'

export default function Contact() {
  const revRef = useRevealAll()
  const [form, setForm] = useState({ name:'', email:'', service:'', budget:'', message:'' })
  const [state, setState] = useState('idle') // idle | sending | success | error
  const formRef = useRef(null)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setState('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        { from_name: form.name, from_email: form.email, service: form.service, budget: form.budget, message: form.message },
        EMAILJS_PUBLIC
      )
      setState('success')
    } catch {
      setState('error')
    }
  }

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="GET IN TOUCH" title="Let's <em>Connect</em>" accent="teal" />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>

            {/* LEFT — INFO */}
            <div className={styles.left}>
              <span className="sec-tag reveal">CONTACT</span>
              <h2 className={`${styles.leftTitle} reveal d1`}>Tell Us About<br />Your <em>Project.</em></h2>
              <p className={`${styles.leftSub} reveal d2`}>We respond to every inquiry within 24 hours. Share your idea and we'll come back with a clear plan and honest pricing.</p>

              <div className={`${styles.infoList} reveal d3`}>
                <div className={styles.infoItem}>
                  <FiMail className={styles.infoIco} />
                  <div>
                    <span className={styles.infoLabel}>EMAIL</span>
                    <a href="mailto:nascraftdigitals@gmail.com" className={styles.infoVal}>nascraftdigitals@gmail.com</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaWhatsapp className={styles.infoIco} />
                  <div>
                    <span className={styles.infoLabel}>WHATSAPP</span>
                    <a href={WHATSAPP} target="_blank" rel="noreferrer" className={styles.infoVal}>+91 XXXXX XXXXX</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FiMapPin className={styles.infoIco} />
                  <div>
                    <span className={styles.infoLabel}>LOCATION</span>
                    <span className={styles.infoVal}>India &amp; Global</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FiClock className={styles.infoIco} />
                  <div>
                    <span className={styles.infoLabel}>RESPONSE TIME</span>
                    <span className={styles.infoVal}>Within 24 Hours</span>
                  </div>
                </div>
              </div>

              <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`btn-outline ${styles.waBtn} reveal d4`}>
                <FaWhatsapp /> CHAT ON WHATSAPP
              </a>
            </div>

            {/* RIGHT — TERMINAL FORM */}
            <div className={`${styles.terminal} reveal d2`}>
              <div className={styles.termBar}>
                <span className={styles.dot1} /><span className={styles.dot2} /><span className={styles.dot3} />
                <span className={styles.termTitle}>NASCRAFT_TERMINAL — NEW_PROJECT.sh</span>
              </div>

              {state === 'success' ? (
                <div className={styles.termBody}>
                  <div className={styles.success}>
                    <p><span className={styles.prompt}>$</span> Message sent successfully...</p>
                    <p><span className={styles.prompt}>$</span> Nascraft will respond within <span style={{color:'var(--mag)'}}>24 hours.</span></p>
                    <p><span className={styles.prompt}>$</span> Project initiated. <span style={{color:'#00FF88'}}>STATUS: ACTIVE ■</span></p>
                    <span className={styles.cursor} />
                  </div>
                </div>
              ) : (
                <form ref={formRef} className={styles.termBody} onSubmit={handleSubmit}>
                  <div className={styles.termRow}>
                    <span className={styles.prompt}>&gt;</span>
                    <div className={styles.termField}>
                      <label className={styles.termLabel}>YOUR NAME</label>
                      <input className={styles.termInput} value={form.name} onChange={set('name')} placeholder="Type your name..." required />
                    </div>
                  </div>
                  <div className={styles.termRow}>
                    <span className={styles.prompt}>&gt;</span>
                    <div className={styles.termField}>
                      <label className={styles.termLabel}>EMAIL ADDRESS</label>
                      <input type="email" className={styles.termInput} value={form.email} onChange={set('email')} placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className={styles.termRow}>
                    <span className={styles.prompt}>&gt;</span>
                    <div className={styles.termField}>
                      <label className={styles.termLabel}>SERVICE NEEDED</label>
                      <select className={styles.termSelect} value={form.service} onChange={set('service')}>
                        <option value="">-- select --</option>
                        <option>Website Development</option>
                        <option>Branding & Identity</option>
                        <option>Graphic Design</option>
                        <option>Digital Marketing</option>
                        <option>Full Package</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.termRow}>
                    <span className={styles.prompt}>&gt;</span>
                    <div className={styles.termField}>
                      <label className={styles.termLabel}>BUDGET RANGE</label>
                      <select className={styles.termSelect} value={form.budget} onChange={set('budget')}>
                        <option value="">-- select --</option>
                        <option>Under ₹4,999 /mo</option>
                        <option>₹4,999 – ₹9,999 /mo</option>
                        <option>₹9,999 – ₹19,999 /mo</option>
                        <option>Above ₹19,999 /mo</option>
                        <option>Let's Discuss</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.termRow}>
                    <span className={styles.prompt}>&gt;</span>
                    <div className={styles.termField}>
                      <label className={styles.termLabel}>YOUR MESSAGE</label>
                      <textarea className={styles.termTextarea} value={form.message} onChange={set('message')} placeholder="Tell us about your project..." required />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={styles.termSubmit}
                    disabled={state === 'sending'}
                  >
                    {state === 'sending' ? '[ EXECUTING... ]' : '[ EXECUTE — SEND MESSAGE ]'} <FiArrowRight />
                  </button>
                  {state === 'error' && <p className={styles.errMsg}>Something went wrong. Try WhatsApp instead.</p>}
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
