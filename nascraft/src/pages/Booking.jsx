import { useState } from 'react'
import { FiArrowRight, FiCalendar, FiClock, FiVideo } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import styles from './Booking.module.css'

const TIME_SLOTS = ['10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM']
const MEETING_TYPES = [
  { id:'google', label:'Google Meet', icon:<FiVideo /> },
  { id:'zoom', label:'Zoom Call', icon:<FiVideo /> },
  { id:'whatsapp', label:'WhatsApp Call', icon:<FaWhatsapp /> },
]

function getDates() {
  const dates = []
  const today = new Date()
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    if (d.getDay() !== 0) { // skip Sundays
      dates.push(d)
    }
  }
  return dates
}

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [meetType, setMeetType] = useState('google')
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', notes:'' })
  const [submitted, setSubmitted] = useState(false)
  const revRef = useRevealAll()
  const dates = getDates()
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleBook = (e) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime || !form.name || !form.email) return
    // TODO: Integrate with Calendly API or EmailJS
    setSubmitted(true)
  }

  const fmt = (d) => ({ day: d.toLocaleDateString('en-IN',{weekday:'short'}), num: d.getDate(), mon: d.toLocaleDateString('en-IN',{month:'short'}) })

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="SCHEDULE A CALL" title='Book a <em>Free</em> Call' accent="teal" />

      <section className="section">
        <div className="container">
          {submitted ? (
            <div className={styles.confirmed}>
              <div className={styles.confIco}>✅</div>
              <h2 className={styles.confTitle}>Booking <em>Confirmed!</em></h2>
              <p className={styles.confSub}>You'll receive a calendar invite at <strong style={{color:'var(--teal)'}}>{form.email}</strong> shortly.</p>
              <div className={styles.confDetails}>
                <div className={styles.confItem}><FiCalendar />{selectedDate?.toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div>
                <div className={styles.confItem}><FiClock />{selectedTime}</div>
                <div className={styles.confItem}><FiVideo />{MEETING_TYPES.find(m=>m.id===meetType)?.label}</div>
              </div>
            </div>
          ) : (
            <form className={styles.bookForm} onSubmit={handleBook}>
              <div className={styles.formGrid}>

                {/* LEFT — PICKER */}
                <div className={`${styles.picker} reveal`}>
                  {/* Step 1: Date */}
                  <div className={styles.pickerStep}>
                    <div className={styles.stepHead}><FiCalendar className={styles.stepIco} /><span>SELECT DATE</span></div>
                    <div className={styles.dateGrid}>
                      {dates.map((d, i) => {
                        const f = fmt(d)
                        const isSelected = selectedDate?.toDateString() === d.toDateString()
                        return (
                          <button type="button" key={i} className={`${styles.dateBtn} ${isSelected ? styles.dateSel : ''}`} onClick={() => setSelectedDate(d)} data-hover>
                            <span className={styles.dateDay}>{f.day}</span>
                            <span className={styles.dateNum}>{f.num}</span>
                            <span className={styles.dateMon}>{f.mon}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 2: Time */}
                  {selectedDate && (
                    <div className={styles.pickerStep}>
                      <div className={styles.stepHead}><FiClock className={styles.stepIco} /><span>SELECT TIME (IST)</span></div>
                      <div className={styles.timeGrid}>
                        {TIME_SLOTS.map((t) => (
                          <button type="button" key={t} className={`${styles.timeBtn} ${selectedTime === t ? styles.timeSel : ''}`} onClick={() => setSelectedTime(t)} data-hover>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Meeting type */}
                  {selectedTime && (
                    <div className={styles.pickerStep}>
                      <div className={styles.stepHead}><FiVideo className={styles.stepIco} /><span>MEETING TYPE</span></div>
                      <div className={styles.meetGrid}>
                        {MEETING_TYPES.map(m => (
                          <button type="button" key={m.id} className={`${styles.meetBtn} ${meetType === m.id ? styles.meetSel : ''}`} onClick={() => setMeetType(m.id)} data-hover>
                            {m.icon} {m.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT — DETAILS */}
                <div className={`${styles.details} reveal d2`}>
                  <div className={styles.detailsCard}>
                    <div className={styles.detailsHead}>YOUR DETAILS</div>
                    <div className="form-group">
                      <label className="form-label">FULL NAME *</label>
                      <input className="form-input" value={form.name} onChange={set('name')} placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">EMAIL ADDRESS *</label>
                      <input type="email" className="form-input" value={form.email} onChange={set('email')} placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">PHONE / WHATSAPP</label>
                      <input className="form-input" value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">SERVICE YOU NEED</label>
                      <select className="form-select" value={form.service} onChange={set('service')}>
                        <option value="">-- select --</option>
                        <option>Website Development</option>
                        <option>Branding & Identity</option>
                        <option>Graphic Design</option>
                        <option>Digital Marketing</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">ANYTHING ELSE WE SHOULD KNOW</label>
                      <textarea className="form-textarea" value={form.notes} onChange={set('notes')} placeholder="Brief description of your project..." />
                    </div>

                    {/* Summary */}
                    {selectedDate && selectedTime && (
                      <div className={styles.summary}>
                        <div className={styles.sumItem}><FiCalendar />{selectedDate.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long'})}</div>
                        <div className={styles.sumItem}><FiClock />{selectedTime} IST</div>
                        <div className={styles.sumItem}><FiVideo />{MEETING_TYPES.find(m=>m.id===meetType)?.label}</div>
                      </div>
                    )}

                    <button type="submit" className={`btn-p ${styles.submitBtn}`} disabled={!selectedDate || !selectedTime}>
                      CONFIRM BOOKING <FiArrowRight />
                    </button>
                    {(!selectedDate || !selectedTime) && <p className={styles.pickNote}>← Select a date and time first</p>}
                  </div>
                </div>

              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
