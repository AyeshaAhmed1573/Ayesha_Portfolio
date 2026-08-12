import Reveal from './Reveal.jsx'

const GH = 'https://github.com/AyeshaAhmed1573'

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">03 — Selected work</span>
          <h2>Projects</h2>
          <p className="lede">A mix of full-stack builds and focused practice projects — mostly MERN, one in Laravel.</p>
        </Reveal>

        <div className="proj-grid">
          <Reveal as="div" className="proj-card featured">
            <span className="num">FEATURED</span>
            <h3>ATS System</h3>
            <p>
              Full-stack job portal with a recruiter dashboard and candidate pipeline
              tracking across 3 distinct roles. JWT authentication, role-based access
              control, and a RESTful API layer, with a responsive React + Tailwind
              frontend supporting live job-listing filtering.
            </p>
            <div className="proj-tags">
              <span>React</span><span>Tailwind</span><span>Node.js</span><span>Express</span><span>JWT Auth</span>
            </div>
            <div className="proj-links">
              <a href="https://github.com/AyeshaAhmed1573/ATS" target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </Reveal>

          <Reveal as="div" className="proj-card">
            <span className="num">01</span>
            <h3>Inventory Management System</h3>
            <p>Multi-store backend supporting stock-in/out across 3 locations, with database normalization and indexed queries for concurrent updates.</p>
            <div className="proj-tags"><span>PostgreSQL</span><span>MySQL</span><span>Node.js</span></div>
            <div className="proj-links"><a href="https://github.com/AyeshaAhmed1573/Three-Phase-Inventory-Management-System" target="_blank" rel="noopener noreferrer">GitHub →</a></div>
          </Reveal>

          <Reveal as="div" className="proj-card">
            <span className="num">02</span>
            <h3>CyberHub</h3>
            <p>A React.js + Firebase platform for sharing cybersecurity tools, with authentication, role-based access control, and content visibility settings.</p>
            <div className="proj-tags"><span>React</span><span>Firebase</span><span>Auth</span></div>
            <div className="proj-links"><a href="https://github.com/AyeshaAhmed1573/iba-hackathon" target="_blank" rel="noopener noreferrer">GitHub →</a></div>
          </Reveal>

          <Reveal as="div" className="proj-card">
            <span className="num">03</span>
            <h3>Laravel Blog / Job Board</h3>
            <p>Full CRUD job-listings app built with Blade templating, form validation, and Laravel Auth.</p>
            <div className="proj-tags"><span>Laravel</span><span>PHP</span><span>Blade</span></div>
            <div className="proj-links"><a href="https://github.com/AyeshaAhmed1573/Blog-Web" target="_blank" rel="noopener noreferrer">GitHub →</a></div>
          </Reveal>
            <Reveal as="div" className="proj-card">
            <span className="num">04</span>
            <h3>AI-powered-code-reviewer
</h3>
            <p>A modern, full-stack web application that leverages Google's Gemini AI to provide intelligent code reviews. Built with React frontend and Node.js backend, this tool helps developers improve code quality through AI-powered analysis and suggestions.</p>
            <div className="proj-tags"><span>React</span><span>Node.js</span><span>AI</span></div>
            <div className="proj-links"><a href="https://github.com/AyeshaAhmed1573/AI-powered-code-reviewer" target="_blank" rel="noopener noreferrer">GitHub →</a></div>
          </Reveal>
        </div>
      
      </div>
    </section>
  )
}
