# SIH26034 — Admin Dashboard — Build Brief

## Project
Building compliance-checking software for the **Legal Metrology (Packaged Commodities) Rules, 2011** (Ministry of Consumer Affairs). It scans product label images and flags missing or illegal declarations.

## Team structure
6 members, 2 groups. You're in **Group 2**, led by the 2nd CSE member (who also builds the rule-engine), alongside a teammate on the UI/UX. Group 1 handles the vision model, research, and deck. Timeline: 3 sessions, Sep 1 / 2 / 3, 5–9pm each.

## Your role
Build the admin/analytics dashboard: violation trends by category and time, compliance rate stats, exportable reports. This doubles as a slide in the pitch deck, so make it presentable, not just functional.

**Data shape to build against** (aggregate stats, rolled up from many individual compliance reports):
```json
{
  "total_scans": 250,
  "compliant": 140,
  "non_compliant": 95,
  "needs_review": 15,
  "violations_by_field": {
    "expiry_date": 40,
    "manufacturer_address": 25,
    "unit_sale_price": 18
  },
  "violations_by_category": {
    "packaged_food": 50,
    "cosmetics": 30,
    "electronics": 15
  },
  "trend_over_time": [
    { "date": "2026-08-28", "scans": 40, "violations": 15 },
    { "date": "2026-08-29", "scans": 55, "violations": 20 },
    { "date": "2026-08-30", "scans": 60, "violations": 25 }
  ]
}
```

You don't need to wait for real scan data — generate ~200-250 fake individual compliance reports (same shape your rule-engine teammate is producing per-image) and roll them up into this aggregate yourself for now.

## Deliverables by session
- **Sep 1:** Scaffold the dashboard against fake aggregate data in the shape above — charts for compliance rate, violations by field, violations by category, and a trend line.
- **Sep 2:** Swap in real rolled-up data as individual scan reports start flowing from the rule-engine.
- **Sep 3:** Polish for the pitch — this is likely to appear as a screenshot in the deck, so make it look finished.

## Starting prompt for your AI
"Help me build an analytics dashboard with charts for: overall compliance rate, violation counts by field, violation counts by product category, and a scans-over-time trend line, built against this JSON shape [paste schema]. Also help me generate ~200 realistic fake compliance records I can roll up into this aggregate for now, since real data isn't ready yet."
