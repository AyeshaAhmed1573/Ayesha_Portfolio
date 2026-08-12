import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-top">
        <div></div>
        <div className="hero-socials mono">
          GH: /AyeshaAhmed1573<br />
          LI: https://www.linkedin.com/in/ayesha-ahmed-7a3b77262/<br />
          MAIL: ayeshaahmed1573@gmail.com
        </div>
      </div>

      <Reveal className="wrap hero-title-block in-view">
        <div className="ghost-text">PORTFOLIO</div>
        <h1 className="hero-main-title">PORTFOLIO</h1>
      </Reveal>

      <div className="wrap hero-flex">
        <div className="hero-photo">
          <span className="initials">AA.</span>
          <span className="hero-code-tag">&lt;fullstack/&gt;</span>
        </div>
        <div>
          <p className="mono" style={{ fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 10 }}>
            Final-year CS Student — University of Karachi
          </p>
          <p style={{ maxWidth: '34ch', fontSize: '1.05rem', opacity: 0.85, lineHeight: 1.55 }}>
            MERN &amp; developer building things that work, and look good doing it.
          </p>
        </div>
      </div>

      <div className="hero-tagline-strip">
        <div className="wrap">
          <p>Full-stack developer with hands-on MERN experience and growing proficiency in Data Science — I like shipping clean, performant code from day one.</p>
        </div>
      </div>

      <div className="scroll-down-wrap">
        <a href="#about" className="scroll-down">Scroll<br />down</a>
      </div>
    </section>
  )
}
