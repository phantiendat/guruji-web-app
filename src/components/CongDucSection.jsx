/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ═══════════════════════════════════════════════
   DATA LAYER — Khai thị Minh sư Ruma
   (Trích từ RAG & lời giảng chân truyền)
═══════════════════════════════════════════════ */

const SECTION_META = {
  eyebrow: 'Module III · Giảng Pháp',
  title: 'Công Đức & Phước Báu Nhân Thiên',
  subtitle:
    'Hai phạm trù khác nhau như trời với đất — một cái dẫn về giải thoát, một cái trói buộc trong sanh tử luân hồi.',
}

/* ── Phân đoạn 1: Công Đức ── */
const CONG_DUC = {
  eyebrow: 'Phân Đoạn I · Vô Vi',
  title: 'Công Đức Là Gì?',
  definition:
    'Công đức là năng lượng tâm linh thuần khiết được tích lũy qua những hành động xuất phát từ tâm vô ngã, không cầu danh, không mong báo đáp. Nó mang bản chất VÔ VI — siêu vượt không gian và thời gian, không bị nghiệp lực thế gian chi phối.',
  characterTraits: [
    {
      key: 'VÔ VI',
      desc: 'Công đức chân thật không do tâm mong cầu mà sinh — hành xong liền buông, không dính mắc vào kết quả.',
    },
    {
      key: 'GIẢI THOÁT',
      desc: 'Công đức tích lũy đủ sẽ mở cửa thoát khỏi vòng tái sinh, đưa hành giả về với bản lai diện mục.',
    },
    {
      key: 'VĨNH CỬU',
      desc: 'Khi thân xác hoại diệt, tài sản tiêu tan — duy chỉ công đức được mang theo sang kiếp kế tiếp.',
    },
  ],
  khai_thi:
    'Đức tin là mẹ của công đức. Không có đức tin chân thành, mọi hành động thiện lành chỉ là hạt giống gieo trên đất khô cằn.',
  quote_src: '— Khai thị Minh sư Ruma',
  methods: [
    { icon: '🧘', title: 'Thiền Định & Ăn Chay', desc: 'Thanh tịnh thân tâm, giảm nghiệp chướng, mở rộng trường tâm thức để đón nhận ân điển.' },
    { icon: '🤲', title: 'Bố Thí Vô Ngã', desc: 'Cúng dường, giúp người vô điều kiện — làm xong thì buông xả hoàn toàn, không giữ lại cái tôi.' },
    { icon: '🏡', title: 'Hiếu Đạo', desc: 'Kính phụng cha mẹ, ông bà, hồi hướng công đức về Cửu Huyền Thất Tổ — nền tảng của mọi phúc lành.' },
    { icon: '🙏', title: 'Đức Tin Tuyệt Đối', desc: 'Khởi sinh niềm tin vào Minh sư là bước then chốt nhất — cửa đầu tiên dẫn vào kho công đức vô lượng.' },
  ],
}

/* ── Phân đoạn 2: Phước Báu Nhân Thiên ── */
const PHUOC_BAU = {
  eyebrow: 'Phân Đoạn II · Hữu Lậu',
  title: 'Phước Báu Nhân Thiên',
  definition:
    'Phước báu nhân thiên là quả lành của thiện nghiệp trong cõi người và cõi trời — biểu hiện qua tài lộc, sức khỏe, gia đình thuận duyên, danh vọng thế gian. Nó là HỮU LẬU — có rò rỉ, có tiêu hao, và không thoát khỏi vòng SANH TỬ.',
  warning:
    'Phước báu nhân thiên như ngọn nến trong gió — dù sáng rực một thời, nhưng tất yếu sẽ tắt. Hưởng phước mà không tu tập, đến khi hết phước lại quay về nghèo khổ hay sa đọa.',
  traits: [
    {
      icon: '💧',
      label: 'HỮU LẬU',
      desc: 'Phước báu có thể rò rỉ và tiêu mòn qua tham, sân, si, khoe khoang, hoặc chỉ đơn giản là hưởng thụ mà không tích thêm.',
      color: 'from-blue-500/20 to-cyan-500/10',
      border: 'border-blue-400/20',
    },
    {
      icon: '🔄',
      label: 'SANH TỬ',
      desc: 'Phước báu nhân thiên vẫn nằm trong vòng luân hồi — hưởng xong thì chấm dứt, không dẫn đến giải thoát rốt ráo.',
      color: 'from-amber-500/20 to-yellow-500/10',
      border: 'border-amber-400/20',
    },
    {
      icon: '⚖️',
      label: 'NHÂN QUẢ',
      desc: 'Phước báu là quả của thiện nghiệp đã gieo. Giàu sang hay nghèo khó kiếp này đều là kết tinh từ nghiệp lực nhiều kiếp trước.',
      color: 'from-violet-500/20 to-purple-500/10',
      border: 'border-violet-400/20',
    },
  ],
  sources: [
    { num: '01', act: 'Bố thí tài vật', result: 'Giàu sang, đầy đủ vật chất' },
    { num: '02', act: 'Giúp người bệnh, cứu sinh linh', result: 'Sức khỏe dồi dào, thân thể khỏe mạnh' },
    { num: '03', act: 'Truyền bá giáo pháp, chia sẻ ánh sáng', result: 'Trí tuệ sáng suốt, tiếng tăm lan xa' },
    { num: '04', act: 'Nhường nhịn, kiên nhẫn, tha thứ', result: 'Môi trường sống hài hòa, gia đình thuận duyên' },
  ],
}

/* ── Phân đoạn 3: Lời Răn ── */
const LOI_RAN = {
  eyebrow: 'Phân Đoạn III · Lời Khai Thị',
  title: 'Lời Răn Của Minh Sư',
  main_teaching:
    'Hãy làm việc thiện — nhưng đừng bám chấp vào quả phước. Khi tâm không dính mắc vào kết quả, mọi thiện hành tự nhiên chuyển hóa từ Phước Báu hữu lậu thành Công Đức vô vi. Đó là bí quyết siêu thăng.',
  relationship: [
    {
      from: 'Công Đức (Vô Vi)',
      arrow: '→',
      to: 'Giải Thoát · Thoát Sanh Tử',
      glow: 'shadow-amber-500/30',
      textColor: 'text-amber-200',
    },
    {
      from: 'Phước Báu Nhân Thiên (Hữu Lậu)',
      arrow: '→',
      to: 'Hưởng Thụ · Tiếp Tục Luân Hồi',
      glow: 'shadow-blue-500/20',
      textColor: 'text-blue-200',
    },
  ],
  verses: [
    {
      text: 'Làm việc thiện mà không bám chấp — đó là chìa khóa biến phước báu thành công đức.',
      src: '— Minh sư Ruma',
    },
    {
      text: 'Vật chất chỉ là phương tiện lót đường tâm linh. Hãy dùng nó để vun bồi công đức — kho tàng vĩnh cửu duy nhất bạn mang theo.',
      src: '— Khai thị Minh sư Ruma',
    },
    {
      text: 'Siêu thăng vận mệnh: Công đức tích lũy đủ không chỉ thay đổi kiếp sống hiện tại mà còn lan tỏa siêu độ Cửu Huyền Thất Tổ qua nhiều đời.',
      src: '— Lời truyền dạy',
    },
  ],
  kieu_ranh:
    'Đừng nhầm lẫn giữa người giàu sang và người có công đức. Kẻ hưởng nhiều phước báu chưa chắc đã có nhiều công đức — họ có thể đang tiêu thụ phước lành từ kiếp trước mà không tích thêm gì cho kiếp sau.',
}

/* ═══════════════════════════════════════════════
   ANIMATION VARIANTS
═══════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}
const fadeScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
  },
}

/* ═══════════════════════════════════════════════
   SHARED HELPERS
═══════════════════════════════════════════════ */
function InView({ children, className = '', variants = fadeUp, delay = 0, once = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}

function SectionEyebrow({ text }) {
  return (
    <p style={{
      fontFamily: 'var(--font-sans, system-ui)',
      letterSpacing: '0.22em',
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      color: 'rgba(201,168,76,0.65)',
      marginBottom: '0.6rem',
    }}>
      {text}
    </p>
  )
}

function Divider() {
  return (
    <div style={{
      width: '100%',
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
      margin: '5rem 0',
    }} aria-hidden="true" />
  )
}

/* Glassmorphism card wrapper */
function GlassCard({ children, className = '', style = {} }) {
  return (
    <div
      className={className}
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
        padding: '2rem',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════
   PHÂN ĐOẠN 1 — CÔNG ĐỨC VÔ VI
═══════════════════════════════════════════════ */
function SegmentCongDuc() {
  return (
    <section
      aria-label="Công Đức Vô Vi"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem',
        background: 'linear-gradient(180deg, #020617 0%, #0f172a 60%, #1e1b4b 100%)',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '760px', width: '100%', margin: '0 auto', zIndex: 1 }}>
        {/* Header */}
        <InView className="cdpb-text-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionEyebrow text={CONG_DUC.eyebrow} />
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #fef3c7 0%, #fbbf24 50%, #d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.3,
            marginBottom: '0.5rem',
          }}>
            {CONG_DUC.title}
          </h3>
          <div style={{
            width: '60px', height: '2px', margin: '1rem auto 0',
            background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.6), transparent)',
          }} />
        </InView>

        {/* Definition block */}
        <InView delay={0.1}>
          <GlassCard style={{ marginBottom: '2rem', borderColor: 'rgba(251,191,36,0.12)' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.975rem',
              color: 'rgba(241,235,220,0.85)',
              lineHeight: 1.95,
              textAlign: 'justify',
            }}>
              {CONG_DUC.definition}
            </p>
          </GlassCard>
        </InView>

        {/* Traits — 3 keywords */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}
        >
          {CONG_DUC.characterTraits.map((t) => (
            <motion.div key={t.key} variants={fadeUp}>
              <GlassCard style={{ textAlign: 'center', padding: '1.5rem 1rem', height: '100%' }}>
                <p style={{
                  fontFamily: 'Georgia, serif',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  background: 'linear-gradient(90deg, #fbbf24, #fef3c7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.75rem',
                }}>
                  ✦ {t.key} ✦
                </p>
                <p style={{ color: 'rgba(209,213,219,0.82)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {t.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Khai thị quote */}
        <InView delay={0.15}>
          <figure style={{
            borderLeft: '3px solid rgba(251,191,36,0.5)',
            paddingLeft: '1.75rem',
            margin: '2.5rem 0',
          }}>
            <blockquote style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(254,243,199,0.9)',
              lineHeight: 1.85,
              marginBottom: '0.5rem',
            }}>
              &ldquo;{CONG_DUC.khai_thi}&rdquo;
            </blockquote>
            <figcaption style={{
              fontSize: '0.8rem',
              color: 'rgba(251,191,36,0.6)',
              letterSpacing: '0.1em',
            }}>
              {CONG_DUC.quote_src}
            </figcaption>
          </figure>
        </InView>

        {/* 4 methods grid */}
        <InView delay={0.1}>
          <p style={{
            textAlign: 'center',
            color: 'rgba(209,213,219,0.55)',
            letterSpacing: '0.12em',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            Bốn Con Đường Vun Bồi
          </p>
        </InView>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}
        >
          {CONG_DUC.methods.map((m, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.25rem 1.5rem' }}>
                <span style={{ fontSize: '1.5rem' }} aria-hidden="true">{m.icon}</span>
                <h4 style={{
                  color: 'rgba(254,243,199,0.88)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                }}>
                  {m.title}
                </h4>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'rgba(156,163,175,0.85)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                  {m.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   PHÂN ĐOẠN 2 — PHƯỚC BÁU NHÂN THIÊN
═══════════════════════════════════════════════ */
function SegmentPhuocBau() {
  return (
    <section
      aria-label="Phước Báu Nhân Thiên"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem',
        background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 30%, #44403c 80%, #1c1917 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gold ambient top */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '760px', width: '100%', margin: '0 auto', zIndex: 1 }}>
        {/* Header */}
        <InView style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionEyebrow text={PHUOC_BAU.eyebrow} />
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 40%, #ddd6fe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.3,
          }}>
            {PHUOC_BAU.title}
          </h3>
          <div style={{
            width: '60px', height: '2px', margin: '1rem auto 0',
            background: 'linear-gradient(90deg, transparent, rgba(165,180,252,0.6), transparent)',
          }} />
        </InView>

        {/* Definition */}
        <InView delay={0.1}>
          <GlassCard style={{ marginBottom: '2rem', borderColor: 'rgba(165,180,252,0.12)' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.975rem',
              color: 'rgba(233,229,255,0.85)',
              lineHeight: 1.95,
              textAlign: 'justify',
            }}>
              {PHUOC_BAU.definition}
            </p>
          </GlassCard>
        </InView>

        {/* 3 trait cards — floating glassmorphism */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}
        >
          {PHUOC_BAU.traits.map((t) => (
            <motion.div key={t.label} variants={fadeUp}>
              <div style={{
                background: `linear-gradient(135deg, ${t.color.replace('from-', '').replace(' to-', ', ')})`,
                border: `1px solid ${t.border.replace('border-', 'rgba(').replace('/20', ', 0.2)')}`,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '1.5rem',
                padding: '1.75rem 1.25rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                <span style={{ fontSize: '1.6rem' }} aria-hidden="true">{t.icon}</span>
                <p style={{
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.18em',
                  color: 'rgba(199,210,254,0.9)',
                  textTransform: 'uppercase',
                }}>
                  {t.label}
                </p>
                <p style={{ color: 'rgba(196,181,253,0.78)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Warning quote */}
        <InView delay={0.1}>
          <figure style={{
            borderLeft: '3px solid rgba(165,180,252,0.45)',
            paddingLeft: '1.75rem',
            margin: '0 0 2.5rem 0',
          }}>
            <blockquote style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'rgba(221,214,254,0.88)',
              lineHeight: 1.85,
            }}>
              &ldquo;{PHUOC_BAU.warning}&rdquo;
            </blockquote>
          </figure>
        </InView>

        {/* Sources table */}
        <InView delay={0.12}>
          <p style={{
            textAlign: 'center',
            color: 'rgba(165,180,252,0.5)',
            letterSpacing: '0.12em',
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Thiện Hành Sinh Ra Phước Báu
          </p>
          <GlassCard style={{ padding: '0', overflow: 'hidden', borderColor: 'rgba(165,180,252,0.1)' }}>
            {PHUOC_BAU.sources.map((s, i) => (
              <div
                key={s.num}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.1rem 1.5rem',
                  borderBottom: i < PHUOC_BAU.sources.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <span style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.85rem',
                  color: 'rgba(165,180,252,0.4)',
                  minWidth: '28px',
                  paddingTop: '2px',
                }}>
                  {s.num}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-sans)', color: 'rgba(224,220,255,0.85)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{s.act}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', color: 'rgba(165,180,252,0.6)', fontSize: '0.82rem' }}>→ {s.result}</p>
                </div>
              </div>
            ))}
          </GlassCard>
        </InView>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   PHÂN ĐOẠN 3 — MỐI QUAN HỆ & LỜI RĂN
═══════════════════════════════════════════════ */
function SegmentLoiRan() {
  const lotusRef = useRef(null)
  const lotusInView = useInView(lotusRef, { once: true, margin: '-80px' })

  return (
    <section
      aria-label="Lời Răn Của Minh Sư"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem',
        background: 'linear-gradient(180deg, #1c1917 0%, #0c0a09 50%, #020617 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hào quang trung tâm */}
      <motion.div
        ref={lotusRef}
        aria-hidden="true"
        animate={lotusInView
          ? { opacity: [0, 0.6, 0.4], scale: [0.5, 1.1, 1], rotate: [0, 180, 360] }
          : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 4, ease: 'easeOut', repeat: Infinity, repeatDuration: 18 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.05) 0%, rgba(217,119,6,0.03) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* Inner halo ring */}
      <motion.div
        aria-hidden="true"
        animate={lotusInView ? { opacity: [0, 0.25, 0.15], rotate: [0, -360] } : { opacity: 0 }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          border: '1px dashed rgba(251,191,36,0.15)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '760px', width: '100%', margin: '0 auto', zIndex: 1 }}>
        {/* Header */}
        <InView style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <SectionEyebrow text={LOI_RAN.eyebrow} />
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontWeight: 700,
            color: 'rgba(254,243,199,0.9)',
            lineHeight: 1.3,
            marginBottom: '0.5rem',
          }}>
            {LOI_RAN.title}
          </h3>
          <div style={{
            width: '80px', height: '1px', margin: '1rem auto',
            background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.5), transparent)',
          }} />
          {/* Lotus symbol */}
          <motion.span
            style={{ display: 'block', fontSize: '2.5rem', color: 'rgba(251,191,36,0.4)', marginTop: '0.5rem' }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ❁
          </motion.span>
        </InView>

        {/* Main teaching — siêu lớn, mượt */}
        <InView delay={0.1}>
          <GlassCard style={{
            textAlign: 'center',
            padding: '3rem 2.5rem',
            marginBottom: '3rem',
            borderColor: 'rgba(251,191,36,0.15)',
            boxShadow: '0 0 60px rgba(251,191,36,0.06), 0 8px 32px rgba(0,0,0,0.5)',
          }}>
            <blockquote style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
              fontWeight: 400,
              color: 'rgba(254,243,199,0.88)',
              lineHeight: 2,
              letterSpacing: '0.01em',
            }}>
              &ldquo;{LOI_RAN.main_teaching}&rdquo;
            </blockquote>
          </GlassCard>
        </InView>

        {/* Relationship diagram */}
        <InView delay={0.1}>
          <p style={{
            textAlign: 'center',
            color: 'rgba(251,191,36,0.45)',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Sơ Đồ Phân Biệt
          </p>
        </InView>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '3rem' }}
        >
          {LOI_RAN.relationship.map((r, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
                padding: '1.25rem 1.75rem',
                borderColor: i === 0 ? 'rgba(251,191,36,0.15)' : 'rgba(165,180,252,0.1)',
              }}>
                <span style={{ color: i === 0 ? 'rgba(254,243,199,0.85)' : 'rgba(196,181,253,0.75)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>
                  {r.from}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.2rem' }}>{r.arrow}</span>
                <span style={{ color: i === 0 ? 'rgba(251,191,36,0.9)' : 'rgba(165,180,252,0.8)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem' }}>
                  {r.to}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Warning insight */}
        <InView delay={0.12}>
          <GlassCard style={{
            borderLeft: '3px solid rgba(251,191,36,0.35)',
            borderRadius: '0 1.5rem 1.5rem 0',
            borderColor: 'rgba(251,191,36,0.08)',
            marginBottom: '2.5rem',
            padding: '1.5rem 1.75rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'rgba(254,243,199,0.7)',
              fontSize: '0.95rem',
              lineHeight: 1.85,
            }}>
              {LOI_RAN.kieu_ranh}
            </p>
          </GlassCard>
        </InView>

        {/* 3 final verses */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {LOI_RAN.verses.map((v, i) => (
            <motion.figure key={i} variants={fadeScale} style={{ margin: 0 }}>
              <GlassCard style={{
                textAlign: 'center',
                padding: '2rem',
                borderColor: 'rgba(251,191,36,0.07)',
              }}>
                <span style={{
                  display: 'block',
                  color: 'rgba(251,191,36,0.3)',
                  fontSize: '1.5rem',
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-serif)',
                }}>
                  ☸
                </span>
                <blockquote style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'rgba(241,235,220,0.86)',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  lineHeight: 1.85,
                  marginBottom: '0.75rem',
                }}>
                  &ldquo;{v.text}&rdquo;
                </blockquote>
                <figcaption style={{
                  fontSize: '0.78rem',
                  color: 'rgba(251,191,36,0.5)',
                  letterSpacing: '0.1em',
                }}>
                  {v.src}
                </figcaption>
              </GlassCard>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════ */
export default function CongDucSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })

  return (
    <div
      id="cong-duc-phuoc-bau"
      role="region"
      aria-label="Module Công Đức và Phước Báu Nhân Thiên"
      style={{ position: 'relative' }}
    >
      {/* ── Module Section Header ── */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        style={{
          textAlign: 'center',
          padding: '5rem 1.5rem 2rem',
          background: 'linear-gradient(180deg, #030712 0%, #020617 100%)',
        }}
      >
        <p style={{
          fontFamily: 'Georgia, serif',
          letterSpacing: '0.22em',
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          color: 'rgba(251,191,36,0.55)',
          marginBottom: '0.75rem',
        }}>
          Module III · Giảng Pháp
        </p>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '0.01em',
          marginBottom: '1rem',
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #fef3c7, #fbbf24)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Công Đức
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 0.4rem' }}>&</span>
          <span style={{
            background: 'linear-gradient(135deg, #c7d2fe, #a5b4fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Phước Báu Nhân Thiên
          </span>
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontStyle: 'italic',
          color: 'rgba(160,175,195,0.65)',
          maxWidth: '520px',
          margin: '0 auto',
          fontSize: '0.97rem',
          lineHeight: 1.8,
        }}>
          {SECTION_META.subtitle}
        </p>
      </motion.div>

      {/* ── 3 Phân Đoạn Nối Tiếp ── */}
      <SegmentCongDuc />
      <Divider />
      <SegmentPhuocBau />
      <Divider />
      <SegmentLoiRan />
    </div>
  )
}
