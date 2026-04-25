import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import { services } from '../data/index'
import styles from './Services.module.css'

const industries = [
  { icon:'🏢', name:'Startups', needs:['Landing page','Pitch deck','Brand identity','MVP site'] },
  { icon:'🛒', name:'E-Commerce', needs:['Online store','SEO','Social ads','Email automation'] },
  { icon:'🍽️', name:'Restaurants', needs:['Menu website','Google Ads','Instagram','WhatsApp bot'] },
  { icon:'🏥', name:'Clinics & Healthcare', needs:['Booking site','WhatsApp bot','SEO','Social media'] },
  { icon:'🎬', name:'Creators', needs:['Portfolio site','Brand kit','Social growth','Monetisation'] },
  { icon:'🏗️', name:'SMBs', needs:['Business site','Digital marketing','Analytics','CRM automation'] },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const revRef = useRevealAll()
  const svc = services[active]

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="WHAT WE DO" title='Our <em>Services</em>' accent="teal" />

      {/* INTERACTIVE SELECTOR */}
      <section className="section">
        <div className="container">
          <span className="sec-tag reveal">SELECT A SERVICE</span>
          <h2 className="sec-h2 reveal d1">What Do You <em>Need?</em></h2>

          {/* Tabs */}
          <div className={styles.tabs}>
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
                data-hover
              >
                <span className={styles.tabIco}>{s.icon}</span>
                <span className={styles.tabLbl}>{s.label}</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className={styles.panel} key={active}>
            <div className={styles.panelMain}>
              <h3 className={styles.panelTitle}>{svc.title}</h3>
              <p className={styles.panelDesc}>{svc.desc}</p>
              <Link to="/contact" className="btn-p" style={{marginTop:'20px',display:'inline-flex'}}>
                GET A QUOTE <FiArrowRight />
              </Link>
            </div>
            <div>
              <div className={styles.colLabel}>DELIVERABLES</div>
              {svc.deliverables.map((d, i) => (
                <div key={i} className={styles.deliverable}>
                  <FiCheck size={12} color="var(--teal)" style={{flexShrink:0,marginTop:'2px'}} />
                  {d}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PRICING OVERVIEW */}
      <section className={`section ${styles.pricingSection}`}>
        <div className="container">
          <span className="sec-tag reveal">PRICING</span>
          <h2 className="sec-h2 reveal d1">Transparent <em>Pricing</em></h2>
          <div className={styles.pricingGrid}>
            {[
              { name:'Starter', price:'₹1999/month', badge:'', color:'', desc:'Essential branding and social presence.', items:['Logo + Business Card', 'Banner + 3 Posts', 'Up to 2 revisions', 'WhatsApp support'] },
              { name:'Growth', price:'₹4999/month', badge:'MOST POPULAR', color:'teal', desc:'Focused social growth and content.', items:['15 posts or 15 reels', 'WhatsApp support'] },
              { name:'Premium', price:'₹9999/month', badge:'', color:'mag', desc:'Full-service packages for ambitious brands.', items:['15 AI Ads/Ads', '5 Posts + 10 Reels', 'Priority support & updates'] },
            ].map((p, i) => (
              <div key={i} className={`${styles.priceCard} card-base reveal d${i+1} ${p.color === 'teal' ? styles.priceHighlight : p.color === 'mag' ? styles.priceMag : ''}`}>
                {p.badge && <span className={styles.priceBadge}>{p.badge}</span>}
                <h3 className={styles.priceName}>{p.name}</h3>
                <div className={styles.priceAmt}>{p.price}</div>
                <p className={styles.priceDesc}>{p.desc}</p>
                <div className={styles.priceDivider} />
                {p.items.map((item, j) => (
                  <div key={j} className={styles.priceItem}>
                    <FiCheck size={12} style={{flexShrink:0}} /> {item}
                  </div>
                ))}
                <Link to="/contact" className={`${p.color === 'teal' ? 'btn-p' : p.color === 'mag' ? 'btn-g' : 'btn-outline'} ${styles.priceBtn}`}>
                  GET STARTED <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
          <p className={`${styles.pricingNote} reveal`}>All prices are starting points. Final quote depends on scope. <Link to="/contact" style={{color:'var(--teal)'}}>Contact us</Link> for a custom proposal.</p>
        </div>
      </section>

      {/* INDUSTRY MATCH */}
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
    </main>
  )
}
