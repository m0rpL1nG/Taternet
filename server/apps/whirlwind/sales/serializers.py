from rest_framework import serializers
from .models.order_models import Order, OrderDetail, OrderDetailExt
from .models.invoice_models import Invoice, InvoiceDetail
from ..inventory.models.inv_items import InvItems
from ....customMethods.mixins import EagerLoadingMixin
from django.db.models import Prefetch

from collections import OrderedDict
from rest_framework.fields import SkipField

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
    vendor_id = serializers.PrimaryKeyRelatedField(source='model_number.vendor_id', read_only=True)
    order_item_details = OrderDetailExtSerializer(many=True)
    class Meta:
        model = OrderDetail
        fields = (
            'date',
            'model_number',
            'vendor_id',
            'order_item_details'
        )

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderDetailSerializer(required=True, many=True, allow_empty=False)

    class Meta:
        model = Order
        fields = (
            'order_number',
            'document_type',
            'date',
            'order_items'
        )
    
    def to_representation(self, instance):
        """
        Object instance -> Dict of primitive datatypes.
        """
        ret = OrderedDict()
        fields = [field for field in self.fields.values() if not field.write_only]

        for field in fields:
            try:
                attribute = field.get_attribute(instance)
                print attribute
            except SkipField:
                continue

            if attribute is not None:
                represenation = field.to_representation(attribute)
                if represenation is None:
                    # Do not seralize empty objects
                    continue
                if isinstance(represenation, list) and not represenation:
                   # Do not serialize empty lists
                   continue
                ret[field.field_name] = represenation

        return ret

class InvoiceSerializer(serializers.ModelSerializer):
    date = serializers.PrimaryKeyRelatedField(source='invoice_number.date', read_only=True)
    model_number = serializers.PrimaryKeyRelatedField(source='order_detail_id.model_number', read_only=True)
    document_type = serializers.PrimaryKeyRelatedField(source='invoice_number.document_type', read_only=True)
    invoice_number = serializers.PrimaryKeyRelatedField(read_only=True, source='invoice_number.invoice_number')
    class Meta:
        model = OrderDetailExt
        fields =  ('date','invoice_number', 'document_type','model_number','serial_number', 'vendor_invoice_id')
