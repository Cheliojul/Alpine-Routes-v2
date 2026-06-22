'use client';

import { useEffect, useState } from 'react';
import { validateBooking } from '../lib/validateBooking';
import { BASE_PATH } from '../lib/config';
import { originList, destinationList } from '../data/allRoutes';

const BOOKING_EMAIL = 'email@email.com';

export default function BookingForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // Options start from bundled data (so SSR and prefill work immediately),
  // then refresh from the backend catalogue when available.
  const [origins, setOrigins] = useState(originList);
  const [destinations, setDestinations] = useState(destinationList);

  useEffect(() => {
    let cancelled = false;
    fetch(`${BASE_PATH}/api/routes`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('bad response'))))
      .then((data) => {
        if (cancelled || !data || !Array.isArray(data.routes) || !data.routes.length) return;
        setOrigins([...new Set(data.routes.map((r) => r.from))]);
        setDestinations([...new Set(data.routes.map((r) => r.to))]);
      })
      .catch(() => {
        /* keep the bundled fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Prefill from a route card's "Reserve" link.
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
    const values = {
      from,
      to,
      date: data.get('date'),
      time: data.get('time'),
      passengers: data.get('passengers'),
      name: data.get('name'),
      email: data.get('email'),
    };

    const { valid, errors: found } = validateBooking(values);
    if (!valid) {
      setErrors(found);
      const firstField = Object.keys(found)[0];
      const el = event.currentTarget.querySelector(`[name="${firstField}"]`);
      if (el && el.focus) el.focus();
      return;
    }

    setErrors({});
    const subject = `Transfer request: ${values.from} → ${values.to}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      '',
      `From: ${values.from}`,
      `To: ${values.to}`,
      `Date: ${values.date}`,
      `Time: ${values.time}`,
      `Passengers: ${values.passengers}`,
      '',
      'Sent from example.com',
    ].join('\n');

    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const fieldError = (name) =>
    errors[name] ? (
      <span className="booking-form__error" id={`err-${name}`} role="alert">
        {errors[name]}
      </span>
    ) : null;

  const invalid = (name) => (errors[name] ? true : undefined);
  const describedBy = (name) => (errors[name] ? `err-${name}` : undefined);

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="booking-form__grid">
        <label className="booking-form__field">
          <span className="booking-form__label">From (A)</span>
          <select name="from" value={from} onChange={(e) => setFrom(e.target.value)} aria-invalid={invalid('from')} aria-describedby={describedBy('from')}>
            <option value="" disabled>Select pickup</option>
            {origins.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          {fieldError('from')}
        </label>

        <label className="booking-form__field">
          <span className="booking-form__label">To (B)</span>
          <select name="to" value={to} onChange={(e) => setTo(e.target.value)} aria-invalid={invalid('to')} aria-describedby={describedBy('to')}>
            <option value="" disabled>Select destination</option>
            {destinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          {fieldError('to')}
        </label>

        <label className="booking-form__field">
          <span className="booking-form__label">Date</span>
          <input type="date" name="date" aria-invalid={invalid('date')} aria-describedby={describedBy('date')} />
          {fieldError('date')}
        </label>

        <label className="booking-form__field">
          <span className="booking-form__label">Time</span>
          <input type="time" name="time" aria-invalid={invalid('time')} aria-describedby={describedBy('time')} />
          {fieldError('time')}
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
          <input type="text" name="name" autoComplete="name" placeholder="Full name" aria-invalid={invalid('name')} aria-describedby={describedBy('name')} />
          {fieldError('name')}
        </label>

        <label className="booking-form__field booking-form__field--full">
          <span className="booking-form__label">Email</span>
          <input type="email" name="email" autoComplete="email" placeholder="email@email.com" aria-invalid={invalid('email')} aria-describedby={describedBy('email')} />
          {fieldError('email')}
        </label>
      </div>

      <div className="booking-form__actions">
        <button type="submit" className="btn btn-primary">Request Transfer</button>
        <span className="booking-form__note" role="status" aria-live="polite">
          {sent
            ? 'Opening your email app, just hit send.'
            : 'We’ll confirm by email, usually within the hour.'}
        </span>
      </div>
    </form>
  );
}
