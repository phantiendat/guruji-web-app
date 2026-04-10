export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer" role="contentinfo">
      <hr className="divider-gold" style={{ maxWidth: '300px', margin: '0 auto 2rem' }} />
      <p className="footer-text">
        ✦ <span className="text-gradient-gold">Guruji Sagarrumagarmatha</span> ✦
      </p>
      <p className="footer-sub">
        Trang web tĩnh tại — Dâng hiến cho hành giả trên con đường tìm về Trí Huệ
      </p>
      <p className="footer-copy">© {new Date().getFullYear()} Guruji Ruma Official</p>
    </footer>
  )
}
