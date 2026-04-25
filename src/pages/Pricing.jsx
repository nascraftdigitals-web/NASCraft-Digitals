import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import { pricingData } from '../data/pricing'
import styles from './Pricing.module.css'

export default function Pricing() {
  const revRef = useRevealAll()

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="PRICING" title="Our <em>Pricing</em>" accent="teal" />

      <div className="container" style={{paddingTop:'60px', paddingBottom:'80px'}}>
        
        {/* WEB APP */}
        <section className={`${styles.section} reveal`}>
          <h2 className={styles.sectionTitle}>Web App</h2>
          <div className={styles.packMeta}>
            <span className={styles.badge}>Starter: 3–5 pg (Single Page)</span>
            <span className={styles.badge}>Business: 8–10 pg (Multi Page)</span>
            <span className={styles.badge}>Premium: Custom + Multi Pg (up to 20pg) + Billing App</span>
          </div>
          <div className={styles.packsGrid}>
            {pricingData.webApp.map((pack, i) => (
              <div key={i} className={`${styles.packCard} ${pack.popular ? styles.popular : ''}`}>
                {pack.popular && <span className={styles.popularBadge}>POPULAR</span>}
                <div className={styles.packName}>{pack.name}</div>
                <div className={styles.packPrice}>{pack.price}</div>
                <div className={styles.packNote}>{pack.note}</div>
              </div>
            ))}
          </div>
          <div className={styles.addon}>
            <span className={styles.addonLabel}>⚡ Payment Gateway Add-on</span>
            <span className={styles.addonPrice}>+ ₹4,999</span>
          </div>
        </section>

        {/* MOBILE APP */}
        <section className={`${styles.section} reveal d1`}>
          <h2 className={styles.sectionTitle}>Mobile App</h2>
          <div className={styles.packsGrid}>
            {pricingData.mobileApp.map((pack, i) => (
              <div key={i} className={`${styles.packCard} ${pack.popular ? styles.popular : ''}`}>
                {pack.popular && <span className={styles.popularBadge}>POPULAR</span>}
                <div className={styles.packName}>{pack.name}</div>
                <div className={styles.platformRow}>
                  <span className={styles.platformChip}>Android</span>
                  <span className={`${styles.platformChip} ${styles.ios}`}>iOS</span>
                </div>
                <div className={styles.packPrice} style={{marginTop:'12px'}}>{pack.price}</div>
                <div className={styles.packNote} style={{color:'var(--mag)',fontSize:'13px'}}>{pack.iosPrice}</div>
              </div>
            ))}
          </div>
          <div className={styles.addon}>
            <span className={styles.addonLabel}>⚡ Payment Gateway Add-on</span>
            <span className={styles.addonPrice}>+ ₹5,999</span>
          </div>
        </section>

        {/* GRAPHIC DESIGN */}
        <section className={`${styles.section} reveal d2`}>
          <h2 className={styles.sectionTitle}>Graphic Designing</h2>
          <div className={styles.itemsGrid}>
            {pricingData.graphicDesign.map((item, i) => (
              <div key={i} className={styles.itemCard}>
                <div>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemSub}>{item.sub}</div>
                </div>
                <div className={styles.itemPrice}>{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO EDITING */}
        <section className={`${styles.section} reveal d3`}>
          <h2 className={styles.sectionTitle}>Video Editing</h2>
          <div className={styles.serviceList}>
            {pricingData.videoEditing.map((item, i) => (
              <div key={i} className={styles.serviceRow}>
                <div>
                  <div className={styles.serviceName}>{item.name}</div>
                  {item.detail && <div className={styles.serviceDetail}>{item.detail}</div>}
                </div>
                <div className={styles.servicePrice}>{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PHOTO EDITING */}
        <section className={`${styles.section} reveal d4`}>
          <h2 className={styles.sectionTitle}>Photo Editing</h2>
          <div className={styles.serviceList}>
            {pricingData.photoEditing.map((item, i) => (
              <div key={i} className={styles.serviceRow}>
                <div>
                  <div className={styles.serviceName}>{item.name}</div>
                  {item.detail && <div className={styles.serviceDetail}>{item.detail}</div>}
                </div>
                <div className={styles.servicePrice}>{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SHOOT */}
        <section className={`${styles.section} reveal d5`}>
          <h2 className={styles.sectionTitle}>Shoot</h2>
          <div className={styles.serviceList}>
            {pricingData.shoot.map((item, i) => (
              <div key={i} className={styles.serviceRow}>
                <div>
                  <div className={styles.serviceName}>{item.name}</div>
                </div>
                <div className={styles.servicePrice}>
                  {item.price}
                  <span style={{fontSize:'12px',color:'var(--muted)',fontFamily:'var(--ff-body)',fontWeight:'400'}}>/hr</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMBOS */}
        <section className={`${styles.section} reveal d6`}>
          <h2 className={styles.sectionTitle}>Combo Packages</h2>
          <div className={styles.comboList}>
            {pricingData.combos.map((combo, i) => (
              <div key={i} className={styles.comboCard}>
                <div>
                  <div className={styles.comboName}>{combo.name}</div>
                  <div className={styles.comboIncludes}>{combo.includes}</div>
                </div>
                <div className={styles.comboPrice}>{combo.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MONTHLY PLANS */}
        <section className={`${styles.section} reveal`}>
          <h2 className={styles.sectionTitle}>Monthly Plans</h2>
          <div className={styles.monthlyGrid}>
            {pricingData.monthlyPlans.map((plan, i) => (
              <div key={i} className={`${styles.monthlyCard} ${styles[plan.tier.toLowerCase()]}`}>
                <div className={styles.monthlyTier}>{plan.tier}</div>
                <div className={styles.monthlyPrice}>
                  <sup>₹</sup>{plan.price}<sub>/month</sub>
                </div>
                <ul className={styles.monthlyFeatures}>
                  {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* FOOTER NOTE */}
      <div className={styles.footer}>
        <span style={{color:'var(--teal)',fontWeight:'700'}}>NASCRAFT DIGITALS</span> · All prices in INR · Prices subject to change
      </div>
    </main>
  )
}
