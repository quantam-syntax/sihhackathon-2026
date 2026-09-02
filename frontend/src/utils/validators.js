/* ============================================
   Image Validators
   ============================================ */

/** Accepted MIME types for product label images */
const ACCEPTED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heif',
  'image/heic',
];

/** Accepted file extensions (fallback for browsers that don't report MIME) */
const ACCEPTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.heif', '.heic'];

/** Maximum file size in bytes (10 MB) */
const MAX_FILE_SIZE = 10 * 1024 * 1024;

/**
 * Validate a selected image file.
 * @param {File} file
 * @returns {{ valid: boolean, error: string | null }}
 */
export function validateImage(file) {
  if (!file) {
    return { valid: false, error: 'Please select or take a photo first.' };
  }

  // Check MIME type
  const typeOk = ACCEPTED_TYPES.includes(file.type);
  // Fallback: check extension
  const name = file.name.toLowerCase();
  const extOk = ACCEPTED_EXTENSIONS.some((ext) => name.endsWith(ext));

  if (!typeOk && !extOk) {
    return {
      valid: false,
      error: 'Please select a JPG, PNG, or HEIF image.',
    };
  }

  // Check size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: 'This image is too large (max 10 MB). Please try a smaller photo.',
    };
  }

  return { valid: true, error: null };
}

/**
 * Get the accept string for file input elements.
 * @returns {string}
 */
export function getAcceptString() {
  return ACCEPTED_TYPES.join(',');
}
