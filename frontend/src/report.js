/* ============================================
   report.js — Report Page Entry Point
   ============================================
   Reads the scan result from sessionStorage
   and renders the full compliance report.
   ============================================ */

import { renderComplianceHeader } from './components/ComplianceHeader.js';
import { renderViolations } from './components/ViolationCard.js';
import { renderCompliantFields } from './components/CompliantFields.js';
import { renderScanMetadata } from './components/ScanMetadata.js';

/* ── DOM references ── */
const reportRoot = document.getElementById('report-root');
const noDataSection = document.getElementById('no-data');

/**
 * Render the full compliance report.
 */
function renderReport(report) {
  reportRoot.innerHTML = ''; // Clear any previous content

  // 1. Compliance Header (status badge + count)
  const header = renderComplianceHeader(report);
  header.classList.add('fade-in');
  reportRoot.appendChild(header);

  // 2. Violations (if any)
  const violations = renderViolations(report.violations);
  if (violations) {
    violations.classList.add('fade-in');
    violations.style.animationDelay = '0.1s';
    reportRoot.appendChild(violations);
  }

  // 3. Compliant Fields
  const compliant = renderCompliantFields(report.compliant_fields);
  if (compliant) {
    compliant.classList.add('fade-in');
    compliant.style.animationDelay = '0.2s';
    reportRoot.appendChild(compliant);
  }

  // 4. Scan Metadata
  const metadata = renderScanMetadata(report);
  metadata.classList.add('fade-in');
  metadata.style.animationDelay = '0.3s';
  reportRoot.appendChild(metadata);

  // 5. "Scan Another" button
  const actions = document.createElement('div');
  actions.className = 'report-actions fade-in';
  actions.style.animationDelay = '0.4s';
  actions.innerHTML = `
    <a href="/" class="btn btn--primary btn--large" id="btn-scan-another">
      <span aria-hidden="true">📷</span>
      Scan Another Label
    </a>
  `;
  reportRoot.appendChild(actions);
}

/**
 * Show the no-data fallback screen.
 */
function showNoData() {
  reportRoot.hidden = true;
  noDataSection.hidden = false;
}

/**
 * Initialize the report page.
 */
function init() {
  // Read scan result from sessionStorage
  const raw = sessionStorage.getItem('scanResult');
  const isFallback = sessionStorage.getItem('scanFallback') === 'true';

  if (!raw) {
    showNoData();
    return;
  }

  try {
    const report = JSON.parse(raw);

    // Basic validation
    if (!report || typeof report.compliance_status !== 'string') {
      throw new Error('Invalid report data');
    }

    renderReport(report);

    // Show demo badge if using fallback data
    if (isFallback) {
      const badge = document.createElement('div');
      badge.className = 'demo-badge';
      badge.textContent = 'Demo Mode';
      badge.setAttribute('aria-label', 'This report uses demo data because the backend was unavailable');
      document.body.appendChild(badge);
    }

  } catch (error) {
    console.error('[Report] Failed to parse scan result:', error);
    showNoData();
  }
}

// Start
init();
