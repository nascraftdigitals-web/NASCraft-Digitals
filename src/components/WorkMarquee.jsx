import styles from './WorkMarquee.module.css'

const ROW1 = [
  { name: 'StartupX Landing Page', type: 'Web Dev' },
  { name: 'RetailMax Rebrand', type: 'Branding' },
  { name: 'CreatorHub Platform', type: 'UI/UX' },
  { name: 'TastyBite Restaurant', type: 'Marketing' },
  { name: 'ClinicAI Chatbot', type: 'Automation' },
  { name: 'HackFest 2025 Winner', type: 'Startup' },
]

const ROW2 = [
  { name: 'Vikas Associates', type: 'Branding' },
  { name: 'BrandForge Identity', type: 'Branding' },
  { name: 'MedBook App', type: 'Mobile Dev' },
  { name: 'FoodRush Campaign', type: 'Meta Ads' },
  { name: 'NexGen Portfolio', type: 'Web Dev' },
  { name: 'PulseAI Dashboard', type: 'UI/UX' },
]

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className={`${styles.row} ${reverse ? styles.rowReverse : ''}`}>
      <div className={`${styles.track} ${reverse ? styles.trackReverse : ''}`}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemType}>{item.type}</span>
            <span className={styles.itemSep}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function WorkMarquee() {
  return (
    <div className={styles.wrap}>
      <div className={styles.label}>
        <span className={styles.labelLine} />
        <span className={styles.labelText}>// SELECTED WORK</span>
        <span className={styles.labelLine} />
      </div>
      <MarqueeRow items={ROW1} reverse={false} />
      <MarqueeRow items={ROW2} reverse={true} />
    </div>
  )
}
