import './Concerts.css'

const concerts = [
  { date: '14 МАР', city: 'Москва', venue: 'Главclub Green Concert', status: 'soon' },
  { date: '21 МАР', city: 'Санкт-Петербург', venue: 'Космонавт', status: 'soon' },
  { date: '04 АПР', city: 'Екатеринбург', venue: 'Teleclub', status: 'soon' },
  { date: '11 АПР', city: 'Новосибирск', venue: 'Opera Concert Club', status: 'sold' },
  { date: '25 АПР', city: 'Казань', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Краснодар', venue: 'Arena Hall', status: 'soon' },
  { date: '24 АПР', city: 'Архангельск', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Вологда', venue: 'Arena Hall', status: 'soon' },
  { date: '25 АПР', city: 'Ярославль', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Иваново', venue: 'Arena Hall', status: 'soon' },
  { date: '25 АПР', city: 'Владимир', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Рязань', venue: 'Arena Hall', status: 'soon' },
  { date: '25 АПР', city: 'Тула', venue: 'A2 Green Concert', status: 'soon' },
  { date: '09 МАЯ', city: 'Калуга', venue: 'Arena Hall', status: 'soon' },
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
