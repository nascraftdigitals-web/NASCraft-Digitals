import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const THEMES = {
  dark: {
    bg: '#000000',
    bg2: '#030305',
    bg3: '#080810',
    bg4: '#0D0D1A',
    text: '#E8E8FF',
    textMuted: '#6B7280',
    teal: '#00F5D4',
    tealDark: '#00C4AA',
    mag: '#FF00C8',
    magDark: '#CC00A0',
    border: 'rgba(0,245,212,0.12)',
    shadow: 'rgba(0,245,212,0.15)',
    overlay: 'rgba(0,0,0,0.6)',
    brightness: 'dark'
  },
  light: {
    bg: '#F8F9FC',
    bg2: '#FFFFFF',
    bg3: '#F0F2F8',
    bg4: '#E8EBF4',
    text: '#1A1D2E',
    textMuted: '#6B7280',
    teal: '#00B8A0',
    tealDark: '#008F7E',
    mag: '#E91E8C',
    magDark: '#C41670',
    border: 'rgba(0,184,160,0.2)',
    shadow: 'rgba(0,0,0,0.1)',
    overlay: 'rgba(255,255,255,0.8)',
    brightness: 'light'
  },
  auto: null // Will be determined by system preference
}

function getSystemTheme() {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme) {
  const root = document.documentElement
  const themeData = theme === 'auto' ? THEMES[getSystemTheme()] : THEMES[theme]
  
  if (!themeData) return

  // Apply CSS variables
  root.style.setProperty('--bg', themeData.bg)
  root.style.setProperty('--bg2', themeData.bg2)
  root.style.setProperty('--bg3', themeData.bg3)
  root.style.setProperty('--bg4', themeData.bg4)
  root.style.setProperty('--text', themeData.text)
  root.style.setProperty('--text-muted', themeData.textMuted)
  root.style.setProperty('--teal', themeData.teal)
  root.style.setProperty('--teal-dark', themeData.tealDark)
  root.style.setProperty('--mag', themeData.mag)
  root.style.setProperty('--mag-dark', themeData.magDark)
  root.style.setProperty('--border', themeData.border)
  root.style.setProperty('--shadow', themeData.shadow)
  root.style.setProperty('--overlay', themeData.overlay)
  
  // Set data attribute for theme-specific styles
  root.setAttribute('data-theme', theme === 'auto' ? getSystemTheme() : theme)
  root.setAttribute('data-brightness', themeData.brightness)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'dark'
  })

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (theme !== 'auto') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => applyTheme('auto')
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'dark') return 'light'
      if (prev === 'light') return 'auto'
      return 'dark'
    })
  }

  const setSpecificTheme = (newTheme) => {
    if (THEMES[newTheme] || newTheme === 'auto') {
      setTheme(newTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: setSpecificTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
