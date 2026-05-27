# Breathe ESG – Emissions Data Ingestion & Review Platform

A full-stack ESG emissions ingestion and analyst review platform built using Django REST Framework and React.

This project was developed as part of the Breathe ESG Tech Intern Assignment. The application simulates how enterprise sustainability data is collected from multiple operational systems, normalized into a consistent structure, validated for suspicious records, and reviewed by analysts before audit approval.

---

# Live Deployment

## Frontend
https://breathe-esg-orpin.vercel.app/

## Backend
https://breathe-backend-bbg6.onrender.com/api/records/

---

# Project Overview

Enterprise sustainability data is usually fragmented across multiple systems and departments.

Examples:
- SAP procurement exports
- Fuel consumption spreadsheets
- Utility electricity reports
- Corporate travel platforms
- Manual sustainability sheets

These sources often contain:
- inconsistent column names
- missing fields
- different units
- duplicate records
- poor formatting

The goal of this project is to build a realistic ESG ingestion workflow where uploaded data can be:
1. Parsed
2. Normalized
3. Validated
4. Reviewed by analysts
5. Approved before audit usage

---

# Features

## Multi-Source Data Ingestion

The platform supports ingestion from three realistic enterprise source types:

### 1. SAP Procurement / Fuel Data
- CSV / XLSX upload
- Handles procurement and fuel consumption records
- Supports inconsistent field structures

### 2. Utility Electricity Data
- Portal export style CSV files
- Billing period support
- Meter-based electricity usage

### 3. Corporate Travel Data
- Flight and travel activity uploads
- Travel category classification
- Distance and emission activity handling

---

# Core Functionality

## File Upload
Users can upload:
- CSV files
  
---

## Data Parsing
The backend automatically parses uploaded files using Pandas.

---

## Data Normalization
The system normalizes:
- column names
- units
- source categories
- quantity formats

Example:
- Litres
- liters
- L

can all map to a normalized format.

---

## Suspicious Record Detection

The platform automatically flags records when:
- quantity is negative
- mandatory fields are missing
- values look invalid

These records require analyst review.

---

## Analyst Review Dashboard

Analysts can:
- view uploaded records
- review suspicious entries
- approve valid records
- reject invalid records

---

## REST API Architecture

Backend APIs are built using Django REST Framework.

Frontend communicates with backend using Axios.

---

# Tech Stack

## Frontend
- React
- Vite
- Axios
- CSS

## Backend
- Django
- Django REST Framework
- Pandas
- OpenPyXL

## Deployment
- Frontend deployed on Vercel
- Backend deployed on Render

---

# Project Structure

```txt
breathe-esg/
│
├── backend/
│   ├── emissions/
│   ├── manage.py
│   ├── requirements.txt
│   └── db.sqlite3
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── MODEL.md
├── DECISIONS.md
├── TRADEOFFS.md
├── SOURCES.md
└── README.md
