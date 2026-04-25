import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import { directors, developers, designUnit } from '../data/index'
const values = [
  { icon: '💡', title: 'Creative Excellence', desc: 'Design and code that pushes boundaries while solving real problems.' },
  { icon: '🚀', title: 'Fast Execution', desc: 'Speed matters. We move quickly without cutting corners on quality.' },
  { icon: '🤝', title: 'Client Partnership', desc: 'Your wins are our wins. We are invested in your long-term success.' },
  { icon: '♻️', title: 'Continuous Learning', desc: 'Tech evolves fast. We stay ahead so you don\u0027t have to worry.' },
]
import styles from './About.module.css'

const timeline = [
  { year: '2025', title: 'The Beginning', desc: 'Founded as Cyber Monk Studioz — two passionate creators building websites and designs from scratch.' },
  { year: '2025', title: 'First 10 Clients', desc: 'Expanded to branding and digital marketing. Delivered 10 projects across retail, food and tech sectors.' },
  { year: '2025', title: '10+ Projects Deliverd', desc: 'Hit 10+ delivered projects. Launched startup support vertical for founders.' },
  { year: '2026', title: 'Nascraft Digitals', desc: 'Rebranded as Nascraft Digitals. New identity, expanded services, and a bold new digital presence.' },
]

export default function About() {
  const revRef = useRevealAll()

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="OUR STORY" title='About <em>Nascraft</em>' logo="/nascd nobg.png" />

      {/* MISSION */}
      <section className="section">
        <div className={`container ${styles.missionGrid}`}>
          <div>
            <span className="sec-tag reveal">MISSION</span>
            <h2 className="sec-h2 reveal d1" style={{ marginBottom: '20px' }}>We Don't Just Build <em>Websites.</em><br />We Build <em className="m">Businesses.</em></h2>
            <p className={`${styles.bodyText} reveal d2`}>Nascraft Digitals was born from a simple belief — every business, no matter the size, deserves a premium digital presence. We started as Cyber Monk Studioz in 2022 and have grown into a full-service digital agency that fuses creativity with technology.</p>
            <p className={`${styles.bodyText} reveal d3`}>From solo founders to growing brands, we've helped clients across India and globally build digital products that actually perform — sites that convert, brands that stick, and automations that save time.</p>
            <div className="reveal d4" style={{ marginTop: '32px' }}>
              <Link to="/contact" className="btn-p">START A PROJECT <FiArrowRight /></Link>
            </div>
          </div>
          <div className={styles.missionRight}>
            <div className={`${styles.missionCard} reveal d2`}>
              <span className={styles.missionIco}>🎯</span>
              <h3>Our Mission</h3>
              <p>To make premium digital work accessible to every ambitious business — delivering quality that competes at a global level.</p>
            </div>
            <div className={`${styles.missionCard} reveal d3`}>
              <span className={styles.missionIco}>🔭</span>
              <h3>Our Vision</h3>
              <p>To be the go-to digital partner for forward-thinking brands across South Asia and beyond, by 2027.</p>
            </div>
          </div>
        </div>
      </section>



      {/* VALUES */}
      <section className="section">
        <div className="container">
          <span className="sec-tag reveal">CORE VALUES</span>
          <h2 className="sec-h2 reveal d1">What Drives <em>Us</em></h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={`${styles.valueCard} card-base reveal d${i + 1}`}>
                <span className={styles.valIco}>{v.icon}</span>
                <h3 className={styles.valTitle}>{v.title}</h3>
                <p className={styles.valDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <span className="sec-tag reveal">JOURNEY</span>
          <h2 className="sec-h2 reveal d1">Our <em>Milestones</em></h2>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {timeline.map((t, i) => (
              <div key={i} className={`${styles.tlItem} ${i % 2 ? styles.right : ''} reveal d${(i % 3) + 1}`}>
                <div className={styles.tlDot} />
                <div className={styles.tlCard}>
                  <span className={styles.tlYear}>{t.year}</span>
                  <h3 className={styles.tlTitle}>{t.title}</h3>
                  <p className={styles.tlDesc}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <span className="sec-tag reveal">THE TEAM</span>
          <h2 className={`${styles.teamTitle} reveal d1`}>The <em>People</em> Behind the Work</h2>

          {/* Founders */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 className={`${styles.teamSubtitle} reveal`}>Founders</h3>
            <div className={styles.teamGrid}>
              {directors.map((m, i) => (
                <div key={i} className={`${styles.teamMemberCard} reveal d${i + 1}`}>
                  <div className={styles.memberImageWrapper}>
                    <img src={m.image} alt={m.name} className={styles.memberImage} />
                    <div className={styles.memberBio}>{m.bio}</div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h4 className={styles.memberName}>{m.name}</h4>
                    <span className={styles.memberRole}>{m.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEVELOPERS */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 className={`${styles.teamSubtitle} reveal`}>Developers</h3>
            <div className={styles.teamGrid}>
              {developers.map((m, i) => (
                <div key={i} className={`${styles.teamMemberCard} reveal d${i + 1}`}>
                  <div className={styles.memberImageWrapper}>
                    <img src={m.image} alt={m.name} className={styles.memberImage} />
                    <div className={styles.memberBio}>{m.bio}</div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h4 className={styles.memberName}>{m.name}</h4>
                    <span className={styles.memberRole}>{m.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EDITORS */}
          <div>
            <h3 className={`${styles.teamSubtitle} reveal`}>Editors</h3>
            <div className={styles.teamGrid}>
              {designUnit.map((m, i) => (
                <div key={i} className={`${styles.teamMemberCard} reveal d${i + 1}`}>
                  <div className={styles.memberImageWrapper}>
                    <img src={m.image} alt={m.name} className={styles.memberImage} />
                    <div className={styles.memberBio}>{m.bio}</div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h4 className={styles.memberName}>{m.name}</h4>
                    <span className={styles.memberRole}>{m.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={`${styles.ctaTitle} reveal`}>Want to Work With <em>Us?</em></h2>
          <p className={`${styles.ctaSub} reveal d1`}>We'd love to hear about your project.</p>
          <div className="reveal d2" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-p">GET IN TOUCH <FiArrowRight /></Link>
            <Link to="/booking" className="btn-outline">BOOK A FREE CALL</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
