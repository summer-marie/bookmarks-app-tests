import { test, expect, vi, beforeEach } from 'vitest';

vi.mock('@/lib/prisma', () => ({
  prisma: {
    bookmark: {
      findMany: vi.fn(),
    },
  },
}));

import { GET } from './route.js';
import { prisma } from '@/lib/prisma';

beforeEach(() => {
  vi.clearAllMocks();
});

test('returns bookmarks when DB has them', async () => {
  prisma.bookmark.findMany.mockResolvedValue([
    {
      id: 1,
      url: 'https://github.com',
      title: 'GitHub',
      createdAt: new Date('2026-01-01'),
    },
  ]);

  const response = await GET();
  const data = await response.json();

  expect(data).toHaveLength(1);
  expect(data[0].title).toBe('GitHub');
});

test('returns empty array when DB is empty', async () => {
  prisma.bookmark.findMany.mockResolvedValue([]);

  const response = await GET();
  const data = await response.json();

  expect(data).toEqual([]);
});

test('orders bookmarks by date descending', async () => {
  prisma.bookmark.findMany.mockResolvedValue([]);

  await GET();

  expect(prisma.bookmark.findMany).toHaveBeenCalledWith(
    expect.objectContaining({
      orderBy: { createdAt: 'desc' },
    })
  );
});