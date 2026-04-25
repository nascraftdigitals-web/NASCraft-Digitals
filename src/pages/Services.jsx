import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiCheck, FiClock, FiLayers } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import { serviceCategories } from '../data/index'
import styles from './Services.module.css'

const industries = [
  { icon: '🛒', name: 'E-Commerce',          needs: ['Online store', 'SEO', 'Social ads', 'Email automation'] },
  { icon: '🍽️', name: 'Restaurants',          needs: ['Menu website', 'Google Ads', 'Instagram', 'WhatsApp bot'] },
  { icon: '🏥', name: 'Clinics & Healthcare', needs: ['Booking site', 'WhatsApp bot', 'SEO', 'Social media'] },
  { icon: '🎓', name: 'Education & Training', needs: ['Online courses', 'LMS setup', 'Student portals', 'Certification sites'] },
  { icon: '🏋️', name: 'Fitness & Wellness',   needs: ['Booking system', 'Class schedules', 'Membership portal', 'Nutrition tracking'] },
  { icon: '🎉', name: 'Events',               needs: ['Ticket booking', 'Event calendar', 'Gallery showcase', 'RSVP system'] },
]

function ServiceCard({ s, catColor }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.svcCard} ${open ? styles.svcCardOpen : ''}`}>
      <button className={styles.svcCardBtn} onClick={() => setOpen(o => !o)}>
        <span className={styles.svcCardIcon}>{s.icon}</span>
        <div className={styles.svcCardInfo}>
          <span className={styles.svcCardTitle}>{s.title}</span>
          <span className={styles.svcCardDesc}>{s.desc.substring(0, 65)}…</span>
        </div>
        <div className={styles.svcCardMeta}>
          <span className={styles.svcCardTime}><FiClock size={10} /> {s.timeline}</span>
        </div>
        <span className={`${styles.svcCardToggle} ${open ? styles.svcCardToggleOpen : ''}`}>
          <FiArrowRight />
        </span>
      </button>

      {open && (
        <div className={styles.svcCardBody}>
          <div className={styles.svcCardBodyGrid}>
            <div>
              <p className={styles.svcFullDesc}>{s.desc}</p>
              <div className={styles.svcStack}>
                <FiLayers size={11} />
                <span>{s.stack}</span>
              </div>
            </div>
            <div>
              <div className={styles.svcDelLabel}>// DELIVERABLES</div>
              <div className={styles.svcDelList}>
                {s.deliverables.map((d, i) => (
                  <div key={i} className={styles.svcDelItem}>
                    <FiCheck size={11} className={styles.svcCheck} /> {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.svcCardFooter}>
            <Link to="/contact" className="btn-p">
              GET THIS SERVICE <FiArrowRight />
            </Link>
            <Link to="/booking" className="btn-outline">
              BOOK A CALL
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Services() {
  const [openCat, setOpenCat] = useState(0)
  const revRef = useRevealAll()

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="WHAT WE DO" title="Our <em>Services</em>" accent="teal" />

      {/* ── SERVICE CATEGORIES ── */}
      <section className="section">
        <div className="container">
          <span className="sec-tag reveal">SERVICES</span>
          <h2 className="sec-h2 reveal d1">Everything You <em>Need</em></h2>

          <div className={styles.catList}>
            {serviceCategories.map((cat, ci) => {
              const isOpen = openCat === ci
              return (
                <div key={ci} className={`${styles.catRow} reveal`}>
                  <button
                    className={`${styles.catBtn} ${isOpen ? styles.catBtnOpen : ''}`}
                    onClick={() => setOpenCat(isOpen ? null : ci)}
                  >
                    <span className={styles.catNum}>0{ci + 1}</span>
                    <span className={styles.catIcon}>{cat.icon}</span>
                    <span className={styles.catName}>{cat.category}</span>
                    <span className={styles.catCount}>{cat.services.length} services</span>
                    <span className={`${styles.catArrow} ${isOpen ? styles.catArrowOpen : ''}`}>
                      <FiArrowRight />
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.catBody}>
                      {cat.services.map(s => (
                        <ServiceCard key={s.id} s={s} />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={`section ${styles.pricingSection}`}>
        <div className="container">
          <span className="sec-tag reveal">PRICING</span>
          <h2 className="sec-h2 reveal d1">Transparent <em>Pricing</em></h2>
          <div className={styles.pricingGrid}>
            {[
              { name: 'Starter', price: '₹5,000', badge: '', color: '', desc: 'For small projects, startups and quick launches.', items: ['1-page website or brand kit', 'Up to 2 revisions', '5-day delivery', 'WhatsApp support'] },
              { name: 'Growth', price: '₹15,000', badge: 'MOST POPULAR', color: 'teal', desc: 'For businesses ready to scale their digital presence.', items: ['Multi-page website or full brand', 'UI/UX design included', 'SEO-ready structure', 'Email + WhatsApp support', '30-day post-launch support'] },
              { name: 'Premium', price: '₹35,000+', badge: '', color: 'mag', desc: 'Full-service packages for ambitious brands.', items: ['Everything in Growth', 'AI chatbot integration', 'Digital marketing setup', 'Custom automations', 'Priority support & updates'] },
            ].map((p, i) => (
              <div key={i} className={`${styles.priceCard} card-base reveal d${i + 1} ${p.color === 'teal' ? styles.priceHighlight : p.color === 'mag' ? styles.priceMag : ''}`}>
                {p.badge && <span className={styles.priceBadge}>{p.badge}</span>}
                <h3 className={styles.priceName}>{p.name}</h3>
                <div className={styles.priceAmt}>{p.price}</div>
                <p className={styles.priceDesc}>{p.desc}</p>
                <div className={styles.priceDivider} />
                {p.items.map((item, j) => (
                  <div key={j} className={styles.priceItem}>
                    <FiCheck size={12} style={{ flexShrink: 0, color: 'var(--teal)' }} /> {item}
                  </div>
                ))}
                <Link to="/contact" className={`${p.color === 'teal' ? 'btn-p' : p.color === 'mag' ? 'btn-g' : 'btn-outline'} ${styles.priceBtn}`}>
                  GET STARTED <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
          <p className={`${styles.pricingNote} reveal`}>
            All prices are starting points. Final quote depends on scope.{' '}
            <Link to="/contact" style={{ color: 'var(--teal)' }}>Contact us</Link> for a custom proposal.
          </p>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section">
        <div className="container">
          <span className="sec-tag reveal">WHO WE SERVE</span>
          <h2 className="sec-h2 reveal d1">We Work With <em>Every</em> Industry</h2>
          <div className={styles.industryGrid}>
            {industries.map((ind, i) => (
              <div key={i} className={`${styles.indCard} card-base reveal d${i % 4 + 1}`}>
                <span className={styles.indIco}>{ind.icon}</span>
                <h3 className={styles.indName}>{ind.name}</h3>
                <div className={styles.indNeeds}>
                  {ind.needs.map((n, j) => <span key={j} className={styles.indTag}>{n}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaOrb} />
        <div className="container">
          <div className={styles.ctaInner}>
            <span className={styles.ctaTag}>READY?</span>
            <h2 className={styles.ctaTitle}>Not Sure What<br /><em>You Need?</em></h2>
            <p className={styles.ctaSub}>Book a free 30-min call and we'll figure it out together.</p>
            <div className={styles.ctaBtns}>
              <Link to="/booking" className="btn-p">BOOK A FREE CALL <FiArrowRight /></Link>
              <Link to="/contact" className="btn-outline">SEND A MESSAGE <FiArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
