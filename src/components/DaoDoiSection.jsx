import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import data from '../data/dao_doi.json'

/* ─── Animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const colVariants = {
  hidden:  (dir) => ({ opacity: 0, x: dir === 'left' ? -48 : 48 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.72, ease: [0.4, 0, 0.2, 1] } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

/* ─── Single Pair Row ─── */
function PairRow({ pair, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  const [doiGlow, setDoiGlow] = useState(false)
  const [daoGlow, setDaoGlow] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="pair-row"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* ── Cột TRẦN THẾ (trái) ── */}
      <motion.div
        className={`pair-col doi-col ${doiGlow ? 'glow-active' : ''}`}
        custom="left"
        variants={colVariants}
        onMouseEnter={() => setDoiGlow(true)}
        onMouseLeave={() => setDoiGlow(false)}
      >
        <span className="col-icon" aria-hidden="true">{pair.doi.icon}</span>
        <span className="col-badge doi-badge">{pair.doi.label}</span>
        <p className="col-content">{pair.doi.content}</p>
      </motion.div>

      {/* ── Dải phân cách trung tâm ── */}
      <div className="pair-divider" aria-hidden="true">
        <div className="divider-line" />
        <span className="divider-symbol">☯</span>
        <div className="divider-line" />
      </div>

      {/* ── Cột TÂM LINH (phải) ── */}
      <motion.div
        className={`pair-col dao-col ${daoGlow ? 'glow-active' : ''}`}
        custom="right"
        variants={colVariants}
        onMouseEnter={() => setDaoGlow(true)}
        onMouseLeave={() => setDaoGlow(false)}
      >
        <span className="col-icon" aria-hidden="true">{pair.dao.icon}</span>
        <span className="col-badge dao-badge">{pair.dao.label}</span>
        <p className="col-content">{pair.dao.content}</p>
      </motion.div>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export default function DaoDoiSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px 0px' })

  return (
    <section
      id="dao-doi"
      className="daodoi-section"
      aria-label="Module Đạo và Đời"
    >
      {/* Jade gradient background layer */}
      <div className="daodoi-bg" aria-hidden="true" />

      {/* Section header */}
      <motion.div
        ref={titleRef}
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="section-title">
          <span className="text-jade">Đạo</span>
          <span className="dao-amp"> &amp; </span>
          <span className="text-slate">Đời</span>
        </h2>
        <p className="section-desc">{data.meta.description}</p>
        <div className="daodoi-col-labels" aria-hidden="true">
          <span className="label-doi">⚡ Trần Thế</span>
          <span className="label-center">↔</span>
          <span className="label-dao">🌅 Tâm Linh</span>
        </div>
      </motion.div>

      {/* Pairs */}
      <div className="pairs-container">
        {data.pairs.map((pair, i) => (
          <PairRow key={pair.id} pair={pair} index={i} />
        ))}
      </div>

      {/* Closing verse */}
      <motion.blockquote
        className="daodoi-closing-verse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p>"Kiếp sống vô thường — từ bỏ tham vọng vật chất để tìm về sự bình an nội tại."</p>
        <footer>— Minh sư Ruma</footer>
      </motion.blockquote>
    </section>
  )
}
