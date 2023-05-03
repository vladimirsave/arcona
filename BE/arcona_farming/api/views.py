from rest_framework import viewsets

from api.serializers import FermsSerializer
from farming.models import Ferms


class FarmsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Ferms.objects.all()
    serializer_class = FermsSerializer

