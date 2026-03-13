export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo" onClick={() => document.querySelector('.hero')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
          JG<span>.dev</span>
        </span>
        <div className="navbar-links">
          {/* Original navigation links - commented out for single page design */}
          {/* <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link> */}
          {/* <Link to="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</Link> */}
          {/* <Link to="/about" className={pathname === "/about" ? "active" : ""}>About</Link> */}
          
          {/* New scroll-to-section buttons for single page design */}
          {/* <button className="nav-button" onClick={() => document.querySelector('.hero')?.scrollIntoView({ behavior: 'smooth' })}>Home</button> */}
          <button className="nav-button" onClick={() => document.querySelector('.about')?.scrollIntoView({ behavior: 'smooth' })}>About</button>
          <button className="nav-button" onClick={() => document.querySelector('.experience')?.scrollIntoView({ behavior: 'smooth' })}>Experience</button>
          <button className="nav-button" onClick={() => document.querySelector('.projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
          <button className="nav-button" onClick={() => document.querySelector('.contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
        </div>
      </div>
    </nav>
  );
}