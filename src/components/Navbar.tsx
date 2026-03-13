import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo">
          JG<span>.dev</span>
        </span>
        <div className="navbar-links">
          <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</Link>
          <Link to="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        </div>
      </div>
    </nav>
  );
}