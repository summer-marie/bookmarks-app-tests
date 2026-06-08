import { test, expect } from 'vitest';
import { searchByTitle } from './searchByTitle.js';

// - Returns an empty array when the bookmarks array is empty
// - Returns matching bookmarks when the title contains the query
// - Returns an empty array when no titles match
// - Search is case-insensitive
// - Returns multiple matches when more than one bookmark matches

const bookmarks = [
  {
    id: 1,
    title: 'GitHub Docs',
    url: 'https://docs.github.com',
    createdAt: '2026-04-20T10:00:00Z',
  },
  {
    id: 2,
    title: 'MDN JavaScript Guide',
    url: 'https://developer.mozilla.org',
    createdAt: '2026-04-21T10:00:00Z',
  },
  {
    id: 3,
    title: 'React Testing Library',
    url: 'https://testing-library.com',
    createdAt: '2026-04-22T10:00:00Z',
  },
  {
    id: 4,
    title: 'Git Basics',
    url: 'https://git-scm.com',
    createdAt: '2026-04-23T10:00:00Z',
  },
];

test('returns an empty array when bookmarks array is empty', () => {
  expect(searchByTitle([], 'git')).toEqual([]);
});

test('returns matching bookmarks when title contains the query', () => {
  expect(searchByTitle(bookmarks, 'JavaScript')).toEqual([
    {
      id: 2,
      title: 'MDN JavaScript Guide',
      url: 'https://developer.mozilla.org',
      createdAt: '2026-04-21T10:00:00Z',
    },
  ]);
});

test('returns an empty array when no titles match', () => {
  expect(searchByTitle(bookmarks, 'python')).toEqual([]);
});

test('search is case-insensitive', () => {
  expect(searchByTitle(bookmarks, 'react')).toEqual([
    {
      id: 3,
      title: 'React Testing Library',
      url: 'https://testing-library.com',
      createdAt: '2026-04-22T10:00:00Z',
    },
  ]);
});

test('returns multiple matches when more than one bookmark matches', () => {
  expect(searchByTitle(bookmarks, 'git')).toEqual([
    {
      id: 1,
      title: 'GitHub Docs',
      url: 'https://docs.github.com',
      createdAt: '2026-04-20T10:00:00Z',
    },
    {
      id: 4,
      title: 'Git Basics',
      url: 'https://git-scm.com',
      createdAt: '2026-04-23T10:00:00Z',
    },
  ]);
});

test('returns an empty array when query is empty', () => {
  expect(searchByTitle(bookmarks, '')).toEqual([]);
});

test('trims extra spaces from the query before searching', () => {
  expect(searchByTitle(bookmarks, '  react  ')).toEqual([
    {
      id: 3,
      title: 'React Testing Library',
      url: 'https://testing-library.com',
      createdAt: '2026-04-22T10:00:00Z',
    },
  ]);
});