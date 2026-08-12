import { useEffect, useState } from 'react'

export default function Nav() {
  const [onLight, setOnLight] = useState(false)

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
    <nav className={`nav ${onLight ? 'on-light' : ''}`}>
      <div className="logo">
        <span className="spark">✦</span> Ayesha
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#work">Work</a>
        <a href="#contact" className="pill">Get in touch!</a>
      </div>
    </nav>
  )
}
