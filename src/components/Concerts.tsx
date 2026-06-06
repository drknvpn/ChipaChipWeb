import './Concerts.css'

const concerts = [
  { date: '24.09', city: 'Архангельск', venue: '# тут название площадки', status: 'soon' },
  { date: '25.09', city: 'Вологда', venue: '# тут название площадки', status: 'soon' },
  { date: '26.09', city: 'Ярославль', venue: 'Руки Вверх! Бар (ex. Горка)', status: 'soon' },
  { date: '27.09', city: 'Иваново', venue: 'Руки Вверх! Бар', status: 'soon' },
  { date: '29.09', city: 'Владимир', venue: '# тут название площадки', status: 'soon' },
  { date: '01.10', city: 'Рязань', venue: '# тут название площадки', status: 'soon' },
  { date: '02.10', city: 'Тула', venue: 'Sqer', status: 'soon' },
  { date: '03.10', city: 'Калуга', venue: 'Жара', status: 'soon' },
  { date: '04.10', city: 'Смоленск', venue: '# тут название площадки', status: 'soon' },
  { date: '06.11', city: 'Санкт-Петербург', venue: '# тут название площадки', status: 'soon' },
  { date: '07.11', city: 'Москва', venue: 'Свобода', status: 'soon' },
  { date: '12.11', city: 'Брянск', venue: 'Цензура', status: 'soon' },
  { date: '13.11', city: 'Орёл', venue: '# тут название площадки', status: 'soon' },
  { date: '14.11', city: 'Белгород', venue: '# тут название площадки', status: 'soon' },
  { date: '15.11', city: 'Курск', venue: 'Черчилль', status: 'soon' },
]

export default function Concerts() {
  return (
    <section className="concerts-section" id="concerts">
      <div className="container">
        <span className="section-label">Концерты</span>
        <h2 className="section-heading">СОВЕРШЕННОЛЕТНИЙ <span style={{ color: 'var(--accent)' }}>2026</span></h2>

        <div className="concerts-list">
          {concerts.map((c, i) => (
            <div key={i} className={`concert-row ${c.status}`}>
              <div className="concert-date">{c.date}</div>
              <div className="concert-info">
                <span className="concert-city">{c.city}</span>
                <span className="concert-venue">{c.venue}</span>
              </div>
              <div className="concert-action">
                {c.status === 'sold' ? (
                  <span className="sold-badge">Распродано</span>
                ) : (
                  <a href="https://afisha.yandex.ru/artist/chipachip" className="ticket-btn">Билеты →</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
