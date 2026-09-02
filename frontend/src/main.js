/* ============================================
   main.js — Upload Page Entry Point
   ============================================
   Wires together:
   - ImageUploader (file selection)
   - ImagePreview (preview + actions)
   - ProcessingState (progress animation)
   - ScanService (mock / real API)

   State machine: idle → preview → processing → navigate to report
   ============================================ */

import { initImageUploader } from './components/ImageUploader.js';
import { showImagePreview, clearImagePreview, initImagePreviewActions } from './components/ImagePreview.js';
import { animateProcessingSteps, resetProcessingSteps } from './components/ProcessingState.js';
import { scanLabel } from './services/scanService.js';

/* ── State ── */
let currentState = 'idle'; // 'idle' | 'preview' | 'processing'
let selectedFile = null;

/* ── DOM references ── */
const stateIdle = document.getElementById('state-idle');
const statePreview = document.getElementById('state-preview');
const stateProcessing = document.getElementById('state-processing');
const errorContainer = document.getElementById('error-container');

/* ── State management ── */

/**
 * Transition to a new UI state.
 * Shows/hides the appropriate sections.
 */
function setState(newState) {
  currentState = newState;
  stateIdle.hidden = newState !== 'idle';
  statePreview.hidden = newState !== 'preview';
  stateProcessing.hidden = newState !== 'processing';
  clearError();
}

/* ── Error display ── */

function showError(message) {
  errorContainer.innerHTML = `
    <div class="error-message fade-in" role="alert">
      <span class="error-message__icon" aria-hidden="true">⚠️</span>
      <span>${message}</span>
    </div>
  `;
  // Auto-dismiss after 6 seconds
  setTimeout(clearError, 6000);
}

function clearError() {
  errorContainer.innerHTML = '';
}

/* ── Handlers ── */

function handleImageSelected(file) {
  selectedFile = file;
  showImagePreview(file);
  setState('preview');
}

function handleImageError(message) {
  showError(message);
}

function handleChangeImage() {
  selectedFile = null;
  clearImagePreview();
  setState('idle');
  // Reset file inputs so the same file can be re-selected
  document.getElementById('input-camera').value = '';
  document.getElementById('input-gallery').value = '';
}

async function handleScan() {
  if (!selectedFile) {
    showError('Please select or take a photo first.');
    return;
  }

  setState('processing');

  try {
    // Run animation and API call concurrently
    const [, result] = await Promise.all([
      animateProcessingSteps(),
      scanLabel(selectedFile),
    ]);

    // Store result for the report page
    sessionStorage.setItem('scanResult', JSON.stringify(result.data));

    if (result.fallback) {
      sessionStorage.setItem('scanFallback', 'true');
    } else {
      sessionStorage.removeItem('scanFallback');
    }

    // Small delay after animation finishes so the user sees all steps completed
    await new Promise((r) => setTimeout(r, 400));

    // Navigate to report
    window.location.href = '/report.html';
  } catch (error) {
    console.error('[Scanner] Scan failed:', error);
    showError('We couldn\'t analyze this image. Please try another photo.');
    resetProcessingSteps();
    setState('preview');
  }
}

/* ── Initialize ── */

function init() {
  setState('idle');

  initImageUploader({
    onImageSelected: handleImageSelected,
    onError: handleImageError,
  });

  initImagePreviewActions({
    onChangeImage: handleChangeImage,
    onScan: handleScan,
  });
}

// Start
init();
