import { Link } from 'react-router-dom'
import dev3 from '../assets/images/dev-3.jpg'
import dev4 from '../assets/images/dev-4.jpg'

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex items-center text-white"
        style={{
          minHeight: '60vh',
          background: `linear-gradient(rgba(21,32,77,0.8), rgba(21,32,77,0.7)), url(${dev4}) center/cover no-repeat`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-32">
          <p className="uppercase tracking-widest text-sm mb-3" style={{ color: 'var(--teal)' }}>
            Who we are
          </p>
          <h1
            className="font-extrabold leading-tight"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', maxWidth: 600 }}
          >
            About
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl leading-relaxed">
            Designing your apps with passion.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold mb-2" style={{ color: 'var(--teal)' }}>
              Our mission
            </p>
            <h2
              className="font-bold mb-6"
              style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--navy)' }}
            >
              We proudly serve the world, bringing the best of modern technology and conveniences.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#666' }}>
              We proudly serve the world, bringing the best of modern technology and conveniences.
              Our team of dedicated developers and designers work tirelessly to deliver solutions
              that exceed expectations.
            </p>
            <Link
              to="/contact"
              className="inline-block px-7 py-3 font-semibold rounded text-sm transition-opacity hover:opacity-85"
              style={{ backgroundColor: 'var(--navy)', color: 'white' }}
            >
              Contact Us
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={dev3} alt="Development team" className="w-full h-full object-cover" style={{ maxHeight: 420 }} />
          </div>
        </div>
      </section>

      {/* Design Excellence */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: 'var(--navy)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <img src={dev4} alt="Design team" className="w-full object-cover" style={{ maxHeight: 420 }} />
          </div>
          <div className="text-white order-1 md:order-2">
            <p className="uppercase tracking-widest text-sm font-semibold mb-2" style={{ color: 'var(--teal)' }}>
              Our craft
            </p>
            <h2
              className="font-bold mb-6"
              style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
            >
              Design excellence.
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Every product we build is crafted with precision and care. We believe that great
              design is not just about how something looks — it's about how it works, performs,
              and serves the people who use it.
            </p>
            <Link
              to="/specialities"
              className="inline-block px-7 py-3 font-semibold rounded text-sm transition-opacity hover:opacity-85"
              style={{ backgroundColor: 'var(--teal)', color: 'var(--navy)' }}
            >
              See Our Offering
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-widest text-sm font-semibold mb-2" style={{ color: 'var(--teal)' }}>
            What drives us
          </p>
          <h2
            className="font-bold mb-14"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: 'var(--navy)' }}
          >
            Our core values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: '🔒', title: 'Trust', desc: 'We build long-term relationships grounded in honesty and reliability.' },
              { icon: '💡', title: 'Innovation', desc: 'We stay ahead of the curve to deliver cutting-edge solutions.' },
              { icon: '🤝', title: 'Partnership', desc: 'Your success is our success — we work with you, not just for you.' },
            ].map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-lg shadow-sm flex flex-col items-center gap-4 text-center"
                style={{ backgroundColor: 'white' }}
              >
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Exo, sans-serif', color: 'var(--navy)' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
