from fastapi.testclient import TestClient
from app.main import app
from app.schemas import ComplianceStatus, ViolationSeverity

client = TestClient(app)


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "online"


def test_compliance_check_fixture():
    sample_input = {
        "image_id": "img_test_01",
        "product_category": "packaged_food",
        "extracted_fields": {
            "mrp": {"value": "₹100.00", "confidence": 0.95, "present": True},
            "net_quantity": {"value": "200g", "confidence": 0.90, "present": True},
            "manufacturing_date": {"value": "01/2026", "confidence": 0.85, "present": True},
            "expiry_date": {"value": None, "confidence": 0.0, "present": False},
            "manufacturer_name": {"value": "Sample Corp", "confidence": 0.92, "present": True},
            "manufacturer_address": {"value": None, "confidence": 0.0, "present": False},
            "consumer_care_contact": {"value": "1800-123-4567", "confidence": 0.80, "present": True},
            "unit_sale_price": {"value": "₹0.50/g", "confidence": 0.88, "present": True},
            "country_of_origin": {"value": "India", "confidence": 0.90, "present": True},
        },
    }

    response = client.post("/api/v1/compliance/check", json=sample_input)
    assert response.status_code == 200
    data = response.json()

    assert data["image_id"] == "img_test_01"
    assert data["compliance_status"] == ComplianceStatus.NON_COMPLIANT.value
    assert len(data["violations"]) == 2

    violating_fields = [v["field"] for v in data["violations"]]
    assert "expiry_date" in violating_fields
    assert "manufacturer_address" in violating_fields


def test_fixture_endpoints():
    res_input = client.get("/api/v1/compliance/fixtures/sample-input")
    assert res_input.status_code == 200

    res_report = client.get("/api/v1/compliance/fixtures/sample-report")
    assert res_report.status_code == 200

    res_aggregate = client.get("/api/v1/dashboard/aggregate")
    assert res_aggregate.status_code == 200
    assert res_aggregate.json()["total_scans"] == 250
