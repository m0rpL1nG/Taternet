from rest_framework import viewsets
from ..models import TransferRequest, Inventory
from .serializers import TransferSerializer, InventorySerializer


class TransferViewset(viewsets.ModelViewSet):
    serializer_class = TransferSerializer
    queryset = TransferRequest.objects.all()

# class InventoryViewset(viewsets.ModelViewSet):
#     serializer_class = InventorySerializer
#     queryset = InvModelSerial.objects.filter(
#         inv_ser_active_yn=True
#         ).values(
#             'inv_ser_model_number',
#             'inv_ser_serial_number',
#             'inv_ser_item_location',
#         )

class InventoryViewset(viewsets.ModelViewSet):
    serializer_class = InventorySerializer
    queryset = Inventory.objects.filter(
            active=True
        ).values(
            'model_number',
            'serial_number',
            'location',
        )