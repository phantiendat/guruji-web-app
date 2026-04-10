import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Data nội dung (trích từ directive) ─── */
const HERO_QUOTE = {
  text: 'Đức tin là mẹ của công đức.',
  sub: '— Lời dạy Minh sư Ruma',
}

const CHAPTER_1 = {
  eyebrow: 'Chương I · Bản Chất',
  title: 'Phước Báu Nhân Thiên là gì?',
  body: [
    'Sự giàu sang, hoàn cảnh sống thuận lợi hay nghịch cảnh khắc nghiệt đều không phải ngẫu nhiên. Đó là quả ngọt — hoặc quả đắng — được kết tinh từ công đức tu hành và thiện nghiệp tích lũy qua nhiều kiếp sống.',
    'Vật chất chỉ là phương tiện. Khi thân xác rời bỏ cõi trần, tài sản, danh vọng, địa vị đều tan biến. Duy chỉ có công đức tu hành mới là kho tàng vĩnh cửu mà hành giả mang theo sang kiếp sau.',
  ],
}

const CHAPTER_2 = {
  eyebrow: 'Chương II · Mối Quan Hệ Cốt Lõi',
  title: 'Gốc Rễ & Hoa Trái',
  diagram: [
    { icon: '🌱', label: 'GỐC RỄ', text: 'Công đức tu hành — tích lũy từ thiền định, bố thí, hiếu đạo và đức tin.' },
    { icon: '✨', label: 'HOA TRÁI', text: 'Phước báu nhân thiên — biểu hiện qua tài lộc, sức khỏe, môi trường sống thuận duyên.' },
  ],
  quote: {
    text: 'Phước báu là quả. Công đức mới là gốc rễ.',
    sub: '— Minh sư Ruma',
  },
}

const CHAPTER_3 = {
  eyebrow: 'Chương III · Quy Trình Tích Lũy',
  title: 'Bốn Con Đường Vun Bồi Công Đức',
  steps: [
    {
      num: '01',
      icon: '🧘',
      title: 'Thiền Định & Ăn Chay',
      body: 'Tham thiền tĩnh định mang lại lực lượng siêu việt vượt ngoài giới hạn thân xác. Ăn chay là phương pháp thanh tịnh thân tâm, giảm nhẹ nghiệp chướng.',
    },
    {
      num: '02',
      icon: '🤲',
      title: 'Bố Thí Vô Ngã',
      body: 'Cúng dường, giúp người vô điều kiện — làm xong thì buông xả, không giữ lại cái tôi trong hành động. Đó mới là bố thí chân thật sinh ra công đức vô lượng.',
    },
    {
      num: '03',
      icon: '🏡',
      title: 'Hiếu Đạo',
      body: 'Chữ hiếu với cha mẹ — ông bà — tổ tiên là nền tảng của mọi công đức. Kính trọng, phụng dưỡng, niệm hồng danh hồi hướng về Cửu Huyền Thất Tổ là phúc báu vô lượng.',
    },
    {
      num: '04',
      icon: '🙏',
      title: 'Đức Tin Tuyệt Đối',
      body: 'Khởi sinh niềm tin nguyên thủy vào vị Minh sư là bước đầu tiên và then chốt nhất. Đức tin chân thành sẽ mở cánh cửa cho mọi công đức còn lại được tích tụ.',
    },
  ],
}

const CHAPTER_4 = {
  eyebrow: 'Chương IV · Tuyệt Đối Kiêng Kỵ',
  title: 'Ba Điều Hủy Diệt Công Đức',
  warnings: [
    { icon: '⚠️', title: 'Ngã Mạn', body: 'Cái tôi tự cao, tự đắc sẽ xói mòn từng hạt công đức đã tích lũy. Khiêm hạ là bảo vệ tối thượng.' },
    { icon: '⚠️', title: 'Khoe Khoang Việc Thiện', body: 'Làm việc thiện mà tự quảng bá, chờ người khen ngợi — công đức tan biến tức thì. Công đức thật sự không cần miệng lưỡi.' },
    { icon: '⚠️', title: 'Sân Hận', body: '"Một câu nhịn, chín câu lành." Một cơn giận nổi lên có thể đốt cháy cả một kho công đức vun vén lâu năm.' },
  ],
}

const CLOSING_QUOTE = {
  text: 'Vật chất chỉ là phương tiện lót đường tâm linh. Hãy dùng nó để vun bồi công đức — kho tàng vĩnh cửu duy nhất bạn mang theo.',
  sub: '— Minh sư Ruma',
  expand: 'Siêu thăng vận mệnh: Công đức tích lũy không chỉ thay đổi kiếp sống hiện tại mà còn lan tỏa siêu độ Cửu Huyền Thất Tổ qua 5–10 đời.',
}

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

/* ─── InViewBlock wrapper ─── */
function InViewBlock({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Hero Quote ─── */
function HeroQuote() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      className="cdpb-hero-quote"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <span className="cdpb-hero-ornament" aria-hidden="true">❧</span>
      <blockquote className="cdpb-hero-quote-text">"{HERO_QUOTE.text}"</blockquote>
      <p className="cdpb-hero-quote-sub">{HERO_QUOTE.sub}</p>
    </motion.div>
  )
}

/* ─── Chapter heading ─── */
function ChapterHead({ eyebrow, title }) {
  return (
    <InViewBlock className="cdpb-chapter-head">
      <p className="cdpb-eyebrow">{eyebrow}</p>
      <h3 className="cdpb-chapter-title">{title}</h3>
      <div className="cdpb-chapter-rule" aria-hidden="true" />
    </InViewBlock>
  )
}

/* ─── Inline Quote highlight ─── */
function QuoteHighlight({ text, sub }) {
  return (
    <InViewBlock>
      <figure className="cdpb-quote-highlight" role="figure">
        <blockquote>"{text}"</blockquote>
        {sub && <figcaption>{sub}</figcaption>}
      </figure>
    </InViewBlock>
  )
}

/* ─── Chapter 1 ─── */
function Chapter1() {
  return (
    <section className="cdpb-chapter" aria-labelledby="cdpb-c1-title">
      <ChapterHead eyebrow={CHAPTER_1.eyebrow} title={CHAPTER_1.title} />
      <motion.div className="cdpb-prose-block" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
        {CHAPTER_1.body.map((p, i) => (
          <motion.p key={i} variants={fadeUp}>{p}</motion.p>
        ))}
      </motion.div>
    </section>
  )
}

/* ─── Chapter 2 ─── */
function Chapter2() {
  return (
    <section className="cdpb-chapter" aria-labelledby="cdpb-c2-title">
      <ChapterHead eyebrow={CHAPTER_2.eyebrow} title={CHAPTER_2.title} />
      <motion.div
        className="cdpb-diagram"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {CHAPTER_2.diagram.map((item) => (
          <motion.div key={item.label} className="cdpb-diagram-card" variants={fadeUp}>
            <span className="cdpb-diagram-icon" aria-hidden="true">{item.icon}</span>
            <span className="cdpb-diagram-label">{item.label}</span>
            <p className="cdpb-diagram-text">{item.text}</p>
          </motion.div>
        ))}
        <div className="cdpb-diagram-arrow" aria-hidden="true">↓</div>
      </motion.div>
      <QuoteHighlight text={CHAPTER_2.quote.text} sub={CHAPTER_2.quote.sub} />
    </section>
  )
}

/* ─── Chapter 3 ─── */
function Chapter3() {
  return (
    <section className="cdpb-chapter" aria-labelledby="cdpb-c3-title">
      <ChapterHead eyebrow={CHAPTER_3.eyebrow} title={CHAPTER_3.title} />
      <motion.ol
        className="cdpb-steps"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        aria-label="Bốn phương pháp tích lũy công đức"
      >
        {CHAPTER_3.steps.map((s) => (
          <motion.li key={s.num} className="cdpb-step-item" variants={fadeUp}>
            <span className="cdpb-step-num" aria-hidden="true">{s.num}</span>
            <div className="cdpb-step-body">
              <span className="cdpb-step-icon" aria-hidden="true">{s.icon}</span>
              <h4 className="cdpb-step-title">{s.title}</h4>
              <p className="cdpb-step-text">{s.body}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}

/* ─── Chapter 4 ─── */
function Chapter4() {
  return (
    <section className="cdpb-chapter" aria-labelledby="cdpb-c4-title">
      <ChapterHead eyebrow={CHAPTER_4.eyebrow} title={CHAPTER_4.title} />
      <motion.div
        className="cdpb-warnings"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {CHAPTER_4.warnings.map((w) => (
          <motion.div key={w.title} className="cdpb-warning-card" variants={fadeUp}>
            <span className="cdpb-warning-icon" aria-hidden="true">{w.icon}</span>
            <div>
              <h4 className="cdpb-warning-title">{w.title}</h4>
              <p className="cdpb-warning-text">{w.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

/* ─── Closing ─── */
function ClosingVerse() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      className="cdpb-closing"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <span className="cdpb-closing-ornament" aria-hidden="true">☸</span>
      <blockquote className="cdpb-closing-text">"{CLOSING_QUOTE.text}"</blockquote>
      <p className="cdpb-closing-sub">{CLOSING_QUOTE.sub}</p>
      <p className="cdpb-closing-expand">{CLOSING_QUOTE.expand}</p>
    </motion.div>
  )
}

/* ─── Main Export ─── */
export default function CongDucSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px 0px' })

  return (
    <section
      id="cong-duc-phuoc-bau"
      className="cdpb-section"
      aria-label="Module Công Đức và Phước Báu Nhân Thiên"
    >
      {/* Ambient background */}
      <div className="cdpb-bg" aria-hidden="true" />

      {/* Section header */}
      <motion.div
        ref={titleRef}
        className="section-header cdpb-section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <p className="cdpb-module-eyebrow">Module III · Giảng Pháp</p>
        <h2 className="section-title">
          <span className="cdpb-terra">Công Đức</span>
          {' '}
          <span className="cdpb-and">&</span>
          {' '}
          <span className="text-gradient-gold">Phước Báu</span>
        </h2>
        <p className="section-desc">
          Hành trình từ vật chất đến kho tàng vĩnh cửu — qua lời dạy của Minh sư Ruma
        </p>
      </motion.div>

      {/* Hero Quote */}
      <div className="cdpb-hero-section">
        <HeroQuote />
      </div>

      {/* Story chapters */}
      <div className="cdpb-chapters-wrapper">
        <Chapter1 />
        <div className="cdpb-chapter-divider" aria-hidden="true" />
        <Chapter2 />
        <div className="cdpb-chapter-divider" aria-hidden="true" />
        <Chapter3 />
        <div className="cdpb-chapter-divider" aria-hidden="true" />
        <Chapter4 />
      </div>

      {/* Closing verse */}
      <ClosingVerse />
    </section>
  )
}
