from rest_framework import serializers
from .models import Vendor
from .models import Order, OrderDetail


class OrderDetailSerializer(serializers.ModelSerializer):
    order_number = serializers.PrimaryKeyRelatedField(source='order_id.order_number', read_only=True)
    class Meta:
        model = OrderDetail
        fields = (
            'order_number',
            'item_id',
            'date',
        )

class OrderSerializer(serializers.ModelSerializer):
    models = OrderDetailSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = (
            'order_number',
            'document_type',
            'date',
            'models'
        )
