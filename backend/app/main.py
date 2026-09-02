from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import (
    VisionInput,
    ComplianceReport,
    AggregateStats,
)
from app.rule_engine import RuleEngine
from app.fixtures import (
    SAMPLE_VISION_INPUT,
    SAMPLE_COMPLIANCE_REPORT,
    SAMPLE_AGGREGATE_STATS,
)

app = FastAPI(
    title="Legal Metrology Compliance Rule-Engine API",
    description="Backend API for scanning product label OCR fields and validating compliance under Legal Metrology Rules, 2011 (SIH26034).",
    version="1.0.0",
)

# Enable CORS for local dev integration with UI and Dashboard
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

rule_engine = RuleEngine()


@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "Legal Metrology Rule-Engine Backend",
        "version": "1.0.0",
        "docs_url": "/docs",
    }


@app.post("/api/v1/compliance/check", response_model=ComplianceReport)
def check_compliance(payload: VisionInput):
    """
    Evaluates extracted fields from Vision OCR model against Legal Metrology Rules.
    Returns structured compliance status & violations report.
    """
    try:
        report = rule_engine.evaluate(payload)
        return report
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Rule Engine evaluation failed: {str(e)}")


@app.get("/api/v1/compliance/fixtures/sample-input")
def get_sample_vision_input():
    """Returns sample Vision OCR input fixture for testing."""
    return SAMPLE_VISION_INPUT


@app.get("/api/v1/compliance/fixtures/sample-report")
def get_sample_compliance_report():
    """Returns sample compliance report fixture for UI developer (Hrishi)."""
    return SAMPLE_COMPLIANCE_REPORT


@app.get("/api/v1/dashboard/aggregate", response_model=AggregateStats)
def get_aggregate_stats():
    """Returns aggregate compliance statistics for Admin Dashboard developer (Devika)."""
    return SAMPLE_AGGREGATE_STATS
