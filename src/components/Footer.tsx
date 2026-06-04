import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">CHIPACHIP</div>
          <div className="footer-socials">
            <a href="https://vk.com/chipachip" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
            <a href="https://instagram.com/chipachip" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://tiktok.com/@chipachip" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://t.me/chipachip" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://youtube.com/@chipachip" target="_blank" rel="noopener noreferrer">YouTube</a>
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
    </footer>
  )
}