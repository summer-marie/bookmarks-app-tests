export function searchByTitle(bookmarks, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery === '') {
    return [];
  }

  return bookmarks.filter((bookmark) =>
    bookmark.title.toLowerCase().includes(normalizedQuery)
  );
}