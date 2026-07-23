import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Offering', to: '/specialities' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--navy)' : 'transparent',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Rumba" style={{ height: 44 }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            style={{ backgroundColor: 'var(--navy)', border: '2px solid white' }}
            className="text-white text-sm font-semibold px-5 py-2 rounded transition-opacity duration-200 hover:opacity-80"
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l14 14M20 6L6 20" />
            ) : (
              <>
                <line x1="4" y1="8" x2="22" y2="8" />
                <line x1="4" y1="14" x2="22" y2="14" />
                <line x1="4" y1="20" x2="22" y2="20" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden py-4 px-6 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--navy)' }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium py-1 transition-colors ${
                  isActive ? 'text-white font-bold' : 'text-white/80'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm font-semibold mt-2 px-5 py-2 rounded text-center"
            style={{ border: '2px solid white', width: 'fit-content' }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}
