import { useState, useEffect } from 'react'
import './Navbar.css'
import { FaVk, FaInstagram, FaTiktok, FaTelegram, FaYoutube } from 'react-icons/fa'

const navLinks = [
  { label: 'Биография', href: '#bio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Концерты', href: '#concerts' },
  { label: 'Музыка', href: '#listen' },
  { label: 'Видео', href: '#videos' },
  { label: 'Мерч', href: 'https://aferashop.ru/chipachip', external: true },
]

const socials = [
  { name: 'VK', href: 'https://vk.com/chipachip', icon: <FaVk /> },
  { name: 'Instagram', href: 'https://instagram.com/chipachip', icon: <FaInstagram /> },
  { name: 'TikTok', href: 'https://tiktok.com/@chipachip', icon: <FaTiktok /> },
  { name: 'Telegram', href: 'https://t.me/chipachip', icon: <FaTelegram /> },
  { name: 'YouTube', href: 'https://youtube.com/@chipachip', icon: <FaYoutube /> },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string, external?: boolean) => {
    setMenuOpen(false)
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CHIPACHIP</a>
        
        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(l => (
            <button key={l.label} onClick={() => handleLink(l.href, l.external)} className="nav-link">{l.label}</button>
          ))}
        </nav>

        <div className="navbar-right">
          <div className="navbar-socials">
            {socials.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
          <button className={`burger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}