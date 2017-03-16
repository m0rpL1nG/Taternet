from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import Order
from .serializers import OrderSerializer
# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

# Create your views here.
@permission_classes((AllowAny, ))
class OrderViewset(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    
    def get_queryset(self):
        queryset = Order.objects.all()

        queryset = queryset.filter(date__gte='2017-03-15')
        
        return queryset