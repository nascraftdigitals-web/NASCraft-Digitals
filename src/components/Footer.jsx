import { Link } from 'react-router-dom'
import { FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'

const WHATSAPP = 'https://wa.me/916374316014'
const PHONE_NUMBERS = [
  { display: '+91 6374 316 014', link: 'https://wa.me/916374316014' },
  { display: '+91 9344 531 196', link: 'https://wa.me/919344531196' },
  { display: '+91 9962 475 256', link: 'https://wa.me/919962475256' }
]
const SOCIALS = {
  instagram: 'https://www.instagram.com/nascraftdigitals____/',
  github:    'https://github.com/nascraftdigitals-web',
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={`${styles.top} flex flex-col md:flex-row justify-between gap-10 flex-wrap mb-12`}>
          <div className={styles.brand}>
            <div className={styles.logo}>NASCRAFT<em>.</em></div>
            <div className={styles.tagline}>// WHERE CREATIVITY MEETS TECHNOLOGY</div>
            <p className={styles.desc}>We engineer bold digital experiences for businesses that refuse to be ordinary.</p>
            <div className={styles.socials}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className={styles.soc} data-hover aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className={styles.soc} data-hover aria-label="Instagram"><FaInstagram /></a>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" className={styles.soc} data-hover aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>

          <div className={`${styles.cols} flex flex-col sm:flex-row gap-8 flex-wrap`}>
            <div className={styles.col}>
              <h4>SERVICES</h4>
              <Link to="/services">Web Development</Link>
              <Link to="/services">Branding & Identity</Link>
              <Link to="/services">Digital Marketing</Link>
            </div>
            <div className={styles.col}>
              <h4>COMPANY</h4>
              <Link to="/about">About Us</Link>
              <Link to="/portfolio">Our Work</Link>
              <Link to="/process">Process</Link>
              <Link to="/booking">Book a Call</Link>
              <Link to="/forum">Forum</Link>
            </div>
            <div className={styles.col}>
              <h4>CONTACT</h4>
              <a href="mailto:nascraftdigitals@gmail.com">nascraftdigitals@gmail.com</a>
              {PHONE_NUMBERS.map((phone, idx) => (
                <a key={idx} href={phone.link} target="_blank" rel="noreferrer">{phone.display}</a>
              ))}
              <Link to="/contact">Contact Form</Link>
            </div>
          </div>
        </div>

        <div className={`${styles.bot} flex flex-col sm:flex-row justify-between items-center gap-2`}>
          <span className={styles.copy}>© 2026 NASCRAFT DIGITALS — ALL SYSTEMS OPERATIONAL</span>
          <span className={styles.copy} style={{ color: '#FFD700' }}>FORMERLY CYBER MONK STUDIOZ</span>
        </div>
      </div>
    </footer>
  )
}
