# SIH26034 — Rule-Engine & Backend Lead — Build Brief

## Project
Building compliance-checking software for the **Legal Metrology (Packaged Commodities) Rules, 2011** (Ministry of Consumer Affairs). It scans product label images and flags missing or illegal declarations.

## Team structure
6 members, 2 groups. You lead **Group 2** (yourself + UI/UX teammate + dashboard teammate), and you also work directly with the vision model owner (Group 1 lead) on the vision/compliance-logic side. Timeline: 3 sessions, Sep 1 / 2 / 3, 5–9pm each.

## Your role
Build the backend + rule-engine that takes the vision model's extracted fields and checks them against the Legal Metrology Rules to produce a violation report. You're the bridge between Group 1's model and Group 2's UI/dashboard.

**Input you receive** (from the vision model):
```json
{
  "image_id": "img_0001",
  "product_category": "packaged_food",
  "extracted_fields": {
    "mrp": { "value": "₹120.00", "confidence": 0.92, "present": true },
    "net_quantity": { "value": "500g", "confidence": 0.88, "present": true },
    "manufacturing_date": { "value": "03/2026", "confidence": 0.75, "present": true },
    "expiry_date": { "value": null, "confidence": 0.0, "present": false },
    "manufacturer_name": { "value": "ABC Foods Pvt Ltd", "confidence": 0.90, "present": true },
    "manufacturer_address": { "value": null, "confidence": 0.0, "present": false },
    "consumer_care_contact": { "value": "1800-XXX-XXXX", "confidence": 0.70, "present": true },
    "unit_sale_price": { "value": null, "confidence": 0.0, "present": false },
    "country_of_origin": { "value": "India", "confidence": 0.85, "present": true }
  }
}
```

**Output you produce** (for the UI + dashboard):
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
- **Sep 1:** Scaffold the backend + rule-engine against the input schema above, using a hardcoded placeholder rule set (all 9 fields mandatory by default) since the real rule table isn't ready yet. Produce output matching the schema above using the vision lead's fixture JSONs.
- **Sep 2:** Swap the placeholder rules for the real rule table from the ECE researcher (exact rule references, category-specific exemptions). Start wiring in real vision-model output — expect minor schema drift, flag it early with the vision lead.
- **Sep 3:** Full integration testing with the live pipeline, bug fixing.

## Starting prompt for your AI
"Help me build a rule-checking backend that takes a JSON object of extracted product-label fields [paste input schema] and checks them against a mandatory-field rule set, producing a violation report [paste output schema]. Start with a simple placeholder rule set (all fields mandatory) so I can build the engine now; I'll swap in real Legal Metrology rule references later."
