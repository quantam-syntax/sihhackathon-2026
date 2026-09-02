/* ============================================
   ViolationCard Component
   ============================================
   Renders a single violation as a card with:
   - Human-readable field name
   - Description
   - Severity badge
   - Legal rule reference
   ============================================ */

import { getFieldLabel, getSeverityLabel } from '../utils/fieldLabels.js';

/**
 * Render a single violation card.
 *
 * @param {object} violation
 * @param {string} violation.field - e.g. "expiry_date"
 * @param {string} violation.description - e.g. "Best-before/expiry date missing on label"
 * @param {string} violation.severity - e.g. "major"
 * @param {string} violation.rule_reference - e.g. "Rule 6(1)(f), LMPC Rules 2011"
 * @returns {HTMLElement}
 */
export function renderViolationCard(violation) {
  const fieldLabel = getFieldLabel(violation.field);
  const severityLabel = getSeverityLabel(violation.severity);
  const severityClass = `violation-card__severity--${violation.severity || 'major'}`;

  const card = document.createElement('article');
  card.className = 'violation-card';
  card.setAttribute('aria-label', `Violation: ${fieldLabel}`);

  card.innerHTML = `
    <div class="violation-card__header">
      <span class="violation-card__icon" aria-hidden="true">❌</span>
      <h3 class="violation-card__field">${fieldLabel}</h3>
    </div>
    <p class="violation-card__description">${violation.description}</p>
    <div class="violation-card__footer">
      <span class="violation-card__severity ${severityClass}">${severityLabel}</span>
      <span class="violation-card__rule">${violation.rule_reference}</span>
    </div>
  `;

  return card;
}

/**
 * Render all violation cards into a container.
 *
 * @param {Array} violations - Array of violation objects
 * @returns {HTMLElement} - A section containing all cards, or null if no violations
 */
export function renderViolations(violations) {
  if (!violations || violations.length === 0) return null;

  const section = document.createElement('section');
  section.className = 'violations-section';
  section.setAttribute('aria-label', 'Violations');

  const heading = document.createElement('h2');
  heading.className = 'section-title';
  heading.textContent = 'Violations';
  section.appendChild(heading);

  const list = document.createElement('div');
  list.className = 'violations-list';

  violations.forEach((v) => {
    list.appendChild(renderViolationCard(v));
  });

  section.appendChild(list);
  return section;
}
