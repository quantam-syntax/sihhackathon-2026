/* ============================================
   Router — Hash-based SPA Router
   ============================================ */

/**
 * Simple hash-based router for the MetraScan SPA.
 * Routes: #/login/:role, #/officer/*, #/supervisor/*, #/analyst/*
 */
export class Router {
  constructor() {
    this.routes = [];
    this.currentRoute = null;
    this._onHashChange = this._onHashChange.bind(this);
  }

  /**
   * Register a route pattern.
   * @param {string} pattern — e.g. '/login/:role', '/officer/dashboard'
   * @param {function(params: object): void} handler
   */
  on(pattern, handler) {
    const regex = this._patternToRegex(pattern);
    const paramNames = this._extractParamNames(pattern);
    this.routes.push({ pattern, regex, paramNames, handler });
    return this;
  }

  /** Start listening for hash changes */
  start() {
    window.addEventListener('hashchange', this._onHashChange);
    this._onHashChange();
  }

  /** Stop listening */
  stop() {
    window.removeEventListener('hashchange', this._onHashChange);
  }

  /** Navigate to a hash route */
  navigate(path) {
    window.location.hash = '#' + path;
  }

  /** Get current hash path */
  getCurrentPath() {
    return window.location.hash.slice(1) || '/';
  }

  _onHashChange() {
    const path = this.getCurrentPath();

    for (const route of this.routes) {
      const match = path.match(route.regex);
      if (match) {
        const params = {};
        route.paramNames.forEach((name, i) => {
          params[name] = match[i + 1];
        });
        this.currentRoute = { pattern: route.pattern, params, path };
        route.handler(params);
        return;
      }
    }

    // Fallback: redirect to login
    this.navigate('/login/officer');
  }

  _patternToRegex(pattern) {
    const regexStr = pattern
      .replace(/:[a-zA-Z]+/g, '([^/]+)')
      .replace(/\//g, '\\/');
    return new RegExp('^' + regexStr + '$');
  }

  _extractParamNames(pattern) {
    const matches = pattern.match(/:([a-zA-Z]+)/g) || [];
    return matches.map((m) => m.slice(1));
  }
}
