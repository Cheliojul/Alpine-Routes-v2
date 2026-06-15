export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="container">
        <a className="nav-logo" href="#" aria-label="Alpine Routes home">
          <svg className="nav-logo-glyph" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 23L10.5 10L14 16L17 12L24 23H4Z" fill="none" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M14 6L16.5 10.5" stroke="var(--color-accent)" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="14" cy="4.5" r="1.5" fill="var(--color-accent)" />
          </svg>
          <span className="nav-wordmark">Alpine Routes</span>
        </a>

        <button className="nav-toggle" aria-label="Menu" aria-expanded="false">
          <span className="nav-bar"></span>
          <span className="nav-bar"></span>
          <span className="nav-bar"></span>
        </button>

        <div className="nav-links-wrapper">
          <ul className="nav-links" role="list">
            <li><a className="nav-link" href="#routes">Routes</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <a href="#book" className="btn btn-primary nav-cta">Book a Transfer</a>
        </div>
      </div>
    </nav>
  );
}
