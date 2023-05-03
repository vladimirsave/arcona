from django.contrib import admin
from django.contrib.admin import ModelAdmin

from farming.models import Ferms


@admin.register(Ferms)
class FermsAdmin(ModelAdmin):
    pass


