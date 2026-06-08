import { prisma } from '@/lib/prisma';

export async function GET() {
  const bookmarks = await prisma.bookmark.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return Response.json(bookmarks);
}