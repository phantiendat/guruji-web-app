import { useState } from 'react'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import ContentGrid from './components/ContentGrid'
import DaoDoiSection from './components/DaoDoiSection'
import Footer from './components/Footer'
import data from './data/tri_hue.json'

export default function App() {
  const [filter, setFilter] = useState('all')

  return (
    <>
      <Hero />

      {/* ── Module 1: Trí Huệ ── */}
      <main id="noi-dung" className="main-container">
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

      {/* ── Module 2: Đạo & Đời ── */}
      <DaoDoiSection />

      <Footer />
    </>
  )
}
