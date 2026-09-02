/* ============================================
   Formatters — Date, time, and display helpers
   ============================================ */

/**
 * Format an ISO date string to a human-readable local date/time.
 * Example: "2026-09-01T18:30:00Z" → "Sep 1, 2026, 6:30 PM"
 * @param {string} isoString
 * @returns {string}
 */
export function formatDateTime(isoString) {
  if (!isoString) return '—';
  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '—';
    return date.toLocaleString('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  } catch {
    return '—';
  }
}

/**
 * Format a violation count into plain language.
 * @param {number} count
 * @returns {string}
 */
export function formatViolationCount(count) {
  if (count === 0) return 'No issues found';
  if (count === 1) return '1 issue found';
  return `${count} issues found`;
}

/**
 * Format file size to human-readable string.
 * @param {number} bytes
 * @returns {string}
 */
export function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
