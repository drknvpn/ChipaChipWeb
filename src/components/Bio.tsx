import { useState, useEffect, useRef } from 'react'
import './Bio.css'
import artistPhoto from '../assets/ChipaChipArt.png'

const extendedBio = {
  title: 'От воронежского студента до культового рэпера',
  sections: [
    {
      title: 'КТО ТАКОЙ CHIPACHIP И ОТКУДА ОН ПОЯВИЛСЯ',
      content: 'Настоящее имя Артём Попов. Родился 24 февраля 1993 года в городе Борисоглебск Воронежской области. После школы поступил в Воронежский государственный технический университет (ВГТУ) на факультет информационных технологий и компьютерной безопасности, который окончил в 2015 году.'
    },
    {
      title: 'НАЧАЛО ПУТИ: 2007-2014',
      content: 'Заниматься музыкой Артём начал ещё в 2007-2008 годах задолго до того, как это стало мейнстримом. Но настоящий прорыв случился в 2014 году, когда он стал активно распространять свою музыку в социальных сетях и сотрудничать с другими исполнителями хип-хоп культуры. После армии (служил в 2015 году в Москве) ChipaChip окончательно переехал в столицу, где сейчас живёт и работает.'
    },
    {
      title: 'КАК СТАЛ ПОПУЛЯРНЫМ',
      content: 'Популярность пришла постепенно:\n\n• Социальные сети — он активно продвигал свою музыку ВКонтакте, где сейчас у него более 70 тысяч постоянных подписчиков\n• Участие в шоу «Голос улиц» в 2018 году — этот проект принёс ему особенную популярность, удалось занять место в 30-ке финалистов\n• Сотрудничество с другими артистами — входит в творческое объединение «Грузовая компания», записывает треки с Ямыч Восточный Округ, Kerry Force, Eschevskiy и другими\n• Хиты, которые зашли в народ — «Рофл», «В городе нет солнца», «Это рэп всё», «Реле», «Трудно дышать», «Запах сирени»'
    },
    {
      title: 'ЕГО МУЗЫКАЛЬНЫЙ СТИЛЬ: ПОЧЕМУ ЭТО ОСОБЕННЫЙ РЭП',
      content: 'Его музыку относят к:\n• Андеграундный хип-хоп\n• Психоделический хип-хоп\n• Абстрактный хип-хоп\n• Экспериментальный звук\n\nГлавные фишки:\n• Литературный рэп — черпает вдохновение из великих литературных произведений, считает свои тексты уникальными\n• Философская лирика — пишет о людях, их проблемах в личной жизни, о внутренних переживаниях\n• Без мата (по его заявлениям) — считает, что для рэперов, использующих матерные слова, есть в аду особый котёл\n• Смелые эксперименты — работает одновременно в нескольких жанрах, не боится необычного звучания'
    },
    {
      title: 'ДИСКОГРАФИЯ',
      content: 'Сольные альбомы:\n• «Рофл» (2018)\n• «В городе нет солнца» (2019)\n• «Это рэп всё» (2020)\n• «Реле» (2021)\n• «Трудно дышать» (2022)\n\nПопулярные треки:\n• «Рофл»\n• «В городе нет солнца»\n• «Это рэп всё»\n• «Реле»\n• «Трудно дышать»\n• «Запах сирени»\n• «Грузовая компания» (совместно с Ямыч Восточный Округ)'
    }
  ]
}

export default function Bio() {
  const [modalOpen, setModalOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (modalOpen) {
      const onScroll = () => setScrollY(window.scrollY)
      window.addEventListener('scroll', onScroll, { passive: true })
      document.body.style.overflow = 'hidden'
      return () => {
        window.removeEventListener('scroll', onScroll)
        document.body.style.overflow = 'unset'
      }
    }
  }, [modalOpen])

  const closeModal = () => setModalOpen(false)

  return (
    <section className="bio-section" id="bio">
      <div className="container">
        <span className="section-label">Биография</span>
        <div className="bio-frame frame">
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />
          <div className="bio-inner">
            <div className="bio-quote-mark">"</div>
            <p className="bio-text">
              ChipaChip — исполнитель с богатой историей и солидным бэкграундом. Отличная продуктивность и участие во многих проектах: от телешоу до онлайн баттлов принесли ему заслуженный успех и широкую узнаваемость.
            </p>
            <button className="bio-more-btn" onClick={() => setModalOpen(true)}>
              Узнать больше о исполнителе
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="bio-modal-overlay" onClick={closeModal}>
          <div className="bio-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
            
            <button className="bio-modal-close" onClick={closeModal}>
              ЗАКРЫТЬ
            </button>
            
            <div className="bio-modal-photo-section">
              <div className="bio-modal-parallax" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
                <img src={artistPhoto} alt="ChipaChip" className="bio-modal-photo" />
              </div>
            </div>
            
            <div className="bio-modal-content">
              <h2 className="bio-modal-title">{extendedBio.title}</h2>
              
              {extendedBio.sections.map((section, index) => (
                <div key={index} className="bio-modal-section">
                  <h3 className="bio-modal-section-title">{section.title}</h3>
                  <p className="bio-modal-section-text">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
