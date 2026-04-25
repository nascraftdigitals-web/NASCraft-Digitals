import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import Ticker from '../components/Ticker'
import { useRevealAll } from '../hooks/useReveal'
import { StatCounter } from '../hooks/useStatCounter.jsx'
import { serviceCategories, STATS, values, portfolioItems } from '../data/index'
import styles from './Home.module.css'

const SWITCH_WORDS = ['STARTUPS', 'E-COMMERCE', 'RESTAURANTS', 'CREATORS', 'CLINICS', 'AGENCIES', 'FOUNDERS']
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%'

function useScramble(finalText, delay = 0) {
  const [display, setDisplay] = useState(finalText)
  useEffect(() => {
    let iter = 0
    let interval
    const t = setTimeout(() => {
      interval = setInterval(() => {
        setDisplay(
          finalText.split('').map((_, i) => {
            if (i < iter) return finalText[i]
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          }).join('')
        )
        if (iter >= finalText.length) clearInterval(interval)
        iter += 0.4
      }, 35)
    }, delay)
    return () => { clearTimeout(t); clearInterval(interval) }
  }, [finalText, delay])
  return display
}

function ParticleBg() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const TEAL = '#00F5D4'
    const MAG = '#FF00C8'
    let animId
    let mouseX = 9999, mouseY = 9999

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect()
      mouseX = e.clientX - r.left
      mouseY = e.clientY - r.top
    }
    window.addEventListener('mousemove', onMouse)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.r = Math.random() * 1.5 + 0.3
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.alpha = Math.random() * 0.5 + 0.1
        this.c = Math.random() < 0.7 ? TEAL : MAG
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.c
        ctx.globalAlpha = this.alpha
        ctx.fill()
      }
    }

    const particles = Array.from({ length: 120 }, () => new Particle())

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            ctx.globalAlpha = (1 - d / 90) * 0.08
            ctx.strokeStyle = TEAL
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
        const dx = particles[i].x - mouseX
        const dy = particles[i].y - mouseY
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 140) {
          ctx.globalAlpha = (1 - d / 140) * 0.22
          ctx.strokeStyle = TEAL
          ctx.lineWidth = 0.8
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouseX, mouseY)
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 1
      particles.forEach(p => { p.update(); p.draw() })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.bgCanvas} />
}

function MorphBlob() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const TEAL = '#00F5D4'
    const MAG = '#FF00C8'
    let animId
    let t = 0
    const pts = 8

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const loop = () => {
      t += 0.012
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const base = Math.min(cx, cy) * 0.72
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // rings
      for (let ring = 3; ring >= 1; ring--) {
        const scale = ring / 3
        ctx.beginPath()
        for (let i = 0; i <= pts * 6; i++) {
          const angle = (i / pts) * Math.PI * 2 * (1 / 6) + t * 0.5 * (ring % 2 === 0 ? 1 : -1)
          const noise = Math.sin(i * 1.1 + t * (ring * 0.4)) * 0.15 + Math.sin(i * 2.3 - t * 0.7) * 0.08
          const r = base * scale * (1 + noise)
          const px = cx + Math.cos(angle) * r
          const py = cy + Math.sin(angle) * r
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.strokeStyle = ring === 1 ? MAG : TEAL
        ctx.globalAlpha = ring === 3 ? 0.3 : ring === 2 ? 0.175 : 0.1
        ctx.lineWidth = ring === 1 ? 1 : 1.5
        ctx.stroke()
      }

      // filled blob
      ctx.beginPath()
      for (let i = 0; i <= pts * 6; i++) {
        const angle = (i / pts) * Math.PI * 2 * (1 / 6) + t * 0.3
        const noise = Math.sin(i * 1.4 + t * 0.9) * 0.18 + Math.cos(i * 0.7 - t * 0.5) * 0.1
        const r = base * (0.6 + noise * 0.6)
        const px = cx + Math.cos(angle) * r
        const py = cy + Math.sin(angle) * r
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()
      const g = ctx.createLinearGradient(cx - base, cy - base, cx + base, cy + base)
      g.addColorStop(0, 'rgba(0,245,212,0.12)')
      g.addColorStop(1, 'rgba(255,0,200,0.08)')
      ctx.fillStyle = g
      ctx.globalAlpha = 1
      ctx.fill()
      ctx.strokeStyle = TEAL
      ctx.globalAlpha = 0.5
      ctx.lineWidth = 1
      ctx.stroke()

      // orbiting dots
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2 + t * 0.4
        const drift = Math.sin(i * 2.1 + t) * 0.15
        const dr = base * (0.85 + drift)
        ctx.beginPath()
        ctx.arc(cx + Math.cos(a) * dr, cy + Math.sin(a) * dr, 2, 0, Math.PI * 2)
        ctx.fillStyle = i % 3 === 0 ? MAG : TEAL
        ctx.globalAlpha = 0.7
        ctx.fill()
      }

      // cross spokes
      ;[0, Math.PI / 2, Math.PI, Math.PI * 1.5].forEach((a, i) => {
        const r = base * 0.28
        ctx.beginPath()
        ctx.moveTo(cx + Math.cos(a + t * 0.2) * r * 0.4, cy + Math.sin(a + t * 0.2) * r * 0.4)
        ctx.lineTo(cx + Math.cos(a + t * 0.2) * r, cy + Math.sin(a + t * 0.2) * r)
        ctx.strokeStyle = i % 2 === 0 ? TEAL : MAG
        ctx.globalAlpha = 0.25
        ctx.lineWidth = 1
        ctx.stroke()
      })

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={styles.visBox}>
      <canvas ref={canvasRef} className={styles.morphCanvas} />
      <span className={`${styles.visLabel} ${styles.vlTl}`}>◈ CRAFT</span>
      <span className={`${styles.visLabel} ${styles.vlBr}`}>DIGITAL ◈</span>
    </div>
  )
}

export default function Home() {
  const [swIdx, setSwIdx] = useState(0)
  const [swFade, setSwFade] = useState(true)
  const [litLines, setLitLines] = useState([])
  const [expandedCategory, setExpandedCategory] = useState(null)
  const revRef = useRevealAll()

  const word1 = useScramble('NASCRAFT', 300)
  const word2 = useScramble('DIGITALS', 500)

  // Staggered line reveal
  useEffect(() => {
    const delays = [400, 700, 1000]
    const timers = delays.map((d, i) => setTimeout(() => setLitLines(prev => [...prev, i]), d))
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setSwFade(false)
      setTimeout(() => { setSwIdx(i => (i + 1) % SWITCH_WORDS.length); setSwFade(true) }, 320)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  const trackRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e) => {
    drag.current = { active: true, startX: e.pageX - trackRef.current.offsetLeft, scrollLeft: trackRef.current.scrollLeft }
    trackRef.current.style.cursor = 'grabbing'
  }
  const onMouseMove = (e) => {
    if (!drag.current.active) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.5
  }
  const onMouseUp = () => {
    drag.current.active = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  const toggleCategory = (i) => setExpandedCategory(expandedCategory === i ? null : i)

  return (
    <main className={styles.page} ref={revRef}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <ParticleBg />
        <div className={styles.lineDeco} />

        <div className={styles.heroLayout}>

          {/* LEFT */}
          <div className={styles.heroLeft}>
            <div className={styles.heroLabel}>
              <span className={styles.labelDot} />
              DIGITAL INNOVATION STUDIO — EST. 2022
            </div>

            <h1 className={styles.headline}>
              <span className={styles.h1Row}>
                <span className={`${styles.h1Inner} ${litLines.includes(0) ? styles.h1Lit : ''}`}>
                  {word1}
                </span>
              </span>
              <span className={styles.h1Row}>
                <span className={`${styles.h1Inner} ${litLines.includes(1) ? styles.h1Lit : ''}`}>
                  {word2}
                </span>
              </span>
              <span className={styles.h1Row}>
                <span className={`${styles.h1Inner} ${styles.h1Teal} ${litLines.includes(2) ? styles.h1Lit : ''}`}>
                  WE BUILD.
                </span>
              </span>
            </h1>

            <div className={`${styles.subline} ${litLines.includes(2) ? styles.subVisible : ''}`}>
              <span className={styles.subText}>We craft digital experiences for</span>
              <span className={`${styles.switchWord} ${swFade ? styles.swIn : styles.swOut}`}>
                {SWITCH_WORDS[swIdx]}
              </span>
            </div>

            <p className={`${styles.heroDesc} ${litLines.includes(2) ? styles.descVisible : ''}`}>
              Websites, brands and automations — built from scratch, obsessed with quality, designed to grow your business.
            </p>

            <div className={`${styles.heroCtas} ${litLines.includes(2) ? styles.ctasVisible : ''}`}>
              <Link to="/services" className="btn-p">
                VIEW SERVICES <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn-outline m">
                LET'S CONNECT <FiArrowUpRight />
              </Link>
            </div>

            {/* Stats */}
            <div className={`${styles.statsRow} ${litLines.includes(2) ? styles.statsVisible : ''}`}>
              {STATS.map((s, i) => (
                <div key={i} className={styles.statItem}>
                  <span className={styles.statNum}><StatCounter target={s.value} suffix={s.suffix} /></span>
                  <span className={styles.statLabel}>{s.label}</span>
                  {i < STATS.length - 1 && <span className={styles.statDivider} />}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — morph blob */}
          <div className={styles.heroRight}>
            <MorphBlob />
          </div>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollTrack}><div className={styles.scrollFill} /></div>
          <span>SCROLL</span>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── SERVICES ── */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="sec-tag reveal">WHAT WE DO</span>
              <h2 className="sec-h2 reveal d1">Our <em>Services</em></h2>
            </div>
            <Link to="/services" className={`${styles.sectionLink} reveal d2`}>
              VIEW ALL <FiArrowUpRight />
            </Link>
          </div>

          <div className={styles.servicesList}>
            {serviceCategories.map((cat, catIdx) => {
              const isOpen = expandedCategory === catIdx
              return (
                <div key={catIdx} className={`${styles.serviceRow} reveal`}>
                  <button
                    className={`${styles.serviceRowBtn} ${isOpen ? styles.serviceRowOpen : ''}`}
                    onClick={() => toggleCategory(catIdx)}
                  >
                    <span className={styles.serviceRowNum}>0{catIdx + 1}</span>
                    <span className={styles.serviceRowIcon}>{cat.icon}</span>
                    <span className={styles.serviceRowName}>{cat.category}</span>
                    <span className={styles.serviceRowCount}>{cat.services.length} services</span>
                    <span className={styles.serviceRowArrow}>
                      <FiArrowRight className={`${styles.arrowIcon} ${isOpen ? styles.arrowDown : ''}`} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.serviceDropdown}>
                      {cat.services.map((s) => (
                        <Link to="/services" key={s.id} className={styles.serviceItem}>
                          <span className={styles.serviceItemIcon}>{s.icon}</span>
                          <div className={styles.serviceItemBody}>
                            <span className={styles.serviceItemTitle}>{s.title}</span>
                            <span className={styles.serviceItemDesc}>{s.desc.substring(0, 72)}…</span>
                          </div>
                          <FiArrowUpRight className={styles.serviceItemArrow} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className={`section ${styles.workSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="sec-tag reveal">SELECTED WORK</span>
              <h2 className="sec-h2 reveal d1">What We've <em>Built</em></h2>
            </div>
            <Link to="/portfolio" className={`${styles.sectionLink} reveal d2`}>
              ALL PROJECTS <FiArrowUpRight />
            </Link>
          </div>
        </div>

        {/* Drag scroll track */}
        <div className={styles.workTrackWrap} data-drag>
          <div className={styles.workTrack} ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {portfolioItems.map((p, i) => (
              <Link to="/portfolio" key={p.id} className={styles.workCard} data-view>
                <div className={`${styles.workCardTop} ${p.color === 'mag' ? styles.workCardMag : ''}`}>
                  <span className={styles.workCardNum}>0{i + 1}</span>
                  <span className={styles.workCardResult}>{p.result}</span>
                </div>
                <div className={styles.workCardBody}>
                  <div className={styles.workCardMeta}>{p.service}</div>
                  <h3 className={styles.workCardTitle}>{p.title}</h3>
                  <p className={styles.workCardDesc}>{p.desc}</p>
                  <div className={styles.workCardTags}>
                    {p.tags.map(t => <span key={t} className={styles.workTag}>{t}</span>)}
                  </div>
                </div>
                <div className={styles.workCardArrow}><FiArrowUpRight /></div>
              </Link>
            ))}
          </div>
          <div className={styles.workFadeL} />
          <div className={styles.workFadeR} />
        </div>

        <div className="container">
          <div className={styles.dragHint}>
            <span className={styles.dragLine} />
            <span className={styles.dragText}>DRAG TO EXPLORE</span>
            <span className={styles.dragLine} />
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <span className="sec-tag reveal">WHY NASCRAFT</span>
              <h2 className={`sec-h2 reveal d1 ${styles.whyHeadline}`}>
                Built<br /><em>Different.</em>
              </h2>
              <p className={`${styles.whyDesc} reveal d2`}>
                We're not a template shop. Every project is crafted from scratch with obsessive attention to detail, speed, and results.
              </p>
              <Link to="/about" className={`btn-outline reveal d3 ${styles.whyBtn}`}>
                ABOUT US <FiArrowRight />
              </Link>
            </div>

            <div className={styles.whyRight}>
              {values.map((v, i) => (
                <div key={i} className={`${styles.whyCard} reveal d${i + 1}`}>
                  <span className={styles.whyCardNum}>0{i + 1}</span>
                  <div className={styles.whyCardBody}>
                    <span className={styles.whyCardIcon}>{v.icon}</span>
                    <h3 className={styles.whyCardTitle}>{v.title}</h3>
                    <p className={styles.whyCardDesc}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaGrid} />
        <div className={styles.ctaOrb} />
        <div className="container">
          <div className={styles.ctaInner}>
            <span className={styles.ctaTag}>READY TO START?</span>
            <h2 className={styles.ctaTitle}>
              Let's Build Something<br /><em>Brilliant.</em>
            </h2>
            <p className={styles.ctaSub}>We respond within 24 hours. No fluff, just results.</p>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn-p">
                START A PROJECT <FiArrowRight />
              </Link>
              <Link to="/booking" className="btn-outline">
                BOOK A FREE CALL
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
