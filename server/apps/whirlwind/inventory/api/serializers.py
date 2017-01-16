from rest_framework import serializers
from ..models import InvModelSerial, InvTransferRequest, Inventory


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
            'location',
        ]


class TransferSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvTransferRequest
        depth = 1
        fields = [
            'inv_transfer_comments',
            'inv_transfer_to_location',
            'inv_transfer_mdl_ser_id',
        ]


