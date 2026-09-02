# SIH26034 — UI/UX — Build Brief

## Project
Building compliance-checking software for the **Legal Metrology (Packaged Commodities) Rules, 2011** (Ministry of Consumer Affairs). It scans product label images and flags missing or illegal declarations.

## Team structure
6 members, 2 groups. You're in **Group 2**, led by the 2nd CSE member (who also builds the rule-engine), alongside a teammate on the dashboard. Group 1 handles the vision model, research, and deck. Timeline: 3 sessions, Sep 1 / 2 / 3, 5–9pm each.

## Your role
Build the user-facing flow: upload a product image, see the compliance report. Design mobile-first — the realistic end user is a field inspector using a phone, not someone at a desk.

**Core flow:** image upload → (processing state) → compliance report display, showing pass/fail per field with plain-language explanations, not just raw JSON.

**Data you're building against** (compliance report, from the rule-engine teammate):
```json
{
  "image_id": "img_0001",
  "product_category": "packaged_food",
  "compliance_status": "non_compliant",
  "violations": [
    {
      "field": "expiry_date",
      "rule_reference": "Rule 6(1)(f), LMPC Rules 2011",
      "severity": "major",
      "description": "Best-before/expiry date missing on label"
    },
    {
      "field": "manufacturer_address",
      "rule_reference": "Rule 6(1)(a), LMPC Rules 2011",
      "severity": "major",
      "description": "Manufacturer address missing"
    }
  ],
  "compliant_fields": ["mrp", "net_quantity", "manufacturer_name", "consumer_care_contact", "country_of_origin"],
  "checked_at": "2026-09-01T18:30:00Z"
}
```

## Deliverables by session
- **Sep 1:** Scaffold the upload screen and the report screen against fixture data matching the schema above — don't wait for the real rule-engine.
- **Sep 2:** Wire up to real backend output as it becomes available; keep the fixture data as a fallback path in case the live connection isn't stable.
- **Sep 3:** Polish, mobile responsiveness check, integration testing with the full pipeline.

## Starting prompt for your AI
"Help me build a mobile-first web UI with two screens: (1) an image upload screen for scanning a product label, (2) a compliance report screen showing violations in plain language, built against this JSON shape [paste schema]. I want it usable by a field inspector on a phone."
