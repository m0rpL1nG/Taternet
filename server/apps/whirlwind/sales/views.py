from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import Order, OrderDetail, OrderDetailExt
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
        # queryset = queryset.filter(document_type="Complete Ord")
        queryset = queryset.only('order_number','document_type', 'date', 'id') #limit fields from Order Table
        queryset = queryset.prefetch_related(
            Prefetch('order_items',
                     queryset=OrderDetail.objects.select_related('model_number').only('date', 'order_id', 'model_number', 'model_number__vendor_id')), #limit fields from OrderDetail Table
            Prefetch('order_items__order_item_details',
                     queryset=OrderDetailExt.objects.only('order_detail_id', 'serial_number')) #limit fields from OrderDetailExt Table         
                     )

        # queryset = queryset.prefetch_related(Prefetch('order_items', queryset=OrderDetail.objects.select_related('item_id')), 'order_items__order_item_details')
     
        return queryset