import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section className="edu" id="resume">
      <div className="ghost-resume">RESUME</div>
      <div className="wrap edu-grid" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <h2>Education</h2>
          <ul className="timeline">
            <li>
              <span className="date">2023 – 2026</span>
              <div className="role">B.Sc. Computer Science</div>
              <div className="sub">University of Karachi (DCS-UBIT)</div>
            </li>
            <li>
              <span className="date">2020 – 2022</span>
              <div className="role">Intermediate, Pre-Engineering</div>
              <div className="sub">Al Badar Higher Secondary School</div>
            </li>
            <li>
              <span className="date"> 2020</span>
              <div className="role">Matriculation, Biology</div>
              <div className="sub">Al Badar Higher Secondary School</div>
            </li>
          </ul>
        </Reveal>

        <Reveal className="skills-block">
          <h2 style={{ fontSize: 'clamp(2.2rem,5vw,3.4rem)' }}>Technical Skills</h2>
          <div className="skills-cols">
            <div>
              <h4>Frontend</h4>
              <div className="chip-row">
                <span className="chip">HTML5</span>
                <span className="chip">CSS3</span>
                <span className="chip">JavaScript (ES6+)</span>
                <span className="chip">React.js</span>
                <span className="chip">Tailwind CSS</span>
                <span className="chip">Bootstrap</span>
              </div>
            </div>
            <div>
              <h4>Backend &amp; DB</h4>
              <div className="chip-row">
                <span className="chip">Node.js</span>
                <span className="chip">Express.js</span>
                <span className="chip">Laravel</span>
                <span className="chip">MongoDB</span>
                <span className="chip">PostgreSQL</span>
                <span className="chip">MySQL</span>
              </div>
            </div>
            <div>
              <h4>Languages</h4>
              <div className="chip-row">
                <span className="chip">JavaScript</span>
                <span className="chip">Python</span>
                <span className="chip">Java (OOP)</span>
                <span className="chip">C++</span>
                <span className="chip">PHP</span>
              </div>
            </div>
            <div>
              <h4>Data &amp; Tools</h4>
              <div className="chip-row">
                <span className="chip">NumPy</span>
                <span className="chip">Pandas</span>
                <span className="chip">Matplotlib</span>
                <span className="chip">Seaborn</span>
                <span className="chip">Git</span>
                <span className="chip">Postman</span>
              </div>
            </div>
          </div>
          <div className="tag-row">
            <span className="tag-black">#JWT Auth</span>
            <span className="tag-black">#REST APIs</span>
            <span className="tag-black">#MVC</span>
            <span className="tag-black">#DataScience</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
