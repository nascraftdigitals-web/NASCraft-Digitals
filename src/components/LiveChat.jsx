import { useState } from 'react'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'
import styles from './LiveChat.module.css'

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! How can we help you today?', sender: 'bot', time: 'Just now' }
  ])

  const handleSend = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      time: 'Just now'
    }

    setMessages(prev => [...prev, newMessage])
    setMessage('')

    // Auto-reply simulation
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: 'Thanks for your message! Our team will respond shortly. For immediate assistance, reach us on WhatsApp.',
        sender: 'bot',
        time: 'Just now'
      }])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button 
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div>
              <h3 className={styles.chatTitle}>Chat with us</h3>
              <p className={styles.chatStatus}>
                <span className={styles.statusDot}></span>
                Online
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
              <FiX size={20} />
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`${styles.message} ${msg.sender === 'user' ? styles.messageUser : styles.messageBot}`}
              >
                <div className={styles.messageText}>{msg.text}</div>
                <div className={styles.messageTime}>{msg.time}</div>
              </div>
            ))}
          </div>

          <form className={styles.chatForm} onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.chatInput}
            />
            <button type="submit" className={styles.sendBtn}>
              <FiSend size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
