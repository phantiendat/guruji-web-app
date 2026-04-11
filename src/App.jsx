import Hero from './components/Hero'
import TriHueSection from './components/TriHueSection'
import DaoDoiSection from './components/DaoDoiSection'
import CongDucSection from './components/CongDucSection'
import MinhSuLaAiSection from './components/MinhSuLaAiSection'
import ThienCoDaiSection from './components/ThienCoDaiSection'
import Footer from './components/Footer'
import NavigationOverlay from './components/NavigationOverlay'

export default function App() {
  return (
    <>
      <Hero />

      {/* ── Module 1: Trí Huệ — Storytelling Scroll ── */}
      <TriHueSection />

      {/* ── Module 2: Đạo & Đời ── */}
      <section id="dao-doi">
        <DaoDoiSection />
      </section>

      {/* ── Module 3: Công Đức & Phước Báu ── */}
      <section id="cong-duc">
        <CongDucSection />
      </section>

      {/* ── Module 4: Minh Sư Là Ai? ── */}
      <section id="minh-su">
        <MinhSuLaAiSection />
      </section>

      {/* ── Module 5: Thiền Cổ Đại — Dòng Âm Lưu Thượng Đế ── */}
      <section id="thien-co-dai">
        <ThienCoDaiSection />
      </section>

      <Footer />

      {/* ── Zen Controller + Full-screen Overlay Navigation ── */}
      <NavigationOverlay />
    </>
  )
}
