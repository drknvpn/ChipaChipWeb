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
    const startDelay = 800 // Задержка перед началом печати
    const typingSpeed = 90 // Скорость печати (мс на букву)
    
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

      {/* Надпись с эффектом печати */}
      <div className="hero-tagline-wrapper">
        <h1 className="hero-tagline">
          <span className="tagline-text">{displayedText}</span>
          <span className={`tagline-cursor ${isTyping ? 'typing' : 'blinking'}`}>|</span>
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
