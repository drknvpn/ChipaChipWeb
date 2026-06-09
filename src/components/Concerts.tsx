import './Concerts.css'

const concerts = [
  { date: '24.09', city: 'Архангельск', venue: 'Руки ВВерх! Бар', status: 'soon' },
  { date: '25.09', city: 'Вологда', venue: 'Oliver pub', status: 'soon' },
  { date: '26.09', city: 'Ярославль', venue: 'Руки Вверх! Бар (ex. Горка)', status: 'soon' },
  { date: '27.09', city: 'Иваново', venue: 'Руки Вверх! Бар', status: 'soon' },
  { date: '29.09', city: 'Владимир', venue: 'Творческая лаБАРатория Другой 2.0', status: 'soon' },
  { date: '01.10', city: 'Рязань', venue: '"Свобода" Event - hall', status: 'soon' },
  { date: '02.10', city: 'Тула', venue: 'Sqer', status: 'soon' },
  { date: '03.10', city: 'Калуга', venue: 'Жара', status: 'soon' },
  { date: '04.10', city: 'Смоленск', venue: 'Бар 1865 | А клуб', status: 'soon' },
  { date: '06.11', city: 'Санкт-Петербург', venue: 'Клуб «Рассвет»', status: 'soon' },
  { date: '07.11', city: 'Москва', venue: 'Свобода', status: 'soon' },
  { date: '12.11', city: 'Брянск', venue: 'Цензура', status: 'soon' },
  { date: '13.11', city: 'Орёл', venue: 'Клуб «Герц»', status: 'soon' },
  { date: '14.11', city: 'Белгород', venue: 'Клуб «Часы»', status: 'soon' },
  { date: '15.11', city: 'Курск', venue: 'Черчилль', status: 'soon' },
]

// Функция для генерации ссылки на Ticketscloud
const getTicketscloudUrl = (date: string) => {
  // Убираем точки и ведущие нули: "24.09" → "2409", "06.11" → "611"
  const cleanDate = date.replace('.', '').replace(/^0/, '')
  return `https://${cleanDate}chipachip.ticketscloud.org`
}

export default function Concerts() {
  return (
    <section className="concerts-section" id="concerts">
      <div className="container">
        <span className="section-label">Концерты</span>
        <h2 className="section-heading">СОВЕРШЕННОЛЕТНИЙ  <span style={{ color: 'var(--accent)' }}>2026</span></h2>
        
        <div className="concerts-list">
          {concerts.map((c, i) => {
            const ticketUrl = getTicketscloudUrl(c.date)
            
            return (
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
                    <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="ticket-btn">
                      Билеты →
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Блок с другими площадками */}
        <div className="other-platforms">
          <span className="section-label">Билеты на других площадках</span>
          <div className="platforms-buttons">
            <a href="https://afisha.yandex.ru/artist/chipachip" target="_blank" rel="noopener noreferrer" className="platform-btn">
              Билеты на Яндекс Афише →
            </a>
            <a href="https://www.afisha.ru/search/?query=ChipaChip&searchInAllCities=true" target="_blank" rel="noopener noreferrer" className="platform-btn">
              Билеты на Афише →
            </a>
            <a href="https://kassir.ru/artists/chipachip" target="_blank" rel="noopener noreferrer" className="platform-btn">
              Билеты на Кассир →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
