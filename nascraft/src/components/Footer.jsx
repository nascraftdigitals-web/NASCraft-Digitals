import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'

const WHATSAPP = 'https://wa.me/919999999999'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <div className={styles.logo}>NASCRAFT<em>.</em></div>
              <div className={styles.tagline}>// WHERE CREATIVITY MEETS TECHNOLOGY</div>
            </div>
            <p className={styles.desc}>We engineer bold digital experiences for businesses that refuse to be ordinary.</p>
            <div className={styles.socials}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className={styles.soc} data-hover><FaWhatsapp /></a>
              <a href="#" className={styles.soc} data-hover><FaInstagram /></a>
              <a href="#" className={styles.soc} data-hover><FaLinkedinIn /></a>
              <a href="#" className={styles.soc} data-hover><FaTwitter /></a>
              <a href="#" className={styles.soc} data-hover><FaGithub /></a>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h4>SERVICES</h4>
              <Link to="/services">Web Development</Link>
              <Link to="/services">Branding & Identity</Link>
              <Link to="/services">Graphic Design</Link>
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
              <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp Us</a>
              <Link to="/contact">Contact Form</Link>
            </div>
          </div>
        </div>

        <div className={styles.bot}>
          <span className={styles.copy}>© 2026 NASCRAFT DIGITALS — ALL SYSTEMS OPERATIONAL</span>
          <span className={styles.copy}>FORMERLY CYBER MONK STUDIOZ</span>
        </div>
      </div>
    </footer>
  )
}
