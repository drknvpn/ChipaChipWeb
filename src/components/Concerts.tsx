import './Concerts.css'

const concerts = [
  { date: '24.09', city: 'Архангельск', venue: 'Главclub Green Concert', status: 'soon' },
  { date: '21 МАР', city: 'Вологда', venue: 'Космонавт', status: 'soon' },
  { date: '04 АПР', city: 'Ярославль', venue: 'Teleclub', status: 'soon' },
  { date: '11 АПР', city: 'Иваново', venue: 'Opera Concert Club', status: 'sold' },
  { date: '25 АПР', city: 'Владимир', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Рязань', venue: 'Arena Hall', status: 'soon' },
  { date: '24 АПР', city: 'Тула', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Калуга', venue: 'Arena Hall', status: 'soon' },
  { date: '25 АПР', city: 'Смоленск', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Санкт-Петербург', venue: 'Arena Hall', status: 'soon' },
  { date: '25 АПР', city: 'Москва', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Брянск', venue: 'Arena Hall', status: 'soon' },
  { date: '25 АПР', city: 'Орёл', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Белгород', venue: 'Arena Hall', status: 'soon' },
  { date: '09 МАЯ', city: 'Курск', venue: 'Arena Hall', status: 'soon' },
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
                  <a href="#" className="ticket-btn">Билеты →</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
