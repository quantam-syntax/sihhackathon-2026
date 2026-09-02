/* ============================================
   ImageUploader Component
   ============================================
   Handles file selection from camera or gallery.
   Validates the image and calls onImageSelected.
   ============================================ */

import { validateImage } from '../utils/validators.js';

/**
 * Initialize the ImageUploader behavior.
 * Wires up camera and gallery inputs.
 *
 * @param {object} options
 * @param {function(File): void} options.onImageSelected - Called with the valid File
 * @param {function(string): void} options.onError - Called with error message string
 */
export function initImageUploader({ onImageSelected, onError }) {
  const inputCamera = document.getElementById('input-camera');
  const inputGallery = document.getElementById('input-gallery');

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const { valid, error } = validateImage(file);
    if (!valid) {
      onError(error);
      // Reset the input so the same file can be re-selected
      event.target.value = '';
      return;
    }

    onImageSelected(file);
  }

  inputCamera.addEventListener('change', handleFileChange);
  inputGallery.addEventListener('change', handleFileChange);
}
