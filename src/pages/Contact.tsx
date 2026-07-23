import { useState, type FormEvent } from 'react'
import dev7 from '../assets/images/dev-7.jpg'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

type Status = 'idle' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Static site — simulate success
    setStatus('success')
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex items-center text-white"
        style={{
          minHeight: '55vh',
          background: `linear-gradient(rgba(21,32,77,0.78), rgba(21,32,77,0.68)), url(${dev7}) center/cover no-repeat`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-32">
          <p className="uppercase tracking-widest text-sm mb-3" style={{ color: 'var(--teal)' }}>
            Get in touch
          </p>
          <h1
            className="font-extrabold leading-tight"
            style={{ fontFamily: 'Exo, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', maxWidth: 600 }}
          >
            Contact
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl leading-relaxed">
            Give us a call today or send us an email. Our team is waiting to answer all your inquiries.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-14">
          {/* Contact form */}
          <div className="md:col-span-3 bg-white rounded-xl p-10 shadow-sm">
            <h2
              className="font-bold mb-2"
              style={{ fontFamily: 'Exo, sans-serif', fontSize: '1.8rem', color: 'var(--navy)' }}
            >
              Let's Connect
            </h2>
            <p className="text-sm mb-8" style={{ color: '#888' }}>
              Fill in the form and we'll be in touch as soon as possible.
            </p>

            {status === 'success' && (
              <div
                className="rounded-lg p-4 mb-6 text-sm font-medium"
                style={{ backgroundColor: '#e6f9f0', color: '#166534' }}
              >
                Thank you for contacting us. We will get back to you as soon as possible.
              </div>
            )}

            {status === 'error' && (
              <div
                className="rounded-lg p-4 mb-6 text-sm font-medium"
                style={{ backgroundColor: '#fef2f2', color: '#991b1b' }}
              >
                Oops, there was an error sending your message. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--navy)' }}>
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Jane"
                    className="border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{
                      borderColor: '#ddd',
                      backgroundColor: '#fafafa',
                      color: 'var(--text-dark)',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--navy)' }}>
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                    className="border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{
                      borderColor: '#ddd',
                      backgroundColor: '#fafafa',
                      color: 'var(--text-dark)',
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--navy)' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@example.com"
                  className="border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{
                    borderColor: '#ddd',
                    backgroundColor: '#fafafa',
                    color: 'var(--text-dark)',
                  }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--navy)' }}>
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 555 000 0000"
                  className="border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{
                    borderColor: '#ddd',
                    backgroundColor: '#fafafa',
                    color: 'var(--text-dark)',
                  }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--navy)' }}>
                  Leave a message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 resize-none"
                  style={{
                    borderColor: '#ddd',
                    backgroundColor: '#fafafa',
                    color: 'var(--text-dark)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="mt-2 px-8 py-3 font-semibold rounded text-sm transition-opacity hover:opacity-85 text-white"
                style={{ backgroundColor: 'var(--navy)' }}
              >
                Contact Us
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div>
              <h3
                className="font-bold mb-5"
                style={{ fontFamily: 'Exo, sans-serif', fontSize: '1.4rem', color: 'var(--navy)' }}
              >
                Our Contact Info
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ backgroundColor: 'var(--navy)', color: 'white' }}
                  >
                    ✉
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#888' }}>Email</p>
                    <a
                      href="mailto:contact@rumba-dev.com"
                      className="text-sm font-medium hover:underline"
                      style={{ color: 'var(--navy)' }}
                    >
                      contact@rumba-dev.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ backgroundColor: 'var(--navy)', color: 'white' }}
                  >
                    📞
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#888' }}>Phone</p>
                    <a
                      href="tel:+13206134370"
                      className="text-sm font-medium hover:underline"
                      style={{ color: 'var(--navy)' }}
                    >
                      +1 320 613 4370
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ backgroundColor: 'var(--navy)', color: 'white' }}
                  >
                    📍
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#888' }}>Address</p>
                    <p className="text-sm font-medium leading-snug" style={{ color: 'var(--navy)' }}>
                      20 Penn Mart Shopping Ctr PMB 576<br />
                      New Castle, DE 19720
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--navy)', color: 'white' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#888' }}>Instagram</p>
                    <a
                      href="https://www.instagram.com/rumballc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline"
                      style={{ color: 'var(--navy)' }}
                    >
                      @rumballc
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ backgroundColor: 'var(--navy)', color: 'white' }}
                  >
                    🌐
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#888' }}>Website</p>
                    <a
                      href="https://www.rumba-dev.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline"
                      style={{ color: 'var(--navy)' }}
                    >
                      www.rumba-dev.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={dev7} alt="Rumba office" className="w-full object-cover" style={{ maxHeight: 280 }} />
            </div>

            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: 'var(--navy)' }}
            >
              <p
                className="font-bold text-lg mb-2 text-white"
                style={{ fontFamily: 'Exo, sans-serif' }}
              >
                Ready to start?
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Our team typically responds within 24 hours. Let's build something amazing together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
