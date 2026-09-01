# Legal Metrology Rule-Engine Backend

FastAPI backend service for **SIH26034 — Legal Metrology (Packaged Commodities) Rules, 2011 Compliance Checker**.

## 🚀 Quick Start

### 1. Setup Virtual Environment & Dependencies
```bash
# Create virtualenv using uv (or python3 -m venv .venv)
uv venv .venv

# Activate environment
source .venv/bin/activate

# Install dependencies
uv pip install -r requirements.txt
```

### 2. Run the Development Server
```bash
./run.sh
# or manually:
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 3. Access Interactive API Documentation
Open your browser and navigate to:
* **Swagger UI:** `http://localhost:8000/docs`
* **ReDoc:** `http://localhost:8000/redoc`

---

## 📡 Key API Endpoints

| Method | Endpoint | Description | Target User |
|---|---|---|---|
| `GET` | `/` | Service health & docs links | Anyone |
| `POST` | `/api/v1/compliance/check` | Evaluates vision OCR JSON against Legal Metrology Rules | Core Rule Engine |
| `GET` | `/api/v1/compliance/fixtures/sample-input` | Returns mock OCR input JSON | Vision Lead (Rahul) |
| `GET` | `/api/v1/compliance/fixtures/sample-report` | Returns mock violation report JSON | UI Lead (Hrishi) |
| `GET` | `/api/v1/dashboard/aggregate` | Returns aggregated scan statistics JSON | Dashboard Lead (Devika) |

---

## 📂 Project Structure
```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py          # FastAPI application & API endpoints
│   ├── schemas.py       # Pydantic data models for Input/Output
│   ├── rule_engine.py   # Compliance verification logic & Legal Metrology rule lookup
│   └── fixtures.py      # Mock Python data fixtures
├── fixtures/
│   ├── input_sample.json     # Sample OCR input fixture
│   ├── output_sample.json    # Sample violation report fixture
│   └── aggregate_sample.json # Sample dashboard aggregate stats fixture
├── requirements.txt     # Python dependencies
├── run.sh               # Dev server launch script
└── README.md            # Documentation
```
