export default function PageHero({ tag, title, accent = 'teal' }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" />
      <div className={`page-hero-orb ${accent === 'mag' ? 'm' : ''}`} />
      <div className="page-hero-corner phc-tl" />
      <div className="page-hero-corner phc-tr" />
      <div className="page-hero-corner phc-bl" />
      <div className="page-hero-corner phc-br" />
      <div className="container page-hero-inner">
        <div className="page-hero-tag">{tag}</div>
        <h1 className="page-hero-title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </section>
  )
}
