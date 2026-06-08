function normalize(input) {
  return input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, '');
}

export function isAnagramBySort(a, b) {
  const first = normalize(a);
  const second = normalize(b);

  if (first.length !== second.length) {
    return false;
  }

  return [...first].sort().join('') === [...second].sort().join('');
}