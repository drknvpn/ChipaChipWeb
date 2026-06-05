import { useEffect, useRef } from 'react'
import './Hero.css'
import artistPhoto from '../assets/ChipaChipArtist.png'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Фикс для iOS Safari — принудительный пересчёт viewport
    const fixViewport = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      window.dispatchEvent(new Event('resize'))
    }

    // Вызываем при загрузке и при изменении ориентации
    fixViewport()
    window.addEventListener('load', fixViewport)
    window.addEventListener('orientationchange', fixViewport)
    window.addEventListener('resize', fixViewport)

    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.45}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      window.removeEventListener('load', fixViewport)
      window.removeEventListener('orientationchange', fixViewport)
      window.removeEventListener('resize', fixViewport)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="hero-section">
      {/* Brick wall background pattern */}
      <div className="brick-wall" />
      
      {/* Subtle film grain - без мерцания */}
      <div className="film-grain" />

      <div className="hero-parallax" ref={bgRef}>
        <div className="hero-silhouette">
          <img src={artistPhoto} alt="ChipaChip" className="artist-photo" />
        </div>
      </div>

      
    </section>
  )
}
