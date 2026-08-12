import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal.jsx'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | ok | err
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('err')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'ayeshaahmed1573@gmail.com',
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('ok')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('err')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--amber)' }}>06 — Get in touch</span>
          <h2>Let's build<br />something<span className="cursor-blink">&nbsp;</span></h2>
          <p className="lede">Looking for frontend and full-stack opportunities in Karachi and remote — always happy to talk about a role, a project, or just code.</p>
        </Reveal>
        <Reveal className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@email.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="Let's talk about..." value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="pill submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'ok' && <p className="form-status ok">Message sent — thanks! I'll reply soon.</p>}
            {status === 'err' && (
              <p className="form-status err">
                Couldn't send — check that VITE_EMAILJS_* keys are set in your .env file (see README).
              </p>
            )}
          </form>
          <div>
            <div className="contact-info-list">
              <div className="row"><span className="icon">📍</span> Karachi, Pakistan</div>
              <div className="row"><span className="icon">✉️</span> ayeshaahmed1573@gmail.com</div>
              <div className="row"><span className="icon">☎</span> +92 311 7780937</div>
            </div>
            <div className="socials-inline">
              <a href="https://github.com/AyeshaAhmed1573" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/ayesha-ahmed-7a3b77262/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
