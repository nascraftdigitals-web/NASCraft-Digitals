import { useState } from 'react'
import { FiMessageSquare, FiThumbsUp, FiEye, FiPlus, FiX, FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import styles from './Forum.module.css'

const CATEGORIES = ['All', 'Web Dev', 'Design', 'Marketing', 'AI & Tech', 'Startups', 'General']

const INITIAL_POSTS = [
  { id:1, cat:'Web Dev', title:'Best practices for React performance optimization in 2025?', body:'Looking for tips on reducing bundle size and improving LCP scores on a Next.js app. We\'re hitting 4s load times on mobile.', author:'DevRaj', time:'2h ago', likes:14, views:312, replies:[{author:'NascraftTeam',body:'Use dynamic imports, lazy load images, and enable ISR for static pages. Happy to do a free audit — hit us on WhatsApp!',time:'1h ago',isTeam:true}], tag:'teal' },
  { id:2, cat:'Design', title:'How do I choose a brand color palette that actually converts?', body:'I\'m starting a new D2C food brand and can\'t decide between earthy tones vs bold/vibrant. Any tips from designers here?', author:'StartupSuresh', time:'5h ago', likes:9, views:178, replies:[], tag:'mag' },
  { id:3, cat:'Marketing', title:'Google Ads vs Meta Ads — which works better for local service businesses?', body:'Running a clinic in Chennai. Tried Google Ads for 2 months but ROI was poor. Should I shift to Instagram?', author:'DrKumar', time:'1d ago', likes:22, views:540, replies:[{author:'NascraftTeam',body:'For local clinics, Google Search Ads typically outperform Meta for direct intent. We\'d recommend a hybrid — Google for appointments, Instagram for brand trust. DM us!',time:'20h ago',isTeam:true}], tag:'teal' },
  { id:4, cat:'AI & Tech', title:'Which AI automation tool is best for WhatsApp lead capture?', body:'Looking for a no-code way to capture leads from our WhatsApp business account and push them to Google Sheets or a CRM.', author:'TechFounder22', time:'2d ago', likes:31, views:720, replies:[], tag:'mag' },
  { id:5, cat:'Startups', title:'How to get your first 10 clients as a new agency?', body:'We just launched a small design studio. How did others here land their first paying clients? Cold outreach? Freelance platforms?', author:'NewAgencyOwner', time:'3d ago', likes:45, views:1200, replies:[{author:'NascraftTeam',body:'Our first 10 came from warm outreach to college networks + posting work on LinkedIn daily. Consistency beats virality early on.',time:'2d ago',isTeam:true}], tag:'teal' },
  { id:6, cat:'General', title:'What\'s your favourite resource for staying updated on digital marketing?', body:'Always looking for good newsletters, YouTube channels or communities. Drop your recommendations below!', author:'MarketingMaya', time:'4d ago', likes:18, views:290, replies:[], tag:'mag' },
]

export default function Forum() {
  const [cat, setCat] = useState('All')
  const [posts, setPosts] = useState(INITIAL_POSTS)
  const [activePost, setActivePost] = useState(null)
  const [showNew, setShowNew] = useState(false)
  const [newPost, setNewPost] = useState({ cat:'General', title:'', body:'', author:'' })
  const [replyText, setReplyText] = useState('')
  const [liked, setLiked] = useState({})
  const revRef = useRevealAll()

  const filtered = cat === 'All' ? posts : posts.filter(p => p.cat === cat)
  const open = activePost ? posts.find(p => p.id === activePost) : null

  const submitPost = () => {
    if (!newPost.title || !newPost.body || !newPost.author) return
    setPosts(prev => [{ ...newPost, id: Date.now(), time:'Just now', likes:0, views:0, replies:[], tag:'teal' }, ...prev])
    setNewPost({ cat:'General', title:'', body:'', author:'' })
    setShowNew(false)
  }

  const submitReply = () => {
    if (!replyText.trim()) return
    setPosts(prev => prev.map(p => p.id === activePost ? { ...p, replies:[...p.replies,{author:'You',body:replyText,time:'Just now',isTeam:false}] } : p))
    setReplyText('')
  }

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }))
    setPosts(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + (liked[id] ? -1 : 1) } : p))
  }

  return (
    <main className="page-content" ref={revRef}>
      <PageHero tag="COMMUNITY" title='Client <em>Forum</em>' accent="mag" />

      <section className="section">
        <div className="container">
          <div className={styles.forumLayout}>

            {/* SIDEBAR */}
            <div className={`${styles.sidebar} reveal`}>
              <div className={styles.sideCard}>
                <div className={styles.sideHead}>CATEGORIES</div>
                {CATEGORIES.map(c => (
                  <button key={c} className={`${styles.catBtn} ${cat === c ? styles.catActive : ''}`} onClick={() => { setCat(c); setActivePost(null) }} data-hover>
                    {c}
                    <span className={styles.catCount}>{c === 'All' ? posts.length : posts.filter(p=>p.cat===c).length}</span>
                  </button>
                ))}
              </div>
              <div className={styles.sideCard} style={{marginTop:'16px'}}>
                <div className={styles.sideHead}>COMMUNITY RULES</div>
                {['Be respectful','No spam','Share knowledge','Credit sources','Ask freely'].map((r,i)=>(
                  <div key={i} className={styles.rule}><span className={styles.ruleDot} />{r}</div>
                ))}
              </div>
            </div>

            {/* MAIN */}
            <div className={styles.main}>
              <div className={styles.mainHeader}>
                <span className={styles.mainCount}>{filtered.length} DISCUSSIONS</span>
                <button className="btn-p" onClick={() => { setShowNew(true); setActivePost(null) }} data-hover>
                  <FiPlus /> NEW POST
                </button>
              </div>

              {/* NEW POST FORM */}
              {showNew && (
                <div className={`${styles.newPostCard} reveal`}>
                  <div className={styles.newPostHead}>
                    <span>// NEW DISCUSSION</span>
                    <button onClick={() => setShowNew(false)} className={styles.closeBtn}><FiX /></button>
                  </div>
                  <div className={styles.newPostForm}>
                    <div className="form-group">
                      <label className="form-label">YOUR NAME</label>
                      <input className="form-input" value={newPost.author} onChange={e=>setNewPost(p=>({...p,author:e.target.value}))} placeholder="Display name..." />
                    </div>
                    <div className="form-group">
                      <label className="form-label">CATEGORY</label>
                      <select className="form-select" value={newPost.cat} onChange={e=>setNewPost(p=>({...p,cat:e.target.value}))}>
                        {CATEGORIES.filter(c=>c!=='All').map(c=><option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">TITLE *</label>
                      <input className="form-input" value={newPost.title} onChange={e=>setNewPost(p=>({...p,title:e.target.value}))} placeholder="Ask a question or start a discussion..." />
                    </div>
                    <div className="form-group">
                      <label className="form-label">DETAILS *</label>
                      <textarea className="form-textarea" style={{height:'100px'}} value={newPost.body} onChange={e=>setNewPost(p=>({...p,body:e.target.value}))} placeholder="Provide more context..." />
                    </div>
                    <button className="btn-p" onClick={submitPost}><FiArrowRight /> POST DISCUSSION</button>
                  </div>
                </div>
              )}

              {/* POST DETAIL */}
              {open ? (
                <div className={`${styles.postDetail} reveal`}>
                  <button className={styles.backBtn} onClick={() => setActivePost(null)}>← BACK TO FORUM</button>
                  <div className={`${styles.postCard} ${open.tag === 'mag' ? styles.magPost : ''}`}>
                    <span className={styles.postCat}>{open.cat}</span>
                    <h2 className={styles.postDetailTitle}>{open.title}</h2>
                    <p className={styles.postBody}>{open.body}</p>
                    <div className={styles.postMeta}>
                      <span>{open.author}</span><span>·</span><span>{open.time}</span>
                      <button className={`${styles.likeBtn} ${liked[open.id] ? styles.liked : ''}`} onClick={() => toggleLike(open.id)}><FiThumbsUp /> {open.likes}</button>
                    </div>
                  </div>

                  <div className={styles.repliesHead}>{open.replies.length} REPLIES</div>
                  {open.replies.map((r, i) => (
                    <div key={i} className={`${styles.replyCard} ${r.isTeam ? styles.teamReply : ''}`}>
                      <div className={styles.replyAuthor}>
                        {r.isTeam && <span className={styles.teamTag}>NASCRAFT TEAM</span>}
                        {!r.isTeam && <span>{r.author}</span>}
                        <span className={styles.replyTime}>{r.time}</span>
                      </div>
                      <p className={styles.replyBody}>{r.body}</p>
                    </div>
                  ))}

                  <div className={styles.replyForm}>
                    <div className={styles.sideHead} style={{marginBottom:'14px'}}>WRITE A REPLY</div>
                    <textarea className="form-textarea" style={{height:'80px'}} value={replyText} onChange={e=>setReplyText(e.target.value)} placeholder="Share your thoughts..." />
                    <button className="btn-outline" style={{marginTop:'10px'}} onClick={submitReply}><FiArrowRight /> POST REPLY</button>
                  </div>
                </div>
              ) : (
                /* POST LIST */
                <div className={styles.postList}>
                  {filtered.map((p, i) => (
                    <div key={p.id} className={`${styles.postCard} ${p.tag === 'mag' ? styles.magPost : ''} reveal d${i % 4 + 1}`} onClick={() => setActivePost(p.id)} data-hover>
                      <div className={styles.postTop}>
                        <span className={styles.postCat}>{p.cat}</span>
                        {p.replies.some(r=>r.isTeam) && <span className={styles.answeredTag}>ANSWERED ✓</span>}
                      </div>
                      <h3 className={styles.postTitle}>{p.title}</h3>
                      <p className={styles.postPreview}>{p.body.substring(0,110)}...</p>
                      <div className={styles.postMeta}>
                        <span className={styles.postAuthor}>{p.author}</span>
                        <span className={styles.postTime}>{p.time}</span>
                        <span className={styles.postStat}><FiThumbsUp size={11} /> {p.likes}</span>
                        <span className={styles.postStat}><FiEye size={11} /> {p.views}</span>
                        <span className={styles.postStat}><FiMessageSquare size={11} /> {p.replies.length}</span>
                      </div>
                    </div>
                  ))}
                  {filtered.length === 0 && <div className={styles.empty}><FiMessageSquare size={32} /><p>No posts in this category yet. Be the first!</p></div>}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
