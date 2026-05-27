# TRADEOFFS.md

# Tradeoffs

## 1. No Authentication System

I did not implement:
- login
- RBAC
- user management

Reason:
The assignment timeline was limited and I prioritized ingestion and analyst workflows.

---

## 2. No Real SAP/API Integration

The system uses uploaded CSV/XLSX files instead of live integrations.

Reason:
Building production-grade SAP or Concur integrations would require significantly more time and infrastructure.

---

## 3. SQLite Instead of PostgreSQL

SQLite was used for simplicity and rapid deployment.

Reason:
The project is a prototype focused on workflow simulation rather than production scalability.

---

## 4. Basic Validation Rules

Suspicious detection currently handles:
- negative quantities
- invalid values

Reason:
Advanced validation engines were outside the prototype scope.

---

## 5. No Async Processing

File ingestion happens synchronously.

Reason:
Background queues and distributed ingestion pipelines would add unnecessary complexity for the assignment scope.
