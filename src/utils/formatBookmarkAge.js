export function formatBookmarkAge(date, now) {
  const diffMs = now.getTime() - date.getTime();

  if (diffMs <= 0) {
    return 'just now';
  }

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return 'just now';
  }

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  if (hours < 24) {
    return `${hours} hours ago`;
  }

  if (days < 30) {
    return `${days} days ago`;
  }

  if (days < 365) {
    return `${Math.floor(days / 30)} months ago`;
  }

  return `${Math.floor(days / 365)} years ago`;
}