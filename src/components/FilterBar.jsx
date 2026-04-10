const FILTERS = [
  { key: 'all',      label: '✦ Tất cả' },
  { key: 'tinh-hoa', label: '💬 Tinh hoa Vấn Đáp' },
  { key: 'bai-ke',   label: '📜 Bài Kệ Thơ' },
  { key: 'van-dan',  label: '🙏 Hỏi – Đáp' },
]

export default function FilterBar({ active, onChange }) {
  return (
    <nav
      id="filter-bar"
      className="filter-bar"
      role="tablist"
      aria-label="Bộ lọc nội dung Trí Huệ"
    >
      {FILTERS.map(f => (
        <button
          key={f.key}
          role="tab"
          aria-selected={active === f.key}
          className={`filter-btn ${active === f.key ? 'active' : ''}`}
          onClick={() => onChange(f.key)}
          id={`filter-${f.key}`}
        >
          {f.label}
        </button>
      ))}
    </nav>
  )
}
