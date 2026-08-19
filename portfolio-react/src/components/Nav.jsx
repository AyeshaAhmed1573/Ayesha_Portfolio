import { useEffect, useState } from 'react'

export default function Nav() {
  const [onLight, setOnLight] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return
    const io = new IntersectionObserver(
      ([entry]) => setOnLight(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-90px 0px 0px 0px' }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return (
    <div>
      <nav className={`nav ${onLight ? 'on-light' : ''}`}>
        <div className="logo">
          <span className="spark">✦</span> Ayesha
        </div>
        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#resume" onClick={() => setMobileMenuOpen(false)}>Resume</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="#contact" className="pill" onClick={() => setMobileMenuOpen(false)}>Get in touch!</a>
        </div>
      </nav>
      <div 
        className={`nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </div>
  )
}
