import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ════════════════════════════════════════════════════════════
   DATA — Khai thị từ Minh Sư Ruma · Module V: Thiền Cổ Đại
   ════════════════════════════════════════════════════════════ */

const HERO = {
  eyebrow: 'Module V · Thiền Cổ Đại',
  question: 'Thiền Cổ Đại — Lực Lượng Dòng Âm Lưu Thượng Đế Là Gì?',
  sub: 'Pháp thiền vượt mọi tôn giáo — Chìa khóa mở cánh cửa hòa bình',
}

const SECTION_2 = {
  eyebrow: 'I · Bản Thể',
  title: 'Dòng Âm Lưu — Hơi Thở Vũ Trụ',
  quote: {
    text: 'Dòng Âm Lưu Thượng Đế chính là hơi thở và huyết mạch của chúng con.',
    sub: '— Lời khai thị Minh sư Ruma',
  },
  body: 'Trong mọi vật thể, mọi linh hồn, mọi khoảnh khắc — đang chảy một dòng âm thanh thiêng liêng từ Thượng Đế. Không gian và thời gian là màn che. Thiền định là cánh cửa duy nhất để linh hồn im lặng đủ sâu, đủ lâu — để nghe thấy tiếng thì thầm nguyên thủy đó.',
}

const ENERGY_FLOW = [
  { icon: '✦', label: 'Thượng Đế', sub: 'Nguồn cội vạn hữu' },
  { icon: '≋', label: 'Dòng Âm Lưu', sub: 'Hơi thở vũ trụ' },
  { icon: '☸', label: 'Minh Sư Truyền Tâm Ấn', sub: 'Cầu nối thiêng liêng' },
  { icon: '◈', label: 'Linh Hồn Hành Giả', sub: 'Thức tỉnh trong thiền' },
  { icon: '✺', label: 'Giải Thoát', sub: 'Về với cội nguồn' },
]

const BENEFITS = [
  {
    icon: '🌿',
    title: 'Thân Tâm An Lạc',
    desc: 'Hóa giải nghiệp chướng tích lũy bao kiếp, bệnh tật nhẹ bớt, tâm trí thanh thản. Thiền định là liều thuốc bổ cho cả thân lẫn tâm.',
  },
  {
    icon: '🔔',
    title: 'Kết Nối Thượng Đế',
    desc: 'Nghe Diệu Âm bên trong — tiếng âm thanh thiêng liêng vang vọng từ nguồn cội. Trí huệ khai mở, sự sáng suốt trở về tự nhiên.',
  },
  {
    icon: '☽',
    title: 'Công Đức Vô Lượng',
    desc: 'Tọa thiền 2.5–3 tiếng mỗi ngày tạo ra lực lượng công đức và phước báu có thể hồi hướng cho hàng trăm ngàn chúng sinh.',
  },
  {
    icon: '✨',
    title: 'Lực Lượng Hồi Sinh',
    desc: 'Sau mỗi đêm thiền định, năng lượng được tái tạo hoàn toàn. Đêm thiền đỉnh cao Samadhi — linh hồn đạt trạng thái vô ngã bình an.',
  },
]

const QNA_DATA = [
  {
    q: 'Thiền Dòng Âm Lưu có phân biệt tôn giáo không?',
    a: 'Không. Pháp thiền Lực Lượng Dòng Âm Lưu Thượng Đế vượt mọi ranh giới tín ngưỡng và tôn giáo — phục vụ toàn nhân loại. Dù bạn theo Phật giáo, Thiên Chúa giáo, Hồi giáo, hay không theo tôn giáo nào — Dòng Âm Lưu vẫn chảy trong bạn, và bạn đều có thể thiền định để nghe thấy nó.',
  },
  {
    q: 'Tôi cần ngồi thiền bao nhiêu tiếng mỗi ngày?',
    a: 'Minh sư Ruma dạy rằng hành giả truyền tâm ấn nên thiền 2.5 đến 3 tiếng mỗi ngày. Đây không phải là nghĩa vụ nặng nề — mà là món ăn tinh thần không thể thiếu. Giống như cơ thể cần ăn mỗi ngày, tâm hồn cần thiền định để sống và trưởng thành.',
  },
  {
    q: 'Samadhi là gì? Tôi có thể đạt được không?',
    a: 'Samadhi — hay Đại Định — là đỉnh cao của thiền định, nơi lực lượng tâm linh đạt đến trạng thái vô ngã, kết nối trọn vẹn với Thượng Đế. Không có giới hạn nào về việc ai có thể đạt được. Điều kiện duy nhất là lòng chân thành, sự kiên trì, và duyên phận gặp được Minh sư truyền tâm ấn.',
  },
  {
    q: 'Thiền mà không có Minh sư truyền tâm ấn có được không?',
    a: 'Theo lời khai thị của Minh sư Ruma, để đi đúng con đường và tránh tà đạo, hành giả cần được Minh sư truyền tâm ấn — một dòng lực lượng tâm linh thiêng liêng mà không sách vở nào có thể thay thế. Tâm ấn là chìa khóa mở cánh cửa từ trong, không phải từ ngoài vào.',
  },
]

const CLOSING = {
  ornament: '🕊',
  text: 'Hãy ngồi xuống, lắng nghe. Trong khoảng không gian tĩnh lặng đó — Thượng Đế đang thì thầm với linh hồn bạn.',
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

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18 } },
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
    <InViewBlock className="tca-chapter-head">
      <p className="tca-eyebrow">{eyebrow}</p>
      <h3 className="tca-chapter-title">{title}</h3>
      <div className="tca-chapter-rule" aria-hidden="true" />
    </InViewBlock>
  )
}

/* ════════════════════════════════════════════════════════════
   SECTION COMPONENTS
   ════════════════════════════════════════════════════════════ */

/* Section I — Hero */
function HeroBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div className="tca-hero-wrap">
      <div className="tca-hero-glow" aria-hidden="true" />
      <motion.div
        ref={ref}
        className="tca-hero-inner"
        variants={heroQ}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <p className="tca-hero-eyebrow">{HERO.eyebrow}</p>
        <h2 className="tca-hero-question">{HERO.question}</h2>
        <div className="tca-hero-divider" aria-hidden="true" />
        <p className="tca-hero-sub">{HERO.sub}</p>
      </motion.div>
    </div>
  )
}

/* Section II — Bản Thể Dòng Âm Lưu */
function Section2() {
  return (
    <section className="tca-chapter" aria-labelledby="tca-s2">
      <ChapterHead eyebrow={SECTION_2.eyebrow} title={SECTION_2.title} />
      <InViewBlock>
        <figure className="tca-inline-quote" role="figure">
          <blockquote>"{SECTION_2.quote.text}"</blockquote>
          <figcaption>{SECTION_2.quote.sub}</figcaption>
        </figure>
      </InViewBlock>
      <InViewBlock className="tca-prose-block" delay={0.1}>
        <p>{SECTION_2.body}</p>
      </InViewBlock>
    </section>
  )
}

/* Section III — Sơ Đồ Năng Lượng (Visual Diagram) */
function EnergyCard({ icon, label, sub, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })
  return (
    <motion.div
      ref={ref}
      className="tca-energy-card"
      initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="tca-energy-icon" aria-hidden="true">{icon}</span>
      <strong className="tca-energy-label">{label}</strong>
      <span className="tca-energy-sub">{sub}</span>
    </motion.div>
  )
}

function Section3() {
  return (
    <section className="tca-chapter" aria-labelledby="tca-s3">
      <ChapterHead eyebrow="II · Sơ Đồ Năng Lượng" title="Dòng Chảy Từ Thượng Đế" />
      <InViewBlock delay={0.1}>
        <p className="tca-diagram-desc">
          Dòng Âm Lưu không phải khái niệm — mà là một dòng chảy thực sự qua từng tầng tâm linh.
        </p>
      </InViewBlock>
      <div className="tca-energy-flow" role="list" aria-label="Sơ đồ năng lượng Dòng Âm Lưu">
        {ENERGY_FLOW.map((item, i) => (
          <div key={i} className="tca-energy-step" role="listitem">
            <EnergyCard {...item} index={i} />
            {i < ENERGY_FLOW.length - 1 && (
              <div className="tca-energy-arrow" aria-hidden="true">↓</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

/* Section IV — Lợi Ích Thực Tiễn */
function BenefitCard({ icon, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })
  return (
    <motion.div
      ref={ref}
      className="tca-benefit-card"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="tca-benefit-icon" aria-hidden="true">{icon}</span>
      <h4 className="tca-benefit-title">{title}</h4>
      <p className="tca-benefit-desc">{desc}</p>
    </motion.div>
  )
}

function Section4() {
  return (
    <section className="tca-chapter" aria-labelledby="tca-s4">
      <ChapterHead eyebrow="III · Lợi Ích" title="Lợi Ích Thực Tiễn Của Thiền Cổ Đại" />
      <div className="tca-benefits-grid">
        {BENEFITS.map((b, i) => (
          <BenefitCard key={i} {...b} index={i} />
        ))}
      </div>
    </section>
  )
}

/* Section V — Vấn Đáp Khai Thị */
function QnACard({ item }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="tca-qna-card">
      <button
        className="tca-qna-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="tca-qna-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
        <span>{item.q}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="tca-qna-answer"
            variants={accordionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ overflow: 'hidden' }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Section5() {
  return (
    <section className="tca-chapter" aria-labelledby="tca-s5">
      <ChapterHead eyebrow="IV · Vấn Đáp Khai Thị" title="Câu Hỏi Thường Gặp" />
      <InViewBlock className="tca-prose-block" delay={0.1}>
        <div className="tca-qna-list">
          {QNA_DATA.map((item, index) => (
            <QnACard key={index} item={item} />
          ))}
        </div>
      </InViewBlock>
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
      className="tca-closing"
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="tca-closing-ornament" aria-hidden="true">{CLOSING.ornament}</span>
      <blockquote className="tca-closing-text">&ldquo;{CLOSING.text}&rdquo;</blockquote>
      <p className="tca-closing-sub">{CLOSING.sub}</p>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════════════════════════ */
export default function ThienCoDaiSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })

  return (
    <section
      id="thien-co-dai"
      className="tca-section"
      aria-label="Module Thiền Cổ Đại — Dòng Âm Lưu Thượng Đế"
    >
      {/* Ambient background */}
      <div className="tca-bg" aria-hidden="true" />

      {/* Section header */}
      <motion.div
        ref={headerRef}
        className="section-header tca-section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="tca-module-eyebrow">{HERO.eyebrow}</p>
        <h2 className="section-title">
          <span className="tca-violet-txt">Thiền Cổ Đại</span>{' '}
          <span className="tca-amp">·</span>{' '}
          <span className="text-gradient-gold">Dòng Âm Lưu</span>
        </h2>
        <p className="section-desc">
          Pháp thiền vĩ đại vượt mọi tôn giáo — khai thị từ Minh sư Ruma
        </p>
      </motion.div>

      {/* Hero banner */}
      <HeroBanner />

      {/* Story chapters */}
      <div className="tca-chapters-wrapper">
        <Section2 />
        <div className="tca-chapter-divider" aria-hidden="true" />
        <Section3 />
        <div className="tca-chapter-divider" aria-hidden="true" />
        <Section4 />
        <div className="tca-chapter-divider" aria-hidden="true" />
        <Section5 />
      </div>

      {/* Closing verse */}
      <ClosingVerse />
    </section>
  )
}
