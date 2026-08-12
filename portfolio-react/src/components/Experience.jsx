import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section className="experience">
      <div className="wrap">
        <Reveal className="exp-box">
          <div>
            <span className="eyebrow" style={{ color: '#5a3f16' }}>02 — Experience</span>
            <h2>Experience</h2>
            <ul className="timeline">
              <li>
                <span className="date">09/2025 – 10/2025</span>
                <div className="role">MERN Stack Intern</div>
                <div className="sub">
                  ZetaCorp, Karachi — built 8+ reusable React + Tailwind components,
                  implemented JWT auth flows, and cut inventory API response time by ~25%
                </div>
              </li>
              <li>
                <span className="date">08/2023 – 09/2023</span>
                <div className="role">Frontend Intern</div>
                <div className="sub">
                  CODSOFT, Karachi — converted 4 Figma designs into fully responsive
                  pages with HTML, CSS, JS &amp; Bootstrap
                </div>
              </li>
            </ul>
          </div>
          <div className="exp-right">
            <p className="lede">
              Two internships, one theme: shipping real features under real constraints,
              working in an agile team of 5 with Git branching and PR reviews.
            </p>
            <div className="tag-row">
              <span className="tag-black">#Internship</span>
              <span className="tag-black">#MERN</span>
              <span className="tag-black">#Agile</span>
              <span className="tag-black">#TeamPlayer</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
