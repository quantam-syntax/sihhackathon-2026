/* ============================================
   Login Page — Three Role Variants (Redesigned)
   ============================================ */

const ROLE_CONFIG = {
  officer: {
    title: 'Field Inspection',
    subtitle: 'Scan products. Enforce compliance.',
    badge: 'Field Inspector Portal',
    badgeIcon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    visualTitle: 'Inspect Anywhere,<br>Anytime',
    visualSubtitle: 'Mobile-first compliance scanning for field inspectors. Capture labels, detect violations, generate reports — even offline.',
    visualGraphic: renderFieldVisualGraphic(),
    gradientFrom: 'hsl(215, 65%, 25%)',
    gradientTo: 'hsl(200, 70%, 18%)',
    accentColor: 'hsl(200, 80%, 60%)',
    defaultUser: 'rajesh.kumar',
  },
  supervisor: {
    title: 'Enforcement Operations',
    subtitle: 'Monitor teams. Review inspections.',
    badge: 'Supervisor Portal',
    badgeIcon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    visualTitle: 'Command Your<br>Enforcement Network',
    visualSubtitle: 'Track field officers, review inspections, monitor compliance rates, and manage enforcement across your jurisdiction.',
    visualGraphic: renderSupervisorVisualGraphic(),
    gradientFrom: 'hsl(230, 50%, 22%)',
    gradientTo: 'hsl(245, 45%, 18%)',
    accentColor: 'hsl(250, 70%, 65%)',
    defaultUser: 'priya.menon',
  },
  analyst: {
    title: 'Market Intelligence',
    subtitle: 'Analyze trends. Drive enforcement.',
    badge: 'Regulatory Analyst Portal',
    badgeIcon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    visualTitle: 'Intelligence-Driven<br>Enforcement',
    visualSubtitle: 'Regional compliance analytics, violation trends, and strategic insights for consumer protection policy.',
    visualGraphic: renderAnalystVisualGraphic(),
    gradientFrom: 'hsl(170, 45%, 18%)',
    gradientTo: 'hsl(195, 50%, 15%)',
    accentColor: 'hsl(170, 60%, 55%)',
    defaultUser: 'arun.nair',
  },
};

/* ── Visual Graphics (SVG-based) ── */
function renderFieldVisualGraphic() {
  return `
    <div class="login-visual__graphic">
      <div class="login-visual__floating-card" style="animation-delay:0s">
        <div class="login-visual__card-dot" style="background:hsl(152,55%,48%)"></div>
        <div class="login-visual__card-line" style="width:70%"></div>
        <div class="login-visual__card-line" style="width:50%"></div>
      </div>
      <div class="login-visual__floating-card login-visual__floating-card--offset" style="animation-delay:1s">
        <div class="login-visual__card-dot" style="background:hsl(0,72%,55%)"></div>
        <div class="login-visual__card-line" style="width:60%"></div>
        <div class="login-visual__card-line" style="width:80%"></div>
      </div>
      <div class="login-visual__scan-ring">
        <svg viewBox="0 0 120 120" width="120" height="120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="80 240" class="login-visual__ring-spin"/>
          <circle cx="60" cy="60" r="35" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
          <path d="M50 45 L50 40 L55 40 M70 40 L75 40 L75 45 M75 75 L75 80 L70 80 M55 80 L50 80 L50 75" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  `;
}

function renderSupervisorVisualGraphic() {
  return `
    <div class="login-visual__graphic">
      <div class="login-visual__network">
        <svg viewBox="0 0 200 160" width="200" height="160">
          <line x1="100" y1="40" x2="50" y2="100" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
          <line x1="100" y1="40" x2="150" y2="100" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
          <line x1="100" y1="40" x2="100" y2="110" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
          <line x1="50" y1="100" x2="150" y2="100" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="4 4"/>
          <circle cx="100" cy="40" r="18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" class="login-visual__node-pulse"/>
          <circle cx="50" cy="100" r="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
          <circle cx="100" cy="110" r="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
          <circle cx="150" cy="100" r="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
          <text x="100" y="44" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="12" font-weight="600">S</text>
          <text x="50" y="104" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">F1</text>
          <text x="100" y="114" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">F2</text>
          <text x="150" y="104" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">F3</text>
        </svg>
      </div>
    </div>
  `;
}

function renderAnalystVisualGraphic() {
  return `
    <div class="login-visual__graphic">
      <div class="login-visual__chart-anim">
        <svg viewBox="0 0 200 120" width="200" height="120">
          <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <line x1="20" y1="100" x2="20" y2="10" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <polyline points="20,80 50,65 80,70 110,45 140,50 170,25" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="login-visual__line-draw"/>
          <polyline points="20,80 50,65 80,70 110,45 140,50 170,25 170,100 20,100" fill="url(#areaGrad)" opacity="0.15" class="login-visual__area-fill"/>
          <defs><linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="white"/><stop offset="100%" stop-color="white" stop-opacity="0"/></linearGradient></defs>
          ${[{x:20,y:80},{x:50,y:65},{x:80,y:70},{x:110,y:45},{x:140,y:50},{x:170,y:25}].map((p,i) => `
            <circle cx="${p.x}" cy="${p.y}" r="3" fill="rgba(255,255,255,0.5)" class="login-visual__data-dot" style="animation-delay:${i*0.15}s"/>
          `).join('')}
        </svg>
      </div>
    </div>
  `;
}

/* ── SVG Logo ── */
function renderLogo() {
  return `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="url(#logoGrad)"/>
      <path d="M11 28V14L17 22L23 14V28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26 18L30 14L34 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stop-color="hsl(215, 65%, 50%)"/>
          <stop offset="100%" stop-color="hsl(215, 70%, 35%)"/>
        </linearGradient>
      </defs>
    </svg>
  `;
}

/* ── Main Render ── */
export function renderLoginPage(role, onLogin) {
  const config = ROLE_CONFIG[role] || ROLE_CONFIG.officer;

  return `
    <div class="login-page" style="--login-gradient-from:${config.gradientFrom};--login-gradient-to:${config.gradientTo};--login-accent:${config.accentColor}">
      <div class="login-page__bg">
        <div class="login-page__orb login-page__orb--1"></div>
        <div class="login-page__orb login-page__orb--2"></div>
        <div class="login-page__grid-pattern"></div>
      </div>

      <div class="login-page__visual">
        <div class="login-page__visual-content">
          ${config.visualGraphic}
          <h1 class="login-page__visual-title">${config.visualTitle}</h1>
          <p class="login-page__visual-subtitle">${config.visualSubtitle}</p>
          <div class="login-page__visual-features">
            <div class="login-page__feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              AI-powered analysis
            </div>
            <div class="login-page__feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              Rule-based compliance
            </div>
            <div class="login-page__feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              Offline-capable
            </div>
          </div>
        </div>
      </div>

      <div class="login-page__panel">
        <div class="login-card">
          <div class="login-card__brand">
            <div class="login-card__logo">${renderLogo()}</div>
            <div class="login-card__app-name">MetraScan</div>
            <div class="login-card__app-subtitle">AI-Powered Legal Metrology Inspection</div>
            <div class="login-card__role-badge">${config.badgeIcon} ${config.badge}</div>
          </div>

          <form class="login-card__form" id="login-form">
            <div id="login-error"></div>

            <div class="input-group">
              <label class="input-group__label" for="login-userid">Official ID / Username</label>
              <div class="input-group__input-wrap">
                <svg class="input-group__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input class="input-group__input input-group__input--icon" type="text" id="login-userid"
                  placeholder="e.g. ${config.defaultUser}" autocomplete="username" required />
              </div>
            </div>

            <div class="input-group">
              <label class="input-group__label" for="login-password">Password / PIN</label>
              <div class="input-group__input-wrap">
                <svg class="input-group__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input class="input-group__input input-group__input--icon" type="password" id="login-password"
                  placeholder="Enter your password" autocomplete="current-password" required />
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--space-sm)">
                <label class="login-card__remember">
                  <input type="checkbox" id="login-remember" /> Remember this device
                </label>
                <span class="login-card__forgot" tabindex="0">Forgot?</span>
              </div>
            </div>

            <button type="submit" class="btn btn--primary btn--large btn--full login-card__submit" id="login-submit">
              <span>Sign In</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>

          <div class="login-card__divider"><span>Switch Portal</span></div>

          <div class="login-card__role-switcher">
            ${role !== 'officer' ? `<a href="#/login/officer" class="login-card__role-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Field Officer
            </a>` : ''}
            ${role !== 'supervisor' ? `<a href="#/login/supervisor" class="login-card__role-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Supervisor
            </a>` : ''}
            ${role !== 'analyst' ? `<a href="#/login/analyst" class="login-card__role-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              Analyst
            </a>` : ''}
          </div>

          <div class="login-card__footer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Ministry of Consumer Affairs, Govt. of India
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initLoginPage(role, onLogin) {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userid = document.getElementById('login-userid').value.trim();

    if (!userid) {
      showLoginError('Please enter your Official ID.');
      return;
    }

    const btn = document.getElementById('login-submit');
    btn.querySelector('span').textContent = 'Signing in…';
    btn.disabled = true;
    btn.classList.add('login-card__submit--loading');

    setTimeout(() => {
      onLogin(role);
    }, 800);
  });
}

function showLoginError(msg) {
  const el = document.getElementById('login-error');
  if (!el) return;
  el.innerHTML = `<div class="login-card__error">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
    ${msg}
  </div>`;
  setTimeout(() => { el.innerHTML = ''; }, 4000);
}
