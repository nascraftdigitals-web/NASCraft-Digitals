const ITEMS = [
  { label:'↑ 312% Traffic Growth · StartupX', mag: false },
  { label:'↑ 4.2x Conversions · BrandForge', mag: true },
  { label:'18 Projects Launched · 2025', mag: false },
  { label:'↑ 280% Revenue · RetailMax', mag: true },
  { label:'50+ Happy Clients', mag: false },
  { label:'↑ 5x Social Reach · CreatorHub', mag: true },
  { label:'100% On-Time Delivery', mag: false },
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="t-item">
            <span className={`t-num ${item.mag ? 'm' : ''}`}>{item.label.split(' ')[0]} {item.label.split(' ')[1]}</span>
            {' '}{item.label.split(' ').slice(2).join(' ')}
            <span style={{fontSize:'6px',color:'var(--muted)',margin:'0 8px'}}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
