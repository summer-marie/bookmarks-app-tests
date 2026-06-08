import { test, expect } from 'vitest';
import { isAnagram } from './isAnagram.js';
import { isAnagramBySort } from './isAnagramBySort.js';

const implementations = [
  ['frequency map implementation', isAnagram],
  ['sort implementation', isAnagramBySort],
];

implementations.forEach(([name, checkAnagram]) => {
  test(`${name}: returns true for simple anagrams`, () => {
    expect(checkAnagram('listen', 'silent')).toBe(true);
  });

  test(`${name}: returns false for non-anagrams`, () => {
    expect(checkAnagram('hello', 'world')).toBe(false);
  });

  test(`${name}: handles empty strings`, () => {
    expect(checkAnagram('', '')).toBe(true);
  });

  test(`${name}: is case-insensitive`, () => {
    expect(checkAnagram('Listen', 'Silent')).toBe(true);
  });

  test(`${name}: ignores spaces`, () => {
    expect(checkAnagram('rail safety', 'fairy tales')).toBe(true);
  });

  test(`${name}: ignores punctuation`, () => {
    expect(checkAnagram('Dormitory!!!', 'Dirty room')).toBe(true);
  });

  test(`${name}: handles repeated letters correctly`, () => {
    expect(checkAnagram('aabbcc', 'abcabc')).toBe(true);
  });

  test(`${name}: returns false when repeated letters do not match`, () => {
    expect(checkAnagram('aabbcc', 'aabbc')).toBe(false);
  });

  test(`${name}: handles unicode letters`, () => {
    expect(checkAnagram('åßç', 'çßå')).toBe(true);
  });

  test(`${name}: returns false for different unicode letters`, () => {
    expect(checkAnagram('åßç', 'abc')).toBe(false);
  });
});