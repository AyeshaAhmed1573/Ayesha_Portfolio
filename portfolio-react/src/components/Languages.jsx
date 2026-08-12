import Reveal from './Reveal.jsx'

export default function Languages() {
  return (
    <section className="lang">
      <div className="wrap lang-grid">
        <Reveal>
          <span className="eyebrow">04 — Languages</span>
          <h2>Language</h2>
          <div className="lang-list">
            <div className="lang-item"><div className="name">English</div><div className="level">Fluent</div></div>
            <div className="lang-item"><div className="name">Urdu</div><div className="level">Native</div></div>
          </div>
        </Reveal>
        <Reveal>
          <span className="eyebrow">05 — Off-screen</span>
          <h2>Hobbies &amp; Interests</h2>
          <div className="interest-row">
            <div className="interest-item"><div className="ic">📊</div><p>Data science</p></div>
            <div className="interest-item"><div className="ic">💻</div><p>Side projects</p></div>
            <div className="interest-item"><div className="ic">🎨</div><p>Graphic design</p></div>
            <div className="interest-item"><div className="ic">📚</div><p>Reading</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
