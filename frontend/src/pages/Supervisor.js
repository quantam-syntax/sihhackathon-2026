/* ============================================
   Supervisor Dashboard Page
   ============================================ */

import { MOCK_USERS, MOCK_INSPECTIONS, MOCK_OFFICERS, MOCK_STORES, MOCK_AGGREGATE } from '../data/mockData.js';
import { formatDateTime } from '../utils/formatters.js';

const user = MOCK_USERS.supervisor;

/* ── Shell ── */
export function renderSupervisorShell(activeRoute) {
  return `
    <div class="app-shell">
      <aside class="app-sidebar" id="app-sidebar">
        <div class="app-sidebar__brand">
          <div class="app-sidebar__logo">M</div>
          <div>
            <div class="app-sidebar__name">MetraScan</div>
            <div class="app-sidebar__role">Supervisor Portal</div>
          </div>
        </div>

        <nav class="app-sidebar__nav">
          <div class="app-sidebar__section-label">Operations</div>
          <a href="#/supervisor/dashboard" class="sidebar-link ${activeRoute === 'dashboard' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">📊</span> Overview
          </a>
          <a href="#/supervisor/inspections" class="sidebar-link ${activeRoute === 'inspections' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">📋</span> Inspections
            <span class="sidebar-link__badge">3</span>
          </a>
          <a href="#/supervisor/officer-tracking" class="sidebar-link ${activeRoute === 'officers' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">👥</span> Field Officers
          </a>
          <a href="#/supervisor/stores" class="sidebar-link ${activeRoute === 'stores' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">🏪</span> Store History
          </a>
          
          <div class="app-sidebar__section-label">Settings</div>
          <a href="#/supervisor/reports" class="sidebar-link ${activeRoute === 'reports' ? 'sidebar-link--active' : ''}">
            <span class="sidebar-link__icon">📄</span> Export Reports
          </a>
        </nav>

        <div class="app-sidebar__footer">
          <div class="sidebar-user" onclick="location.hash='#/login/supervisor'">
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
            <h1 class="app-topbar__title">${getPageTitle(activeRoute)}</h1>
          </div>
          <div class="app-topbar__right">
            <span class="badge badge--neutral">${user.jurisdiction}</span>
          </div>
        </header>
        
        <div class="app-content" id="supervisor-view"></div>
      </main>
    </div>
  `;
}

function getPageTitle(route) {
  const map = {
    dashboard: 'Enforcement Operations',
    inspections: 'Recent Inspections',
    officers: 'Field Officer Tracking',
    stores: 'Store History',
    reports: 'Reports'
  };
  return map[route] || 'Dashboard';
}

/* ── Dashboard View ── */
export function renderSupervisorDashboard() {
  const complianceRate = Math.round((MOCK_AGGREGATE.compliant / MOCK_AGGREGATE.total_scans) * 100);
  const activeOfficers = MOCK_OFFICERS.filter(o => o.status === 'active').length;

  return `
    <div class="fade-in">
      <div class="welcome-section">
        <h1 class="welcome-section__greeting">Enforcement Operations Center</h1>
        <p class="welcome-section__subtitle">${user.jurisdiction} · ${formatDateTime(new Date().toISOString())}</p>
      </div>

      <div class="dashboard-grid dashboard-grid--kpis" style="margin-bottom:var(--space-2xl)">
        <div class="kpi-card fade-in stagger-1">
          <div class="kpi-card__icon" style="background:var(--color-primary-bg);color:var(--color-primary)">📋</div>
          <div class="kpi-card__label">Total Inspections</div>
          <div class="kpi-card__value">${MOCK_AGGREGATE.total_scans}</div>
          <div class="kpi-card__trend kpi-card__trend--up">↑ 12% this week</div>
        </div>
        <div class="kpi-card fade-in stagger-2">
          <div class="kpi-card__icon" style="background:var(--color-danger-bg);color:var(--color-danger)">⚠️</div>
          <div class="kpi-card__label">Total Violations</div>
          <div class="kpi-card__value">${MOCK_AGGREGATE.non_compliant}</div>
          <div class="kpi-card__trend kpi-card__trend--down">↓ 4% this week</div>
        </div>
        <div class="kpi-card fade-in stagger-3">
          <div class="kpi-card__icon" style="background:var(--color-success-bg);color:var(--color-success)">✓</div>
          <div class="kpi-card__label">Compliance Rate</div>
          <div class="kpi-card__value">${complianceRate}%</div>
          <div class="kpi-card__trend kpi-card__trend--up">↑ 2.5% this week</div>
        </div>
        <div class="kpi-card fade-in stagger-4">
          <div class="kpi-card__icon" style="background:hsla(210, 70%, 50%, 0.12);color:hsl(210, 75%, 50%)">🔍</div>
          <div class="kpi-card__label">Needs Review</div>
          <div class="kpi-card__value">${MOCK_AGGREGATE.needs_review}</div>
          <div class="kpi-card__trend" style="color:var(--color-text-muted)">Manual check req.</div>
        </div>
        <div class="kpi-card fade-in stagger-5">
          <div class="kpi-card__icon" style="background:var(--color-warning-bg);color:hsl(38,70%,35%)">👥</div>
          <div class="kpi-card__label">Active Officers</div>
          <div class="kpi-card__value">${activeOfficers} / ${MOCK_OFFICERS.length}</div>
          <div class="kpi-card__trend" style="color:var(--color-text-muted)">Currently in field</div>
        </div>
      </div>

      <div class="dashboard-grid dashboard-grid--2col">
        
        <!-- Activity Chart (CSS only visualization) -->
        <div class="chart-card fade-in stagger-5">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Inspection Activity (7 Days)</h2>
          </div>
          <div class="bar-chart">
            ${MOCK_AGGREGATE.trend_over_time.map(day => {
              const max = Math.max(...MOCK_AGGREGATE.trend_over_time.map(d => d.scans));
              const height = (day.scans / max) * 100;
              const vHeight = (day.violations / max) * 100;
              const dateObj = new Date(day.date);
              const label = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
              return `
                <div class="bar-chart__bar" title="${day.scans} Scans, ${day.violations} Violations">
                  <div style="font-size:var(--font-size-2xs);margin-bottom:2px;font-weight:bold">${day.scans}</div>
                  <div style="width:100%;height:100%;display:flex;align-items:flex-end;position:relative">
                    <div class="bar-chart__fill bar-chart__fill--primary" style="height:${height}%;position:absolute;bottom:0;width:100%;border-radius:4px"></div>
                    <div class="bar-chart__fill bar-chart__fill--danger" style="height:${vHeight}%;position:absolute;bottom:0;width:100%;border-radius:4px"></div>
                  </div>
                  <div class="bar-chart__label">${label}</div>
                </div>
              `;
            }).join('')}
          </div>
          <div style="display:flex;gap:var(--space-md);justify-content:center;margin-top:var(--space-md);font-size:var(--font-size-xs)">
            <div style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;background:var(--color-primary);border-radius:2px"></span> Total Scans</div>
            <div style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;background:var(--color-danger);border-radius:2px"></span> Violations</div>
          </div>
        </div>

        <!-- Recent Inspections -->
        <div class="chart-card fade-in stagger-6">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Recent Inspections</h2>
            <button class="btn btn--ghost btn--small" onclick="location.hash='#/supervisor/inspections'">View All</button>
          </div>
          <div class="data-table" style="overflow-x:auto">
            <table style="width:100%">
              <thead>
                <tr>
                  <th>Store</th>
                  <th>Officer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${MOCK_INSPECTIONS.slice(0, 5).map(insp => `
                  <tr>
                    <td style="font-weight:500">${insp.store}</td>
                    <td>${insp.officer}</td>
                    <td>
                      <span class="badge badge--${insp.status === 'compliant' ? 'success' : 'danger'}">
                        ${insp.status === 'compliant' ? 'Pass' : 'Fail'}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  `;
}

/* ── Inspections View ── */
export function renderSupervisorInspections() {
  return `
    <div class="fade-in">
      <div class="filter-bar" style="margin-bottom:var(--space-lg)">
        <span style="font-size:var(--font-size-sm);font-weight:600;margin-right:var(--space-sm)">Filters:</span>
        <select class="filter-bar__select">
          <option>All Statuses</option>
          <option>Violations Only</option>
          <option>Compliant Only</option>
        </select>
        <select class="filter-bar__select">
          <option>All Officers</option>
          ${MOCK_OFFICERS.map(o => `<option>${o.name}</option>`).join('')}
        </select>
        <select class="filter-bar__select">
          <option>Last 7 Days</option>
          <option>Today</option>
          <option>This Month</option>
        </select>
      </div>

      <div class="card" style="padding:0;overflow:hidden">
        <div style="overflow-x:auto">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID & Date</th>
                <th>Store / Location</th>
                <th>Product</th>
                <th>Officer</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${MOCK_INSPECTIONS.map(insp => `
                <tr>
                  <td>
                    <div style="font-family:var(--font-mono);font-weight:600">${insp.id}</div>
                    <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${formatDateTime(insp.date)}</div>
                  </td>
                  <td>
                    <div style="font-weight:500">${insp.store}</div>
                    <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${insp.location}</div>
                  </td>
                  <td>${insp.product}</td>
                  <td>${insp.officer}</td>
                  <td>
                    <span class="badge badge--${insp.status === 'compliant' ? 'success' : 'danger'}">
                      ${insp.status === 'compliant' ? 'Pass' : `${insp.violations} Violations`}
                    </span>
                  </td>
                  <td>
                    <button class="btn btn--outline btn--small">View Evidence</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

/* ── Store History View ── */
export function renderSupervisorStores() {
  return `
    <div class="fade-in">
      <div class="filter-bar" style="margin-bottom:var(--space-lg)">
        <input type="text" class="input-group__input" style="flex:1;min-height:36px;padding:var(--space-xs) var(--space-md)" placeholder="Search store name or location..." />
        <button class="btn btn--primary btn--small">Search</button>
      </div>

      <div class="dashboard-grid dashboard-grid--3col">
        ${MOCK_STORES.map(store => `
          <div class="card card--interactive">
            <h3 style="margin-bottom:4px;font-size:var(--font-size-lg)">${store.name}</h3>
            <p style="font-size:var(--font-size-xs);color:var(--color-text-muted);margin-bottom:var(--space-md)">${store.location}</p>
            
            <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-sm);padding-bottom:var(--space-sm);border-bottom:1px solid var(--color-border-light)">
              <div style="text-align:center">
                <div style="font-size:var(--font-size-xl);font-weight:700">${store.inspections}</div>
                <div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Inspections</div>
              </div>
              <div style="text-align:center">
                <div style="font-size:var(--font-size-xl);font-weight:700;color:var(--color-danger)">${store.violations}</div>
                <div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Violations</div>
              </div>
              <div style="text-align:center">
                <div style="font-size:var(--font-size-xl);font-weight:700;color:var(--color-success)">${store.compliance}%</div>
                <div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Compliance</div>
              </div>
            </div>
            
            ${store.violations > 5 ? `<div class="badge badge--danger" style="margin-bottom:var(--space-sm)">⚠️ High Risk: Repeat Offender</div>` : ''}
            
            <button class="btn btn--outline btn--full btn--small">View Full History</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
