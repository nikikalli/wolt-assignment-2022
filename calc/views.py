
import math
from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .serializers import CalcSerializer
from .models import Calc



''' Renders frontend '''
def front(request):
    context = {}
    return render(request, 'index.html', context)



@api_view(['GET', 'PUT'])
def fee(request, pk):

    ''' 
    PUT request updates existing table
    GET retrivies
    
    '''

    if request.method == 'PUT':
        try:
            model= Calc.objects.get(pk=pk)
        except Calc.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = CalcSerializer(model, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    elif request.method == 'GET':
        d = Calc.objects.all()
        serializer = CalcSerializer(d, many= True)
        return Response(serializer.data)


''' Calculates the delivery fee '''
def get_fee(model):
    fee = 0
    if model[0][1] < 1000:
        fee += 1000 - model[0][1]
    elif model[0][1] >= 10000:

        return {'fee': 0}

    if model[0][3] >= 5:
        fee += (model[0][3] - 5) * 50 + 50

    if model[0][2] >= 500:
        fee += 100 + math.floor((model[0][2] - 500) / 500) * 100
    else:
        fee += 100

    if model[0][4].weekday() == 4 and (model[0][4].hour <= 19 or model[0][4].hour >= 15) :
        fee *= 1.1

    if fee > 1500:
            
        return {'fee': 15}
    formatted = "{:.2f}".format(fee / 100)
    return {'fee': formatted}

''' Sends calculated fee to the frontend '''
def calculate(request, pk):

        model = Calc.objects.filter(pk=pk)
        query_values = model.values_list()
    
        res = get_fee(query_values)
        return JsonResponse(res, safe=False)