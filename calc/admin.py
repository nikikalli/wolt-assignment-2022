from django.contrib import admin

# Register your models here.

from .models import Calc

class CaclAdmin(admin.ModelAdmin):
    list_display =('cart_value', 'delivery_distance', 'number_of_items', 'time')

admin.site.register(Calc, CaclAdmin)