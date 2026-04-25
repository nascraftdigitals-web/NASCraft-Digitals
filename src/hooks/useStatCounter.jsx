import { useState, useEffect, useRef } from 'react'

export function useStatCounter(target, duration = 1600) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let startTime = null
        const step = (ts) => {
          if (!startTime) startTime = ts
          const p = Math.min((ts - startTime) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setCount(Math.floor(ease * target))
          if (p < 1) requestAnimationFrame(step)
          else setCount(target)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return [count, ref]
}

export function StatCounter({ target, suffix, prefix = '' }) {
  const [count, ref] = useStatCounter(target)
  return <span ref={ref}>{prefix}{count}{suffix}</span>
}
