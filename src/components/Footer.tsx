import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">ChipaChip</div>
          <div className="footer-socials">
            <a href="https://vk.com/chipachipp" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
            <a href="https://www.instagram.com/chipachip" target="_blank" rel="noopener noreferrer">Instagram*</a>
            <a href="https://www.tiktok.com/@chipachipofficial" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://t.me/chipachipoff" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://www.youtube.com/channel/UCxze56ONvewO-B-VnLkvb7g?view_as=subscriber" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2026 ChipaChip</p>
          <div className="footer-credit">
            Создано{' '}
            <a href="https://vk.com/corona92" target="_blank" rel="noopener noreferrer" className="credit-link">
              Corona92
            </a>
          </div>
          <a href="https://t.me/Tvei79" target="_blank" rel="noopener noreferrer" className="footer-booking">Booking</a>
        </div>
      </div>
      <p style={{ 
  fontSize: '10px', 
  color: '#555', 
  opacity: 0.5, 
  marginTop: '20px',
  textAlign: 'center'  // ← Добавил это
}}>
  «Instagram принадлежит компании Meta, признанной экстремистской организацией. Её деятельность запрещена на территории РФ».
</p>
    </footer>
  )
}
