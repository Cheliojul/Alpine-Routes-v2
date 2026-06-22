import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__col footer__col--brand">
            <div className="footer__brand">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <polygon points="14,4 26,24 2,24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinejoin="round" />
                <polygon points="14,11 20,24 8,24" fill="var(--color-accent)" opacity="0.35" />
                <line x1="9" y1="19" x2="19" y2="19" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.6" />
              </svg>
              <span className="footer__wordmark">Alpine Routes</span>
            </div>
            <p className="footer__tagline">Premium alpine transfers since 2009.</p>
            <p className="footer__concession">Reg. No. 000000, Region.</p>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Routes</h3>
            <ul className="footer__links">
              <li><Link href="/#routes">Zürich → Zermatt</Link></li>
              <li><Link href="/#routes">Geneva → Verbier</Link></li>
              <li><Link href="/#routes">Innsbruck → Kitzbühel</Link></li>
              <li><Link href="/#routes">Milan → Livigno</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__links">
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Contact</h3>
            <address className="footer__address">
              <p>123 Example Street<br />00000 City, Country</p>
              <p><a href="tel:+000000000000">+00 000 000 0000</a></p>
              <p><a href="mailto:email@email.com">email@email.com</a></p>
            </address>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Alpine Routes AG. All rights reserved.</p>
          <nav className="footer__legal" aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <span aria-hidden="true">·</span>
            <a href="#">Terms</a>
            <span aria-hidden="true">·</span>
            <a href="#">Imprint</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
