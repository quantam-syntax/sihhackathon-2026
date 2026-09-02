from typing import Dict, Any

SAMPLE_VISION_INPUT: Dict[str, Any] = {
    "image_id": "img_0001",
    "product_category": "packaged_food",
    "extracted_fields": {
        "mrp": {"value": "₹120.00", "confidence": 0.92, "present": True},
        "net_quantity": {"value": "500g", "confidence": 0.88, "present": True},
        "manufacturing_date": {"value": "03/2026", "confidence": 0.75, "present": True},
        "expiry_date": {"value": None, "confidence": 0.0, "present": False},
        "manufacturer_name": {"value": "ABC Foods Pvt Ltd", "confidence": 0.90, "present": True},
        "manufacturer_address": {"value": None, "confidence": 0.0, "present": False},
        "consumer_care_contact": {"value": "1800-XXX-XXXX", "confidence": 0.70, "present": True},
        "unit_sale_price": {"value": None, "confidence": 0.0, "present": False},
        "country_of_origin": {"value": "India", "confidence": 0.85, "present": True},
    },
    "raw_ocr_text": "ABC Foods Pvt Ltd. Net Qty: 500g. Mfg: 03/2026. MRP: ₹120.00 incl of all taxes. Customer care: 1800-XXX-XXXX. Made in India."
}

SAMPLE_COMPLIANCE_REPORT: Dict[str, Any] = {
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

SAMPLE_AGGREGATE_STATS: Dict[str, Any] = {
    "total_scans": 250,
    "compliant": 140,
    "non_compliant": 95,
    "needs_review": 15,
    "violations_by_field": {
        "expiry_date": 40,
        "manufacturer_address": 25,
        "unit_sale_price": 18,
        "mrp": 12
    },
    "violations_by_category": {
        "packaged_food": 50,
        "cosmetics": 30,
        "electronics": 15
    },
    "trend_over_time": [
        {"date": "2026-08-28", "scans": 40, "violations": 15},
        {"date": "2026-08-29", "scans": 55, "violations": 20},
        {"date": "2026-08-30", "scans": 60, "violations": 25},
        {"date": "2026-08-31", "scans": 45, "violations": 18},
        {"date": "2026-09-01", "scans": 50, "violations": 17}
    ]
}
