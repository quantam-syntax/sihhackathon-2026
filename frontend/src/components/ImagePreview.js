/* ============================================
   ImagePreview Component
   ============================================
   Shows a preview of the selected image and
   provides change/scan actions.
   ============================================ */

/**
 * Display the selected image in the preview area.
 *
 * @param {File} file - The selected image file
 */
export function showImagePreview(file) {
  const previewImage = document.getElementById('preview-image');
  const filenameEl = document.getElementById('preview-filename');

  // Create object URL for preview
  const url = URL.createObjectURL(file);
  previewImage.src = url;
  previewImage.alt = `Selected product label: ${file.name}`;

  // Show filename
  filenameEl.textContent = file.name;

  // Clean up old object URL when image loads
  previewImage.onload = () => {
    // URL is kept alive while the image is displayed;
    // it will be revoked when the user changes image or navigates away
  };
}

/**
 * Clear the image preview.
 */
export function clearImagePreview() {
  const previewImage = document.getElementById('preview-image');
  const filenameEl = document.getElementById('preview-filename');

  if (previewImage.src) {
    URL.revokeObjectURL(previewImage.src);
    previewImage.src = '';
    previewImage.alt = '';
  }
  filenameEl.textContent = '';
}

/**
 * Initialize preview action buttons.
 *
 * @param {object} options
 * @param {function(): void} options.onChangeImage - Called when "Change Image" is pressed
 * @param {function(): void} options.onScan - Called when "Scan Label" is pressed
 */
export function initImagePreviewActions({ onChangeImage, onScan }) {
  document.getElementById('btn-change-image').addEventListener('click', onChangeImage);
  document.getElementById('btn-scan').addEventListener('click', onScan);
}
