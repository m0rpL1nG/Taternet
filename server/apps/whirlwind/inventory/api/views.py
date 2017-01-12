from rest_framework import viewsets
from ..models import InvTransferRequest, InvModelSerial, Inventory
from .serializers import XferSerializer, InventorySerializer


class XferViewset(viewsets.ModelViewSet):
    serializer_class = XferSerializer
    queryset = InvTransferRequest.objects.all()

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