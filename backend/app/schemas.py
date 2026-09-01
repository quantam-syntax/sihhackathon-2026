from datetime import datetime
from enum import Enum
from typing import Dict, List, Optional
from pydantic import BaseModel, Field


class ComplianceStatus(str, Enum):
    COMPLIANT = "compliant"
    NON_COMPLIANT = "non_compliant"
    NEEDS_REVIEW = "needs_review"


class ViolationSeverity(str, Enum):
    CRITICAL = "critical"
    MAJOR = "major"
    MINOR = "minor"


class ExtractedFieldValue(BaseModel):
    value: Optional[str] = None
    confidence: float = Field(default=0.0, ge=0.0, le=1.0)
    present: bool = True


class VisionInput(BaseModel):
    image_id: str = Field(..., json_schema_extra={"example": "img_0001"})
    product_category: str = Field(default="packaged_food", json_schema_extra={"example": "packaged_food"})
    extracted_fields: Dict[str, ExtractedFieldValue]
    raw_ocr_text: Optional[str] = None


class Violation(BaseModel):
    field: str
    rule_reference: str
    severity: ViolationSeverity
    description: str


class ComplianceReport(BaseModel):
    image_id: str
    product_category: str
    compliance_status: ComplianceStatus
    violations: List[Violation]
    compliant_fields: List[str]
    checked_at: datetime = Field(default_factory=datetime.utcnow)


class TrendPoint(BaseModel):
    date: str
    scans: int
    violations: int


class AggregateStats(BaseModel):
    total_scans: int
    compliant: int
    non_compliant: int
    needs_review: int
    violations_by_field: Dict[str, int]
    violations_by_category: Dict[str, int]
    trend_over_time: List[TrendPoint]
