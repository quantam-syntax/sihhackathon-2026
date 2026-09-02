/* ============================================
   CompliantFields Component
   ============================================
   Renders the list of fields that passed
   compliance checks. Collapsible on mobile.
   ============================================ */

import { getFieldLabel } from '../utils/fieldLabels.js';

/**
 * Render the compliant fields section.
 *
 * @param {string[]} fields - Array of field keys, e.g. ["mrp", "net_quantity"]
 * @returns {HTMLElement | null} - The section element, or null if no fields
 */
export function renderCompliantFields(fields) {
  if (!fields || fields.length === 0) return null;

  const section = document.createElement('section');
  section.className = 'compliant-section';
  section.setAttribute('aria-label', 'Compliant fields');

  // Use <details> for collapsible behavior on mobile
  const details = document.createElement('details');
  details.className = 'compliant-details';
  details.open = true; // Start open

  const summary = document.createElement('summary');
  summary.className = 'compliant-summary';
  summary.innerHTML = `
    <h2 class="section-title section-title--inline">Compliant Fields</h2>
    <span class="compliant-count">${fields.length} passed</span>
  `;
  details.appendChild(summary);

  const list = document.createElement('ul');
  list.className = 'compliant-list';

  fields.forEach((fieldKey) => {
    const li = document.createElement('li');
    li.className = 'compliant-item';
    li.innerHTML = `
      <span class="compliant-item__icon" aria-hidden="true">✓</span>
      <span class="compliant-item__label">${getFieldLabel(fieldKey)}</span>
    `;
    list.appendChild(li);
  });

  details.appendChild(list);
  section.appendChild(details);
  return section;
}
