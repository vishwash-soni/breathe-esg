from django.urls import path
from .views import *

urlpatterns = [
    path("upload/", upload_csv),
    path("records/", get_records),
    path("approve/<int:id>/", approve_record),
    path("reject/<int:id>/", reject_record),
]