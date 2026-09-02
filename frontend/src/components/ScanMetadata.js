/* ============================================
   ScanMetadata Component
   ============================================
   Renders secondary scan information:
   product category, check time, image ID.
   ============================================ */

import { getCategoryLabel } from '../utils/fieldLabels.js';
import { formatDateTime } from '../utils/formatters.js';

/**
 * Render scan metadata section.
 *
 * @param {object} report - The compliance report data
 * @param {string} report.product_category
 * @param {string} report.checked_at
 * @param {string} report.image_id
 * @returns {HTMLElement}
 */
export function renderScanMetadata(report) {
  const section = document.createElement('section');
  section.className = 'metadata-section';
  section.setAttribute('aria-label', 'Scan details');

  section.innerHTML = `
    <h2 class="section-title">Scan Details</h2>
    <dl class="metadata-list">
      <div class="metadata-item">
        <dt class="metadata-item__label">Category</dt>
        <dd class="metadata-item__value">${getCategoryLabel(report.product_category)}</dd>
      </div>
      <div class="metadata-item">
        <dt class="metadata-item__label">Checked</dt>
        <dd class="metadata-item__value">${formatDateTime(report.checked_at)}</dd>
      </div>
      <div class="metadata-item">
        <dt class="metadata-item__label">Scan ID</dt>
        <dd class="metadata-item__value">${report.image_id || '—'}</dd>
      </div>
    </dl>
  `;

  return section;
}
