# SOURCES.md

# Research Sources

## 1. SAP Procurement / Fuel Data

Research:
I researched common SAP export formats including:
- flat CSV exports
- procurement spreadsheets
- fuel purchase records

What I learned:
SAP exports are often inconsistent and contain:
- unclear column names
- mixed units
- operational codes
- spreadsheet-based exports

Chosen approach:
CSV/XLSX upload ingestion.

---

## 2. Utility Electricity Data

Research:
I looked at utility portal export formats and electricity billing structures.

What I learned:
Utility data usually includes:
- billing periods
- meter readings
- electricity usage units
- monthly consumption records

Chosen approach:
Portal-style CSV upload.

---

## 3. Corporate Travel Data

Research:
I reviewed travel platform structures from systems like:
- Concur
- Navan

What I learned:
Travel data often includes:
- flight categories
- hotel stays
- transport activity
- travel distances

Chosen approach:
Spreadsheet upload ingestion.

---

# Sample Data Design

The sample datasets were manually fabricated based on realistic enterprise reporting formats.

The goal was to simulate:
- inconsistent uploads
- operational activity records
- analyst review scenarios

rather than create simplified toy examples.

---

# Real-World Limitations

A production ESG system would additionally require:
- live API integrations
- authentication
- audit logs
- large-scale validation
- emissions factor engines
- asynchronous ingestion pipelines

These were intentionally outside the prototype scope.
