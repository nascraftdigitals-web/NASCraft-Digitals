import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiClock, FiUser } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import { blogPosts } from '../data/blog'
import styles from './Blog.module.css'

const CATEGORIES = ['All', 'Web Dev', 'Design', 'Marketing', 'Business', 'Tech']

export default function Blog() {
  const [category, setCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subState, setSubState] = useState('idle')
  const revRef = useRevealAll()

  const filtered = category === 'All' ? blogPosts : blogPosts.filter(p => p.category === category)
  const featured = filtered[0]
  const rest = filtered.slice(1)

  const handleSub = (e) => {
    e.preventDefault()
    if (!email) return
    setSubState('success')
    setEmail('')
  }

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="RESOURCES" title="Blog & <em>Insights</em>" accent="teal" />

      {/* ── STICKY FILTERS ── */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.filters}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${category === cat ? styles.filterActive : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
                {category === cat && <span className={styles.filterDot} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {filtered.length === 0 && (
            <div className={styles.empty}>No articles in this category yet.</div>
          )}

          {/* ── FEATURED POST ── */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className={`${styles.featured} reveal`} data-view>
              <div className={styles.featImg}>
                <img src={featured.image} alt={featured.title} onError={e => e.currentTarget.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'} />
                <div className={styles.featImgOverlay} />
              </div>
              <div className={styles.featBody}>
                <span className={styles.featCat}>{featured.category}</span>
                <h2 className={styles.featTitle}>{featured.title}</h2>
                <p className={styles.featExcerpt}>{featured.excerpt}</p>
                <div className={styles.featMeta}>
                  <span><FiClock size={11} /> {featured.readTime}</span>
                  <span><FiUser size={11} /> {featured.author}</span>
                </div>
                <span className={styles.featCta}>READ ARTICLE <FiArrowUpRight /></span>
              </div>
            </Link>
          )}

          {/* ── CARD GRID ── */}
          {rest.length > 0 && (
            <div className={styles.grid}>
              {rest.map((post, i) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.id}
                  className={`${styles.card} reveal d${i % 3 + 1}`}
                  data-view
                >
                  <div className={styles.cardImg}>
                    <img
                      src={post.image}
                      alt={post.title}
                      onError={e => e.currentTarget.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80'}
                    />
                    <div className={styles.cardOverlay}>
                      <span className={styles.cardOverlayCta}>READ <FiArrowUpRight /></span>
                    </div>
                    <span className={styles.cardCat}>{post.category}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span><FiClock size={10} /> {post.readTime}</span>
                      <span><FiUser size={10} /> {post.author}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <div className={styles.cardTags}>
                      {post.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                    <span className={styles.readMore}>READ MORE <FiArrowRight /></span>
                  </div>
                  <div className={styles.cardLine} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterInner}>
            <div>
              <span className="sec-tag">STAY UPDATED</span>
              <h2 className={styles.newsletterTitle}>Get the Latest <em>Insights</em></h2>
              <p className={styles.newsletterDesc}>Tips, trends and resources delivered to your inbox. No spam, ever.</p>
            </div>
            {subState === 'success' ? (
              <p className={styles.subSuccess}>✓ You're subscribed! We'll be in touch.</p>
            ) : (
              <form className={styles.newsletterForm} onSubmit={handleSub}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={styles.newsletterInput}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-p">SUBSCRIBE <FiArrowRight /></button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
