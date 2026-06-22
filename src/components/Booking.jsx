import BookingForm from './BookingForm';

export default function Booking() {
  return (
    <section className="booking" id="book" aria-labelledby="booking-headline">
      <div className="container">
        <div className="booking__inner">
          <span className="booking__eyebrow">Book a Transfer</span>

          <h2 className="booking__headline" id="booking-headline">
            Tell us your route.<br />We&apos;ll handle the mountain.
          </h2>

          <p className="booking__sub">
            Pick your pickup and destination, choose a date and time, and we&apos;ll
            confirm by email. Instant quotes, fixed prices, no surge for snow.
          </p>

          <BookingForm />

          <p className="booking__phone">or call <a href="tel:+000000000000">+00 000 000 0000</a></p>

          <ul className="booking__trust">
            <li>Free cancellation 24h</li>
            <li>Flight tracking</li>
            <li>Fixed EUR pricing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
