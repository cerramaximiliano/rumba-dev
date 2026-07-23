import { Link } from 'react-router-dom'
import offering1 from '../assets/images/offering-1.jpg'
import offering2 from '../assets/images/offering-2.jpg'
import offering3 from '../assets/images/offering-3.jpg'
import dev6 from '../assets/images/dev-6.jpg'

const services = [
  {
    image: offering1,
    title: 'Business application development',
    description:
      'Rumba will develop and deploy your business applications within the timelines you provide. We can develop mobile, PC, and server-based applications customized for your business needs.',
  },
  {
    image: offering2,
    title: 'Mobile application development',
    description:
      'Are you looking to create a mobile application for your customers? Maybe you want a solution for specific problems? You can trust Rumba for all your android and iOS mobile apps.',
  },
  {
    image: offering3,
    title: 'Application deployment and training',
    description:
      'Let Rumba develop and deploy your software application for successful implementation and ongoing training.',
  },
]

export default function Specialities() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex items-center text-white"
        style={{
          minHeight: '60vh',
          background: `linear-gradient(rgba(21,32,77,0.75), rgba(21,32,77,0.65)), url(${offering1}) center/cover no-repeat`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-32">
          <p className="uppercase tracking-widest text-sm mb-3" style={{ color: 'var(--teal)' }}>
            Our offering
          </p>
          <h1
            className="font-extrabold leading-tight"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', maxWidth: 680 }}
          >
            Create any application you can think of.
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl leading-relaxed">
            We serve businesses and clients around the world, offering premium and reliable application development.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full object-cover"
                  style={{ maxHeight: 380 }}
                />
              </div>
              <div>
                <span
                  className="inline-block text-2xl font-bold mb-1"
                  style={{ color: 'var(--teal)', fontFamily: 'Exo, sans-serif' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2
                  className="font-bold mb-4"
                  style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--navy)' }}
                >
                  {s.title}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#666' }}>
                  {s.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-7 py-3 font-semibold rounded text-sm transition-opacity hover:opacity-85"
                  style={{ backgroundColor: 'var(--navy)', color: 'white' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Excellence */}
      <section
        className="relative py-24 px-6 text-white text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${dev6}) center/cover no-repeat`,
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="uppercase tracking-widest text-sm mb-3" style={{ color: 'var(--teal)' }}>
            Our craft
          </p>
          <h2
            className="font-bold mb-4"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Design excellence.
          </h2>
          <p className="text-white/80 text-base mb-8 leading-relaxed">
            We proudly serve Buenos Aires, bringing the best of modern technology and conveniences.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 font-semibold rounded text-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: 'white', color: 'var(--navy)' }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <p className="uppercase tracking-widest text-sm font-semibold mb-2" style={{ color: 'var(--teal)' }}>
            How we work
          </p>
          <h2
            className="font-bold mb-14"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)' }}
          >
            Our process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Discovery', desc: 'We learn about your goals, needs and timeline.' },
              { step: '02', label: 'Design', desc: 'We craft the architecture and UI/UX for your product.' },
              { step: '03', label: 'Development', desc: 'We build with quality code and agile sprints.' },
              { step: '04', label: 'Delivery', desc: 'We deploy, train, and support your team.' },
            ].map((p) => (
              <div key={p.step} className="flex flex-col items-center gap-3 p-6">
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: 'var(--teal)', fontFamily: 'Exo, sans-serif' }}
                >
                  {p.step}
                </span>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Exo, sans-serif' }}>{p.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
