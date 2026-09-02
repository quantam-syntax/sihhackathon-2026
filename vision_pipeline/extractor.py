"""Small, framework-independent product-label OCR pipeline.

The public function in this file is the hand-off boundary for a future FastAPI
endpoint.  It deliberately produces the fixed Group 1 -> Group 2 JSON contract.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any, Literal

from .label_detection import detect_and_crop_label
from .parsing import ParsedLine, parse_declarations

ProductCategory = Literal[
    "packaged_food", "cosmetics", "electronics", "household", "other"
]
VALID_CATEGORIES = {"packaged_food", "cosmetics", "electronics", "household", "other"}


def extract_label_declarations(
    image_path: str | Path,
    *,
    image_id: str | None = None,
    product_category: ProductCategory = "other",
) -> dict[str, Any]:
    """Extract the fixed declaration schema from one clean product-label image.

    Args:
        image_path: Path accepted by OpenCV/PaddleOCR.
        image_id: Stable caller-provided image identifier. Defaults to file stem.
        product_category: One of the five values agreed by the team contract.

    Raises:
        ValueError: If the category is outside the agreed contract.
        RuntimeError: If optional vision/OCR dependencies are not installed.
    """
    if product_category not in VALID_CATEGORIES:
        raise ValueError(
            "product_category must be one of: " + ", ".join(sorted(VALID_CATEGORIES))
        )

    path = Path(image_path)
    if not path.is_file():
        raise FileNotFoundError(f"Image not found: {path}")

    label_image = detect_and_crop_label(path)
    lines = _run_paddle_ocr(label_image)
    raw_ocr_text = "\n".join(line.text for line in lines)

    return {
        "image_id": image_id or path.stem,
        "product_category": product_category,
        "extracted_fields": parse_declarations(lines),
        "raw_ocr_text": raw_ocr_text,
    }


def _run_paddle_ocr(image: Any) -> list[ParsedLine]:
    """Run PaddleOCR 2.x and retain per-line confidence for the parser."""
    try:
        from paddleocr import PaddleOCR
    except ImportError as exc:
        raise RuntimeError(
            "PaddleOCR is not installed. Use a Python 3.10–3.12 virtual environment "
            "and install requirements-vision.txt."
        ) from exc

    # Constructing this lazily means parser/unit tests need no Paddle download.
    ocr = PaddleOCR(use_angle_cls=False, lang="en", show_log=False)
    result = ocr.ocr(image, cls=False)

    lines: list[ParsedLine] = []
    # PaddleOCR 2.x shape: [[ [bbox, (text, confidence)], ... ]]
    for page in result or []:
        if not page:
            continue
        for item in page:
            if not item or len(item) < 2:
                continue
            text, confidence = item[1]
            clean_text = str(text).strip()
            if clean_text:
                lines.append(ParsedLine(clean_text, float(confidence)))
    return lines
