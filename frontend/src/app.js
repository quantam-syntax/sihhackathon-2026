/* ============================================
   app.js — MetraScan SPA Entry Point
   ============================================
   Wires the hash-based router to all page modules.
   Manages sidebar toggle and role-based auth state.
   ============================================ */

import { Router } from './router.js';
import { renderLoginPage, initLoginPage } from './pages/LoginPage.js';
import {
  renderFieldShell, renderFieldDashboard, renderInspectionUpload,
  initInspectionFlow, renderResultPage, initResultPage,
  renderHistory, renderProfile,
} from './pages/FieldOfficer.js';
import {
  renderSupervisorShell, renderSupervisorDashboard,
  renderSupervisorInspections, renderSupervisorStores,
} from './pages/Supervisor.js';
import {
  renderAnalystShell, renderAnalystDashboard, renderAnalystRegions,
  renderAnalystViolations, renderEcommerceAudit, initEcommerceAudit,
} from './pages/Analyst.js';

const app = document.getElementById('app');
const router = new Router();

/* ── Render helper ── */
function render(html) {
  app.innerHTML = html;
}

/* ── Sidebar toggle (shared by supervisor & analyst shells) ── */
function initSidebarToggle() {
  const btn = document.getElementById('btn-toggle-sidebar');
  const sidebar = document.getElementById('app-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!btn || !sidebar) return;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('app-sidebar--open');
    overlay?.classList.toggle('sidebar-overlay--visible');
  });

  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('app-sidebar--open');
    overlay.classList.remove('sidebar-overlay--visible');
  });
}

/* ── Login handler ── */
function handleLogin(role) {
  switch (role) {
    case 'officer':
      router.navigate('/officer/dashboard');
      break;
    case 'supervisor':
      router.navigate('/supervisor/dashboard');
      break;
    case 'analyst':
      router.navigate('/analyst/dashboard');
      break;
    default:
      router.navigate('/login/officer');
  }
}

/* ============================================
   ROUTES
   ============================================ */

// ── Login ──
router.on('/login/:role', (params) => {
  const role = params.role || 'officer';
  render(renderLoginPage(role, handleLogin));
  initLoginPage(role, handleLogin);
});

// ── Field Officer ──
router.on('/officer/dashboard', () => {
  render(renderFieldShell('dashboard'));
  document.getElementById('field-view').innerHTML = renderFieldDashboard();
});

router.on('/officer/inspect', () => {
  render(renderFieldShell('inspect'));
  document.getElementById('field-view').innerHTML = renderInspectionUpload();
  initInspectionFlow((id) => router.navigate(`/officer/result/${id}`));
});

router.on('/officer/result/:id', (params) => {
  render(renderFieldShell('inspect'));
  document.getElementById('field-view').innerHTML = renderResultPage(params.id);
  initResultPage();
});

router.on('/officer/history', () => {
  render(renderFieldShell('history'));
  document.getElementById('field-view').innerHTML = renderHistory();
});

router.on('/officer/profile', () => {
  render(renderFieldShell('profile'));
  document.getElementById('field-view').innerHTML = renderProfile();
});

// ── Supervisor ──
router.on('/supervisor/dashboard', () => {
  render(renderSupervisorShell('dashboard'));
  document.getElementById('supervisor-view').innerHTML = renderSupervisorDashboard();
  initSidebarToggle();
});

router.on('/supervisor/inspections', () => {
  render(renderSupervisorShell('inspections'));
  document.getElementById('supervisor-view').innerHTML = renderSupervisorInspections();
  initSidebarToggle();
});

router.on('/supervisor/stores', () => {
  render(renderSupervisorShell('stores'));
  document.getElementById('supervisor-view').innerHTML = renderSupervisorStores();
  initSidebarToggle();
});

router.on('/supervisor/officer-tracking', () => {
  render(renderSupervisorShell('officers'));
  document.getElementById('supervisor-view').innerHTML = renderOfficerTracking();
  initSidebarToggle();
});

router.on('/supervisor/reports', () => {
  render(renderSupervisorShell('reports'));
  document.getElementById('supervisor-view').innerHTML = renderReportsPage('supervisor');
  initSidebarToggle();
});

// ── Analyst ──
router.on('/analyst/dashboard', () => {
  render(renderAnalystShell('dashboard'));
  document.getElementById('analyst-view').innerHTML = renderAnalystDashboard();
  initSidebarToggle();
});

router.on('/analyst/trends', () => {
  render(renderAnalystShell('trends'));
  document.getElementById('analyst-view').innerHTML = renderAnalystTrends();
  initSidebarToggle();
});

router.on('/analyst/regions', () => {
  render(renderAnalystShell('regions'));
  document.getElementById('analyst-view').innerHTML = renderAnalystRegions();
  initSidebarToggle();
});

router.on('/analyst/violations', () => {
  render(renderAnalystShell('violations'));
  document.getElementById('analyst-view').innerHTML = renderAnalystViolations();
  initSidebarToggle();
});

router.on('/analyst/ecommerce', () => {
  render(renderAnalystShell('ecommerce'));
  document.getElementById('analyst-view').innerHTML = renderEcommerceAudit();
  initSidebarToggle();
  initEcommerceAudit();
});

router.on('/analyst/reports', () => {
  render(renderAnalystShell('reports'));
  document.getElementById('analyst-view').innerHTML = renderReportsPage('analyst');
  initSidebarToggle();
});

/* ============================================
   Shared page stubs for routes not yet fully
   implemented — clean integration points.
   ============================================ */

import { MOCK_OFFICERS, MOCK_AGGREGATE } from './data/mockData.js';

function renderOfficerTracking() {
  return `
    <div class="fade-in">
      <div class="dashboard-grid dashboard-grid--kpis" style="margin-bottom:var(--space-2xl);grid-template-columns:repeat(3,1fr)">
        <div class="kpi-card">
          <div class="kpi-card__label">Active Now</div>
          <div class="kpi-card__value">${MOCK_OFFICERS.filter(o => o.status === 'active').length}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-card__label">Total Officers</div>
          <div class="kpi-card__value">${MOCK_OFFICERS.length}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-card__label">Pending Sync</div>
          <div class="kpi-card__value">${MOCK_OFFICERS.filter(o => o.status === 'syncing').length}</div>
        </div>
      </div>

      <div class="card" style="padding:0;overflow:hidden">
        <table class="data-table">
          <thead>
            <tr><th>Officer</th><th>Status</th><th>Inspections</th><th>Violations</th><th>Last Active</th></tr>
          </thead>
          <tbody>
            ${MOCK_OFFICERS.map(o => `
              <tr>
                <td><div style="display:flex;align-items:center;gap:var(--space-sm)">
                  <div class="avatar" style="width:28px;height:28px;font-size:var(--font-size-2xs)">${o.name.split(' ').map(n => n[0]).join('')}</div>
                  <span style="font-weight:500">${o.name}</span>
                </div></td>
                <td><span class="sync-status sync-status--${o.status === 'active' ? 'online' : o.status === 'syncing' ? 'syncing' : 'offline'}">
                  <span class="status-dot status-dot--${o.status === 'active' ? 'online' : o.status === 'syncing' ? 'syncing' : 'offline'}"></span>
                  ${o.status.charAt(0).toUpperCase() + o.status.slice(1)}
                </span></td>
                <td>${o.inspections}</td>
                <td style="color:var(--color-danger);font-weight:600">${o.violations}</td>
                <td style="color:var(--color-text-muted)">${o.lastActive}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAnalystTrends() {
  return `
    <div class="fade-in">
      <div class="chart-card" style="margin-bottom:var(--space-2xl)">
        <div class="chart-card__header">
          <h2 class="chart-card__title">Inspection & Violation Trends (7 Days)</h2>
        </div>
        <div class="bar-chart" style="height:220px">
          ${MOCK_AGGREGATE.trend_over_time.map(day => {
            const max = Math.max(...MOCK_AGGREGATE.trend_over_time.map(d => d.scans));
            const height = (day.scans / max) * 100;
            const vHeight = (day.violations / max) * 100;
            const d = new Date(day.date);
            const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            return `
              <div class="bar-chart__bar">
                <div class="bar-chart__value">${day.scans}</div>
                <div style="width:100%;height:100%;display:flex;align-items:flex-end;gap:2px">
                  <div class="bar-chart__fill bar-chart__fill--primary" style="height:${height}%;flex:1"></div>
                  <div class="bar-chart__fill bar-chart__fill--danger" style="height:${vHeight}%;flex:1"></div>
                </div>
                <div class="bar-chart__label">${label}</div>
              </div>
            `;
          }).join('')}
        </div>
        <div style="display:flex;gap:var(--space-lg);justify-content:center;margin-top:var(--space-md);font-size:var(--font-size-xs)">
          <div style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;background:var(--color-primary);border-radius:2px;display:inline-block"></span> Inspections</div>
          <div style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;background:var(--color-danger);border-radius:2px;display:inline-block"></span> Violations</div>
        </div>
      </div>

      <div class="dashboard-grid dashboard-grid--2col">
        <div class="chart-card">
          <div class="chart-card__header"><h2 class="chart-card__title">Compliance Rate Over Time</h2></div>
          <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
            ${MOCK_AGGREGATE.trend_over_time.map(day => {
              const rate = Math.round(((day.scans - day.violations) / day.scans) * 100);
              const d = new Date(day.date);
              const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              return `
                <div>
                  <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                    <span style="font-size:var(--font-size-sm)">${label}</span>
                    <span style="font-size:var(--font-size-sm);font-weight:700;color:${rate >= 70 ? 'var(--color-success)' : 'var(--color-danger)'}">${rate}%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-bar__fill ${rate >= 70 ? 'progress-bar__fill--success' : 'progress-bar__fill--danger'}" style="width:${rate}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card__header"><h2 class="chart-card__title">Key Observations</h2></div>
          <div style="display:flex;flex-direction:column;gap:var(--space-md)">
            <div class="card" style="background:var(--color-danger-bg);border-color:var(--color-danger-border);padding:var(--space-md)">
              <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--color-danger);margin-bottom:4px">⚠️ Rising Trend</div>
              <div style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">Expiry date violations increased 15% in Thiruvananthapuram district over the last week.</div>
            </div>
            <div class="card" style="background:var(--color-success-bg);border-color:var(--color-success-border);padding:var(--space-md)">
              <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--color-success);margin-bottom:4px">✓ Improving</div>
              <div style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">Manufacturer address compliance improved across Kochi region after recent enforcement drive.</div>
            </div>
            <div class="card" style="background:var(--color-warning-bg);border-color:var(--color-warning-border);padding:var(--space-md)">
              <div style="font-size:var(--font-size-sm);font-weight:600;color:hsl(38,70%,35%);margin-bottom:4px">📌 Attention Needed</div>
              <div style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">3 stores in Kollam flagged as repeat offenders — consider targeted enforcement action.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.downloadFakeReport = (name) => {
  const content = `MetraScan Report: ${name}\nGenerated on: ${new Date().toLocaleString()}\n\nThis is an automated compliance report generated by the SIH26034 MetraScan system.`;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.txt';
  a.click();
  URL.revokeObjectURL(url);
};

function renderReportsPage(role) {
  return `
    <div class="fade-in">
      <div class="card" style="max-width:600px;margin-bottom:var(--space-2xl)">
        <h2 style="margin-bottom:var(--space-md)">Generate Report</h2>
        <div class="input-group" style="margin-bottom:var(--space-md)">
          <label class="input-group__label">Report Type</label>
          <select class="input-group__input" id="report-type-select">
            <option>Compliance Summary Report</option>
            <option>Violation Detail Report</option>
            <option>Regional Analysis Report</option>
            ${role === 'supervisor' ? '<option>Officer Activity Report</option><option>Store Inspection Report</option>' : ''}
            ${role === 'analyst' ? '<option>Market Intelligence Briefing</option><option>Enforcement Recommendation Report</option>' : ''}
          </select>
        </div>
        <div style="display:flex;gap:var(--space-sm)">
          <div class="input-group" style="flex:1">
            <label class="input-group__label">From</label>
            <input type="date" class="input-group__input" value="2026-08-01" />
          </div>
          <div class="input-group" style="flex:1">
            <label class="input-group__label">To</label>
            <input type="date" class="input-group__input" value="2026-09-01" />
          </div>
        </div>
        <button class="btn btn--primary btn--full" style="margin-top:var(--space-lg)" onclick="const sel=document.getElementById('report-type-select');this.textContent='⏳ Generating…';this.disabled=true;setTimeout(()=>{window.downloadFakeReport(sel.value);this.textContent='✓ Report Ready';setTimeout(()=>{this.textContent='📄 Generate & Export PDF';this.disabled=false},2000)},1500)">
          📄 Generate & Export PDF
        </button>
      </div>

      <div class="section-title">Recent Reports</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        ${[
          { name: 'Monthly Compliance Summary — August 2026', date: 'Aug 31, 2026', type: 'PDF' },
          { name: 'Violation Trend Analysis — Q3 2026', date: 'Aug 28, 2026', type: 'PDF' },
          { name: 'Regional Enforcement Brief — Kerala', date: 'Aug 15, 2026', type: 'PDF' },
        ].map(r => `
          <div class="card" style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md) var(--space-lg)">
            <div style="font-size:1.5rem">📄</div>
            <div style="flex:1">
              <div style="font-weight:600;font-size:var(--font-size-sm)">${r.name}</div>
              <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${r.date} · ${r.type}</div>
            </div>
            <button class="btn btn--ghost btn--small" onclick="window.downloadFakeReport('${r.name}')">↓ Download</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ── Start the router ── */
router.start();
