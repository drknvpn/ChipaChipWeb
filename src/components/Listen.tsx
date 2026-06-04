import './Listen.css'

const platforms = [
  { name: 'ВКонтакте', href: 'https://vk.com/chipachip', desc: 'Все треки и плейлисты' },
  { name: 'Яндекс Музыка', href: 'https://music.yandex.ru/artist/591505', desc: 'Дискография артиста' },
]

export default function Listen() {
  return (
    <section className="listen-section" id="listen">
      <div className="container">
        <span className="section-label">Послушать</span>
        <h2 className="section-heading"></h2>
        
        <div className="listen-cards">
          {platforms.map(p => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="listen-card frame">
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />
              
              <div className="listen-info">
                <span className="listen-name">{p.name}</span>
                <span className="listen-desc">{p.desc}</span>
              </div>
              <div className="listen-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}