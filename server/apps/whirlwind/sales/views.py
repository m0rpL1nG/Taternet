from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import Order
from .serializers import OrderSerializer
# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.db.models import Prefetch
from datetime import datetime
import pytz

# Create your views here.
@permission_classes((AllowAny, ))
class OrderViewset(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    
    def get_queryset(self):
        queryset = Order.objects.filter(date__gte=datetime(2017, 03, 14, tzinfo=pytz.UTC))
        # queryset = queryset.prefetch_related(Prefetch(
        # "order_items",
        # to_attr="order_items"))
        queryset = queryset.prefetch_related('order_items')
        queryset = queryset.only('order_number','document_type', 'date', 'id')
        # queryset = Order.objects.filter(date__gte=datetime(2017, 03, 14, tzinfo=pytz.UTC)).prefetch_related('order_items')
        # queryset = queryset.values('order_number', 'document_type', 'date', 'id')
        # queryset = Order.objects.all().values('order_number', 'document_type', 'date')
        # queryset = queryset.filter(date__gte=datetime(2017, 03, 14, tzinfo=pytz.UTC))
        # queryset = queryset.values_list('order_number', 'document_type', 'date')
        # queryset = queryset.filter(date__gte='2017-03-15')
        # queryset = self.get_serializer_class().setup_eager_loading(queryset) 
        return queryset