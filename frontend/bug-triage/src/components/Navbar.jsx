function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        Issue<span>Pilot</span>
      </h1>
      <div className="nav-links">
        <a href="#">Dashboard</a>
        <a href="#">About</a>
      </div>
      <button className="nav-btn">Run Triage</button>
    </nav>
  );
}

export default Navbar;
