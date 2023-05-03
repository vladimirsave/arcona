from rest_framework import serializers

from farming.models import Ferms


class FermsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ferms
        fields = ['contract_address', 'farm_token', 'price_token']
