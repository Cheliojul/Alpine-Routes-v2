'use client';

import { useEffect, useState } from 'react';

const ORIGINS = ['Zürich Airport', 'Geneva Airport', 'Innsbruck', 'Milan Malpensa'];
const DESTINATIONS = ['Zermatt', 'Verbier', 'Kitzbühel', 'Livigno'];
const BOOKING_EMAIL = 'transfers@alpineroutes.ch';

export default function BookingForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [sent, setSent] = useState(false);

  // Clicking a route card's "Reserve" link prefills this form.
  useEffect(() => {
    function onClick(event) {
      const trigger = event.target.closest('[data-route-from]');
      if (!trigger) return;
      setFrom(trigger.getAttribute('data-route-from') || '');
      setTo(trigger.getAttribute('data-route-to') || '');
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const date = data.get('date');
    const time = data.get('time');
    const passengers = data.get('passengers');
    const name = data.get('name');
    const email = data.get('email');

    const subject = `Transfer request: ${from} → ${to}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      `From: ${from}`,
      `To: ${to}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Passengers: ${passengers}`,
      '',
      'Sent from alpineroutes.ch',
    ].join('\n');

    // No backend yet — hand the request to the visitor's email client.
    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__grid">
        <label className="booking-form__field">
          <span className="booking-form__label">From (A)</span>
          <select name="from" required value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="" disabled>Select pickup</option>
            {ORIGINS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </label>

        <label className="booking-form__field">
          <span className="booking-form__label">To (B)</span>
          <select name="to" required value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="" disabled>Select destination</option>
            {DESTINATIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </label>

        <label className="booking-form__field">
          <span className="booking-form__label">Date</span>
          <input type="date" name="date" required />
        </label>

        <label className="booking-form__field">
          <span className="booking-form__label">Time</span>
          <input type="time" name="time" required />
        </label>

        <label className="booking-form__field">
          <span className="booking-form__label">Passengers</span>
          <select name="passengers" defaultValue="2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>

        <label className="booking-form__field">
          <span className="booking-form__label">Your name</span>
          <input type="text" name="name" autoComplete="name" placeholder="Jane Doe" required />
        </label>

        <label className="booking-form__field booking-form__field--full">
          <span className="booking-form__label">Email</span>
          <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>

      <div className="booking-form__actions">
        <button type="submit" className="btn btn-primary">Request Transfer</button>
        <span className="booking-form__note" role="status" aria-live="polite">
          {sent
            ? 'Opening your email app — just hit send.'
            : 'We’ll confirm by email, usually within the hour.'}
        </span>
      </div>
    </form>
  );
}
