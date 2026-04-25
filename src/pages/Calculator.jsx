import { useState } from 'react'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import styles from './Calculator.module.css'

const SERVICES = [
  { id: 'web', name: 'Website Development', basePrice: 15000, icon: '💻' },
  { id: 'mobile', name: 'Mobile App', basePrice: 25000, icon: '📱' },
  { id: 'branding', name: 'Branding & Identity', basePrice: 8000, icon: '🎨' },
  { id: 'uiux', name: 'UI/UX Design', basePrice: 10000, icon: '✨' },
  { id: 'marketing', name: 'Digital Marketing', basePrice: 12000, icon: '📈' },
]

const FEATURES = [
  { id: 'ecommerce', name: 'E-commerce Integration', price: 8000 },
  { id: 'payment', name: 'Payment Gateway', price: 5000 },
  { id: 'cms', name: 'CMS Integration', price: 4000 },
  { id: 'seo', name: 'SEO Optimization', price: 6000 },
  { id: 'analytics', name: 'Analytics Setup', price: 3000 },
  { id: 'chatbot', name: 'AI Chatbot', price: 10000 },
]

const TIMELINE = [
  { id: 'rush', name: '1-2 Weeks (Rush)', multiplier: 1.5 },
  { id: 'standard', name: '2-4 Weeks (Standard)', multiplier: 1 },
  { id: 'flexible', name: '4+ Weeks (Flexible)', multiplier: 0.9 },
]

export default function Calculator() {
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [timeline, setTimeline] = useState('standard')
  const [showResult, setShowResult] = useState(false)
  const revRef = useRevealAll()

  const toggleService = (id) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const toggleFeature = (id) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const calculateTotal = () => {
    const servicesTotal = selectedServices.reduce((sum, id) => {
      const service = SERVICES.find(s => s.id === id)
      return sum + (service?.basePrice || 0)
    }, 0)

    const featuresTotal = selectedFeatures.reduce((sum, id) => {
      const feature = FEATURES.find(f => f.id === id)
      return sum + (feature?.price || 0)
    }, 0)

    const timelineMultiplier = TIMELINE.find(t => t.id === timeline)?.multiplier || 1

    return Math.round((servicesTotal + featuresTotal) * timelineMultiplier)
  }

  const handleCalculate = () => {
    if (selectedServices.length === 0) {
      alert('Please select at least one service')
      return
    }
    setShowResult(true)
  }

  const total = calculateTotal()

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="ESTIMATE" title="Project <em>Calculator</em>" accent="teal" />

      <section className="section">
        <div className="container">
          <div className={styles.calculatorLayout}>
            
            {/* LEFT - SELECTIONS */}
            <div className={styles.selections}>
              
              {/* SERVICES */}
              <div className={`${styles.section} reveal`}>
                <h3 className={styles.sectionTitle}>Select Services</h3>
                <div className={styles.grid}>
                  {SERVICES.map(service => (
                    <button
                      key={service.id}
                      className={`${styles.card} ${selectedServices.includes(service.id) ? styles.cardActive : ''}`}
                      onClick={() => toggleService(service.id)}
                      data-hover
                    >
                      <span className={styles.cardIcon}>{service.icon}</span>
                      <span className={styles.cardName}>{service.name}</span>
                      <span className={styles.cardPrice}>₹{service.basePrice.toLocaleString()}</span>
                      {selectedServices.includes(service.id) && (
                        <span className={styles.checkmark}><FiCheck /></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div className={`${styles.section} reveal d1`}>
                <h3 className={styles.sectionTitle}>Add-on Features</h3>
                <div className={styles.featuresList}>
                  {FEATURES.map(feature => (
                    <label key={feature.id} className={styles.featureItem}>
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feature.id)}
                        onChange={() => toggleFeature(feature.id)}
                        className={styles.checkbox}
                      />
                      <span className={styles.featureName}>{feature.name}</span>
                      <span className={styles.featurePrice}>+₹{feature.price.toLocaleString()}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* TIMELINE */}
              <div className={`${styles.section} reveal d2`}>
                <h3 className={styles.sectionTitle}>Project Timeline</h3>
                <div className={styles.timelineOptions}>
                  {TIMELINE.map(option => (
                    <label key={option.id} className={styles.timelineOption}>
                      <input
                        type="radio"
                        name="timeline"
                        value={option.id}
                        checked={timeline === option.id}
                        onChange={(e) => setTimeline(e.target.value)}
                        className={styles.radio}
                      />
                      <span className={styles.timelineName}>{option.name}</span>
                      {option.multiplier !== 1 && (
                        <span className={styles.timelineMultiplier}>
                          {option.multiplier > 1 ? `+${((option.multiplier - 1) * 100).toFixed(0)}%` : `-${((1 - option.multiplier) * 100).toFixed(0)}%`}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <button 
                className={`btn-p ${styles.calculateBtn}`}
                onClick={handleCalculate}
              >
                CALCULATE ESTIMATE <FiArrowRight />
              </button>
            </div>

            {/* RIGHT - RESULT */}
            <div className={`${styles.result} reveal d3`}>
              <div className={styles.resultCard}>
                <h3 className={styles.resultTitle}>Your Estimate</h3>
                
                {showResult && selectedServices.length > 0 ? (
                  <>
                    <div className={styles.breakdown}>
                      <div className={styles.breakdownSection}>
                        <h4 className={styles.breakdownTitle}>Services</h4>
                        {selectedServices.map(id => {
                          const service = SERVICES.find(s => s.id === id)
                          return (
                            <div key={id} className={styles.breakdownItem}>
                              <span>{service.name}</span>
                              <span>₹{service.basePrice.toLocaleString()}</span>
                            </div>
                          )
                        })}
                      </div>

                      {selectedFeatures.length > 0 && (
                        <div className={styles.breakdownSection}>
                          <h4 className={styles.breakdownTitle}>Add-ons</h4>
                          {selectedFeatures.map(id => {
                            const feature = FEATURES.find(f => f.id === id)
                            return (
                              <div key={id} className={styles.breakdownItem}>
                                <span>{feature.name}</span>
                                <span>₹{feature.price.toLocaleString()}</span>
                              </div>
                            )
                          })}
                        </div>
                      )}

                      <div className={styles.breakdownSection}>
                        <h4 className={styles.breakdownTitle}>Timeline</h4>
                        <div className={styles.breakdownItem}>
                          <span>{TIMELINE.find(t => t.id === timeline)?.name}</span>
                          <span>{TIMELINE.find(t => t.id === timeline)?.multiplier}x</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.total}>
                      <span className={styles.totalLabel}>Estimated Total</span>
                      <span className={styles.totalAmount}>₹{total.toLocaleString()}</span>
                    </div>

                    <div className={styles.disclaimer}>
                      <p>* This is an estimated cost. Final pricing may vary based on specific requirements and project complexity.</p>
                    </div>

                    <div className={styles.actions}>
                      <a href="/contact" className="btn-p" style={{width:'100%',justifyContent:'center'}}>
                        GET DETAILED QUOTE <FiArrowRight />
                      </a>
                      <a href="/booking" className="btn-outline" style={{width:'100%',justifyContent:'center'}}>
                        BOOK A CALL
                      </a>
                    </div>
                  </>
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.placeholderIcon}>🧮</span>
                    <p>Select services and features to see your estimate</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
