# SIH26034 — Rules Research — Build Brief

## Project
Building compliance-checking software for the **Legal Metrology (Packaged Commodities) Rules, 2011** (Ministry of Consumer Affairs). It scans product label images and flags missing or illegal declarations. Your research becomes the actual rule set the software checks against — it's not background reading, it's a direct input to the code.

## Team structure
6 members, 2 groups. You're in **Group 1**, led by the vision model owner, alongside another ECE member handling data collection + the deck. Group 2 (led by the 2nd CSE member) builds the rule-engine, UI/UX, and dashboard. Timeline: 3 sessions, Sep 1 / 2 / 3, 5–9pm each.

## Your role
Research the Legal Metrology (Packaged Commodities) Rules, 2011, and produce an authoritative table of what must be declared on a product label, and under which exact rule. This table gets handed to the teammate building the rule-engine, who will code your findings directly into the compliance-check logic.

**Fill in this table** (starting field list below — confirm, correct, and add anything missed, e.g. dimension declarations for certain commodities):

| Field | Mandatory for which commodity categories | Exact rule/sub-rule reference | Common real-world violation |
|---|---|---|---|
| Net quantity | | | |
| MRP (incl. taxes) | | | |
| Manufacturing/packing date | | | |
| Expiry / best-before date | | | |
| Manufacturer name & address | | | |
| Consumer care contact | | | |
| Unit sale price | | | |
| Country of origin (imports) | | | |

Also worth digging into:
- What enforcement tools the Ministry of Consumer Affairs already has for this — this shapes the "why this is needed" pitch angle
- Penalty structure for non-compliance (useful for the deck's impact framing)
- Any commodity-specific exemptions from the general rule (e.g. very small packages)

## Deliverables by session
- **Sep 1:** Work through the table above with real rule/sub-rule citations, not paraphrases.
- **Sep 2:** Finalize and hand the completed table to the rule-engine developer (2nd CSE member). Flag anything ambiguous or commodity-specific they need to know.
- **Sep 3:** Available to clarify edge cases as the team finds them during integration testing; help prep regulatory talking points for the pitch.

## Starting prompt for your AI
"Help me research the Legal Metrology (Packaged Commodities) Rules, 2011 (India). I need: (1) every mandatory declaration required on a packaged commodity label, with exact rule/sub-rule numbers, (2) which commodity categories each applies to, (3) common real violations of each, (4) the penalty structure for non-compliance. This will be used directly as the rule set in a compliance-checking tool, so accuracy on rule numbers matters."
