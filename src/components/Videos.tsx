import { useState } from 'react'
import './Videos.css'

const videos = [
  { id: 'a-LzRN3tu4g', title: 'ГАДИНА' },
  { id: 'hsBOE1OscE0', title: 'БОЛЬШЕ, ЧЕМ ОСЕНЬ' },
  { id: 'qtdQwHbziCo', title: 'ЭТО РЭП ВСЁ' },
  { id: 'r0tbEySNeio', title: 'МНОГОТОЧИЕ' },
  { id: 'fF4HX_a-oqQ', title: 'Новое видео' },
]

export default function Videos() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="videos-section" id="videos">
      <div className="container">
        <span className="section-label">Видео</span>
        <h2 className="section-heading"></h2>
        
        <div className="videos-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card frame">
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />
              <div className="video-wrapper">
                {active === video.id ? (
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`} 
                    title={video.title} 
                    allowFullScreen 
                  />
                ) : (
                  <button 
                    className="video-thumb" 
                    onClick={() => setActive(video.id)}
                  >
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                      alt={video.title} 
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
                      }}
                    />
                    <div className="play-btn">▶</div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}