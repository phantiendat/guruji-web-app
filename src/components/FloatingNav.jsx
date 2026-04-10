import { useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Trí Huệ',   href: '#tinh-hoa'    },
  { label: 'Đạo & Đời', href: '#dao-doi'      },
  { label: 'Công Đức',  href: '#cong-duc'     },
  { label: 'Minh Sư',   href: '#minh-su'      },
  { label: 'Thiền Định', href: '#thien-co-dai' },
]

export default function FloatingNav() {
  const { scrollY } = useScroll()
  const navRef = useRef(null)
  const lastY = useRef(0)
  const visibleRef = useRef(true)

  useMotionValueEvent(scrollY, 'change', (current) => {
    const prev = lastY.current
    const direction = current - prev // positive = down, negative = up
    lastY.current = current

    if (!navRef.current) return

    const atTop = current < 80

    if (atTop || direction < 0) {
      // Scrolling UP or at top → show
      if (!visibleRef.current) {
        visibleRef.current = true
        navRef.current.style.transform = 'translateX(-50%) translateY(0)'
        navRef.current.style.opacity = '1'
        navRef.current.style.pointerEvents = 'auto'
      }
    } else if (direction > 0) {
      // Scrolling DOWN → hide
      if (visibleRef.current) {
        visibleRef.current = false
        navRef.current.style.transform = 'translateX(-50%) translateY(120%)'
        navRef.current.style.opacity = '0'
        navRef.current.style.pointerEvents = 'none'
      }
    }
  })

  return (
    <nav
      ref={navRef}
      aria-label="Điều hướng nhanh"
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        left: '50%',
        transform: 'translateX(-50%) translateY(0)',
        opacity: 1,
        pointerEvents: 'auto',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
        zIndex: 9999,
        /* Prevent nav from touching screen edges on tiny screens */
        maxWidth: 'calc(100vw - 2rem)',
      }}
    >
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.15rem',
          listStyle: 'none',
          margin: 0,
          padding: '0.45rem 0.6rem',
          borderRadius: '9999px',
          background: 'rgba(28,24,20,0.72)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
          whiteSpace: 'nowrap',
        }}
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              style={{
                display: 'inline-block',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                letterSpacing: '0.06em',
                color: 'rgba(240,232,213,0.65)',
                textDecoration: 'none',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 400,
                transition: 'color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'rgba(232,201,126,0.95)'
                e.currentTarget.style.background = 'rgba(201,168,76,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(240,232,213,0.65)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
