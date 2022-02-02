import datetime
from django.db import models

# Create your models here.

class Calc(models.Model):
    cart_value = models.FloatField(default=0)
    delivery_distance = models.IntegerField(default=0)
    number_of_items = models.IntegerField(default=0)
    time = models.DateTimeField(blank=True, default=datetime.datetime.now().isoformat(), null=True)

    def __str__(self):
        return "Simple calculatations"
