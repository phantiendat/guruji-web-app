import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function QuoteCard({ item, delay = 0 }) {
  const [ref, isVisible] = useIntersectionObserver()
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      ref={ref}
      className={`quote-card card-spirit ${isVisible ? 'fade-in-up' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Câu nói: ${item.quote}`}
    >
      <blockquote className="quote-highlight">
        <p className="quote-text">"{item.quote}"</p>
      </blockquote>

      {item.elaboration && (
        <details
          className="accordion-details"
          open={expanded}
          onToggle={e => setExpanded(e.target.open)}
        >
          <summary className="accordion-summary" aria-expanded={expanded}>
            {expanded ? 'Thu gọn ↑' : 'Đọc thêm... ↓'}
          </summary>
          <p className="accordion-body">{item.elaboration}</p>
        </details>
      )}

      <footer className="card-footer">
        <span className="card-source">— {item.source}</span>
      </footer>
    </article>
  )
}

function VerseCard({ item, delay = 0 }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <article
      ref={ref}
      className={`verse-card card-spirit ${isVisible ? 'fade-in-up' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Bài kệ: ${item.title}`}
    >
      <header className="verse-header">
        <span className="verse-label">Bài Kệ</span>
        <h3 className="verse-title">{item.title}</h3>
      </header>
      <div className="verse-body">
        {item.content.split('\n').map((line, i) => (
          <p key={i} className="verse-line">{line}</p>
        ))}
      </div>
      <footer className="card-footer">
        <span className="card-source">— {item.source}</span>
      </footer>
    </article>
  )
}

function QnACard({ item, delay = 0 }) {
  const [ref, isVisible] = useIntersectionObserver()
  const [open, setOpen] = useState(false)

  return (
    <article
      ref={ref}
      className={`qna-card card-spirit ${isVisible ? 'fade-in-up' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        className="qna-question"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        id={`qna-btn-${item.id}`}
      >
        <span className="qna-icon">{open ? '▾' : '▸'}</span>
        <span>{item.question}</span>
      </button>
      {open && (
        <div className="qna-answer" role="region" aria-labelledby={`qna-btn-${item.id}`}>
          <p>{item.answer}</p>
          <footer className="card-footer" style={{ marginTop: '1rem' }}>
            <span className="card-source">— {item.source}</span>
          </footer>
        </div>
      )}
    </article>
  )
}

export default function ContentGrid({ data, filter }) {
  const all = [...data.tinhhoa, ...data.baike, ...data.vandan]

  const filtered = filter === 'all'
    ? all
    : all.filter(item => item.type === filter)

  if (filtered.length === 0) {
    return <p className="empty-state">Không có nội dung phù hợp.</p>
  }

  return (
    <div id="content-grid" className="content-grid" role="feed" aria-label="Danh sách nội dung Trí Huệ">
      {filtered.map((item, i) => {
        const delay = (i % 3) * 120
        if (item.type === 'tinh-hoa') return <QuoteCard key={item.id} item={item} delay={delay} />
        if (item.type === 'bai-ke')  return <VerseCard  key={item.id} item={item} delay={delay} />
        if (item.type === 'van-dan') return <QnACard    key={item.id} item={item} delay={delay} />
        return null
      })}
    </div>
  )
}
