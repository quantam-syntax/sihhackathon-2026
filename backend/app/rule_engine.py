from datetime import datetime, timezone
from typing import Dict, List, Tuple
from app.schemas import (
    ComplianceReport,
    ComplianceStatus,
    VisionInput,
    Violation,
    ViolationSeverity,
)

# Initial rule registry (Legal Metrology Rules, 2011)
# Session 1 placeholder rules: Editable matrix to be updated in Session 2 with Ganga's research
STANDARD_RULES: Dict[str, Dict[str, str]] = {
    "manufacturer_name": {
        "rule_reference": "Rule 6(1)(a), LMPC Rules 2011",
        "severity": ViolationSeverity.MAJOR.value,
        "description": "Manufacturer / Packer name missing on label",
    },
    "manufacturer_address": {
        "rule_reference": "Rule 6(1)(a), LMPC Rules 2011",
        "severity": ViolationSeverity.MAJOR.value,
        "description": "Manufacturer / Packer address missing on label",
    },
    "net_quantity": {
        "rule_reference": "Rule 6(1)(c), LMPC Rules 2011",
        "severity": ViolationSeverity.CRITICAL.value,
        "description": "Net Quantity declaration missing on label",
    },
    "manufacturing_date": {
        "rule_reference": "Rule 6(1)(d), LMPC Rules 2011",
        "severity": ViolationSeverity.MAJOR.value,
        "description": "Date of manufacture / packing missing on label",
    },
    "mrp": {
        "rule_reference": "Rule 6(1)(e), LMPC Rules 2011",
        "severity": ViolationSeverity.CRITICAL.value,
        "description": "Maximum Retail Price (MRP incl. taxes) missing on label",
    },
    "expiry_date": {
        "rule_reference": "Rule 6(1)(f), LMPC Rules 2011",
        "severity": ViolationSeverity.MAJOR.value,
        "description": "Best-before or expiry date missing on label",
    },
    "unit_sale_price": {
        "rule_reference": "Rule 6(1)(g), LMPC Rules 2011",
        "severity": ViolationSeverity.MINOR.value,
        "description": "Unit sale price declaration missing on label",
    },
    "consumer_care_contact": {
        "rule_reference": "Rule 6(1)(h), LMPC Rules 2011",
        "severity": ViolationSeverity.MAJOR.value,
        "description": "Consumer care contact details (phone/email/address) missing",
    },
    "country_of_origin": {
        "rule_reference": "Rule 6(1)(aa), LMPC Rules 2011",
        "severity": ViolationSeverity.MAJOR.value,
        "description": "Country of origin declaration missing on label",
    },
}


class RuleEngine:
    """Legal Metrology compliance checking engine."""

    def __init__(self, rules: Dict[str, Dict[str, str]] = None):
        self.rules = rules or STANDARD_RULES

    def evaluate(self, vision_input: VisionInput) -> ComplianceReport:
        violations: List[Violation] = []
        compliant_fields: List[str] = []
        low_confidence_fields: List[str] = []

        extracted_fields = vision_input.extracted_fields

        for field_name, rule_meta in self.rules.items():
            field_data = extracted_fields.get(field_name)

            # Case 1: Field is completely missing or present is False or value is None/empty
            if not field_data or not field_data.present or not field_data.value or not field_data.value.strip():
                violations.append(
                    Violation(
                        field=field_name,
                        rule_reference=rule_meta["rule_reference"],
                        severity=ViolationSeverity(rule_meta["severity"]),
                        description=rule_meta["description"],
                    )
                )
            else:
                compliant_fields.append(field_name)
                if field_data.confidence < 0.5:
                    low_confidence_fields.append(field_name)

        # Also register any extra present fields from extracted_fields not in self.rules
        for field_name, field_data in extracted_fields.items():
            if field_name not in self.rules and field_data.present and field_data.value:
                if field_name not in compliant_fields:
                    compliant_fields.append(field_name)

        # Determine overall compliance status
        if violations:
            status = ComplianceStatus.NON_COMPLIANT
        elif low_confidence_fields:
            status = ComplianceStatus.NEEDS_REVIEW
        else:
            status = ComplianceStatus.COMPLIANT

        return ComplianceReport(
            image_id=vision_input.image_id,
            product_category=vision_input.product_category,
            compliance_status=status,
            violations=violations,
            compliant_fields=compliant_fields,
            checked_at=datetime.now(timezone.utc),
        )
