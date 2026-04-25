import { useState, useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight, FiMail, FiMapPin, FiClock, FiArrowLeft, FiCheck } from 'react-icons/fi'
import emailjs from 'emailjs-com'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import styles from './Contact.module.css'

const EMAILJS_SERVICE  = 'service_oofffy9'
const EMAILJS_TEMPLATE = 'template_sor4y3o'
const EMAILJS_PUBLIC   = '550K_3hBeckOCZK-J'
const WHATSAPP = 'https://wa.me/916374316014?text=Hi%20Nascraft!%20I%27d%20like%20to%20discuss%20a%20project.'
const WHATSAPP_SUPPORT = 'https://wa.me/919962475256?text=Hi%20Nascraft!%20I%20need%20support.'
const PHONE_DISPLAY = '+91 6374 316 014'
const PHONE_SUPPORT = '+91 99624 75256'

const SERVICES = ['Website Development','Branding & Identity','Graphic Design','Digital Marketing','UI/UX Design','AI & Automation','Startup Support','Full Package']
const BUDGETS  = ['Under ₹5,000','₹5,000 – ₹15,000','₹15,000 – ₹35,000','₹35,000+','Let\'s Discuss']
const TIMELINES = ['ASAP','1–2 Weeks','1 Month','Flexible']

const STEPS = ['SERVICE', 'BUDGET', 'DETAILS']

export default function Contact() {
  const revRef = useRevealAll()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ service: '', budget: '', timeline: '', name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const next = () => setStep(s => Math.min(s + 1, 2))
  const back = () => setStep(s => Math.max(s - 1, 0))

  const canNext = () => {
    if (step === 0) return !!form.service
    if (step === 1) return !!form.budget
    return !!form.name && !!form.email && !!form.message
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canNext()) return
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE, EMAILJS_TEMPLATE,
        { from_name: form.name, from_email: form.email, service: form.service, budget: form.budget, timeline: form.timeline, message: form.message },
        EMAILJS_PUBLIC
      )
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="GET IN TOUCH" title="Let's <em>Connect</em>" accent="teal" />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>

            {/* LEFT */}
            <div className={styles.left}>
              <span className="sec-tag reveal">CONTACT</span>
              <h2 className={`${styles.leftTitle} reveal d1`}>Tell Us About<br />Your <em>Project.</em></h2>
              <p className={`${styles.leftSub} reveal d2`}>We respond to every inquiry within 24 hours. Share your idea and we'll come back with a clear plan and honest pricing.</p>

              <div className={`${styles.infoList} reveal d3`}>
                {[
                  { icon: <FiMail />, label: 'EMAIL', val: 'nascraftdigitals@gmail.com', href: 'mailto:nascraftdigitals@gmail.com' },
                  { icon: <FaWhatsapp />, label: 'WHATSAPP', val: PHONE_DISPLAY, href: WHATSAPP },
                  { icon: <FaWhatsapp />, label: 'CLIENT SUPPORT', val: PHONE_SUPPORT, href: WHATSAPP_SUPPORT },
                  { icon: <FiMapPin />, label: 'LOCATION', val: 'India & Global' },
                  { icon: <FiClock />, label: 'RESPONSE TIME', val: 'Within 24 Hours' },
                ].map((item, i) => (
                  <div key={i} className={styles.infoItem}>
                    <span className={styles.infoIco}>{item.icon}</span>
                    <div>
                      <span className={styles.infoLabel}>{item.label}</span>
                      {item.href
                        ? <a href={item.href} target="_blank" rel="noreferrer" className={styles.infoVal}>{item.val}</a>
                        : <span className={styles.infoVal}>{item.val}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`btn-outline reveal d4 ${styles.waBtn}`}>
                <FaWhatsapp /> CHAT ON WHATSAPP
              </a>
            </div>

            {/* RIGHT — MULTI-STEP TERMINAL */}
            <div className={`${styles.terminal} reveal d2`}>

              {/* Terminal bar */}
              <div className={styles.termBar}>
                <span className={styles.dot1} /><span className={styles.dot2} /><span className={styles.dot3} />
                <span className={styles.termTitle}>NASCRAFT_TERMINAL — NEW_PROJECT.sh</span>
              </div>

              {/* Step progress */}
              {status !== 'success' && (
                <div className={styles.stepBar}>
                  {STEPS.map((s, i) => (
                    <div key={i} className={`${styles.stepItem} ${i === step ? styles.stepActive : ''} ${i < step ? styles.stepDone : ''}`}>
                      <span className={styles.stepDot}>
                        {i < step ? <FiCheck size={9} /> : i + 1}
                      </span>
                      <span className={styles.stepLabel}>{s}</span>
                      {i < STEPS.length - 1 && <span className={`${styles.stepLine} ${i < step ? styles.stepLineDone : ''}`} />}
                    </div>
                  ))}
                </div>
              )}

              {status === 'success' ? (
                <div className={styles.termBody}>
                  <div className={styles.success}>
                    <p><span className={styles.prompt}>$</span> Message sent successfully...</p>
                    <p><span className={styles.prompt}>$</span> Nascraft will respond within <span style={{ color: 'var(--mag)' }}>24 hours.</span></p>
                    <p><span className={styles.prompt}>$</span> Project initiated. <span style={{ color: '#00FF88' }}>STATUS: ACTIVE ■</span></p>
                    <span className={styles.cursor} />
                  </div>
                </div>
              ) : (
                <form className={styles.termBody} onSubmit={handleSubmit}>

                  {/* STEP 0 — Service */}
                  {step === 0 && (
                    <div className={styles.stepContent}>
                      <div className={styles.stepPrompt}>
                        <span className={styles.prompt}>&gt;</span>
                        <span className={styles.stepQ}>What do you need?</span>
                      </div>
                      <div className={styles.optionGrid}>
                        {SERVICES.map(s => (
                          <button
                            type="button"
                            key={s}
                            className={`${styles.optionBtn} ${form.service === s ? styles.optionActive : ''}`}
                            onClick={() => set('service', s)}
                          >
                            {form.service === s && <FiCheck size={10} className={styles.optCheck} />}
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 1 — Budget + Timeline */}
                  {step === 1 && (
                    <div className={styles.stepContent}>
                      <div className={styles.stepPrompt}>
                        <span className={styles.prompt}>&gt;</span>
                        <span className={styles.stepQ}>What's your budget?</span>
                      </div>
                      <div className={styles.optionGrid}>
                        {BUDGETS.map(b => (
                          <button
                            type="button"
                            key={b}
                            className={`${styles.optionBtn} ${form.budget === b ? styles.optionActive : ''}`}
                            onClick={() => set('budget', b)}
                          >
                            {form.budget === b && <FiCheck size={10} className={styles.optCheck} />}
                            {b}
                          </button>
                        ))}
                      </div>
                      <div className={styles.stepPrompt} style={{ marginTop: '1.5rem' }}>
                        <span className={styles.prompt}>&gt;</span>
                        <span className={styles.stepQ}>Timeline?</span>
                      </div>
                      <div className={styles.optionRow}>
                        {TIMELINES.map(t => (
                          <button
                            type="button"
                            key={t}
                            className={`${styles.optionBtn} ${form.timeline === t ? styles.optionActive : ''}`}
                            onClick={() => set('timeline', t)}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 2 — Details */}
                  {step === 2 && (
                    <div className={styles.stepContent}>
                      {[
                        { key: 'name', label: 'YOUR NAME', type: 'text', placeholder: 'Type your name...' },
                        { key: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'your@email.com' },
                      ].map(f => (
                        <div key={f.key} className={styles.termRow}>
                          <span className={styles.prompt}>&gt;</span>
                          <div className={styles.termField}>
                            <label className={styles.termLabel}>{f.label}</label>
                            <input
                              type={f.type}
                              className={styles.termInput}
                              value={form[f.key]}
                              onChange={e => set(f.key, e.target.value)}
                              placeholder={f.placeholder}
                              required
                            />
                          </div>
                        </div>
                      ))}
                      <div className={styles.termRow}>
                        <span className={styles.prompt}>&gt;</span>
                        <div className={styles.termField}>
                          <label className={styles.termLabel}>YOUR MESSAGE</label>
                          <textarea
                            className={styles.termTextarea}
                            value={form.message}
                            onChange={e => set('message', e.target.value)}
                            placeholder="Tell us more about your project..."
                            required
                          />
                        </div>
                      </div>

                      {/* Summary */}
                      <div className={styles.summary}>
                        <span className={styles.summaryItem}><span className={styles.summaryKey}>SERVICE</span> {form.service}</span>
                        <span className={styles.summaryItem}><span className={styles.summaryKey}>BUDGET</span> {form.budget}</span>
                        {form.timeline && <span className={styles.summaryItem}><span className={styles.summaryKey}>TIMELINE</span> {form.timeline}</span>}
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className={styles.termNav}>
                    {step > 0 && (
                      <button type="button" className={styles.backBtn} onClick={back}>
                        <FiArrowLeft /> BACK
                      </button>
                    )}
                    {step < 2 ? (
                      <button
                        type="button"
                        className={styles.termSubmit}
                        onClick={next}
                        disabled={!canNext()}
                      >
                        NEXT STEP <FiArrowRight />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className={styles.termSubmit}
                        disabled={!canNext() || status === 'sending'}
                      >
                        {status === 'sending' ? '[ EXECUTING... ]' : '[ SEND MESSAGE ]'} <FiArrowRight />
                      </button>
                    )}
                  </div>

                  {status === 'error' && <p className={styles.errMsg}>Something went wrong. Try WhatsApp instead.</p>}
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
