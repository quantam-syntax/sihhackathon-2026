/* ============================================
   Field Label Mappings
   Machine-readable → Human-readable
   ============================================ */

/** Map backend field keys to inspector-friendly display names */
export const FIELD_LABELS = {
  mrp: 'MRP',
  net_quantity: 'Net Quantity',
  manufacturer_name: 'Manufacturer Name',
  manufacturer_address: 'Manufacturer Address',
  expiry_date: 'Expiry Date',
  manufacturing_date: 'Manufacturing Date',
  consumer_care_contact: 'Consumer Care Contact',
  unit_sale_price: 'Unit Sale Price',
  country_of_origin: 'Country of Origin',
};

/** Map compliance status codes to display labels */
export const STATUS_LABELS = {
  compliant: 'COMPLIANT',
  non_compliant: 'NON-COMPLIANT',
  needs_review: 'NEEDS REVIEW',
};

/** Map severity codes to display labels */
export const SEVERITY_LABELS = {
  major: 'Major Violation',
  minor: 'Minor Violation',
  info: 'Information',
};

/** Map product category codes to display labels */
export const CATEGORY_LABELS = {
  packaged_food: 'Packaged Food',
  cosmetics: 'Cosmetics',
  electronics: 'Electronics',
  household: 'Household Goods',
};

/**
 * Get a human-readable field label.
 * Falls back to title-casing the key if not found in the map.
 * @param {string} fieldKey - e.g. "expiry_date"
 * @returns {string} - e.g. "Expiry Date"
 */
export function getFieldLabel(fieldKey) {
  if (FIELD_LABELS[fieldKey]) return FIELD_LABELS[fieldKey];
  // Fallback: convert snake_case to Title Case
  return fieldKey
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Get a human-readable status label.
 * @param {string} status - e.g. "non_compliant"
 * @returns {string} - e.g. "NON-COMPLIANT"
 */
export function getStatusLabel(status) {
  return STATUS_LABELS[status] || status.toUpperCase().replace(/_/g, '-');
}

/**
 * Get a human-readable severity label.
 * @param {string} severity - e.g. "major"
 * @returns {string} - e.g. "Major Violation"
 */
export function getSeverityLabel(severity) {
  return SEVERITY_LABELS[severity] || severity.charAt(0).toUpperCase() + severity.slice(1);
}

/**
 * Get a human-readable category label.
 * @param {string} category - e.g. "packaged_food"
 * @returns {string} - e.g. "Packaged Food"
 */
export function getCategoryLabel(category) {
  if (CATEGORY_LABELS[category]) return CATEGORY_LABELS[category];
  return category
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
