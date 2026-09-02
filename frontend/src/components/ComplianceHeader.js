/* ============================================
   ComplianceHeader Component
   ============================================
   Renders the overall compliance status badge,
   violation count, and product category.
   ============================================ */

import { getStatusLabel, getCategoryLabel } from '../utils/fieldLabels.js';
import { formatViolationCount } from '../utils/formatters.js';

/**
 * Render the compliance header into a container.
 *
 * @param {object} report - The compliance report data
 * @param {string} report.compliance_status - "compliant" | "non_compliant"
 * @param {Array} report.violations - Array of violation objects
 * @param {string} report.product_category - e.g. "packaged_food"
 * @returns {HTMLElement}
 */
export function renderComplianceHeader(report) {
  const isCompliant = report.compliance_status === 'compliant';
  const statusLabel = getStatusLabel(report.compliance_status);
  const violationCount = report.violations.length;
  const categoryLabel = getCategoryLabel(report.product_category);

  const section = document.createElement('section');
  section.className = `compliance-header ${isCompliant ? 'compliance-header--pass' : 'compliance-header--fail'}`;
  section.setAttribute('aria-label', `Overall compliance status: ${statusLabel}`);

  section.innerHTML = `
    <div class="compliance-header__icon" aria-hidden="true">
      ${isCompliant ? '✅' : '❌'}
    </div>
    <h1 class="compliance-header__status">${statusLabel}</h1>
    <p class="compliance-header__count">${formatViolationCount(violationCount)}</p>
    <span class="compliance-header__category">${categoryLabel}</span>
  `;

  return section;
}
