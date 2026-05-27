# DECISIONS.md

# Key Decisions

## 1. Single Unified Model

I used a single `EmissionRecord` model for all source types instead of separate tables.

Reason:
All uploaded data eventually represents:
- an activity
- a quantity
- a unit
- a review state

This simplified:
- ingestion
- normalization
- dashboard filtering
- analyst workflows

---

## 2. CSV Upload Based Ingestion

I chose file uploads instead of live API integrations.

Reason:
In real enterprise workflows, sustainability teams often work with exported spreadsheets from:
- SAP
- utility portals
- travel platforms

This was more realistic for a prototype than building full external integrations.

---

## 3. JSON raw_data Storage

I stored original uploaded rows using `raw_data`.

Reason:
This preserves:
- source traceability
- debugging information
- audit visibility

It also prevents information loss during normalization.

---

## 4. Analyst Approval Workflow

Records are not immediately considered valid.

Each record goes through:
- APPROVED
- REJECTED

Reason:
Real ESG reporting workflows require analyst review before audit usage.

---

## 5. Lightweight Prototype Architecture

I used:
- Django REST Framework
- React
- SQLite

Reason:
The assignment focused more on:
- ingestion logic
- modeling decisions
- realistic workflows

than large-scale infrastructure.
