# SIH26034 — Vision Model Lead — Build Brief

## Project
Building compliance-checking software for the **Legal Metrology (Packaged Commodities) Rules, 2011** (Ministry of Consumer Affairs). It scans product label images and flags missing or illegal declarations.

## Team structure
6 members, 2 groups:
- **Group 1** (you lead): you (vision model) + 2 ECE members (research + PPT)
- **Group 2** (2nd CSE leads): 2nd CSE (vision support + rule-engine) + 2 CSE members (UI/UX + dashboard)

Timeline: 3 sessions, Sep 1 / 2 / 3, 5–9pm each.

## Your role
Build the main computer vision + OCR pipeline: detect the label region in a product image, extract the mandatory declared fields, and output them in a fixed JSON shape the rest of the team builds against.

**Fields to extract:** MRP, net quantity, manufacturing date, expiry/best-before date, manufacturer name & address, consumer care contact, unit sale price, country of origin.

**Output contract** (what you hand to the rule-engine):
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
  },
  "raw_ocr_text": "full raw OCR dump — for debugging only"
}
```
`present: false` = field genuinely absent from the label (usually the real violation, distinct from low confidence).

## Deliverables by session
- **Sep 1:** Pipeline skeleton working end to end, even roughly, on 3–5 real sample images. Ship 4–5 hand-written fixture JSONs in the shape above so Group 2 can start building immediately without waiting on you.
- **Sep 2:** Improve extraction accuracy/coverage using ECE B's sample image set; handle edge cases (rotated/blurry/partial labels).
- **Sep 3:** Full pipeline integration with the rule-engine, bug fixing, demo readiness.

## Also overseeing
Review ECE A's rules research before it becomes rule-engine logic, and review ECE B's deck drafts before they're finalized.

## Starting prompt for your AI
"Help me build a computer vision + OCR pipeline that detects a product label in an image and extracts these fields: [list above]. Output should match this JSON schema: [paste schema]. Start with an off-the-shelf OCR engine plus field-parsing logic; I need a rough end-to-end version working today on a handful of real photos."
