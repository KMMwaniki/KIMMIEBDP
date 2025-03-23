export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About Me
          </a>
          <a href="/skills" className="nav-link">
            Skills
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

