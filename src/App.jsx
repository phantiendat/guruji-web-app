import { useState } from 'react'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import ContentGrid from './components/ContentGrid'
import DaoDoiSection from './components/DaoDoiSection'
import CongDucSection from './components/CongDucSection'
import MinhSuLaAiSection from './components/MinhSuLaAiSection'
import ThienCoDaiSection from './components/ThienCoDaiSection'
import Footer from './components/Footer'
import FloatingNav from './components/FloatingNav'
import data from './data/tri_hue.json'

export default function App() {
  const [filter, setFilter] = useState('all')

  return (
    <>
      <Hero />

      {/* ── Module 1: Trí Huệ ── */}
      <section id="tinh-hoa">
        <main className="main-container">
          <div className="section-header">
            <h2 className="section-title">
              Tinh Hoa <span className="text-gradient-gold">Trí Huệ</span>
            </h2>
            <p className="section-desc">
              Kho tàng lời dạy — được chắt lọc từ hàng trăm bài giảng của Minh Sư
            </p>
          </div>
          <FilterBar active={filter} onChange={setFilter} />
          <ContentGrid data={data} filter={filter} />
        </main>
      </section>

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

      {/* ── Floating Pill Nav ── */}
      <FloatingNav />
    </>
  )
}
