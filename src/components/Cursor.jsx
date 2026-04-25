import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)
  const trailsRef = useRef([])
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const state = useRef({ hovering: false, label: '', magnetEl: null })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot   = dotRef.current
    const ring  = ringRef.current
    const label = labelRef.current
    const trails = trailsRef.current

    /* ── Mouse move ── */
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    /* ── RAF loop ── */
    let raf
    const loop = () => {
      const p = pos.current
      const s = state.current

      // magnetic pull toward nearest magnetic element
      let tx = p.mx, ty = p.my
      if (s.magnetEl) {
        const r = s.magnetEl.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const dx = p.mx - cx, dy = p.my - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const strength = Math.max(0, 1 - dist / 120)
        tx = p.mx - dx * strength * 0.35
        ty = p.my - dy * strength * 0.35
      }

      p.rx += (tx - p.rx) * 0.1
      p.ry += (ty - p.ry) * 0.1

      if (dot) {
        dot.style.left = p.mx + 'px'
        dot.style.top  = p.my + 'px'
      }
      if (ring) {
        ring.style.left = p.rx + 'px'
        ring.style.top  = p.ry + 'px'
      }
      if (label) {
        label.style.left = p.rx + 'px'
        label.style.top  = p.ry + 'px'
      }

      // trail
      trails.forEach((t, i) => {
        if (!t) return
        const delay = (i + 1) * 0.06
        const lx = parseFloat(t.dataset.x || p.mx)
        const ly = parseFloat(t.dataset.y || p.my)
        const nx = lx + (p.mx - lx) * (0.18 - i * 0.015)
        const ny = ly + (p.my - ly) * (0.18 - i * 0.015)
        t.dataset.x = nx
        t.dataset.y = ny
        t.style.left = nx + 'px'
        t.style.top  = ny + 'px'
        t.style.opacity = (1 - i / trails.length) * 0.35
        t.style.transform = `translate(-50%,-50%) scale(${1 - i * 0.12})`
      })

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    /* ── Hover detection ── */
    const MAGNETIC = 'a, button, [data-magnetic]'
    const LABEL_MAP = {
      '[data-view]': 'VIEW',
      '[data-drag]': 'DRAG',
      'a[href]': 'GO',
      'button': 'CLICK',
    }

    const getLabel = (el) => {
      for (const [sel, lbl] of Object.entries(LABEL_MAP)) {
        if (el.closest(sel)) return lbl
      }
      return ''
    }

    const onOver = (e) => {
      const el = e.target.closest(MAGNETIC)
      if (el) {
        state.current.hovering = true
        state.current.magnetEl = el
        state.current.label = getLabel(e.target)
        document.body.classList.add('cur-hov')
        if (label) label.textContent = state.current.label
      }
    }

    const onOut = (e) => {
      const el = e.target.closest(MAGNETIC)
      if (el) {
        state.current.hovering = false
        state.current.magnetEl = null
        state.current.label = ''
        document.body.classList.remove('cur-hov')
        if (label) label.textContent = ''
      }
    }

    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    /* ── Click burst ── */
    const onClick = (e) => {
      const burst = document.createElement('div')
      burst.className = 'cur-burst'
      burst.style.left = e.clientX + 'px'
      burst.style.top  = e.clientY + 'px'
      document.body.appendChild(burst)
      setTimeout(() => burst.remove(), 600)
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={el => trailsRef.current[i] = el}
          style={{
            position: 'fixed', top: 0, left: 0,
            width: `${8 - i}px`, height: `${8 - i}px`,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'var(--teal)' : 'var(--mag)',
            pointerEvents: 'none',
            transform: 'translate(-50%,-50%)',
            zIndex: 9996,
            mixBlendMode: 'screen',
            transition: 'opacity 0.1s',
          }}
        />
      ))}

      {/* Main dot */}
      <div id="custom-cursor" ref={dotRef} />

      {/* Ring */}
      <div id="cursor-ring" ref={ringRef} />

      {/* Label */}
      <div id="cursor-label" ref={labelRef} />

      <style>{`
        body { cursor: none; }
        *, *::before, *::after { cursor: none !important; }

        #custom-cursor {
          position: fixed; top: 0; left: 0;
          width: 6px; height: 6px;
          background: var(--teal);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%,-50%);
          z-index: 9999;
          mix-blend-mode: screen;
          transition: width .15s, height .15s, background .2s;
          will-change: left, top;
        }

        #cursor-ring {
          position: fixed; top: 0; left: 0;
          width: 38px; height: 38px;
          border: 1.5px solid rgba(0,245,212,0.5);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%,-50%);
          z-index: 9998;
          transition: width .35s cubic-bezier(.16,1,.3,1),
                      height .35s cubic-bezier(.16,1,.3,1),
                      border-color .25s, background .25s;
          will-change: left, top;
        }

        #cursor-label {
          position: fixed; top: 0; left: 0;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          font-family: var(--ff-mono);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #000;
          opacity: 0;
          transition: opacity .2s;
          white-space: nowrap;
        }

        body.cur-hov #custom-cursor {
          width: 0; height: 0;
          background: transparent;
        }

        body.cur-hov #cursor-ring {
          width: 64px; height: 64px;
          background: var(--teal);
          border-color: var(--teal);
          mix-blend-mode: difference;
        }

        body.cur-hov #cursor-label {
          opacity: 1;
        }

        .cur-burst {
          position: fixed;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--teal);
          pointer-events: none;
          transform: translate(-50%,-50%);
          z-index: 9997;
          animation: curBurst .6s ease-out forwards;
        }

        @keyframes curBurst {
          0%   { box-shadow: 0 0 0 0 rgba(0,245,212,.8); opacity: 1; transform: translate(-50%,-50%) scale(1); }
          100% { box-shadow: 0 0 0 40px rgba(0,245,212,0); opacity: 0; transform: translate(-50%,-50%) scale(2); }
        }

        @media (pointer: coarse) {
          body { cursor: auto; }
          *, *::before, *::after { cursor: auto !important; }
          #custom-cursor, #cursor-ring, #cursor-label { display: none; }
        }
      `}</style>
    </>
  )
}
