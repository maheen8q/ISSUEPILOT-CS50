function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>
          Issue<span>Pilot</span>
        </h2>
        <p>AI-powered bug triage to help teams ship better software, faster.</p>
      </div>

      <div className="footer-built">
        <p>Built with</p>
        <div className="tech-row">
          <span>React</span>
          <span>•</span>
          <span>FastAPI</span>
          <span>•</span>
          <span>Scikit-learn</span>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2026 IssuePilot</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
