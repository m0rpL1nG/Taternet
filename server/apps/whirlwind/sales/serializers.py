from rest_framework import serializers
from .models import Vendor
from .models import Order, OrderDetail, OrderDetailExt
from ..inventory.InvItemsModel import InvItems
from ....customMethods.mixins import EagerLoadingMixin
from django.db.models import Prefetch

class InvItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvItems
        fields = ('vendor_id',)

class OrderDetailExtSerializer(serializers.ModelSerializer, EagerLoadingMixin):
    # order_number = serializers.PrimaryKeyRelatedField(source='order_id.order_number', read_only=True)
    # vendor_id = serializers.PrimaryKeyRelatedField(source='item_id.vendor_id', read_only=True)
    # details = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = OrderDetailExt
        fields =  ('serial_number',)

class OrderDetailSerializer(serializers.ModelSerializer, EagerLoadingMixin):
    # _SELECT_RELATED_FIELD = ['item_id']
    # item_vendor = serializers.PrimaryKeyRelatedField(source='inv_item_id.vendor_id', read_only=True)
    # vendor_id = serializers.PrimaryKeyRelatedField(source='item_id.vendor_id', read_only=True)
    order_item_details = OrderDetailExtSerializer(many=True)
    class Meta:
        model = OrderDetail
        fields = (
            'date',
            'model_number',
            'order_item_details'
        )

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderDetailSerializer(many=True)
    # _PREFETCH_RELATED_FIELDS = ['order_items']
    
    # @staticmethod
    # def setup_eager_loading(queryset):
    #     """ Perform necessary eager loading of data. """
    #     queryset = queryset.prefetch_related(
    #         Prefetch('models', 
    #             queryset=Order.objects.filter(date__gte='2017-03-15'))
    #         )
    #     return queryset

    class Meta:
        model = Order
        fields = (
            'order_number',
            'document_type',
            'date',
            'order_items'
        )
        
