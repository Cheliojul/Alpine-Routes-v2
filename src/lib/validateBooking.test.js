import { describe, it, expect } from 'vitest';
import { validateBooking } from './validateBooking.js';

const base = {
  from: 'Zürich Airport',
  to: 'Zermatt',
  date: '2999-01-01',
  time: '10:00',
  name: 'Sam Rider',
  email: 'sam@example.com',
  today: '2026-06-23',
};

describe('validateBooking', () => {
  it('passes for fully valid input', () => {
    const result = validateBooking(base);
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('flags every required field when empty', () => {
    const result = validateBooking({});
    expect(result.valid).toBe(false);
    for (const field of ['from', 'to', 'date', 'time', 'name', 'email']) {
      expect(result.errors[field]).toBeTruthy();
    }
  });

  it('rejects an invalid email', () => {
    for (const email of ['plainaddress', 'no@dot', 'spaces in@mail.com', '@nolocal.com']) {
      expect(validateBooking({ ...base, email }).errors.email).toBeTruthy();
    }
  });

  it('accepts common valid email formats', () => {
    for (const email of ['a@b.co', 'first.last@sub.domain.com', 'x+tag@d.io']) {
      expect(validateBooking({ ...base, email }).valid).toBe(true);
    }
  });

  it('rejects identical pickup and destination', () => {
    expect(validateBooking({ ...base, to: base.from }).errors.to).toBeTruthy();
  });

  it('rejects a past date', () => {
    expect(validateBooking({ ...base, date: '2000-01-01' }).errors.date).toBeTruthy();
  });

  it('accepts today as the date', () => {
    expect(validateBooking({ ...base, date: '2026-06-23' }).valid).toBe(true);
  });

  it('rejects a one-character name', () => {
    expect(validateBooking({ ...base, name: 'A' }).errors.name).toBeTruthy();
  });

  it('treats whitespace-only values as empty', () => {
    const result = validateBooking({ ...base, name: '   ', email: '   ' });
    expect(result.errors.name).toBeTruthy();
    expect(result.errors.email).toBeTruthy();
  });

  it('handles being called with no arguments', () => {
    expect(validateBooking().valid).toBe(false);
  });
});
