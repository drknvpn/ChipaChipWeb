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
         <div className="footer-credit-signature">
  <span className="signature-text">CRAFTED WITH</span>
  <div className="signature-gold">
    <svg className="signature-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    <a href="https://vk.com/Corona92" target="_blank" rel="noopener noreferrer" className="signature-link">
      Aristo
    </a>
  </div>
  <span className="signature-year">© 2026</span>
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
