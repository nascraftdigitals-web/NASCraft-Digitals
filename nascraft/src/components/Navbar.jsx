import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/process', label: 'Process' },
  { to: '/booking', label: 'Book Now' },
  { to: '/forum', label: 'Forum' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <span className={styles.gem} />
            NASCRAFT<em>.</em>
          </Link>

          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={`${styles.link} ${pathname === l.to ? styles.active : ''}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/contact" className={`btn-outline ${styles.ctaBtn}`}>[ HIRE US ]</Link>

          <button className={styles.ham} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <Link key={l.to} to={l.to} className={`${styles.mobileLink} ${pathname === l.to ? styles.active : ''}`}>
            {l.label}
          </Link>
        ))}
        <Link to="/contact" className={`btn-p ${styles.mobileCta}`}>[ HIRE US ]</Link>
      </div>
    </>
  )
}
