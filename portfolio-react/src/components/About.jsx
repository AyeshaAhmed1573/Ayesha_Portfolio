import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <Reveal>
          <span className="eyebrow">01 — About</span>
          <h2>Hello,<br />I'm Ayesha!</h2>
          <p className="bio">
            Full-stack developer with hands-on experience in the MERN stack and growing
            proficiency in Laravel. I've built production-ready features including JWT
            authentication, RESTful APIs, and multi-store inventory systems — and I'm
            currently finishing my B.Sc. in Computer Science while picking up data science
            (NumPy, Pandas, Matplotlib, Seaborn) and some graphic design on the side.
          </p>
          <a href="https://www.linkedin.com/in/ayesha-ahmed-7a3b77262/" target="_blank" rel="noopener noreferrer" className="pill" style={{ background: 'var(--orange)' }}>
            🔗 linkedin.com/in/ayeshaahmed
          </a>
        </Reveal>
        <Reveal>
          <div className="about-photo-wrap">
            <span className="float-badge badge-1">CS Student</span>
            <div className="about-photo"><span className="initials">AA.</span></div>
            <span className="float-badge badge-2">Karachi, Pakistan</span>
          </div>
          <div className="contact-card">
            <h3>Contact</h3>
            <div className="contact-row"><span className="icon">📍</span> Karachi, Pakistan</div>
            <div className="contact-row"><span className="icon">✉️</span> ayeshaahmed1573@gmail.com</div>
            <div className="contact-row"><span className="icon">☎</span> +92 311 7780937</div>
            <span className="location-pill">Open to frontend &amp; full-stack roles</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
