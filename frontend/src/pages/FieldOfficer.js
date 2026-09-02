/* ============================================
   Field Officer — Dashboard & Inspection Pages
   ============================================ */

import { MOCK_USERS, MOCK_INSPECTIONS, FIXTURE_NON_COMPLIANT } from '../data/mockData.js';
import { getFieldLabel, getStatusLabel, getCategoryLabel, getSeverityLabel } from '../utils/fieldLabels.js';
import { formatDateTime, formatViolationCount } from '../utils/formatters.js';
import { validateImage } from '../utils/validators.js';

const user = MOCK_USERS.officer;

/* ── Shell ── */
export function renderFieldShell(activeTab) {
  return `
    <div class="field-page">
      <header class="field-header">
        <div class="field-header__logo">M</div>
        <div class="field-header__title">MetraScan</div>
        <div class="field-header__actions">
          <div class="sync-status sync-status--online">
            <span class="status-dot status-dot--online"></span>
            Online
          </div>
          <div class="avatar" title="${user.name}">${user.avatar}</div>
        </div>
      </header>
      <div class="field-content" id="field-view"></div>
      <nav class="field-nav">
        <a href="#/officer/dashboard" class="field-nav__item ${activeTab === 'dashboard' ? 'field-nav__item--active' : ''}">
          <span class="field-nav__icon">🏠</span> Home
        </a>
        <a href="#/officer/inspect" class="field-nav__item ${activeTab === 'inspect' ? 'field-nav__item--active' : ''}">
          <span class="field-nav__icon">📷</span> Inspect
        </a>
        <a href="#/officer/history" class="field-nav__item ${activeTab === 'history' ? 'field-nav__item--active' : ''}">
          <span class="field-nav__icon">📋</span> History
        </a>
        <a href="#/officer/profile" class="field-nav__item ${activeTab === 'profile' ? 'field-nav__item--active' : ''}">
          <span class="field-nav__icon">👤</span> Profile
        </a>
      </nav>
    </div>
  `;
}

/* ── Dashboard View ── */
export function renderFieldDashboard() {
  const recentInspections = MOCK_INSPECTIONS.slice(0, 3);
  const myInspections = MOCK_INSPECTIONS.filter(i => i.officer === user.name);

  return `
    <div class="fade-in">
      <div class="welcome-section">
        <h1 class="welcome-section__greeting">Good evening, ${user.name.split(' ')[0]}</h1>
        <p class="welcome-section__subtitle">${user.designation} · ${user.jurisdiction}</p>
      </div>

      <button class="new-inspection-cta" onclick="location.hash='#/officer/inspect'">
        <div class="new-inspection-cta__icon">📷</div>
        <div class="new-inspection-cta__text">
          <div class="new-inspection-cta__title">+ New Inspection</div>
          <div class="new-inspection-cta__subtitle">Capture a product label to check compliance</div>
        </div>
        <div class="new-inspection-cta__arrow">→</div>
      </button>

      <div class="dashboard-grid dashboard-grid--kpis" style="margin-bottom:var(--space-xl);grid-template-columns:repeat(2,1fr)">
        <div class="kpi-card fade-in stagger-1">
          <div class="kpi-card__icon" style="background:var(--color-primary-bg);color:var(--color-primary)">📋</div>
          <div class="kpi-card__label">Today's Scans</div>
          <div class="kpi-card__value">${myInspections.length}</div>
        </div>
        <div class="kpi-card fade-in stagger-2">
          <div class="kpi-card__icon" style="background:var(--color-danger-bg);color:var(--color-danger)">⚠️</div>
          <div class="kpi-card__label">Violations Found</div>
          <div class="kpi-card__value">${myInspections.reduce((a,i) => a + i.violations, 0)}</div>
        </div>
      </div>

      <div class="section-title">Recent Inspections</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        ${recentInspections.map(insp => `
          <div class="inspection-card fade-in" onclick="location.hash='#/officer/result/${insp.id}'">
            <div class="inspection-card__status-bar inspection-card__status-bar--${insp.status === 'compliant' ? 'pass' : 'fail'}"></div>
            <div class="inspection-card__body">
              <div class="inspection-card__title">${insp.product}</div>
              <div class="inspection-card__meta">
                <span>${insp.store}</span>
                <span>·</span>
                <span>${formatDateTime(insp.date)}</span>
              </div>
            </div>
            <span class="badge badge--${insp.status === 'compliant' ? 'success' : 'danger'}" style="align-self:center">
              ${insp.status === 'compliant' ? '✓ Pass' : `✕ ${insp.violations} issue${insp.violations !== 1 ? 's' : ''}`}
            </span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ── Inspection Flow ── */
export function renderInspectionUpload() {
  return `
    <div class="fade-in">
      <div style="margin-bottom:var(--space-lg)">
        <h1 class="upload-heading">New Inspection</h1>
        <p class="upload-description">Capture or upload a product label photo to check Legal Metrology compliance.</p>
        <div style="display:flex;gap:var(--space-md);margin-bottom:var(--space-md)">
          <div class="card" style="flex:1;text-align:center;padding:var(--space-md)">
            <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">Case ID</div>
            <div style="font-size:var(--font-size-sm);font-weight:600;font-family:var(--font-mono)">INS-2026-0148</div>
          </div>
          <div class="card" style="flex:1;text-align:center;padding:var(--space-md)">
            <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">Date</div>
            <div style="font-size:var(--font-size-sm);font-weight:600">${new Date().toLocaleDateString('en-IN', {day:'numeric',month:'short',year:'numeric'})}</div>
          </div>
        </div>
      </div>

      <div id="upload-error" aria-live="polite"></div>

      <div id="upload-state-idle">
        <div class="upload-actions">
          <label class="upload-btn upload-btn--primary" id="btn-camera-new">
            <span class="upload-btn__icon">📷</span>
            <span class="upload-btn__text">Take Photo</span>
            <input type="file" id="input-camera-new" accept="image/*" capture="environment" class="sr-only" />
          </label>
          <label class="upload-btn upload-btn--secondary" id="btn-gallery-new">
            <span class="upload-btn__icon">🖼️</span>
            <span class="upload-btn__text">Choose from Gallery</span>
            <input type="file" id="input-gallery-new" accept="image/jpeg,image/png,image/webp" class="sr-only" />
          </label>
        </div>

        <div class="tips-card">
          <h2 class="tips-card__title">Tips for a good scan</h2>
          <ul class="tips-card__list">
            <li class="tips-card__item"><span class="tips-card__bullet">📐</span> Keep the entire label visible in frame</li>
            <li class="tips-card__item"><span class="tips-card__bullet">💡</span> Use good lighting — avoid shadows</li>
            <li class="tips-card__item"><span class="tips-card__bullet">🔍</span> Hold the camera steady to avoid blur</li>
            <li class="tips-card__item"><span class="tips-card__bullet">📏</span> Place a coin beside the product as size reference</li>
          </ul>
        </div>
      </div>

      <div id="upload-state-preview" hidden>
        <div class="preview-card">
          <div class="preview-card__image-wrap">
            <img id="preview-img" class="preview-card__image" src="" alt="Selected product label" />
          </div>
          <div class="preview-card__info">
            <span class="preview-card__status"><span aria-hidden="true">✓</span> Image ready</span>
            <span id="preview-fname" class="preview-card__filename"></span>
          </div>
        </div>
        <div class="preview-actions">
          <button type="button" id="btn-change" class="btn btn--outline">Change Image</button>
          <button type="button" id="btn-scan-now" class="btn btn--primary btn--large">🔍 Scan Label</button>
        </div>
      </div>

      <div id="upload-state-processing" hidden>
        <div class="processing-card">
          <h2 class="processing-card__title">Analyzing label…</h2>
          <p class="processing-card__subtitle">Please wait while we check compliance</p>
          <ol class="processing-steps" id="proc-steps">
            <li class="processing-step processing-step--pending" data-step="upload">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Image uploaded</span>
            </li>
            <li class="processing-step processing-step--pending" data-step="enhance">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Image enhanced</span>
            </li>
            <li class="processing-step processing-step--pending" data-step="ocr">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Reading package text</span>
            </li>
            <li class="processing-step processing-step--pending" data-step="check">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Checking legal requirements</span>
            </li>
            <li class="processing-step processing-step--pending" data-step="report">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Preparing compliance result</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  `;
}

export function initInspectionFlow(navigateToResult) {
  let selectedFile = null;

  const inputCamera = document.getElementById('input-camera-new');
  const inputGallery = document.getElementById('input-gallery-new');
  const stateIdle = document.getElementById('upload-state-idle');
  const statePreview = document.getElementById('upload-state-preview');
  const stateProcessing = document.getElementById('upload-state-processing');
  const btnChange = document.getElementById('btn-change');
  const btnScan = document.getElementById('btn-scan-now');
  const previewImg = document.getElementById('preview-img');
  const previewFname = document.getElementById('preview-fname');

  if (!inputCamera) return;

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const { valid, error } = validateImage(file);
    if (!valid) {
      showUploadError(error);
      e.target.value = '';
      return;
    }
    selectedFile = file;
    previewImg.src = URL.createObjectURL(file);
    previewFname.textContent = file.name;
    stateIdle.hidden = true;
    statePreview.hidden = false;
  }

  inputCamera.addEventListener('change', handleFile);
  inputGallery.addEventListener('change', handleFile);

  btnChange.addEventListener('click', () => {
    selectedFile = null;
    if (previewImg.src) URL.revokeObjectURL(previewImg.src);
    previewImg.src = '';
    statePreview.hidden = true;
    stateIdle.hidden = false;
    inputCamera.value = '';
    inputGallery.value = '';
  });

  btnScan.addEventListener('click', async () => {
    if (!selectedFile) return;
    statePreview.hidden = true;
    stateProcessing.hidden = false;

    // Animate steps
    const steps = document.querySelectorAll('#proc-steps .processing-step');
    const delays = [500, 700, 900, 700, 500];
    for (let i = 0; i < steps.length; i++) {
      if (i > 0) {
        steps[i-1].classList.remove('processing-step--active');
        steps[i-1].classList.add('processing-step--done');
      }
      steps[i].classList.remove('processing-step--pending');
      steps[i].classList.add('processing-step--active');
      await new Promise(r => setTimeout(r, delays[i]));
    }
    steps[steps.length-1].classList.remove('processing-step--active');
    steps[steps.length-1].classList.add('processing-step--done');
    await new Promise(r => setTimeout(r, 400));

    // Store mock result and navigate
    sessionStorage.setItem('scanResult', JSON.stringify(FIXTURE_NON_COMPLIANT));
    navigateToResult('INS-2026-0148');
  });
}

function showUploadError(msg) {
  const el = document.getElementById('upload-error');
  if (!el) return;
  el.innerHTML = `<div class="error-message fade-in"><span class="error-message__icon">⚠️</span><span>${msg}</span></div>`;
  setTimeout(() => { el.innerHTML = ''; }, 5000);
}

/* ── Result Page ── */
export function renderResultPage(inspectionId) {
  const raw = sessionStorage.getItem('scanResult');
  const report = raw ? JSON.parse(raw) : FIXTURE_NON_COMPLIANT;
  const isCompliant = report.compliance_status === 'compliant';
  const statusClass = isCompliant ? 'pass' : 'fail';

  return `
    <div class="fade-in">
      <div style="margin-bottom:var(--space-base)">
        <button class="btn btn--ghost btn--small" onclick="location.hash='#/officer/dashboard'">← Back to Dashboard</button>
      </div>

      <section class="compliance-header compliance-header--${statusClass}">
        <div class="compliance-header__icon">${isCompliant ? '✅' : '❌'}</div>
        <h1 class="compliance-header__status">${getStatusLabel(report.compliance_status)}</h1>
        <p class="compliance-header__count">${formatViolationCount(report.violations.length)}</p>
        <span class="compliance-header__category">${getCategoryLabel(report.product_category)}</span>
      </section>

      ${report.violations.length > 0 ? `
        <section class="violations-section">
          <h2 class="section-title">Violations</h2>
          <div class="violations-list">
            ${report.violations.map(v => `
              <article class="violation-card">
                <div class="violation-card__header">
                  <span class="violation-card__icon">❌</span>
                  <h3 class="violation-card__field">${getFieldLabel(v.field)}</h3>
                </div>
                <p class="violation-card__description">${v.description}</p>
                <div class="violation-card__footer">
                  <span class="violation-card__severity violation-card__severity--${v.severity || 'major'}">${getSeverityLabel(v.severity)}</span>
                  <span class="violation-card__rule">${v.rule_reference}</span>
                </div>
              </article>
            `).join('')}
          </div>
        </section>
      ` : ''}

      ${report.compliant_fields?.length > 0 ? `
        <section class="compliant-section">
          <details class="compliant-details" open>
            <summary class="compliant-summary">
              <h2 class="section-title section-title--inline">Compliant Fields</h2>
              <span class="compliant-count">${report.compliant_fields.length} passed</span>
            </summary>
            <ul class="compliant-list">
              ${report.compliant_fields.map(f => `
                <li class="compliant-item">
                  <span class="compliant-item__icon">✓</span>
                  <span class="compliant-item__label">${getFieldLabel(f)}</span>
                </li>
              `).join('')}
            </ul>
          </details>
        </section>
      ` : ''}

      <section class="metadata-section">
        <h2 class="section-title">Scan Details</h2>
        <dl class="metadata-list">
          <div class="metadata-item">
            <dt class="metadata-item__label">Inspection ID</dt>
            <dd class="metadata-item__value" style="font-family:var(--font-mono)">${inspectionId || report.image_id}</dd>
          </div>
          <div class="metadata-item">
            <dt class="metadata-item__label">Category</dt>
            <dd class="metadata-item__value">${getCategoryLabel(report.product_category)}</dd>
          </div>
          <div class="metadata-item">
            <dt class="metadata-item__label">Checked</dt>
            <dd class="metadata-item__value">${formatDateTime(report.checked_at)}</dd>
          </div>
          <div class="metadata-item">
            <dt class="metadata-item__label">Officer</dt>
            <dd class="metadata-item__value">${user.name}</dd>
          </div>
        </dl>
      </section>

      <div class="report-actions">
        <button class="btn btn--primary btn--large btn--full" id="btn-export-pdf">📄 Export PDF Report</button>
        <button class="btn btn--outline btn--full" onclick="location.hash='#/officer/inspect'">📷 New Inspection</button>
      </div>
    </div>
  `;
}

export function initResultPage() {
  const btn = document.getElementById('btn-export-pdf');
  if (btn) {
    btn.addEventListener('click', () => {
      btn.textContent = '⏳ Generating…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ PDF Downloaded';
        showToast('Inspection report exported as PDF', 'success');
        setTimeout(() => {
          btn.textContent = '📄 Export PDF Report';
          btn.disabled = false;
        }, 2000);
      }, 1500);
    });
  }
}

/* ── History ── */
export function renderHistory() {
  return `
    <div class="fade-in">
      <h1 style="font-size:var(--font-size-xl);margin-bottom:var(--space-lg)">Inspection History</h1>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        ${MOCK_INSPECTIONS.map(insp => `
          <div class="inspection-card" onclick="location.hash='#/officer/result/${insp.id}'">
            <div class="inspection-card__status-bar inspection-card__status-bar--${insp.status === 'compliant' ? 'pass' : 'fail'}"></div>
            <div class="inspection-card__body">
              <div class="inspection-card__title">${insp.product}</div>
              <div class="inspection-card__meta">
                <span>${insp.store}</span> · <span>${formatDateTime(insp.date)}</span>
              </div>
            </div>
            <span class="badge badge--${insp.status === 'compliant' ? 'success' : 'danger'}" style="align-self:center">
              ${insp.status === 'compliant' ? '✓ Pass' : `✕ ${insp.violations}`}
            </span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ── Profile ── */
export function renderProfile() {
  return `
    <div class="fade-in">
      <div style="text-align:center;margin-bottom:var(--space-2xl)">
        <div class="avatar avatar--lg" style="margin:0 auto var(--space-md);width:64px;height:64px;font-size:var(--font-size-xl)">${user.avatar}</div>
        <h1 style="font-size:var(--font-size-xl)">${user.name}</h1>
        <p style="color:var(--color-text-muted);font-size:var(--font-size-sm)">${user.designation}</p>
        <div class="badge badge--info" style="margin-top:var(--space-sm)">${user.id}</div>
      </div>
      <div class="card" style="margin-bottom:var(--space-md)">
        <dl class="metadata-list" style="border:none">
          <div class="metadata-item"><dt class="metadata-item__label">Department</dt><dd class="metadata-item__value">${user.department}</dd></div>
          <div class="metadata-item"><dt class="metadata-item__label">Jurisdiction</dt><dd class="metadata-item__value">${user.jurisdiction}</dd></div>
          <div class="metadata-item"><dt class="metadata-item__label">Phone</dt><dd class="metadata-item__value">${user.phone}</dd></div>
        </dl>
      </div>
      <button class="btn btn--outline btn--full" onclick="location.hash='#/login/officer'" style="margin-top:var(--space-lg)">Sign Out</button>
    </div>
  `;
}

/* ── Toast helper ── */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3500);
}
