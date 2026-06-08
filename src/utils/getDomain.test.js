import { test, expect } from 'vitest';
import { getDomain } from './getDomain.js';

test('extracts domain from a URL', () => {
  expect(getDomain('https://github.com/x/y')).toBe('github.com');
});

test('preserves www subdomain', () => {
  expect(getDomain('http://www.github.com/x/y')).toBe('www.github.com');
});