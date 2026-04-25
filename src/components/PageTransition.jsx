import { motion, AnimatePresence } from 'motion/react'
import { useLocation } from 'react-router-dom'

const panelVariants = {
  initial: { scaleY: 0, originY: 0 },
  animate: { scaleY: [0, 1, 1, 0], originY: [0, 0, 1, 1] },
  exit:    {},
}

export default function PageTransition({ children }) {
  const { pathname } = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Wipe panel */}
      <AnimatePresence>
        <motion.div
          key={pathname + '-panel'}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 1, 0] }}
          transition={{
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
            times: [0, 0.4, 0.6, 1],
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--teal)',
            transformOrigin: 'top',
            zIndex: 9000,
            pointerEvents: 'none',
          }}
        />
      </AnimatePresence>
    </>
  )
}
