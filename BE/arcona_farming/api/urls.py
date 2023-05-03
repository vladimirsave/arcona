from django.urls import include, path
from rest_framework import routers

from api.views import FarmsViewSet


router = routers.DefaultRouter()
router.register('farms', FarmsViewSet, basename='farms')


urlpatterns = [
    path('', include(router.urls)),
]


