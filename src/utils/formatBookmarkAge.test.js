import { test, expect } from 'vitest';
import { formatBookmarkAge } from './formatBookmarkAge.js';

const NOW = new Date('2026-04-27T12:00:00Z');

test('returns "just now" for a date 30 seconds ago', () => {
  const date = new Date(NOW.getTime() - 30 * 1000);

  expect(formatBookmarkAge(date, NOW)).toBe('just now');
});

test('returns "5 minutes ago" for a date 5 minutes ago', () => {
  const date = new Date(NOW.getTime() - 5 * 60 * 1000);

  expect(formatBookmarkAge(date, NOW)).toBe('5 minutes ago');
});

test('returns "2 hours ago" for a date 2 hours ago', () => {
  const date = new Date(NOW.getTime() - 2 * 60 * 60 * 1000);

  expect(formatBookmarkAge(date, NOW)).toBe('2 hours ago');
});

test('returns "2 days ago" for a date 2 days ago', () => {
  const date = new Date(NOW.getTime() - 2 * 24 * 60 * 60 * 1000);

  expect(formatBookmarkAge(date, NOW)).toBe('2 days ago');
});

test('returns "1 months ago" for a date 35 days ago', () => {
  const date = new Date(NOW.getTime() - 35 * 24 * 60 * 60 * 1000);

  expect(formatBookmarkAge(date, NOW)).toBe('1 months ago');
});

test('returns "1 years ago" for a date 400 days ago', () => {
  const date = new Date(NOW.getTime() - 400 * 24 * 60 * 60 * 1000);

  expect(formatBookmarkAge(date, NOW)).toBe('1 years ago');
});

test('returns "just now" for a future date', () => {
  const date = new Date(NOW.getTime() + 5 * 60 * 1000);

  expect(formatBookmarkAge(date, NOW)).toBe('just now');
});