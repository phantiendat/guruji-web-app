import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Danh sách modules ─────────────────────────────────────── */
const MODULES = [
  { label: 'Tinh Hoa Trí Huệ',         href: '#tinh-hoa' },
  { label: 'Đạo & Đời',                 href: '#dao-doi'  },
  { label: 'Công Đức & Phước Báu',      href: '#cong-duc' },
  { label: 'Minh Sư Là Ai?',            href: '#minh-su'  },
]

/* ─── Framer Motion variants ─────────────────────────────────── */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
}

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
}

const controllerVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.6 },
  },
}

/* ─── Component ──────────────────────────────────────────────── */
export default function NavigationOverlay() {
  const [isOpen, setIsOpen] = useState(false)

  const open  = useCallback(() => setIsOpen(true),  [])
  const close = useCallback(() => setIsOpen(false), [])

  const handleItemClick = useCallback(() => {
    // Đóng overlay trước, anchor sẽ scroll sau
    close()
  }, [close])

  return (
    <>
      {/* ════════════════════════════════════════════════
          PHẦN 1 — Zen Controller (floating pill bottom-center)
          ════════════════════════════════════════════════ */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="controller"
            variants={controllerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 40,
            }}
          >
            <button
              onClick={open}
              aria-label="Mở danh mục chuyên đề"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.55rem 1.4rem',
                borderRadius: '9999px',
                background: 'rgba(28,24,20,0.60)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: 'rgba(240,232,213,0.75)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 400,
                cursor: 'pointer',
                outline: 'none',
                transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'rgba(240,232,213,0.95)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
                e.currentTarget.style.background = 'rgba(28,24,20,0.80)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(240,232,213,0.75)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                e.currentTarget.style.background = 'rgba(28,24,20,0.60)'
              }}
            >
              {/* Hamburger icon — 3 dòng mảnh */}
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  flexShrink: 0,
                }}
              >
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    style={{
                      display: 'block',
                      width: i === 1 ? '14px' : '18px',
                      height: '1px',
                      background: 'currentColor',
                      borderRadius: '1px',
                      transition: 'width 0.2s ease',
                    }}
                  />
                ))}
              </span>
              <span>Danh Mục</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════
          PHẦN 2 — Full-screen Overlay Menu
          ════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 50,
              background: 'rgba(12,10,8,0.97)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflowY: 'auto',
              paddingTop: '5rem',
              paddingBottom: '5rem',
            }}
          >
            {/* Nút đóng — góc phải trên */}
            <button
              onClick={close}
              aria-label="Đóng danh mục"
              style={{
                position: 'absolute',
                top: '1.75rem',
                right: '1.75rem',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '9999px',
                color: 'rgba(240,232,213,0.50)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                cursor: 'pointer',
                outline: 'none',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'rgba(240,232,213,0.90)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(240,232,213,0.50)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
              }}
            >
              ✕
            </button>

            {/* Eyebrow label */}
            <p
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.30em',
                textTransform: 'uppercase',
                color: 'rgba(168,152,128,0.45)',
                marginBottom: '2.5rem',
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Chuyên Đề
            </p>

            {/* Danh sách modules */}
            <motion.nav
              aria-label="Điều hướng chuyên đề"
              variants={listContainerVariants}
              initial="hidden"
              animate="visible"
              style={{ width: '100%', maxWidth: '480px', padding: '0 2rem' }}
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {MODULES.map(({ label, href }) => (
                  <motion.li key={href} variants={listItemVariants}>
                    <a
                      href={href}
                      onClick={handleItemClick}
                      style={{
                        display: 'block',
                        padding: '1rem 0',
                        fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
                        fontWeight: 300,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontStyle: 'italic',
                        color: 'rgba(168,152,128,0.65)',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        transition: 'color 0.25s ease, padding-left 0.25s ease',
                        letterSpacing: '0.02em',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = 'rgba(240,232,213,0.95)'
                        e.currentTarget.style.paddingLeft = '0.5rem'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'rgba(168,152,128,0.65)'
                        e.currentTarget.style.paddingLeft = '0'
                      }}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Footer chữ ký nhỏ */}
            <p
              style={{
                position: 'absolute',
                bottom: '1.75rem',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                color: 'rgba(168,152,128,0.25)',
                whiteSpace: 'nowrap',
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              GURUJI RUMA — TĨNH TÂM
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
