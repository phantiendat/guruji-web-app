import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const orchidSVG = (
  <svg className="orchid-deco" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="60" cy="30" rx="18" ry="28" fill="rgba(201,168,76,0.07)" transform="rotate(-20 60 30)"/>
    <ellipse cx="40" cy="50" rx="15" ry="25" fill="rgba(201,168,76,0.07)" transform="rotate(30 40 50)"/>
    <ellipse cx="80" cy="55" rx="15" ry="25" fill="rgba(201,168,76,0.07)" transform="rotate(-35 80 55)"/>
    <ellipse cx="60" cy="70" rx="12" ry="20" fill="rgba(201,168,76,0.1)" transform="rotate(5 60 70)"/>
    <circle cx="60" cy="72" r="6" fill="rgba(201,168,76,0.2)"/>
    <line x1="60" y1="78" x2="60" y2="130" stroke="rgba(201,168,76,0.15)" strokeWidth="2"/>
    <ellipse cx="48" cy="110" rx="10" ry="6" fill="rgba(201,168,76,0.06)" transform="rotate(-15 48 110)"/>
    <ellipse cx="72" cy="118" rx="10" ry="6" fill="rgba(201,168,76,0.06)" transform="rotate(20 72 118)"/>
  </svg>
)

export default function Hero() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section
      id="hero-section"
      className="hero-section"
      aria-label="Hero - Trí Huệ Dòng Chảy Vĩnh Hằng"
    >
      {/* Orchid background decoration */}
      <div className="orchid-bg-left" aria-hidden="true">{orchidSVG}</div>
      <div className="orchid-bg-right" aria-hidden="true">{orchidSVG}</div>

      {/* Starfield dots */}
      <div className="starfield" aria-hidden="true">
        {[...Array(30)].map((_, i) => (
          <span key={i} className="star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}/>
        ))}
      </div>

      <div ref={ref} className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <p className="hero-eyebrow">✦ Guruji Sagarrumagarmatha ✦</p>
        <h1 className="hero-title">
          <span className="text-gradient-gold glow-gold">Trí Huệ</span>
          <br />
          <span className="hero-sub">Dòng Chảy Vĩnh Hằng</span>
        </h1>
        <hr className="divider-gold" style={{ maxWidth: '200px', margin: '2rem auto' }} />
        <p className="hero-description">
          Hành trình tĩnh tại — từ sự thấu hiểu về bản chất Trí Huệ<br/>
          đến thực hành khiêm nhường, thiền định và an lạc thực sự.
        </p>
        <a href="#noi-dung" className="hero-scroll-cta" aria-label="Cuộn xuống xem nội dung">
          <span>Bắt đầu hành trình</span>
          <span className="cta-arrow">↓</span>
        </a>
      </div>
    </section>
  )
}
