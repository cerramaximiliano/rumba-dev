import { Link } from 'react-router-dom'
import heroImg from '../assets/images/dev-5.jpg'
import offering3 from '../assets/images/offering-3.jpg'
import testimonial1 from '../assets/images/testimonial-1.jpg'
import testimonial2 from '../assets/images/testimonial-2.jpg'
import testimonial3 from '../assets/images/testimonial-3.jpg'

const services = [
  {
    icon: '💼',
    title: 'Business application development',
    description:
      'Rumba will develop and deploy your business applications within the timelines you provide. We can develop mobile, PC, and server-based applications customized for your business needs.',
  },
  {
    icon: '📱',
    title: 'Mobile application development',
    description:
      'Are you looking to create a mobile application for your customers? Maybe you want a solution for specific problems? You can trust Rumba for all your android and iOS mobile apps.',
  },
  {
    icon: '🚀',
    title: 'Application deployment and training',
    description:
      'Let Rumba develop and deploy your software application for successful implementation and ongoing training.',
  },
]

const testimonials = [
  {
    photo: testimonial1,
    name: 'Jane Faber',
    quote:
      'The team at Rumba is quite friendly and do all it takes to ensure transparent communication throughout the process.',
  },
  {
    photo: testimonial2,
    name: 'John Smith',
    quote:
      'I was able to launch my app within a few weeks, and it works perfectly. The team also follows up to ensure we\'re good.',
  },
  {
    photo: testimonial3,
    name: 'Madelaine Taylor',
    quote:
      'I was skeptical to work with a local developer so I went for the best I could find, and Rumba didn\'t disappoint.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center text-center text-white"
        style={{
          minHeight: '100vh',
          background: `linear-gradient(rgba(21,32,77,0.88) 0%, rgba(21,32,77,0.78) 100%), url(${heroImg}) center/cover no-repeat`,
        }}
      >
        <div className="max-w-3xl px-6 py-32">
          <h1
            className="font-extrabold leading-tight mb-6"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            A developer you can trust.
          </h1>
          <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Rumba is dedicated to providing custom products and solutions for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block font-semibold px-8 py-3 rounded text-base transition-opacity hover:opacity-85"
            style={{ backgroundColor: 'white', color: 'var(--navy)' }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-sm font-semibold mb-2" style={{ color: 'var(--teal)' }}>
            What we do
          </p>
          <h2
            className="font-bold mb-12"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--navy)' }}
          >
            Create any application you can think of.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-lg p-8 flex flex-col gap-4 shadow-sm"
                style={{ backgroundColor: 'white' }}
              >
                <span className="text-4xl">{s.icon}</span>
                <h3
                  className="font-bold text-lg"
                  style={{ fontFamily: 'Exo, sans-serif', color: 'var(--navy)' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offering banner */}
      <section
        className="relative py-24 px-6 text-white text-center"
        style={{
          background: `linear-gradient(to bottom, rgba(21,32,77,0.35) 0%, rgba(0,0,0,0.50) 100%), url(${offering3}) center/cover no-repeat`,
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="uppercase tracking-widest text-sm mb-3" style={{ color: 'var(--teal)' }}>
            Our offering
          </p>
          <h2
            className="font-bold mb-8"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Manifesting your best ideas.
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/about"
              className="px-7 py-3 font-semibold rounded transition-opacity hover:opacity-85 text-sm"
              style={{ backgroundColor: 'white', color: 'var(--navy)' }}
            >
              About Us
            </Link>
            <Link
              to="/specialities"
              className="px-7 py-3 font-semibold rounded transition-opacity hover:opacity-85 text-sm"
              style={{ backgroundColor: 'var(--navy)', color: 'white', border: '2px solid white' }}
            >
              Our Offering
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-sm font-semibold mb-2 text-center" style={{ color: 'var(--teal)' }}>
            What clients say
          </p>
          <h2
            className="font-bold text-center mb-12"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: 'var(--navy)' }}
          >
            Manifesting your best ideas.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-lg p-8 flex flex-col items-center gap-5 shadow-sm text-center"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover"
                  style={{ border: `3px solid var(--teal)` }}
                />
                <p className="text-sm leading-relaxed italic" style={{ color: '#555' }}>
                  "{t.quote}"
                </p>
                <span className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>
                  — {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center text-white"
        style={{ backgroundColor: 'var(--navy)' }}
      >
        <h2
          className="font-bold mb-6"
          style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
        >
          Ready to build something great?
        </h2>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 font-semibold rounded transition-opacity hover:opacity-85 text-sm"
          style={{ backgroundColor: 'white', color: 'var(--navy)' }}
        >
          Contact Us
        </Link>
      </section>
    </main>
  )
}
