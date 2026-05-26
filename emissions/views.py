import pandas as pd

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import EmissionRecord


@api_view(["POST"])
def upload_csv(request):

    try:

        file = request.FILES.get("file")

        source_type = request.data.get("source_type")

        if not file:
            return Response(
                {"error": "No file uploaded"},
                status=400
            )

        print("SOURCE TYPE:", source_type)

        if file.name.endswith(".csv"):
            df = pd.read_csv(file)

        elif file.name.endswith(".xlsx"):
            df = pd.read_excel(file)

        else:
            return Response(
                {"error": "Unsupported file format"},
                status=400
            )

        for _, row in df.iterrows():

            quantity = row.get("quantity", 0)

            try:
                quantity = float(quantity)
            except:
                quantity = 0

            suspicious = False

            if quantity < 0:
                suspicious = True

            if source_type == "UTILITY" and quantity > 10000:
                suspicious = True

            if source_type == "TRAVEL" and quantity > 50000:
                suspicious = True

            EmissionRecord.objects.create(
                source_type=source_type,
                category=str(row.get("category", "")),
                activity_type=str(row.get("activity_type", "")),
                quantity=quantity,
                unit=str(row.get("unit", "")),
                suspicious=suspicious,
                raw_data=row.to_dict()
            )

        return Response({
            "message": "Upload successful"
        })

    except Exception as e:

        print("ERROR:", str(e))

        return Response({
            "error": str(e)
        }, status=500)


@api_view(["GET"])
def get_records(request):

    records = EmissionRecord.objects.all().order_by("-id").values()

    return Response(records)


@api_view(["POST"])
def approve_record(request, id):

    record = EmissionRecord.objects.get(id=id)

    record.status = "APPROVED"

    record.save()

    return Response({"message": "Approved"})


@api_view(["POST"])
def reject_record(request, id):

    record = EmissionRecord.objects.get(id=id)

    record.status = "REJECTED"

    record.save()

    return Response({"message": "Rejected"})