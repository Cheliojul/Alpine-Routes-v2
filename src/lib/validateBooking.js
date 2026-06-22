// Pure, framework-free validation for the booking form so it can be unit tested.
// Pass `today` (yyyy-mm-dd) to make the past-date check deterministic in tests.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBooking(values = {}) {
  const errors = {};

  const from = String(values.from ?? '').trim();
  const to = String(values.to ?? '').trim();
  const date = String(values.date ?? '').trim();
  const time = String(values.time ?? '').trim();
  const name = String(values.name ?? '').trim();
  const email = String(values.email ?? '').trim();

  if (!from) errors.from = 'Select a pickup location.';
  if (!to) errors.to = 'Select a destination.';
  if (from && to && from === to) errors.to = 'Pickup and destination must differ.';

  if (!date) errors.date = 'Choose a date.';
  else if (isPastDate(date, values.today)) errors.date = 'Date cannot be in the past.';

  if (!time) errors.time = 'Choose a time.';

  if (!name) errors.name = 'Enter your name.';
  else if (name.length < 2) errors.name = 'Name is too short.';

  if (!email) errors.email = 'Enter your email.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address.';

  return { valid: Object.keys(errors).length === 0, errors };
}

// Both strings are ISO yyyy-mm-dd, so a lexical compare orders them correctly.
function isPastDate(date, today) {
  const ref = today || new Date().toISOString().slice(0, 10);
  return date < ref;
}
