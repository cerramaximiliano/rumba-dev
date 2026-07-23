import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Offering', to: '/specialities' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--navy)' }} className="text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="Rumba" style={{ height: 44, width: 'auto' }} className="self-start" />
            <p className="text-white/70 text-sm leading-relaxed">
              Dedicated to providing custom products and solutions for your needs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a href="mailto:contact@rumba-dev.com" className="hover:text-white transition-colors">
                contact@rumba-dev.com
              </a>
              <a href="tel:+13206134370" className="hover:text-white transition-colors">
                +1 320 613 4370
              </a>
              <a href="https://www.rumba-dev.com" className="hover:text-white transition-colors">
                www.rumba-dev.com
              </a>
              <p className="leading-snug">
                20 Penn Mart Shopping Ctr PMB 576<br />
                New Castle, DE 19720
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-block text-white text-sm font-semibold px-5 py-2 rounded text-center transition-opacity hover:opacity-80"
                style={{ border: '2px solid white', width: 'fit-content' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/50 text-xs">Copyright Rumba LLC 2022</span>
          <a
            href="https://www.instagram.com/rumballc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @rumballc
          </a>
        </div>
      </div>
    </footer>
  )
}
