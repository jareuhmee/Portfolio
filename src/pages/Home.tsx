export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="page-wrapper">
          <div className="hero-layout">

            <div className="hero-content">
              <p className="hero-eyebrow animate-up">New York, NY</p>
              <h1 className="hero-name animate-up">
                <span className="first">Jeremy</span>
                <span className="last">Garcia</span>
              </h1>
              <p className="hero-tagline animate-up">
                <strong>Software Engineer at BNY</strong> — building fast, elegant systems at the
                intersection of finance and technology.
              </p>
              <div className="hero-contact animate-up">
                <a href="https://linkedin.com/in/jeremysgarcia" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/jareuhmee" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            {/* Portrait */}
            <div className="hero-portrait-wrap animate-up">
              <div className="hero-portrait">
                <img src="/portrait.jpg" alt="Jeremy Garcia" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about">
        <div className="page-wrapper">
          <div className="section-tag">About</div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Hello! I'm a <strong>full-stack software engineer</strong> based in New York City with a 
                B.S. in Computer Science from the <strong>University of Florida</strong>. 
                I'm passionate about using technology to solve real-world problems. 
                At <strong>BNY</strong>, I build high-performance platforms for trade mapping and reconciliation, 
                turning complex financial workflows into actionable, reliable systems. 
              </p>
              <p>
                I'm also drawn to <strong>healthcare and human-centered technology</strong>, having led a senior project prototyping a 
                caregiver support app for families navigating autistic meltdowns, and explored machine 
                learning and motion capture for mobility analysis.
              </p>
              <p>
                I thrive at the intersection of <strong>finance, healthcare, and software</strong>, tackling challenging problems and building practical, meaningful solutions.
              </p>
            </div>
            <div className="skills-panel">
              <div>
                <p className="skill-group-label">Languages</p>
                <div className="skill-tags">
                  {['Python','TypeScript','JavaScript','C++','Java','PHP','HTML/CSS','SQL','Bash'].map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="skill-group-label">Tools & Libraries</p>
                <div className="skill-tags">
                  {['Angular','React.js','React Native','Expo','Firebase','MongoDB','LangChain','scikit-learn','Git','Unix/Linux','Jira'].map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="education">
        <div className="page-wrapper">
          <div className="section-tag">Education</div>
          <div className="edu-card">
            <div>
              <div className="edu-degree">B.S. Computer Science</div>
              <div className="edu-school">University of Florida — Gainesville, FL</div>
              <div className="edu-date-mobile">May 2024</div>
              <div className="edu-details">
                Certificate in AI Fundamentals & Applications<br />
                Relevant Coursework: Data Structures & Algorithms, Web Development, UX Design, Intro to ML
              </div>
              <span className="edu-badge">Cum Laude</span>
            </div>
            <div className="edu-date">May 2024</div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="experience">
        <div className="page-wrapper">
          <div className="section-tag">Work Experience</div>
          <div className="exp-list">

            <div className="exp-item">
              <div className="exp-header">
                <div>
                  <div className="exp-company">BNY</div>
                  <div className="exp-role">Software Engineer</div>
                </div>
                <div className="exp-meta">New York, NY<br />Aug 2024 – Present</div>
              </div>
              <div className="exp-body">
                <ul>
                  <li>Led frontend development for a trade mapping platform, building Angular/TypeScript features for hedge accounting, editing, and exception workflows reconciling Summit swaps with BlackRock Aladdin bond data</li>
                  <li>Cut initial load time by ~70% (3× faster) by refactoring mapping logic from quadratic to linear complexity and introducing asynchronous eager data-loading</li>
                  <li>Maintained Python automation jobs and SQL Server stored procedures for data sync, exception notifications, and derivative trade reporting</li>
                  <li>Prototyped an LLM-powered analytics chatbot with Python, LangChain, and SQLAlchemy for natural-language querying via a Text-to-SQL pipeline</li>
                </ul>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-header">
                <div>
                  <div className="exp-company">Technology for Occupational Performance Lab</div>
                  <div className="exp-role">Research Intern</div>
                </div>
                <div className="exp-meta">Gainesville, FL<br />Aug – Dec 2023</div>
              </div>
              <div className="exp-body">
                <ul>
                  <li>Assessed psychometric properties of the ToeScale prototype — a device measuring great toe strength to identify gait and balance impairments</li>
                  <li>Conducted clinical assessments using a markerless motion capture system (Theia3D) to evaluate joint biomechanics per IRB protocol</li>
                  <li>Applied machine learning to characterize force development curves for data analysis</li>
                </ul>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-header">
                <div>
                  <div className="exp-company">Northrop Grumman</div>
                  <div className="exp-role">Software Engineering Intern</div>
                </div>
                <div className="exp-meta">Huntsville, AL<br />Jun – Aug 2023</div>
              </div>
              <div className="exp-body">
                <ul>
                  <li>Contributed to C++/Java modeling and simulation software for the IBCS missile defense platform (Security Clearance: Secret)</li>
                  <li>Automated a 20+ step Linux environment setup with a Bash/Zenity GUI installer, reducing setup time by 85%</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="projects">
        <div className="page-wrapper">
          <div className="section-tag">Projects</div>
          <div className="projects-grid">

            <div className="project-card">
              <div className="project-card-top">
                <div className="project-title">PuzzlePeace</div>
                <div className="project-year">2024</div>
              </div>
              <div className="project-stack">
                {['React Native','Expo','Firebase'].map(t => <span key={t} className="stack-tag">{t}</span>)}
              </div>
              <p className="project-desc">
                Led a 5-person team building a caregiver support app to track and navigate autistic meltdowns. Optimized ABC logging with statistical insights on occurrences and intensity.
              </p>
            </div>

            <div className="project-card">
              <div className="project-card-top">
                <div className="project-title">GatorEats</div>
                <div className="project-year">2023</div>
              </div>
              <div className="project-stack">
                {['JavaScript','HTML/CSS','PHP','SQL'].map(t => <span key={t} className="stack-tag">{t}</span>)}
              </div>
              <p className="project-desc">
                Web app consolidating info for 27 UF dining locations — interactive Leaflet map, search filters, and nutritional data retrieval.
              </p>
            </div>

            <div className="project-card">
              <div className="project-card-top">
                <div className="project-title">Synonymity Seeker</div>
                <div className="project-year">2021</div>
              </div>
              <div className="project-stack">
                {['C++','Qt'].map(t => <span key={t} className="stack-tag">{t}</span>)}
              </div>
              <p className="project-desc">
                Word similarity engine using BFS/DFS graph algorithms across a 120,000+ word dataset. Optimized traversal for fast, accurate, and diverse results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="leadership">
        <div className="page-wrapper">
          <div className="section-tag">Leadership & Involvement</div>
          <div className="leadership-list">

            <div className="lead-item">
              <div>
                <div className="lead-org">Filipino Student Association</div>
                <div className="lead-role">Webmaster</div>
              </div>
              <div className="lead-meta">Gainesville, FL<br />Jun 2023 – May 2024</div>
              <p className="lead-desc">
                Designed, developed, and launched uffsa.net using React.js; collaborated with board members to integrate content, initiatives, and org activities.
              </p>
            </div>

            <div className="lead-item">
              <div>
                <div className="lead-org">Def Talent Jam</div>
                <div className="lead-role">Multimedia & Design Committee Head</div>
              </div>
              <div className="lead-meta">Gainesville, FL<br />Jun – Oct 2023</div>
              <p className="lead-desc">
                Led multimedia team for a 1,500+ attendee dance event — orchestrating task delegation and applying design principles across video, photo, and graphic deliverables.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}