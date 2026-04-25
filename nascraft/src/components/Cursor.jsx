import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const move = (e) => { pos.current.mx = e.clientX; pos.current.my = e.clientY }
    document.addEventListener('mousemove', move)

    let raf
    const loop = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.12
      p.ry += (p.my - p.ry) * 0.12
      if (dotRef.current) { dotRef.current.style.left = p.mx + 'px'; dotRef.current.style.top = p.my + 'px' }
      if (ringRef.current) { ringRef.current.style.left = p.rx + 'px'; ringRef.current.style.top = p.ry + 'px' }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const HOVER_SEL = 'a, button, [data-hover]'
    const onEnter = (e) => { if (e.target.closest(HOVER_SEL)) document.body.classList.add('cursor-hov') }
    const onLeave = (e) => { if (e.target.closest(HOVER_SEL)) document.body.classList.remove('cursor-hov') }
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="custom-cursor" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
      <style>{`
        #custom-cursor,#cursor-ring{position:fixed;top:0;left:0;pointer-events:none;border-radius:50%;transform:translate(-50%,-50%);will-change:transform;z-index:9999;}
        #custom-cursor{width:8px;height:8px;background:var(--teal);mix-blend-mode:screen;transition:width .15s,height .15s,background .2s;}
        #cursor-ring{width:36px;height:36px;border:1.5px solid rgba(0,245,212,.45);z-index:9998;transition:width .32s ease,height .32s ease,border-color .25s;}
        body.cursor-hov #custom-cursor{width:16px;height:16px;background:var(--mag);}
        body.cursor-hov #cursor-ring{width:52px;height:52px;border-color:var(--mag);}
      `}</style>
    </>
  )
}
