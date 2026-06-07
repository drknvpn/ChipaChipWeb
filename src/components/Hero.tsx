import { useEffect, useRef, useState } from 'react'
import './Hero.css'
import artistPhoto from '../assets/ChipaChipArtist.png'

const TAGLINE = 'ЭТО РЭП ВСЁ.'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  // Параллакс при скролле
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.45}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Эффект печатной машинки
  useEffect(() => {
    const startDelay = 800
    const typingSpeed = 90
    
    const startTimeout = setTimeout(() => {
      let index = 0
      
      const typeInterval = setInterval(() => {
        if (index <= TAGLINE.length) {
          setDisplayedText(TAGLINE.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
        }
      }, typingSpeed)
      
      return () => clearInterval(typeInterval)
    }, startDelay)
    
    return () => clearTimeout(startTimeout)
  }, [])

  return (
    <section className="hero-section">
      <div className="brick-wall" />
      <div className="film-grain" />

      {/* Надпись с эквалайзером */}
      <div className="hero-tagline-wrapper">
        <h1 className="hero-tagline">
          <span className="tagline-text">{displayedText}</span>
          <svg 
            className={`equalizer ${isTyping ? 'active' : 'fading'}`}
            width="40" 
            height="30" 
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="15" width="6" height="15" rx="1" className="eq-bar eq-bar-1" />
            <rect x="11" y="8" width="6" height="22" rx="1" className="eq-bar eq-bar-2" />
            <rect x="20" y="12" width="6" height="18" rx="1" className="eq-bar eq-bar-3" />
            <rect x="29" y="5" width="6" height="25" rx="1" className="eq-bar eq-bar-4" />
          </svg>
        </h1>
      </div>

      <div className="hero-parallax" ref={bgRef}>
        <div className="hero-silhouette">
          <img src={artistPhoto} alt="ChipaChip" className="artist-photo" />
        </div>
      </div>
    </section>
  )
}
