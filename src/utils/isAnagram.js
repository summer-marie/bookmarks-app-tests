function normalize(input) {
  return input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, '');
}

export function isAnagram(a, b) {
  const first = normalize(a);
  const second = normalize(b);

  if (first.length !== second.length) {
    return false;
  }

  const counts = {};

  for (const char of first) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (const char of second) {
    if (!counts[char]) {
      return false;
    }

    counts[char] -= 1;
  }

  return true;
}