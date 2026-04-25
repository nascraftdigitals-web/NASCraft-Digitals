import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const getIcon = () => {
    if (theme === 'dark') return <FiSun size={18} />
    if (theme === 'light') return <FiMonitor size={18} />
    return <FiMoon size={18} />
  }

  const getLabel = () => {
    if (theme === 'dark') return 'Switch to Light'
    if (theme === 'light') return 'Switch to Auto'
    return 'Switch to Dark'
  }

  return (
    <button 
      className={styles.toggle} 
      onClick={toggleTheme}
      aria-label={getLabel()}
      title={getLabel()}
      data-hover
    >
      {getIcon()}
    </button>
  )
}
