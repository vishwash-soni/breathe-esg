# MODEL.md

# Data Model Design

## Overview

The application uses a single core model called `EmissionRecord` to store and manage all ingested ESG activity data.

This model was designed to:
- support multiple enterprise data sources
- normalize uploaded records
- preserve raw source data
- enable analyst review workflows

The goal was to create a flexible ingestion structure instead of separate tables for every source type.

---

# Django Model

```python
class EmissionRecord(models.Model):

    SOURCE_CHOICES = [
        ("SAP", "SAP"),
        ("UTILITY", "UTILITY"),
        ("TRAVEL", "TRAVEL"),
    ]

    STATUS_CHOICES = [
        ("PENDING", "PENDING"),
        ("APPROVED", "APPROVED"),
        ("REJECTED", "REJECTED"),
    ]

    source_type = models.CharField(max_length=20, choices=SOURCE_CHOICES)

    category = models.CharField(max_length=50)

    activity_type = models.CharField(max_length=100)

    quantity = models.FloatField()

    unit = models.CharField(max_length=20, null=True, blank=True)

    suspicious = models.BooleanField(default=False)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="PENDING"
    )

    raw_data = models.JSONField()

    created_at = models.DateTimeField(auto_now_add=True)
