import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} />
      <div className={styles.inner}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page Not <em>Found.</em></h1>
        <p className={styles.sub}>This URL doesn't exist or was moved. Let's get you back on track.</p>
        <div className={styles.btns}>
          <Link to="/" className="btn-p">GO HOME <FiArrowRight /></Link>
          <Link to="/contact" className="btn-outline">CONTACT US</Link>
        </div>
      </div>
    </main>
  )
}
