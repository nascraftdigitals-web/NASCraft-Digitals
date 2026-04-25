import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiClock, FiUser, FiCalendar, FiTag } from 'react-icons/fi'
import { blogPosts } from '../data/blog'
import { useRevealAll } from '../hooks/useReveal'
import styles from './BlogPost.module.css'

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80'

export default function BlogPost() {
  const { slug } = useParams()
  const revRef = useRevealAll()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <main className="page-content" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', color: 'var(--text)' }}>Post Not <em style={{ color: 'var(--teal)', fontStyle: 'normal' }}>Found.</em></h2>
        <Link to="/blog" className="btn-outline"><FiArrowLeft /> BACK TO BLOG</Link>
      </main>
    )
  }

  const related = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <main className="page-content" ref={revRef}>
      {/* HERO */}
      <div className={styles.hero}>
        <img
          src={post.image}
          alt={post.title}
          className={styles.heroImg}
          onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <Link to="/blog" className={styles.backLink}><FiArrowLeft /> BACK TO BLOG</Link>
          <span className={styles.heroCat}>{post.category}</span>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <div className={styles.heroMeta}>
            <span><FiUser size={13} /> {post.author}</span>
            <span><FiCalendar size={13} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span><FiClock size={13} /> {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <article className={`${styles.article} reveal`}>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.placeholder}>
                <span>📝</span>
                <p>Full article content coming soon. We're working on publishing the complete write-up for this post.</p>
                <Link to="/contact" className="btn-p" style={{ marginTop: '1.5rem' }}>CONTACT US</Link>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className={`${styles.sidebar} reveal d2`}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>TAGS</h3>
                <div className={styles.tags}>
                  {post.tags.map(tag => (
                    <span key={tag} className={styles.tag}><FiTag size={10} /> {tag}</span>
                  ))}
                </div>
              </div>

              {related.length > 0 && (
                <div className={styles.sideCard}>
                  <h3 className={styles.sideTitle}>RELATED POSTS</h3>
                  <div className={styles.relatedList}>
                    {related.map(r => (
                      <Link key={r.id} to={`/blog/${r.slug}`} className={styles.relatedItem}>
                        <img
                          src={r.image}
                          alt={r.title}
                          className={styles.relatedImg}
                          onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
                        />
                        <div>
                          <p className={styles.relatedTitle}>{r.title}</p>
                          <span className={styles.relatedMeta}><FiClock size={10} /> {r.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
