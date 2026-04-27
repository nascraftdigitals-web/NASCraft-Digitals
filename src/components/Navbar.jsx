import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/services',  label: 'Services' },
  { to: '/portfolio', label: 'Work' },
  { to: '/process',   label: 'Process' },
  { to: '/blog',      label: 'Blog' },
  { to: '/forum',     label: 'Forum' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [hidden, setHidden]       = useState(false)
  const [open, setOpen]           = useState(false)
  const lastY = useRef(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > 120 && y > lastY.current)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${hidden && !open ? styles.hidden : ''}`}>
        <div className={styles.inner}>

          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <span className={styles.gem} />
            <span className={styles.logoText}>
            <span className={styles.logoGlitch} data-text="NASCRAFT">NASCRAFT</span><em>.</em>
          </span>
          </Link>

          {/* Desktop links */}
          <ul className={styles.links}>
            {NAV_LINKS.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`${styles.link} ${pathname === l.to ? styles.active : ''}`}
                >
                  {l.label}
                  {pathname === l.to && <span className={styles.activeDot} />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link to="/contact" className={styles.ctaBtn}>
            HIRE US <FiArrowUpRight size={13} />
          </Link>

          {/* Hamburger */}
          <button
            className={`${styles.ham} ${open ? styles.hamOpen : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamLine} />
            <span className={styles.hamLine} />
            <span className={styles.hamLine} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}>
        <div className={styles.overlayInner}>
          <nav className={styles.overlayLinks}>
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className={`${styles.overlayLink} ${pathname === l.to ? styles.overlayActive : ''}`}
                style={{ transitionDelay: open ? `${i * 60 + 80}ms` : '0ms' }}
              >
                <span className={styles.overlayNum}>0{i + 1}</span>
                {l.label}
                <FiArrowUpRight className={styles.overlayArrow} />
              </Link>
            ))}
          </nav>

          <div
            className={styles.overlayCta}
            style={{ transitionDelay: open ? `${NAV_LINKS.length * 60 + 100}ms` : '0ms' }}
          >
            <Link to="/contact" className={`btn-p ${styles.overlayCtaBtn}`}>
              HIRE US <FiArrowUpRight />
            </Link>
            <Link to="/booking" className={`btn-outline ${styles.overlayCtaBtn}`}>
              BOOK A FREE CALL
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
