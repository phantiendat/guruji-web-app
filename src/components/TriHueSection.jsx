import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ════════════════════════════════════════════════════════════
   DATA — Khai thị từ Minh Sư Ruma · Module I: Trí Huệ
   Nguồn: NotebookLM RAG · 3 Thư Viện Tổng Hợp
   ════════════════════════════════════════════════════════════ */

const HERO = {
  eyebrow: 'Module I · Trí Huệ',
  question: 'Trong Ta Luôn Có Trí Huệ Vĩ Đại Ngự Trị',
  sub: 'Hành trình từ đầu óc phàm phu đến ánh sáng vĩnh hằng — Khai thị từ Minh sư Ruma',
}

const DEFINITIONS = [
  {
    icon: '✦',
    title: 'Vị Phật & Thượng Đế Bên Trong',
    quote: 'Trí huệ chính là Phật tánh, là Ánh sáng Thượng Đế ngự trị sẵn bên trong mỗi chúng sinh.',
    body: 'Không phải kiến thức vay mượn từ sách vở hay trường lớp, Trí Huệ là một lực lượng thiêng liêng bất khả tư nghị. Ai cũng sở hữu kho báu này, chỉ là nó đang bị bức màn vô minh che phủ suốt bao kiếp luân hồi. Đạo từ trái tim, từ trí huệ, từ lòng từ bi bác ái mà sinh ra.',
  },
  {
    icon: '◈',
    title: 'Thấu Tỏ Chân Tướng — Không Qua Ngũ Quan',
    quote: 'Khi dùng Trí Huệ để quan sát, ta thấu hiểu chân tướng bên trong — nhẹ nhàng, tự tại, không phán xét.',
    body: 'Trí Huệ không nhìn sự vật qua cái vỏ bề ngoài. Nó thấy thẳng vào bản chất chân thật của vạn vật, né tránh mọi phiền não và sự bất an của thế giới trần tục. Đây là sự khác biệt giữa phản ứng theo bản năng và thấu hiểu bằng trí huệ linh hồn.',
  },
  {
    icon: '🌸',
    title: 'Lòng Khiêm Nhường — Trí Huệ Cao Thâm Nhất',
    quote: 'Lòng khiêm nhường chính là trí huệ cao thâm nhất — ánh sáng của Càn Khôn vũ trụ và chìa khóa để bước vào cảnh Thiên Đàng.',
    body: 'Cạm bẫy lớn nhất trên đường tu là ngã chấp và ngã mạn. Người thực sự có Trí Huệ không cần phô trương hay tranh hơn thua. Sự khiêm nhường hoạt động như một tia sáng dẫn đường, giúp con người gạt bỏ cái tôi để vững bước trên con đường đạo.',
  },
]

const COMPARE = {
  left: {
    label: 'Đầu Óc Phàm Phu',
    icon: '🪣',
    items: [
      'Nhỏ bé như một ly nước — hữu hạn',
      'Chạy theo cảm xúc: tham sân si',
      'Suy nghĩ, phán xét, so đo hơn thua',
      'Bị trói buộc bởi ngã chấp, dục vọng',
      'Thuộc cảnh giới thứ nhất và thứ hai',
      'Có thể bắt chước bởi máy móc & AI',
    ],
  },
  right: {
    label: 'Trí Huệ — Linh Hồn',
    icon: '✦',
    items: [
      'Bao la, vô bờ bến như đại dương',
      'Từ bi, vô ngã, tự tại an nhàn',
      'Thấu tỏ vô ngôn — vượt ngoài ngôn từ',
      'Giải phóng khỏi mọi ràng buộc nghiệp chướng',
      'Thuộc cảnh giới thứ ba trở lên',
      'Vượt ngoài khả năng của mọi máy móc',
    ],
  },
}

const PATHS = [
  {
    step: '01',
    icon: '🌀',
    title: 'Tiếp Nhận Tâm Ấn — Minh Sư Tại Thế',
    desc: 'Củi hay đá dù có lửa bên trong nhưng không thể tự bốc cháy nếu không có sự cọ xát. Tương tự, linh hồn cần một bậc Minh sư truyền tâm ấn — dùng lực lượng thiêng liêng "chọc thủng bức màn vô minh", đánh thức vị Phật đang ngủ quên bên trong.',
  },
  {
    step: '02',
    icon: '🔮',
    title: 'Tham Thiền Nhập Định — Dòng Âm Lưu Thượng Đế',
    desc: 'Hành giả ngồi xuống thả lỏng, tập trung vào "Mắt Trí Huệ" (điểm giữa trán), lắng nghe dòng âm thanh thiêng liêng nội tại. Thiền định chính là "món ăn của Trí Huệ" — nuôi dưỡng linh hồn, đốt sạch nghiệp chướng, mở toang cánh cửa giải thoát.',
  },
  {
    step: '03',
    icon: '🌿',
    title: 'Sống Vô Ngã — Đạo Đức & Thuần Chay',
    desc: 'Để Trí Huệ tăng trưởng và được bảo vệ: giữ thuần chay nuôi dưỡng lòng từ bi, thực hành khiêm nhường sâu sắc, không phán xét hay tranh đấu hơn thua, gạt bỏ ngã chấp — thứ độc dược nguy hiểm nhất trên đường tu.',
  },
]

const WISDOM_DATA = [
  {
    type: 'quote',
    text: 'Lòng khiêm nhường là trí huệ cao thâm nhất.',
    source: '— Lời khai thị Minh sư Ruma',
  },
  {
    type: 'ke',
    text: 'Kiếp người cần có bến sông\nTrí huệ khai sáng tâm từ mà khai\nMinh sư Ruma đang tại thế ai ơi\nHãy mau tìm về nguồn cội...',
    source: '— Thi kệ Minh sư Ruma',
  },
  {
    type: 'quote',
    text: 'Biết tha thứ và thương yêu — đó mới là sự cao thâm của Trí Huệ.',
    source: '— Lời khai thị Minh sư Ruma',
  },
  {
    type: 'quote',
    text: 'Trí huệ vĩ đại là ánh sáng dẫn đường. Khi con người hướng sự tập trung vào bên trong, Trí Huệ sẽ mách bảo những điều đúng đắn cần làm.',
    source: '— Lời khai thị Minh sư Ruma',
  },
  {
    type: 'ke',
    text: 'Trong tham thiền đạo tâm mênh mông\nĐường giải thoát thênh thang ngắm nhìn vũ trụ\nĐời giác ngộ từ tâm\nÂm lưu Thượng Đế vang vọng vũ trụ ngân hà...',
    source: '— Thi kệ Minh sư Ruma',
  },
  {
    type: 'quote',
    text: 'Đừng tìm đâu xa thẳm — hãy ngước nhìn ánh sáng Trí Huệ, nhìn gương mặt Phật sâu thẳm bên trong.',
    source: '— Lời khai thị Minh sư Ruma',
  },
  {
    type: 'ke',
    text: 'Người sang giàu có công đức vô biên vô lượng\nNgười được tôn trọng khi tìm được chính bản thân mình\nNgười cao thượng tình yêu thương ban rải cho chúng sinh\nTất cả đều từ Trí Huệ mà nở hoa...',
    source: '— Thi kệ Minh sư Ruma',
  },
  {
    type: 'quote',
    text: 'Thiền định là món ăn tinh hoa của Trí Huệ — giúp hành giả khai mở sự sáng suốt và tìm lại con đường giải thoát.',
    source: '— Lời khai thị Minh sư Ruma',
  },
]

const CLOSING = {
  ornament: '🌸',
  text: 'Sứ mệnh của Minh sư không phải là ban phát phép màu bề ngoài, mà là thắp sáng, khôi phục và đánh thức ngọn lửa Trí Huệ thiêng liêng đang ngủ quên bên trong mỗi thiền sinh.',
  sub: '— Tinh hoa Trí Huệ · Guruji Ruma',
}

/* ════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ════════════════════════════════════════════════════════════ */

const fadeSlowUp = {
  hidden:  { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
}

const heroQ = {
  hidden:  { opacity: 0, scale: 0.94, filter: 'blur(8px)' },
  visible: {
    opacity: 1, scale: 1, filter: 'blur(0px)',
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
}

const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
}

/* ════════════════════════════════════════════════════════════
   HELPER COMPONENTS
   ════════════════════════════════════════════════════════════ */

function InViewBlock({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeSlowUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

function ChapterHead({ eyebrow, title }) {
  return (
    <InViewBlock className="th-chapter-head">
      <p className="th-eyebrow">{eyebrow}</p>
      <h3 className="th-chapter-title">{title}</h3>
      <div className="th-chapter-rule" aria-hidden="true" />
    </InViewBlock>
  )
}

/* ════════════════════════════════════════════════════════════
   SECTION COMPONENTS
   ════════════════════════════════════════════════════════════ */

/* Hero Banner */
function HeroBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div className="th-hero-wrap">
      <div className="th-hero-glow" aria-hidden="true" />
      <motion.div
        ref={ref}
        className="th-hero-inner"
        variants={heroQ}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <p className="th-hero-eyebrow">{HERO.eyebrow}</p>
        <h2 className="th-hero-question">{HERO.question}</h2>
        <div className="th-hero-divider" aria-hidden="true" />
        <p className="th-hero-sub">{HERO.sub}</p>
      </motion.div>
    </div>
  )
}

/* Section I — Trí Huệ Là Gì? */
function DefineCard({ icon, title, quote, body, index }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })
  return (
    <motion.div
      ref={ref}
      className="th-define-card"
      initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="th-define-icon" aria-hidden="true">{icon}</span>
      <h4 className="th-define-title">{title}</h4>
      <blockquote className="th-define-quote">"{quote}"</blockquote>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            className="th-define-body"
            variants={accordionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ overflow: 'hidden' }}
          >
            {body}
          </motion.p>
        )}
      </AnimatePresence>
      <button
        className="th-read-more"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? '− Thu gọn' : '+ Đọc thêm...'}
      </button>
    </motion.div>
  )
}

function Section1() {
  return (
    <section className="th-chapter" aria-labelledby="th-s1">
      <ChapterHead eyebrow="I · Định Nghĩa Rốt Ráo" title="Trí Huệ Là Gì?" />
      <InViewBlock className="th-prose-intro" delay={0.1}>
        <p>
          Theo lời khai thị của Minh sư Ruma, Trí Huệ không phải là IQ hay kiến thức
          của bộ óc — mà là một <strong>lực lượng thiêng liêng tuyệt đối</strong>, bao la
          như đại dương, đang ngủ quên sâu thẳm bên trong mỗi linh hồn.
        </p>
      </InViewBlock>
      <div className="th-define-grid">
        {DEFINITIONS.map((d, i) => (
          <DefineCard key={i} {...d} index={i} />
        ))}
      </div>
    </section>
  )
}

/* Section II — Hai Mặt Của Kiếp Người */
function Section2() {
  return (
    <section className="th-chapter" aria-labelledby="th-s2">
      <ChapterHead eyebrow="II · Đối Chiếu" title="Hai Mặt Của Một Kiếp Người" />
      <InViewBlock className="th-prose-intro" delay={0.1}>
        <p>
          Minh sư ví cuộc sống như một đồng xu hai mặt. Mặt thứ nhất là đầu óc phàm phu —
          hỉ nộ ái ố, tham sân si. Mặt thứ hai là Trí Huệ linh hồn — an lạc, tự tại, vô hạn.
        </p>
      </InViewBlock>
      <InViewBlock className="th-compare-wrap" delay={0.15}>
        <div className="th-compare-grid">
          {/* Left: Phàm phu */}
          <div className="th-compare-col th-compare-left">
            <div className="th-compare-head">
              <span className="th-compare-icon" aria-hidden="true">{COMPARE.left.icon}</span>
              <h4 className="th-compare-label th-label-slate">{COMPARE.left.label}</h4>
            </div>
            <ul className="th-compare-list">
              {COMPARE.left.items.map((item, i) => (
                <li key={i} className="th-compare-item th-item-slate">
                  <span aria-hidden="true">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center VS */}
          <div className="th-compare-center" aria-hidden="true">
            <div className="th-compare-vs">VS</div>
          </div>

          {/* Right: Trí Huệ */}
          <div className="th-compare-col th-compare-right">
            <div className="th-compare-head">
              <span className="th-compare-icon" aria-hidden="true">{COMPARE.right.icon}</span>
              <h4 className="th-compare-label th-label-gold">{COMPARE.right.label}</h4>
            </div>
            <ul className="th-compare-list">
              {COMPARE.right.items.map((item, i) => (
                <li key={i} className="th-compare-item th-item-gold">
                  <span aria-hidden="true">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InViewBlock>
    </section>
  )
}

/* Section III — Con Đường Khai Mở */
function PathItem({ step, icon, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })
  return (
    <motion.div
      ref={ref}
      className="th-path-item"
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="th-path-step" aria-hidden="true">{step}</div>
      <div className="th-path-body">
        <div className="th-path-header">
          <span className="th-path-icon" aria-hidden="true">{icon}</span>
          <h4 className="th-path-title">{title}</h4>
        </div>
        <p className="th-path-desc">{desc}</p>
      </div>
    </motion.div>
  )
}

function Section3() {
  return (
    <section className="th-chapter" aria-labelledby="th-s3">
      <ChapterHead eyebrow="III · Thực Hành" title="Con Đường Khai Mở Trí Huệ" />
      <InViewBlock className="th-prose-intro" delay={0.1}>
        <p>
          Trí Huệ đã bị bức màn vô minh che phủ từ vạn ức kiếp. Ba yếu tố rốt ráo
          để đánh thức kho báu thiêng liêng này:
        </p>
      </InViewBlock>
      <div className="th-path-list">
        {PATHS.map((p, i) => (
          <PathItem key={i} {...p} index={i} />
        ))}
      </div>
    </section>
  )
}

/* Section IV — Thi Kệ & Câu Nói Tinh Hoa (Filterable) */
const FILTER_OPTIONS = [
  { key: 'all',   label: 'Tất Cả' },
  { key: 'quote', label: 'Câu Nói Tinh Hoa' },
  { key: 'ke',    label: 'Bài Kệ Thơ' },
]

function WisdomCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px 0px' })
  const isKe = item.type === 'ke'
  return (
    <motion.div
      ref={ref}
      className={`th-wisdom-card ${isKe ? 'th-wisdom-ke' : 'th-wisdom-quote'}`}
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="th-wisdom-tag" aria-label={isKe ? 'Bài kệ thơ' : 'Câu nói tinh hoa'}>
        {isKe ? '✦ Kệ thơ' : '❝ Tinh hoa'}
      </span>
      <blockquote className="th-wisdom-text">
        {isKe
          ? item.text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)
          : `"${item.text}"`
        }
      </blockquote>
      <cite className="th-wisdom-source">{item.source}</cite>
    </motion.div>
  )
}

function Section4() {
  const [filter, setFilter] = useState('all')
  const filtered = WISDOM_DATA.filter(d => filter === 'all' || d.type === filter)
  return (
    <section className="th-chapter" aria-labelledby="th-s4">
      <ChapterHead eyebrow="IV · Tinh Hoa" title="Lời Ngân Nga & Thi Kệ" />

      {/* Filter Bar */}
      <InViewBlock className="th-filter-bar" delay={0.1} role="group" aria-label="Bộ lọc nội dung">
        {FILTER_OPTIONS.map(opt => (
          <button
            key={opt.key}
            className={`th-filter-btn ${filter === opt.key ? 'th-filter-active' : ''}`}
            onClick={() => setFilter(opt.key)}
            aria-pressed={filter === opt.key}
          >
            {opt.label}
          </button>
        ))}
      </InViewBlock>

      {/* Wisdom Grid with AnimatePresence for filter transition */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={filter}
          className="th-wisdom-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.map((item, i) => (
            <WisdomCard key={`${item.type}-${i}`} item={item} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

/* Closing Verse */
function ClosingVerse() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      className="th-closing"
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="th-closing-ornament" aria-hidden="true">{CLOSING.ornament}</span>
      <blockquote className="th-closing-text">&ldquo;{CLOSING.text}&rdquo;</blockquote>
      <p className="th-closing-sub">{CLOSING.sub}</p>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════════════════════════ */
export default function TriHueSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })

  return (
    <section
      id="tinh-hoa"
      className="th-section"
      aria-label="Module Trí Huệ — Kho Tàng Ánh Sáng Nội Tâm"
    >
      {/* Ambient background */}
      <div className="th-bg" aria-hidden="true" />

      {/* Section header */}
      <motion.div
        ref={headerRef}
        className="section-header th-section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="th-module-eyebrow">{HERO.eyebrow}</p>
        <h2 className="section-title">
          <span className="text-gradient-gold">Trí Huệ</span>{' '}
          <span className="th-amp">·</span>{' '}
          <span className="th-orchid-txt">Ánh Sáng Nội Tâm</span>
        </h2>
        <p className="section-desc">
          Kho tàng lời khai thị — chắt lọc từ hàng trăm bài giảng của Minh Sư Ruma
        </p>
      </motion.div>

      {/* Hero banner */}
      <HeroBanner />

      {/* Story chapters */}
      <div className="th-chapters-wrapper">
        <Section1 />
        <div className="th-chapter-divider" aria-hidden="true" />
        <Section2 />
        <div className="th-chapter-divider" aria-hidden="true" />
        <Section3 />
        <div className="th-chapter-divider" aria-hidden="true" />
        <Section4 />
      </div>

      {/* Closing verse */}
      <ClosingVerse />
    </section>
  )
}
