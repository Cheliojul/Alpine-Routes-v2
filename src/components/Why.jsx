export default function Why() {
  return (
    <section className="why section" id="about">
      <div className="container">
        <p className="why-eyebrow">Why Alpine Routes</p>
        <h2 className="why-heading">Built for the mountain,<br />not just the road.</h2>

        <div className="why-grid">

          <div className="why-prop">
            <span className="why-numeral" aria-hidden="true">01</span>
            <div className="why-icon">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="20" cy="22" r="13" />
                <path d="M20 9V6" />
                <path d="M15.5 6.5h9" />
                <path d="M20 14v9l5 3" />
              </svg>
            </div>
            <h3 className="why-prop-heading">On the minute, every time.</h3>
            <p className="why-prop-desc">We track your flight in real time and adjust pickup for delays, customs, and weather — you never wait, and you never miss a transfer.</p>
          </div>

          <div className="why-prop">
            <span className="why-numeral" aria-hidden="true">02</span>
            <div className="why-icon">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <polyline points="4,34 20,8 36,34" />
                <polyline points="10,34 20,16 30,34" />
                <line x1="14" y1="26" x2="26" y2="26" />
                <line x1="7" y1="34" x2="33" y2="34" />
              </svg>
            </div>
            <h3 className="why-prop-heading">Drivers who know the passes.</h3>
            <p className="why-prop-desc">Every chauffeur is winter-trained on alpine roads, from the Furka to the Stelvio, with chains, clearance, and local timing dialled in.</p>
          </div>

          <div className="why-prop">
            <span className="why-numeral" aria-hidden="true">03</span>
            <div className="why-icon">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="20" cy="20" r="14" />
                <circle cx="20" cy="20" r="3" />
                <line x1="20" y1="6" x2="20" y2="11" />
                <line x1="20" y1="29" x2="20" y2="34" />
                <line x1="6" y1="20" x2="11" y2="20" />
                <line x1="29" y1="20" x2="34" y2="20" />
                <path d="M14 14 L20 20" />
                <path d="M14 14 L17 11" />
              </svg>
            </div>
            <h3 className="why-prop-heading">Vehicles built for altitude.</h3>
            <p className="why-prop-desc">Heated leather, ski storage, child seats on request, and AWD fleets serviced for snow — comfort that holds from valley floor to resort.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
