/* ============================================
   Mock Compliance Report Fixtures
   ============================================
   These match the backend data contract exactly.
   Used during development and as fallback when
   the real API is unavailable.
   ============================================ */

/**
 * Fixture A — Non-compliant product.
 * Demonstrates violations, severity, rule references, and compliant fields.
 */
export const FIXTURE_NON_COMPLIANT = {
  image_id: 'img_0001',
  product_category: 'packaged_food',
  compliance_status: 'non_compliant',
  violations: [
    {
      field: 'expiry_date',
      rule_reference: 'Rule 6(1)(f), LMPC Rules 2011',
      severity: 'major',
      description: 'Best-before/expiry date missing on label',
    },
    {
      field: 'manufacturer_address',
      rule_reference: 'Rule 6(1)(a), LMPC Rules 2011',
      severity: 'major',
      description: 'Manufacturer address missing',
    },
  ],
  compliant_fields: [
    'mrp',
    'net_quantity',
    'manufacturer_name',
    'consumer_care_contact',
    'country_of_origin',
  ],
  checked_at: '2026-09-01T18:30:00Z',
};

/**
 * Fixture B — Fully compliant product.
 * Demonstrates zero-violation state and all fields passing.
 */
export const FIXTURE_COMPLIANT = {
  image_id: 'img_0002',
  product_category: 'cosmetics',
  compliance_status: 'compliant',
  violations: [],
  compliant_fields: [
    'mrp',
    'net_quantity',
    'manufacturer_name',
    'manufacturer_address',
    'expiry_date',
    'consumer_care_contact',
    'country_of_origin',
  ],
  checked_at: '2026-09-01T19:00:00Z',
};

/** All fixtures for easy access */
export const FIXTURES = [FIXTURE_NON_COMPLIANT, FIXTURE_COMPLIANT];
