import { useState } from 'react'
import './FAQ.css'

const items = [
  { q: 'Фиты, Биты, Разогрев', a: 'Фиты не интересны. Артист самостоятельно выбирает партнёров и условия сотрудничества. Предложения и предложения по разогреву отправляйте через официальные каналы связи.' },
  { q: 'Концерты в моём городе', a: 'Полный список предстоящих концертов и городов доступен в разделе «Концерты». Туры обычно проходят весной и осенью. Следите за обновлениями в социальных сетях, так как информация добавляется регулярно.' },
  { q: 'Билеты — покупка, сдача, вход', a: 'Билеты доступны на официальной платформе Ticketscloud. Перейдите по ссылке https://ticketscloud.oceanlab.ru/for-viewers.html для полной информации о покупке, возврате и условиях входа.' },
  { q: 'Возрастное ограничение 18+', a: 'Все концерты ChipaChip проводятся с возрастным ограничением 18+. Лица младше 18 лет могут присутствовать только в сопровождении родителей/опекунов при наличии паспорта.' },
  { q: 'Meet&Greet — встреча с артистом', a: 'Встреча с артистом возможна только с приобретением специального VIP-билета Meet&Greet. Такие билеты есть не на всех концертах. Уточняйте наличие при покупке билетов.' },
  { q: 'Тайминг концертов', a: 'Стандартный график концертов: 18:30 — начало Meet&Greet для VIP; 19:10 — открытие входа для остальных гостей; 20:00 — начало выступления; 21:20 — окончание программы.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <span className="section-label">Вопросы и ответы</span>
        <h2 className="section-heading"></h2>

        <div className="faq-frame frame">
          <span className="corner corner-tl" /><span className="corner corner-tr" /><span className="corner corner-bl" /><span className="corner corner-br" />
          <div className="faq-list">
            {items.map((item, i) => (
              <div key={i} className={`faq-item ${open === i ? 'active' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="faq-num">0{i + 1}</span>
                  <span>{item.q}</span>
                </button>
                {open === i && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
