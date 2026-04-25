import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { useRevealAll } from '../hooks/useReveal'
import { values, STATS } from '../data/index'
import { StatCounter } from '../hooks/useStatCounter.jsx'
import styles from './About.module.css'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%'

const timeline = [
  { year: '2022', title: 'The Beginning', desc: 'Founded as Cyber Monk Studioz — two passionate creators building websites and designs from scratch.', color: 'teal' },
  { year: '2023', title: 'First 10 Clients', desc: 'Expanded to branding and digital marketing. Delivered 10+ projects across retail, food and tech sectors.', color: 'mag' },
  { year: '2025', title: '20 Projects Milestone', desc: 'Hit 20+ delivered projects. Expanded team. Launched startup support vertical for founders and hackathon teams.', color: 'teal' },
  { year: '2026', title: 'Nascraft Digitals', desc: 'Rebranded as Nascraft Digitals. New identity, expanded services, and a bold new digital presence.', color: 'mag' },
]

const founders = [
  { name: 'Srihariharan', role: 'Founder', image: '/photos/hari.png', bio: 'Leading concept, design, and visual storytelling with sharp focus on clarity, emotion, and brand impact.' },
  { name: 'Aaruhya Kumar', role: 'Co-Founder', image: '/photos/aaruhya.webp', bio: 'Overseeing visual design, aesthetics, and execution with strong focus on detail, balance, and consistency.' },
  { name: 'Nishanth Ravikumar', role: 'Co-Founder', image: '/photos/nishanth.jpg', bio: 'Driving strategy, client relationships, and growth while aligning creative vision with business goals.' },
]

function useScramble(text, delay = 0) {
  const [display, setDisplay] = useState(text)
  useEffect(() => {
    let iter = 0, interval
    const t = setTimeout(() => {
      interval = setInterval(() => {
        setDisplay(text.split('').map((_, i) => i < iter ? text[i] : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]).join(''))
        if (iter >= text.length) clearInterval(interval)
        iter += 0.4
      }, 35)
    }, delay)
    return () => { clearTimeout(t); clearInterval(interval) }
  }, [text, delay])
  return display
}

function ParticleBg() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const TEAL = '#00F5D4', MAG = '#FF00C8'
    let animId, mouseX = 9999, mouseY = 9999

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    const onMouse = e => { const r = canvas.getBoundingClientRect(); mouseX = e.clientX - r.left; mouseY = e.clientY - r.top }
    window.addEventListener('mousemove', onMouse)

    class P {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height
        this.r = Math.random() * 1.5 + 0.3; this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3
        this.alpha = Math.random() * 0.5 + 0.1; this.c = Math.random() < 0.7 ? TEAL : MAG
      }
      update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset() }
      draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = this.c; ctx.globalAlpha = this.alpha; ctx.fill() }
    }

    const particles = Array.from({ length: 100 }, () => new P())

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, d = Math.sqrt(dx*dx+dy*dy)
          if (d < 90) { ctx.globalAlpha = (1-d/90)*0.08; ctx.strokeStyle = TEAL; ctx.lineWidth = 0.5; ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke() }
        }
        const dx = particles[i].x - mouseX, dy = particles[i].y - mouseY, d = Math.sqrt(dx*dx+dy*dy)
        if (d < 140) { ctx.globalAlpha = (1-d/140)*0.2; ctx.strokeStyle = TEAL; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(mouseX, mouseY); ctx.stroke() }
      }
      ctx.globalAlpha = 1
      particles.forEach(p => { p.update(); p.draw() })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(loop)
    }
    loop()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMouse) }
  }, [])
  return <canvas ref={canvasRef} className={styles.bgCanvas} />
}

export default function About() {
  const revRef = useRevealAll()
  const [lit, setLit] = useState(false)
  const line1 = useScramble('WE BUILD', 500)
  const line2 = useScramble('DIGITAL', 700)
  const line3 = useScramble('EXCELLENCE.', 900)

  useEffect(() => {
    const t = setTimeout(() => setLit(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <main ref={revRef}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <ParticleBg />
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />

        <div className={styles.heroInner}>
          <div className={styles.heroLabel}>
            <span className={styles.labelDot} />
            OUR STORY — EST. 2022
          </div>

          <h1 className={styles.headline}>
            <span className={`${styles.hRow} ${lit ? styles.hLit : ''}`} style={{ transitionDelay: '0.4s' }}>{line1}</span>
            <span className={`${styles.hRow} ${styles.hTeal} ${lit ? styles.hLit : ''}`} style={{ transitionDelay: '0.65s' }}>{line2}</span>
            <span className={`${styles.hRow} ${lit ? styles.hLit : ''}`} style={{ transitionDelay: '0.9s' }}>{line3}</span>
          </h1>

          <p className={`${styles.heroPara} ${lit ? styles.paraVis : ''}`}>
            From a two-person studio to a full-service digital agency — this is the story of Nascraft Digitals.
          </p>

          <div className={`${styles.heroScroll} ${lit ? styles.paraVis : ''}`}>
            <div className={styles.scrollTrack}><div className={styles.scrollFill} /></div>
            <span>SCROLL</span>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionLeft}>
              <span className="sec-tag reveal">WHO WE ARE</span>
              <h2 className={`${styles.bigStatement} reveal d1`}>
                We don't just build<br />
                <em>websites.</em><br />
                We build<br />
                <em className="m">businesses.</em>
              </h2>
            </div>
            <div className={styles.missionRight}>
              <p className={`${styles.bodyText} reveal d1`}>
                Nascraft Digitals was born from a simple belief — every business, no matter the size, deserves a premium digital presence. We started as Cyber Monk Studioz in 2022 and have grown into a full-service digital agency that fuses creativity with technology.
              </p>
              <p className={`${styles.bodyText} reveal d2`}>
                From solo founders to growing brands, we've helped clients across India and globally build digital products that actually perform — sites that convert, brands that stick, and automations that save time.
              </p>
              <div className={`${styles.missionCards} reveal d3`}>
                <div className={styles.missionCard}>
                  <span className={styles.missionIco}>🎯</span>
                  <h3>Our Mission</h3>
                  <p>To make premium digital work accessible to every ambitious business — delivering quality that competes at a global level.</p>
                </div>
                <div className={styles.missionCard}>
                  <span className={styles.missionIco}>🔭</span>
                  <h3>Our Vision</h3>
                  <p>To be the go-to digital partner for forward-thinking brands across South Asia and beyond, by 2027.</p>
                </div>
              </div>
              <Link to="/contact" className="btn-p reveal d4">START A PROJECT <FiArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={styles.statsBand}>
        {[...STATS, ...STATS].map((s, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statN}><StatCounter target={s.value} suffix={s.suffix} /></span>
            <span className={styles.statL}>{s.label}</span>
            <span className={styles.statSep} />
          </div>
        ))}
      </div>

      {/* ── VALUES ── */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <span className="sec-tag reveal">CORE VALUES</span>
          <h2 className="sec-h2 reveal d1">What Drives <em>Us</em></h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={`${styles.valueCard} reveal d${i + 1}`}>
                <span className={styles.valNum}>0{i + 1}</span>
                <span className={styles.valIco}>{v.icon}</span>
                <h3 className={styles.valTitle}>{v.title}</h3>
                <p className={styles.valDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <span className="sec-tag reveal">OUR JOURNEY</span>
          <h2 className="sec-h2 reveal d1">Built Over <em>Time</em></h2>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {timeline.map((t, i) => (
              <div key={i} className={`${styles.tlItem} ${i % 2 ? styles.tlRight : ''} reveal d${(i % 3) + 1}`}>
                <div className={`${styles.tlDot} ${t.color === 'mag' ? styles.tlDotMag : ''}`} />
                <div className={styles.tlCard}>
                  <span className={`${styles.tlYear} ${t.color === 'mag' ? styles.tlYearMag : ''}`}>{t.year}</span>
                  <h3 className={styles.tlTitle}>{t.title}</h3>
                  <p className={styles.tlDesc}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <span className="sec-tag reveal">THE PEOPLE</span>
          <h2 className="sec-h2 reveal d1">Faces Behind the <em>Work</em></h2>
          <div className={styles.teamGrid}>
            {founders.map((m, i) => (
              <div key={i} className={`${styles.memberCard} reveal d${i + 1}`}>
                <div className={styles.memberImgWrap}>
                  <img src={m.image} alt={m.name} className={styles.memberImg} />
                  <div className={styles.memberOverlay}>
                    <p className={styles.memberBio}>{m.bio}</p>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>{m.name}</h4>
                  <span className={styles.memberRole}>{m.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.teamBadge} reveal`}>
            <span className={styles.badgeIcon}>⚡</span>
            <span className={styles.badgeText}>10+ Supportive Team Members</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaOrb} />
        <div className={styles.ctaGrid} />
        <div className="container">
          <div className={styles.ctaInner}>
            <span className={styles.ctaTag}>READY TO START?</span>
            <h2 className={styles.ctaTitle}>Want to Work<br /><em>With Us?</em></h2>
            <p className={styles.ctaSub}>We'd love to hear about your project. Let's build something brilliant.</p>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn-p">GET IN TOUCH <FiArrowRight /></Link>
              <Link to="/booking" className="btn-outline">BOOK A FREE CALL</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
