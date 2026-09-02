/* ============================================
   Mock Data — Realistic Domain-Specific Fixtures
   ============================================
   Structured for easy replacement with real API data.
   ============================================ */

import { FIXTURE_NON_COMPLIANT, FIXTURE_COMPLIANT } from './fixtures.js';

/* ── Users ── */
export const MOCK_USERS = {
  officer: {
    id: 'OFF-2024-0047',
    name: 'Rajesh Kumar',
    role: 'officer',
    designation: 'Field Inspector',
    jurisdiction: 'Thiruvananthapuram South',
    department: 'Dept. of Legal Metrology, Kerala',
    avatar: 'RK',
    phone: '+91 94XXX XXXXX',
  },
  supervisor: {
    id: 'SUP-2024-0012',
    name: 'Priya Menon',
    role: 'supervisor',
    designation: 'Enforcement Manager',
    jurisdiction: 'Thiruvananthapuram District',
    department: 'Dept. of Legal Metrology, Kerala',
    avatar: 'PM',
  },
  analyst: {
    id: 'ANA-2024-0005',
    name: 'Dr. Arun Nair',
    role: 'analyst',
    designation: 'Regulatory Analyst',
    jurisdiction: 'Kerala State',
    department: 'Dept. of Consumer Affairs',
    avatar: 'AN',
  },
};

/* ── Stores ── */
export const MOCK_STORES = [
  { id: 'STR-001', name: 'Shree Krishna Supermarket', location: 'MG Road, Trivandrum', inspections: 24, violations: 8, compliance: 67 },
  { id: 'STR-002', name: 'Lulu Hypermarket', location: 'Edapally, Kochi', inspections: 42, violations: 5, compliance: 88 },
  { id: 'STR-003', name: 'Margin Free Market', location: 'Palayam, Trivandrum', inspections: 18, violations: 12, compliance: 33 },
  { id: 'STR-004', name: 'Reliance Fresh', location: 'Kowdiar, Trivandrum', inspections: 31, violations: 3, compliance: 90 },
  { id: 'STR-005', name: 'Big Bazaar', location: 'Technopark, Trivandrum', inspections: 27, violations: 9, compliance: 67 },
  { id: 'STR-006', name: 'Namdhari\'s Fresh', location: 'Kazhakootam, Trivandrum', inspections: 15, violations: 2, compliance: 87 },
];

/* ── Officers ── */
export const MOCK_OFFICERS = [
  { id: 'OFF-001', name: 'Rajesh Kumar', status: 'active', inspections: 47, violations: 18, lastActive: '2 min ago' },
  { id: 'OFF-002', name: 'Anitha Pillai', status: 'active', inspections: 38, violations: 12, lastActive: '15 min ago' },
  { id: 'OFF-003', name: 'Suresh Babu', status: 'offline', inspections: 29, violations: 8, lastActive: '2 hrs ago' },
  { id: 'OFF-004', name: 'Lakshmi Devi', status: 'active', inspections: 52, violations: 22, lastActive: '5 min ago' },
  { id: 'OFF-005', name: 'Vijay Mohan', status: 'syncing', inspections: 19, violations: 6, lastActive: '30 min ago' },
];

/* ── Dynamic Inspections & Aggregation ── */

function generateInspections() {
  const stores = ['Shree Krishna Supermarket', 'Lulu Hypermarket', 'Margin Free Market', 'Reliance Fresh', 'Big Bazaar', 'Namdhari\'s Fresh'];
  const locations = ['MG Road, Trivandrum', 'Edapally, Kochi', 'Palayam, Trivandrum', 'Kowdiar, Trivandrum', 'Technopark, Trivandrum', 'Kazhakootam, Trivandrum'];
  const officers = ['Rajesh Kumar', 'Anitha Pillai', 'Suresh Babu', 'Lakshmi Devi', 'Vijay Mohan'];
  const products = ['ABC Foods Wheat Flour 500g', 'Clean Home Floor Cleaner 500ml', 'Dairy Fresh Butter 100g', 'Sunrise Premium Basmati Rice 1kg', 'Lux Body Wash 250ml', 'LG 32in TV'];
  const categories = ['packaged_food', 'household', 'packaged_food', 'packaged_food', 'cosmetics', 'electronics'];
  const possibleFields = ['expiry_date', 'manufacturer_address', 'unit_sale_price', 'net_quantity', 'consumer_care_contact', 'manufacturing_date'];
  
  const inspections = [
    {
      id: 'INS-2026-0147',
      date: '2026-09-01T18:30:00Z',
      store: 'Shree Krishna Supermarket',
      location: 'MG Road, Trivandrum',
      product: 'ABC Foods Wheat Flour 500g',
      category: 'packaged_food',
      officer: 'Rajesh Kumar',
      status: 'non_compliant',
      violations: 2,
      violatedFields: ['expiry_date', 'manufacturer_address'],
      report: FIXTURE_NON_COMPLIANT,
    },
    {
      id: 'INS-2026-0146',
      date: '2026-09-01T17:15:00Z',
      store: 'Lulu Hypermarket',
      location: 'Edapally, Kochi',
      product: 'Fresh Glow Face Cream 50ml',
      category: 'cosmetics',
      officer: 'Rajesh Kumar',
      status: 'compliant',
      violations: 0,
      violatedFields: [],
      report: FIXTURE_COMPLIANT,
    }
  ];
  
  const now = new Date('2026-09-01T18:30:00Z');
  
  // We need 250 total: 140 compliant, 95 non_compliant, 15 needs_review
  // We already have 1 compliant and 1 non_compliant.
  for (let i = 2; i < 250; i++) {
    const storeIdx = Math.floor(Math.random() * stores.length);
    const prodIdx = Math.floor(Math.random() * products.length);
    const date = new Date(now.getTime() - Math.random() * 7 * 24 * 60 * 60 * 1000);
    
    let status = 'compliant';
    if (i < 95) status = 'non_compliant';
    else if (i >= 95 && i < 110) status = 'needs_review';
    
    let violationsCount = 0;
    let fields = [];
    
    if (status === 'non_compliant') {
      violationsCount = Math.floor(Math.random() * 3) + 1;
      const shuffled = [...possibleFields].sort(() => 0.5 - Math.random());
      fields = shuffled.slice(0, violationsCount);
    }
    
    inspections.push({
      id: `INS-2026-${String(1000 + i).slice(1)}`,
      date: date.toISOString(),
      store: stores[storeIdx],
      location: locations[storeIdx],
      product: products[prodIdx],
      category: categories[prodIdx],
      officer: officers[Math.floor(Math.random() * officers.length)],
      status: status,
      violations: violationsCount,
      violatedFields: fields
    });
  }
  
  return inspections.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const MOCK_INSPECTIONS = generateInspections();

/* ── Aggregate Stats (Rolled up dynamically) ── */
export const MOCK_AGGREGATE = MOCK_INSPECTIONS.reduce((acc, curr) => {
  acc.total_scans++;
  acc[curr.status]++;
  
  if (curr.status === 'non_compliant') {
    acc.violations_by_category[curr.category] = (acc.violations_by_category[curr.category] || 0) + 1;
    curr.violatedFields.forEach(field => {
      acc.violations_by_field[field] = (acc.violations_by_field[field] || 0) + 1;
    });
  }
  
  const dateStr = curr.date.split('T')[0];
  if (!acc.trend_map[dateStr]) acc.trend_map[dateStr] = { date: dateStr, scans: 0, violations: 0 };
  acc.trend_map[dateStr].scans++;
  if (curr.status === 'non_compliant') acc.trend_map[dateStr].violations++;
  
  return acc;
}, {
  total_scans: 0,
  compliant: 0,
  non_compliant: 0,
  needs_review: 0,
  violations_by_field: {},
  violations_by_category: {},
  trend_map: {}
});

MOCK_AGGREGATE.trend_over_time = Object.values(MOCK_AGGREGATE.trend_map).sort((a, b) => a.date.localeCompare(b.date));
delete MOCK_AGGREGATE.trend_map;

/* ── Regional Data (Analyst) ── */
export const MOCK_REGIONS = [
  { name: 'Thiruvananthapuram', inspections: 145, violations: 52, compliance: 64, risk: 'high' },
  { name: 'Kochi', inspections: 120, violations: 28, compliance: 77, risk: 'medium' },
  { name: 'Kozhikode', inspections: 85, violations: 15, compliance: 82, risk: 'low' },
  { name: 'Thrissur', inspections: 68, violations: 22, compliance: 68, risk: 'medium' },
  { name: 'Kollam', inspections: 42, violations: 18, compliance: 57, risk: 'high' },
  { name: 'Kannur', inspections: 55, violations: 8, compliance: 85, risk: 'low' },
];

/* ── Violation Categories (Analyst) ── */
export const MOCK_VIOLATION_TYPES = [
  { type: 'Missing Expiry Date', count: 40, percentage: 31, trend: 'up' },
  { type: 'No Manufacturer Address', count: 25, percentage: 19, trend: 'stable' },
  { type: 'Missing Unit Sale Price', count: 18, percentage: 14, trend: 'down' },
  { type: 'Incorrect Net Quantity', count: 12, percentage: 9, trend: 'up' },
  { type: 'No Consumer Care Info', count: 8, percentage: 6, trend: 'stable' },
  { type: 'Missing Manufacturing Date', count: 5, percentage: 4, trend: 'down' },
];

export { FIXTURE_NON_COMPLIANT, FIXTURE_COMPLIANT };
