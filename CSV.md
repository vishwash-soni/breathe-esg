# Example CSV Structure

The platform supports CSV/XLSX uploads with the following structure:

| category | activity_type      | quantity | unit   |
|----------|--------------------|----------|--------|
| Scope 3  | Flight             | 1500     | km     |
| Scope 3  | Hotel Stay         | 4        | nights |
| Scope 2  | Electricity        | 1200     | kWh    |
| Scope 1  | Diesel Consumption | 500      | L      |

---

# Supported Fields

| Field          | Description               |
|----------------|---------------------------|
| category       | ESG category or scope     |
| activity_type  | Operational activity      |
| quantity       | Numeric activity quantity |
| unit           | Measurement unit          |

---

# Notes

- CSV  uploads are supported
- Rows are normalized during ingestion
- Invalid or suspicious rows are flagged for analyst review