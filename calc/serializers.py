from rest_framework import serializers
from .models import Calc

class CalcSerializer(serializers.ModelSerializer):

    class Meta:
        model = Calc
        fields = ('id', 'cart_value', 'delivery_distance', 'number_of_items', 'time')
