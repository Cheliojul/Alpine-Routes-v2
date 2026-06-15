export default function Booking() {
  return (
    <section className="booking" id="book" aria-labelledby="booking-headline">
      <div className="container">
        <div className="booking__inner">
          <span className="booking__eyebrow">Ready When You Land</span>

          <h2 className="booking__headline" id="booking-headline">
            Tell us your flight.<br />We&apos;ll handle the mountain.
          </h2>

          <p className="booking__sub">
            Instant quotes, fixed prices, no surge for snow.
            Most transfers confirmed within the hour.
          </p>

          <div className="booking__actions">
            <a href="#" className="btn btn-primary">Book Your Transfer</a>
            <span className="booking__phone">or call <a href="tel:+41279674040">+41 27 967 40 40</a></span>
          </div>

          <ul className="booking__trust">
            <li>Free cancellation 24h</li>
            <li>Flight tracking</li>
            <li>Fixed CHF pricing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
