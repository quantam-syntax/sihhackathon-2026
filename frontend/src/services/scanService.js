/* ============================================
   Scan Service — API layer
   ============================================
   Abstracts the backend call so the UI never
   cares whether data came from mock or real API.
   ============================================ */

import { FIXTURE_NON_COMPLIANT, FIXTURE_COMPLIANT } from '../data/fixtures.js';

/* ── Configuration ── */

/**
 * Set to `false` once the real backend is ready.
 * When true, the service simulates a delay and returns fixture data.
 */
const USE_MOCK = true;

/**
 * Backend API endpoint. Update when Ganesh's backend is available.
 * The service POSTs the image as multipart/form-data to this URL.
 */
const API_ENDPOINT = '/api/scan';

/**
 * Simulated processing delay (ms) for mock mode.
 * Makes the processing-state animation feel realistic.
 */
const MOCK_DELAY_MS = 3000;

/* ── Helpers ── */

/** Small delay helper for mock mode */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Validate that a response object has the expected compliance report shape.
 * @param {object} data
 * @returns {boolean}
 */
function isValidResponse(data) {
  return (
    data &&
    typeof data.compliance_status === 'string' &&
    Array.isArray(data.violations) &&
    Array.isArray(data.compliant_fields)
  );
}

/* ── Public API ── */

/**
 * Scan a product label image and return a compliance report.
 *
 * @param {File} imageFile — the selected image file
 * @returns {Promise<{ data: object, fallback: boolean }>}
 *   - `data` matches the backend compliance report schema.
 *   - `fallback` is true if fixture data was used instead of the real API.
 */
export async function scanLabel(imageFile) {
  // ── Mock mode ──
  if (USE_MOCK) {
    await delay(MOCK_DELAY_MS);
    // Alternate between fixtures based on file name for demo variety.
    // In production mock mode, always return non-compliant to show violations.
    const fixture =
      imageFile && imageFile.name.toLowerCase().includes('pass')
        ? FIXTURE_COMPLIANT
        : FIXTURE_NON_COMPLIANT;
    return { data: { ...fixture }, fallback: false };
  }

  // ── Real API mode ──
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();

    if (!isValidResponse(data)) {
      throw new Error('Invalid response format from server');
    }

    return { data, fallback: false };
  } catch (error) {
    console.warn('[ScanService] API call failed, using fallback fixture:', error.message);
    // Fallback to fixture so the demo still works
    return { data: { ...FIXTURE_NON_COMPLIANT }, fallback: true };
  }
}
