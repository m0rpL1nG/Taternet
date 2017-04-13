from rest_framework import serializers
from .models.transfers import TransferRequest
from .models.inventory import Inventory


# class InventorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = InvModelSerial
#         fields = [
#             'inv_ser_model_number',
#             'inv_ser_serial_number',
#             'inv_ser_item_location',
#         ]

class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = [
            'model_number',
            'serial_number',
            'unique_id'
            'location',
        ]


class TransferSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransferRequest
        depth = 1
        fields = [
            'comments',
            'notes',
            'warehouse_notes',
            'to_location',
            'inventory_id',
        ]


