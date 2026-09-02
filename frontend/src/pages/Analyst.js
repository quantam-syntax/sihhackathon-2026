/* ============================================
   Consumer Affairs / Regulatory Analyst Dashboard
   ============================================ */

import { MOCK_USERS, MOCK_AGGREGATE, MOCK_REGIONS, MOCK_VIOLATION_TYPES, MOCK_INSPECTIONS } from '../data/mockData.js';
import { formatDateTime } from '../utils/formatters.js';

const user = MOCK_USERS.analyst;

/* ── Shell ── */
export function renderAnalystShell(activeRoute) {
  return `
    <div class="app-shell">
      <aside class="app-sidebar" id="app-sidebar">
        <div class="app-sidebar__brand">
          <div class="app-sidebar__logo">M</div>
          <div>
            <div class="app-sidebar__name">MetraScan</div>
            <div class="app-sidebar__role">Market Intelligence</div>
          </div>
        </div>

        <nav class="app-sidebar__nav">
          <div class="app-sidebar__section-label">Intelligence</div>
          <a href="#/analyst/dashboard" class="sidebar-link ${activeRoute === 'dashboard' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">📊</span> Overview
          </a>
          <a href="#/analyst/trends" class="sidebar-link ${activeRoute === 'trends' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">📈</span> Market Trends
          </a>
          <a href="#/analyst/regions" class="sidebar-link ${activeRoute === 'regions' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">🗺️</span> Regional Intelligence
          </a>
          <a href="#/analyst/violations" class="sidebar-link ${activeRoute === 'violations' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">⚠️</span> Violation Analysis
          </a>

          <div class="app-sidebar__section-label">Tools</div>
          <a href="#/analyst/ecommerce" class="sidebar-link ${activeRoute === 'ecommerce' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">🛒</span> E-Commerce Audit
          </a>
          <a href="#/analyst/reports" class="sidebar-link ${activeRoute === 'reports' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">📄</span> Reports
          </a>
        </nav>

        <div class="app-sidebar__footer">
          <div class="sidebar-user" onclick="location.hash='#/login/analyst'">
            <div class="sidebar-user__avatar">${user.avatar}</div>
            <div class="sidebar-user__info">
              <div class="sidebar-user__name">${user.name}</div>
              <div class="sidebar-user__role">Sign Out</div>
            </div>
          </div>
        </div>
      </aside>

      <div class="sidebar-overlay" id="sidebar-overlay"></div>

      <main class="app-main">
        <header class="app-topbar">
          <div class="app-topbar__left">
            <button class="app-topbar__menu-btn" id="btn-toggle-sidebar">☰</button>
            <h1 class="app-topbar__title">${getAnalystPageTitle(activeRoute)}</h1>
          </div>
          <div class="app-topbar__right">
            <span class="badge badge--neutral">${user.jurisdiction}</span>
          </div>
        </header>

        <div class="app-content" id="analyst-view"></div>
      </main>
    </div>
  `;
}

function getAnalystPageTitle(route) {
  const map = {
    dashboard: 'Market Intelligence',
    trends: 'Market Trends',
    regions: 'Regional Intelligence',
    violations: 'Violation Analysis',
    ecommerce: 'E-Commerce Audit',
    reports: 'Reports',
  };
  return map[route] || 'Dashboard';
}

/* ── Dashboard ── */
export function renderAnalystDashboard() {
  const complianceRate = Math.round((MOCK_AGGREGATE.compliant / MOCK_AGGREGATE.total_scans) * 100);
  const violationRate = Math.round((MOCK_AGGREGATE.non_compliant / MOCK_AGGREGATE.total_scans) * 100);

  return `
    <div class="fade-in">
      <div class="welcome-section">
        <h1 class="welcome-section__greeting">Consumer Affairs Intelligence</h1>
        <p class="welcome-section__subtitle">${user.jurisdiction} · ${formatDateTime(new Date().toISOString())}</p>
      </div>

      <div class="dashboard-grid dashboard-grid--kpis" style="margin-bottom:var(--space-2xl)">
        <div class="kpi-card fade-in stagger-1">
          <div class="kpi-card__icon" style="background:var(--color-primary-bg);color:var(--color-primary)">📋</div>
          <div class="kpi-card__label">Total Inspections</div>
          <div class="kpi-card__value">${MOCK_AGGREGATE.total_scans}</div>
          <div class="kpi-card__trend kpi-card__trend--up">↑ 18% vs last month</div>
        </div>
        <div class="kpi-card fade-in stagger-2">
          <div class="kpi-card__icon" style="background:var(--color-success-bg);color:var(--color-success)">✓</div>
          <div class="kpi-card__label">Compliance Rate</div>
          <div class="kpi-card__value">${complianceRate}%</div>
          <div class="kpi-card__trend kpi-card__trend--up">↑ 3.2% vs last month</div>
        </div>
        <div class="kpi-card fade-in stagger-3">
          <div class="kpi-card__icon" style="background:var(--color-danger-bg);color:var(--color-danger)">⚠️</div>
          <div class="kpi-card__label">Violation Rate</div>
          <div class="kpi-card__value">${violationRate}%</div>
          <div class="kpi-card__trend kpi-card__trend--down">↓ 2.1% vs last month</div>
        </div>
        <div class="kpi-card fade-in stagger-4">
          <div class="kpi-card__icon" style="background:hsla(210, 70%, 50%, 0.12);color:hsl(210, 75%, 50%)">🔍</div>
          <div class="kpi-card__label">Needs Review</div>
          <div class="kpi-card__value">${MOCK_AGGREGATE.needs_review}</div>
          <div class="kpi-card__trend" style="color:var(--color-text-muted)">Pending verification</div>
        </div>
        <div class="kpi-card fade-in stagger-5">
          <div class="kpi-card__icon" style="background:var(--color-warning-bg);color:hsl(38,70%,35%)">🗺️</div>
          <div class="kpi-card__label">High-Risk Regions</div>
          <div class="kpi-card__value">${MOCK_REGIONS.filter(r => r.risk === 'high').length}</div>
          <div class="kpi-card__trend" style="color:var(--color-text-muted)">of ${MOCK_REGIONS.length} monitored</div>
        </div>
      </div>

      <div class="dashboard-grid dashboard-grid--2col" style="margin-bottom:var(--space-2xl)">

        <!-- Violation Category Breakdown -->
        <div class="chart-card fade-in stagger-5">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Top Violation Types</h2>
          </div>
          <div style="display:flex;flex-direction:column;gap:var(--space-md)">
            ${MOCK_VIOLATION_TYPES.slice(0, 5).map(v => `
              <div>
                <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                  <span style="font-size:var(--font-size-sm);font-weight:500">${v.type}</span>
                  <span style="font-size:var(--font-size-sm);font-weight:700">${v.count}</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-bar__fill progress-bar__fill--danger" style="width:${v.percentage * 3}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Regional Overview -->
        <div class="chart-card fade-in stagger-6">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Regional Compliance</h2>
            <button class="btn btn--ghost btn--small" onclick="location.hash='#/analyst/regions'">View Map</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
            ${MOCK_REGIONS.map(region => `
              <div style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-sm) 0;border-bottom:1px solid var(--color-border-light)">
                <span class="badge badge--${region.risk === 'high' ? 'danger' : region.risk === 'medium' ? 'warning' : 'success'}" style="min-width:60px;justify-content:center">
                  ${region.risk.toUpperCase()}
                </span>
                <div style="flex:1">
                  <div style="font-size:var(--font-size-sm);font-weight:600">${region.name}</div>
                  <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${region.inspections} inspections</div>
                </div>
                <div style="text-align:right">
                  <div style="font-size:var(--font-size-lg);font-weight:700;color:${region.compliance >= 75 ? 'var(--color-success)' : region.compliance >= 60 ? 'hsl(38,70%,35%)' : 'var(--color-danger)'}">${region.compliance}%</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Violations by Product Category -->
      <div class="chart-card fade-in" style="margin-bottom:var(--space-2xl)">
        <div class="chart-card__header">
          <h2 class="chart-card__title">Violations by Product Category</h2>
        </div>
        <div class="bar-chart" style="height:200px">
          ${Object.entries(MOCK_AGGREGATE.violations_by_category).map(([cat, count]) => {
            const max = Math.max(...Object.values(MOCK_AGGREGATE.violations_by_category));
            const height = (count / max) * 100;
            const label = cat.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            return `
              <div class="bar-chart__bar">
                <div class="bar-chart__value">${count}</div>
                <div style="width:100%;height:100%;display:flex;align-items:flex-end">
                  <div class="bar-chart__fill bar-chart__fill--primary" style="height:${height}%;width:100%"></div>
                </div>
                <div class="bar-chart__label">${label}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ── Regional Intelligence ── */
export function renderAnalystRegions() {
  return `
    <div class="fade-in">
      <div class="filter-bar" style="margin-bottom:var(--space-lg)">
        <select class="filter-bar__select"><option>All Risk Levels</option><option>High Risk</option><option>Medium Risk</option><option>Low Risk</option></select>
        <select class="filter-bar__select"><option>Last 30 Days</option><option>Last 7 Days</option><option>This Quarter</option></select>
      </div>

      <div class="dashboard-grid dashboard-grid--3col">
        ${MOCK_REGIONS.map(region => `
          <div class="card" style="border-left:4px solid ${region.risk === 'high' ? 'var(--color-danger)' : region.risk === 'medium' ? 'var(--color-warning)' : 'var(--color-success)'}">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:var(--space-md)">
              <div>
                <h3 style="font-size:var(--font-size-lg)">${region.name}</h3>
                <span class="badge badge--${region.risk === 'high' ? 'danger' : region.risk === 'medium' ? 'warning' : 'success'}" style="margin-top:4px">
                  ${region.risk.toUpperCase()} RISK
                </span>
              </div>
              <div style="text-align:right">
                <div style="font-size:var(--font-size-3xl);font-weight:800;line-height:1;color:${region.compliance >= 75 ? 'var(--color-success)' : region.compliance >= 60 ? 'hsl(38,70%,35%)' : 'var(--color-danger)'}">${region.compliance}%</div>
                <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">Compliance</div>
              </div>
            </div>
            <div style="display:flex;gap:var(--space-lg);padding-top:var(--space-md);border-top:1px solid var(--color-border-light)">
              <div><div style="font-size:var(--font-size-lg);font-weight:700">${region.inspections}</div><div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Inspections</div></div>
              <div><div style="font-size:var(--font-size-lg);font-weight:700;color:var(--color-danger)">${region.violations}</div><div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Violations</div></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ── Violation Analysis ── */
export function renderAnalystViolations() {
  return `
    <div class="fade-in">
      <div class="dashboard-grid dashboard-grid--2col" style="margin-bottom:var(--space-2xl)">
        <div class="chart-card">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Violation Type Breakdown</h2>
          </div>
          <div style="display:flex;flex-direction:column;gap:var(--space-md)">
            ${MOCK_VIOLATION_TYPES.map(v => `
              <div style="display:flex;align-items:center;gap:var(--space-md)">
                <div style="flex:1">
                  <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                    <span style="font-size:var(--font-size-sm);font-weight:500">${v.type}</span>
                    <span style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${v.percentage}%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-bar__fill" style="width:${v.percentage * 3}%;background:${v.trend === 'up' ? 'var(--color-danger)' : v.trend === 'down' ? 'var(--color-success)' : 'var(--color-primary)'}"></div>
                  </div>
                </div>
                <span style="font-size:var(--font-size-xs);font-weight:600;color:${v.trend === 'up' ? 'var(--color-danger)' : v.trend === 'down' ? 'var(--color-success)' : 'var(--color-text-muted)'}">
                  ${v.trend === 'up' ? '↑' : v.trend === 'down' ? '↓' : '→'}
                </span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="chart-card">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Violations by Field (Count)</h2>
          </div>
          <div class="bar-chart" style="height:200px">
            ${Object.entries(MOCK_AGGREGATE.violations_by_field).map(([field, count]) => {
              const max = Math.max(...Object.values(MOCK_AGGREGATE.violations_by_field));
              const height = (count / max) * 100;
              const label = field.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).substring(0, 10);
              return `
                <div class="bar-chart__bar">
                  <div class="bar-chart__value">${count}</div>
                  <div style="width:100%;height:100%;display:flex;align-items:flex-end">
                    <div class="bar-chart__fill bar-chart__fill--danger" style="height:${height}%;width:100%"></div>
                  </div>
                  <div class="bar-chart__label" style="font-size:9px">${label}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── E-Commerce Audit ── */
export function renderEcommerceAudit() {
  return `
    <div class="fade-in">
      <div class="card" style="max-width:700px;margin-bottom:var(--space-2xl)">
        <h2 style="margin-bottom:var(--space-sm)">Audit a Product Listing</h2>
        <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary);margin-bottom:var(--space-lg)">
          Enter an Amazon or Flipkart product URL to check the listing for Legal Metrology compliance.
        </p>
        <div style="display:flex;gap:var(--space-sm)">
          <input type="url" class="input-group__input" id="ecom-url-input" style="flex:1" placeholder="https://www.amazon.in/dp/B0XXXXXXXX" />
          <button class="btn btn--primary" id="btn-audit-url">Analyze</button>
        </div>
        <p class="input-group__hint" style="margin-top:var(--space-sm)">Supports Amazon.in & Flipkart product URLs</p>
      </div>

      <div id="ecom-result"></div>

      <div class="empty-state" id="ecom-empty">
        <div class="empty-state__icon">🛒</div>
        <h2 class="empty-state__title">No Audit Running</h2>
        <p class="empty-state__description">Paste a product URL above to begin an e-commerce compliance audit.</p>
      </div>
    </div>
  `;
}

export function initEcommerceAudit() {
  const btn = document.getElementById('btn-audit-url');
  const input = document.getElementById('ecom-url-input');
  const resultEl = document.getElementById('ecom-result');
  const emptyEl = document.getElementById('ecom-empty');

  if (!btn) return;

  btn.addEventListener('click', () => {
    const url = input?.value?.trim();
    if (!url) return;

    emptyEl.hidden = true;
    btn.textContent = 'Analyzing…';
    btn.disabled = true;

    resultEl.innerHTML = `
      <div class="processing-card" style="max-width:500px">
        <h2 class="processing-card__title">Analyzing Listing…</h2>
        <p class="processing-card__subtitle">Fetching product data from e-commerce platform</p>
        <ol class="processing-steps">
          <li class="processing-step processing-step--active"><span class="processing-step__indicator"></span><span class="processing-step__label">Fetching listing page</span></li>
          <li class="processing-step processing-step--pending"><span class="processing-step__indicator"></span><span class="processing-step__label">Extracting product images</span></li>
          <li class="processing-step processing-step--pending"><span class="processing-step__indicator"></span><span class="processing-step__label">Running compliance check</span></li>
        </ol>
      </div>
    `;

    // Simulate analysis
    setTimeout(() => {
      btn.textContent = 'Analyze';
      btn.disabled = false;
      resultEl.innerHTML = `
        <div class="card" style="max-width:700px;border-left:4px solid var(--color-danger)">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:var(--space-md)">
            <div>
              <h3 style="margin-bottom:4px">Product Listing Audit Result</h3>
              <p style="font-size:var(--font-size-xs);color:var(--color-text-muted);word-break:break-all">${url}</p>
            </div>
            <span class="badge badge--danger">NON-COMPLIANT</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
            <div class="violation-card">
              <div class="violation-card__header"><span class="violation-card__icon">❌</span><h3 class="violation-card__field">MRP Not Displayed</h3></div>
              <p class="violation-card__description">Product listing does not display MRP (Maximum Retail Price) as required.</p>
              <div class="violation-card__footer">
                <span class="violation-card__severity violation-card__severity--major">Major</span>
                <span class="violation-card__rule">Rule 6(1)(c), LMPC Rules 2011</span>
              </div>
            </div>
            <div class="violation-card">
              <div class="violation-card__header"><span class="violation-card__icon">❌</span><h3 class="violation-card__field">Net Quantity Missing from Images</h3></div>
              <p class="violation-card__description">Product images do not clearly show net quantity declaration.</p>
              <div class="violation-card__footer">
                <span class="violation-card__severity violation-card__severity--minor">Minor</span>
                <span class="violation-card__rule">Rule 6(1)(b), LMPC Rules 2011</span>
              </div>
            </div>
          </div>
          <div style="margin-top:var(--space-lg)">
            <button class="btn btn--outline btn--small">📄 Export Audit Report</button>
          </div>
        </div>
      `;
    }, 3000);
  });
}
