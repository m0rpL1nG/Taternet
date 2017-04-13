from django.shortcuts import render
from rest_framework import viewsets, generics
from models.order_models import Order, OrderDetail, OrderDetailExt
from .serializers import OrderSerializer, InvoiceSerializer
# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.db.models import Prefetch
from datetime import datetime
import pytz
from django.db.models import Q

# Create your views here.
@permission_classes((AllowAny, ))
class OrderViewset(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    
    def get_queryset(self):
        queryset = Order.objects.filter(date__gte=datetime(2017, 03, 14, tzinfo=pytz.UTC))
        queryset = queryset.exclude(document_type="Quote").exclude(document_type="Deleted Ord").exclude(document_type="Deleted Ret").exclude(document_type="Deleted Quo")
        # queryset = queryset.filter(order_items__qty=2)
        queryset = queryset.only('order_number','document_type', 'date', 'id') #limit fields from Order Table
        queryset = queryset.prefetch_related(
            Prefetch('order_items',
                     queryset=OrderDetail.objects.select_related('model_number').filter(model_number__vendor_id="J332").only('qty', 'date', 'order_id', 'model_number', 'model_number__vendor_id')), #limit fields from OrderDetail Table
            Prefetch('order_items__order_item_details',
                     queryset=OrderDetailExt.objects.only('order_detail_id', 'serial_number', 'invoiced_yn')) #limit fields from OrderDetailExt Table         
                     )
        # queryset = queryset.filter(orderdetail_set__qty=2)
        # queryset = queryset.prefetch_related(Prefetch('order_items', queryset=OrderDetail.objects.select_related('item_id')), 'order_items__order_item_details')
     
        return queryset

@permission_classes((AllowAny, ))
class InvoiceViewset(viewsets.ModelViewSet):
    serializer_class = InvoiceSerializer
    
    def get_queryset(self):
        queryset = OrderDetailExt.objects.select_related('order_detail_id').select_related('invoice_number')
        queryset = queryset.only('invoice_number__invoice_number', 'invoice_number__document_type', 'order_detail_id__model_number', 'serial_number')
        queryset = queryset.filter(invoice_detail_id__date__gte=datetime(2017, 03, 14, tzinfo=pytz.UTC), invoiced_yn=1, order_detail_id__model_number__vendor_id="J332")
        # queryset = queryset.exclude(document_type="Quote").exclude(document_type="Deleted Ord").exclude(document_type="Deleted Ret").exclude(document_type="Deleted Quo")
        # # queryset = queryset.filter(order_items__qty=2)
        # queryset = queryset.only('order_number','document_type', 'date', 'id') #limit fields from Order Table
        # queryset = queryset.prefetch_related(
        #     Prefetch('order_items',
        #              queryset=OrderDetail.objects.select_related('model_number').filter(model_number__vendor_id="J332").only('qty', 'date', 'order_id', 'model_number', 'model_number__vendor_id')), #limit fields from OrderDetail Table
        #     Prefetch('order_items__order_item_details',
        #              queryset=OrderDetailExt.objects.only('order_detail_id', 'serial_number', 'invoiced_yn')) #limit fields from OrderDetailExt Table         
        #              )
        # queryset = queryset.filter(orderdetail_set__qty=2)
        # queryset = queryset.prefetch_related(Prefetch('order_items', queryset=OrderDetail.objects.select_related('item_id')), 'order_items__order_item_details')
     
        return queryset