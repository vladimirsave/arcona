from django.db import models


class Ferms(models.Model):
    contract_address = models.CharField(max_length=50)
    farm_token = models.CharField(max_length=50)
    price_token = models.CharField(max_length=50)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.contract_address

