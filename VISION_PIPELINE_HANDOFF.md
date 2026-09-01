# Vision pipeline handoff

The callable boundary is:

```python
from vision_pipeline import extract_label_declarations

result = extract_label_declarations(
    "/path/to/label.jpg",
    image_id="img_0001",
    product_category="packaged_food",
)
```

`result` always has the agreed top-level keys: `image_id`, `product_category`,
`extracted_fields`, and `raw_ocr_text`. Every required `extracted_fields` key is
always present. An absent declaration is exactly
`{"value": null, "confidence": 0.0, "present": false}`.

## FastAPI adapter

The API owner can save the uploaded file to a temporary path and call the
function above. Keep `image_id` and `product_category` as optional form fields;
default category to `other`. Do not change or wrap the function's dictionary:
return it directly as the JSON response.

## Environment

Use Python 3.10–3.12 (the current workspace Python 3.14 has no confirmed
PaddlePaddle wheel). Install with:

```bash
python -m pip install -r requirements-vision.txt
```

The initial detector is an OpenCV contour-based rectangular crop with a
full-image fallback, intended only for clean/front-facing photos. PaddleOCR
2.x's default English general model produces OCR text and line confidences;
the deterministic parser maps those lines to the agreed fields.
