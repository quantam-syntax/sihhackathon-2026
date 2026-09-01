#!/usr/bin/env bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

if [ -f ".venv/bin/activate" ]; then
    source .venv/bin/activate
fi

echo "Starting Legal Metrology Rule-Engine Backend on http://0.0.0.0:8000 ..."
echo "API Docs available at http://localhost:8000/docs"

PYTHONPATH=. uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
