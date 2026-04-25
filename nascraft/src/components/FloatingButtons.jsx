import { useNavigate } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './FloatingButtons.module.css'

const WHATSAPP = 'https://wa.me/919999999999?text=Hi%20Nascraft!%20I%27d%20like%20to%20discuss%20a%20project.'

export function AvailBadge() {
  const nav = useNavigate()
  return (
    <button className={styles.badge} onClick={() => nav('/contact')} data-hover>
      <span className={styles.dot} />
      AVAILABLE FOR PROJECTS — 2026
    </button>
  )
}

export function WhatsAppBtn() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" className={styles.wa} aria-label="Chat on WhatsApp" data-hover>
      <FaWhatsapp size={22} />
    </a>
  )
}
