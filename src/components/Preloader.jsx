import { useEffect, useState } from 'react'
import styles from './Preloader.module.css'

const LETTERS = 'NASCRAFT_'.split('')

export default function Preloader({ onDone }) {
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setGone(true)
      setTimeout(onDone, 900)
    }, 2200)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className={`${styles.pre} ${gone ? styles.gone : ''}`}>
      <div className={styles.word}>
        {LETTERS.map((ch, i) => (
          <span key={i} className={styles.letter} style={{ animationDelay: `${0.3 + i * 0.07}s` }}>
            {ch}
          </span>
        ))}
      </div>
      <div className={styles.sub}>// INITIALIZING EXPERIENCE</div>
      <div className={styles.bar}><div className={styles.fill} /></div>
    </div>
  )
}
