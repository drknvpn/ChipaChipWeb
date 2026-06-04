import { useEffect, useRef } from 'react'
import './Hero.css'
import artistPhoto from '../assets/ChipaChipArtist.png'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.45}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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

      <div className="hero-buttons">
        <a href="#concerts" className="btn-primary">Концерты</a>
        <a href="#listen" className="btn-primary">Слушать</a>
      </div>
    </section>
  )
}