from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

# simple home route (so / doesn't look blank)
def home(request):
    return JsonResponse({
        "status": "success 🚀",
        "message": "Breathe backend is live"
    })

urlpatterns = [
    path("", home),  # 👈 ROOT FIX (important)
    path("admin/", admin.site.urls),
    path("api/", include("emissions.urls")),
]