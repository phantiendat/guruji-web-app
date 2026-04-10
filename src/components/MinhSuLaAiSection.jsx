import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ════════════════════════════════════════════════════════════
   DATA — Khai thị từ Minh Sư Ruma
   ════════════════════════════════════════════════════════════ */

const HERO = {
  eyebrow: 'Module IV · Khai Thị',
  question: 'Minh Sư là ai?',
}

const SECTION_1 = {
  eyebrow: 'I · Bản Thể',
  title: 'Hiện Thân Của Trí Huệ',
  paragraphs: [
    'Bản thân Minh sư chính là Trí huệ. Ngài không chỉ là người truyền đạt — ngài là tấm gương đại diện cho sự sáng suốt tối thượng, giúp chúng sinh thấy được vị Phật đang ngự trị sâu thẳm bên trong.',
    'Sứ mệnh của ngài không phải là ban phát phép màu bề ngoài, mà là thắp sáng, khôi phục và đánh thức ngọn lửa thiêng liêng đang ngủ quên. Minh sư nhắc nhở chúng sinh rằng: "Trí huệ không phải là điều gì xa xôi, mà chính là Phật tánh bên trong mỗi người".',
  ],
}

const SECTION_2 = {
  eyebrow: 'II · Lực Lượng',
  title: 'Đánh Thức Linh Hồn — Chọc Thủng Vô Minh',
  quote: {
    text: 'Linh hồn con người mù lòa bao kiếp, cần Minh sư truyền tâm ấn, dùng lực lượng để "chọc thủng bức màn vô minh".',
    sub: '— Lời khai thị Minh sư Ruma',
  },
  body: 'Không phải bằng lời nói giáo điều hay sách vở — mà bằng lực lượng tâm linh siêu việt vượt ngoài ngôn từ. Minh sư truyền tâm ấn để đánh thức linh hồn khỏi cơn mê muội đời đời kiếp kiếp, chỉ lối về cội nguồn vĩnh hằng.',
}

const SECTION_3 = {
  eyebrow: 'III · Duyên Phận',
  title: 'Phước Báu Tương Ngộ',
  highlightQuote: {
    text: 'Gặp được Minh sư tại thế là phước báu nhân thiên cực kì to lớn...',
    sub: '— Minh sư Ruma',
  },
  body: 'Không phải ai cũng có thể đủ phước duyên để bắt gặp một Minh sư chân thật trong kiếp hiện tiền. Sự tương ngộ đó là tinh hoa kết tinh của vô lượng kiếp gieo trồng thiện nghiệp, là tiếng gọi khát khao giải thoát từ tận cùng linh hồn.',
}

const SECTION_4_QNA = {
  eyebrow: 'IV · Vấn Đáp',
  title: 'Vấn Đáp Cùng Minh Sư',
  questions: [
    {
      q: 'Vai trò của Minh sư trong sự giải thoát là gì?',
      a: 'Để giải thoát trọn vẹn, hành giả bắt buộc phải cần Minh sư. Minh sư như vị thuyền trưởng vĩ đại gánh trên vai trọng trách chuyên chở linh hồn qua bể khổ sanh tử luân hồi. Nếu không có lực lượng của ngài bảo hộ, linh hồn rất dễ đi vào tà đạo hoặc bị nghiệp chướng nhấn chìm.'
    },
    {
      q: 'Trí huệ của Minh sư có giống với trí thông minh phàm tục?',
      a: 'Hoàn toàn không. Trí thông minh phàm phu chỉ là sự ghi nhớ của não bộ. Trí huệ của Minh sư là ánh sáng từ Thượng đế, là sự từ bi vô ngã. Lòng khiêm nhường tột cùng mới chính là trí huệ cao thâm nhất.'
    },
    {
      q: 'Sắc tướng hay lời chúc của Minh sư có mang lại phước báu không?',
      a: 'Nụ cười, ánh mắt, hay lời chúc lành của Minh sư tại thế không phải là mật ngữ hình thức, mà là một dòng lực lượng thiêng liêng. Những thứ ngài ban phát chứa vô lượng công đức, đủ sức xoa dịu nghịch cảnh và thay đổi vận mệnh cho những người có đức tin trọn vẹn.'
    }
  ]
}

const SECTION_5 = {
  eyebrow: 'V · Kết Nguyện',
  title: 'Lòng Từ Bi Vô Bờ Bến',
  body: 'Minh sư có trăm vạn ức hóa thân xuống nhân gian, nhưng hiện diện cũng giống như bao chúng sinh khác, gánh chịu mọi khổ đau trần thế để xoa dịu nghiệp lực vô hình. Hiểu được tâm tư của ngài, thiền sinh sẽ hiểu được vì sao "Minh sư chỉ biết yêu thương chúng sanh".',
}

const CLOSING = {
  ornament: '☸',
  text: 'Minh sư không cho bạn ánh sáng — ngài chỉ giúp bạn nhớ ra rằng bạn chính là ánh sáng.',
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
  hidden: { opacity: 0, height: 0, marginTop: 0 },
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
    <InViewBlock className="msla-chapter-head">
      <p className="msla-eyebrow">{eyebrow}</p>
      <h3 className="msla-chapter-title">{title}</h3>
      <div className="msla-chapter-rule" aria-hidden="true" />
    </InViewBlock>
  )
}

function InlineQuote({ text, sub }) {
  return (
    <InViewBlock>
      <figure className="msla-inline-quote" role="figure">
        <blockquote>"{text}"</blockquote>
        {sub && <figcaption>{sub}</figcaption>}
      </figure>
    </InViewBlock>
  )
}

/* ════════════════════════════════════════════════════════════
   SECTION COMPONENTS
   ════════════════════════════════════════════════════════════ */

/* Hero — Câu hỏi lớn */
function HeroBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div className="msla-hero-wrap">
      <div className="msla-hero-glow" aria-hidden="true" />
      <motion.div
        ref={ref}
        className="msla-hero-inner"
        variants={heroQ}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <p className="msla-hero-eyebrow">{HERO.eyebrow}</p>
        <h2 className="msla-hero-question">{HERO.question}</h2>
        <div className="msla-hero-divider" aria-hidden="true" />
        <p className="msla-hero-sub">Khai thị từ Minh sư Ruma · Chắt lọc từ tài liệu NotebookLM</p>
      </motion.div>
    </div>
  )
}

/* Section 1 — Bản Thể */
function Section1() {
  return (
    <section className="msla-chapter" aria-labelledby="msla-s1">
      <ChapterHead eyebrow={SECTION_1.eyebrow} title={SECTION_1.title} />
      <motion.div
        className="msla-prose-block"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {SECTION_1.paragraphs.map((p, i) => (
          <motion.p key={i} variants={fadeSlowUp}>{p}</motion.p>
        ))}
      </motion.div>
    </section>
  )
}

/* Section 2 — Lực Lượng */
function Section2() {
  return (
    <section className="msla-chapter" aria-labelledby="msla-s2">
      <ChapterHead eyebrow={SECTION_2.eyebrow} title={SECTION_2.title} />
      <InlineQuote text={SECTION_2.quote.text} sub={SECTION_2.quote.sub} />
      <InViewBlock className="msla-prose-block" delay={0.1}>
        <p>{SECTION_2.body}</p>
      </InViewBlock>
    </section>
  )
}

/* Section 3 — Duyên Phận */
function Section3() {
  return (
    <section className="msla-chapter" aria-labelledby="msla-s3">
      <ChapterHead eyebrow={SECTION_3.eyebrow} title={SECTION_3.title} />
      <InViewBlock>
        <div className="msla-highlight-quote">
          <span className="msla-highlight-ornament" aria-hidden="true">❧</span>
          <blockquote className="msla-highlight-text">
            &ldquo;{SECTION_3.highlightQuote.text}&rdquo;
          </blockquote>
          <p className="msla-highlight-sub">{SECTION_3.highlightQuote.sub}</p>
        </div>
      </InViewBlock>
      <InViewBlock className="msla-prose-block" delay={0.15}>
        <p>{SECTION_3.body}</p>
      </InViewBlock>
    </section>
  )
}

/* Section 4 — Vấn Đáp Khai Thị */
function QnACard({ item }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="card-spirit qna-card">
      <button
        className="qna-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="qna-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
        <span>{item.q}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="qna-answer"
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

function Section4() {
  return (
    <section className="msla-chapter" aria-labelledby="msla-s4">
      <ChapterHead eyebrow={SECTION_4_QNA.eyebrow} title={SECTION_4_QNA.title} />
      <InViewBlock className="msla-prose-block" delay={0.1}>
        <div className="msla-qna-list">
          {SECTION_4_QNA.questions.map((item, index) => (
            <QnACard key={index} item={item} />
          ))}
        </div>
      </InViewBlock>
    </section>
  )
}

/* Section 5 — Kết Nguyện */
function Section5() {
  return (
    <section className="msla-chapter" aria-labelledby="msla-s5">
      <ChapterHead eyebrow={SECTION_5.eyebrow} title={SECTION_5.title} />
      <InViewBlock className="msla-prose-block">
        <p>{SECTION_5.body}</p>
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
      className="msla-closing"
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="msla-closing-ornament" aria-hidden="true">{CLOSING.ornament}</span>
      <blockquote className="msla-closing-text">&ldquo;{CLOSING.text}&rdquo;</blockquote>
      <p className="msla-closing-sub">{CLOSING.sub}</p>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════════════════════════ */
export default function MinhSuLaAiSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })

  return (
    <section
      id="minh-su-la-ai"
      className="msla-section"
      aria-label="Module Minh Sư Là Ai?"
    >
      {/* Ambient background */}
      <div className="msla-bg" aria-hidden="true" />

      {/* Section label — animated header */}
      <motion.div
        ref={headerRef}
        className="section-header msla-section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="msla-module-eyebrow">{HERO.eyebrow}</p>
        <h2 className="section-title">
          <span className="msla-indigo-txt">Minh Sư</span>{' '}
          <span className="msla-amp">·</span>{' '}
          <span className="text-gradient-gold">Là Ai?</span>
        </h2>
        <p className="section-desc">
          Chân lý về bậc Giác Ngộ — qua lời khai thị của Guruji Ruma
        </p>
      </motion.div>

      {/* Hero banner — câu hỏi lớn */}
      <HeroBanner />

      {/* Story chapters */}
      <div className="msla-chapters-wrapper">
        <Section1 />
        <div className="msla-chapter-divider" aria-hidden="true" />
        <Section2 />
        <div className="msla-chapter-divider" aria-hidden="true" />
        <Section3 />
        <div className="msla-chapter-divider" aria-hidden="true" />
        <Section4 />
        <div className="msla-chapter-divider" aria-hidden="true" />
        <Section5 />
      </div>

      {/* Closing verse */}
      <ClosingVerse />
    </section>
  )
}
