import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import { portfolioItems, filterTabs } from '../data/index'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [displayed, setDisplayed] = useState(portfolioItems)
  const [animating, setAnimating] = useState(false)
  const revRef = useRevealAll()

  const handleFilter = (tab) => {
    if (tab === activeFilter) return
    setAnimating(true)
    setTimeout(() => {
      setActiveFilter(tab)
      setDisplayed(tab === 'All' ? portfolioItems : portfolioItems.filter(p => p.service === tab))
      setAnimating(false)
    }, 220)
  }

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="OUR WORK" title="Case <em>Studies</em>" accent="mag" />

      <section className="section">
        <div className="container">
          <span className="sec-tag reveal">FILTER BY SERVICE</span>

          {/* Filter bar */}
          <div className={styles.filters}>
            {filterTabs.map(tab => (
              <button
                key={tab}
                className={`${styles.filterBtn} ${activeFilter === tab ? styles.filterActive : ''}`}
                onClick={() => handleFilter(tab)}
              >
                {tab}
                {activeFilter === tab && <span className={styles.filterDot} />}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={`${styles.grid} ${animating ? styles.gridFade : ''}`}>
            {displayed.map((p, i) => (
              <Link
                to="/contact"
                key={p.id}
                className={`${styles.card} ${p.color === 'mag' ? styles.cardMag : ''}`}
                data-view
              >
                {/* Background watermark */}
                <div className={styles.cardWatermark}>
                  {p.service.split(' ')[0].toUpperCase()}
                </div>

                {/* Default state */}
                <div className={styles.cardDefault}>
                  <span className={styles.cardNum}>0{i + 1}</span>
                  <div className={styles.cardService}>{p.service.toUpperCase()}</div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <div className={styles.cardTags}>
                    {p.tags.map((t, j) => <span key={j} className={styles.tag}>{t}</span>)}
                  </div>
                  <div className={styles.cardResult}>{p.result}</div>
                </div>

                {/* Hover overlay */}
                <div className={styles.cardOverlay}>
                  <div className={styles.overlayTop}>
                    <span className={styles.overlayService}>{p.service}</span>
                    <FiArrowUpRight className={styles.overlayArrow} />
                  </div>
                  <h3 className={styles.overlayTitle}>{p.title}</h3>
                  <p className={styles.overlayDesc}>{p.desc}</p>
                  <div className={styles.overlayResult}>{p.result}</div>
                  <div className={styles.overlayTags}>
                    {p.tags.map((t, j) => <span key={j} className={styles.overlayTag}>{t}</span>)}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={styles.cardLine} />
              </Link>
            ))}

            {displayed.length === 0 && (
              <div className={styles.empty}>
                <span>🔍</span>
                <p>No projects in this category yet — <Link to="/contact">reach out</Link> to be the first!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className={`section ${styles.featSection}`}>
        <div className="container">
          <span className="sec-tag reveal">FEATURED PROJECT</span>
          <h2 className="sec-h2 reveal d1">A Closer <em>Look</em></h2>
          <div className={styles.featured}>
            <div className={styles.featLeft}>
              <div className={styles.featTag}>WEB + BRAND + MARKETING</div>
              <h3 className={styles.featTitle}>CreatorHub Full Launch</h3>
              <p className={styles.featDesc}>
                CreatorHub came to us as an idea on a napkin. We delivered a full brand identity, custom React website, social media strategy and WhatsApp automation — all in 3 weeks. The result: 5x social reach and 4.2x conversion improvement within 90 days of launch.
              </p>
              <div className={styles.featStats}>
                <div className={styles.featStat}>
                  <span className={styles.featNum}>5x</span>
                  <span className={styles.featStatL}>Social Reach</span>
                </div>
                <div className={styles.featStat}>
                  <span className={`${styles.featNum} ${styles.mag}`}>4.2x</span>
                  <span className={styles.featStatL}>Conversions</span>
                </div>
                <div className={styles.featStat}>
                  <span className={styles.featNum}>3wk</span>
                  <span className={styles.featStatL}>Delivery</span>
                </div>
              </div>
              <Link to="/contact" className="btn-p">START A PROJECT <FiArrowRight /></Link>
            </div>
            <div className={styles.featRight}>
              <div className={styles.featVisual}>
                <div className={styles.featGrid} />
                <div className={styles.featCenter}>CREATORHUB</div>
                <div className={styles.featBadge1}>BRAND ✓</div>
                <div className={styles.featBadge2}>WEB ✓</div>
                <div className={styles.featBadge3}>MARKETING ✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={`${styles.ctaTitle} reveal`}>Your Project Could Be<br /><em>Next.</em></h2>
          <p className={`${styles.ctaSub} reveal d1`}>Let's build something worth showing off.</p>
          <div className={`reveal d2 ${styles.ctaBtns}`}>
            <Link to="/contact" className="btn-p">START A PROJECT <FiArrowRight /></Link>
            <Link to="/booking" className="btn-outline">BOOK A FREE CALL</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
