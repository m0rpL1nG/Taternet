from rest_framework import viewsets, generics
from ..models import TransferRequest, Inventory
from .serializers import TransferSerializer, InventorySerializer


class TransferViewset(viewsets.ModelViewSet):
    serializer_class = TransferSerializer
    # queryset = TransferRequest.objects.all()
    def get_queryset(self):
        queryset = TransferRequest.objects.all()
        location = self.request.query_params.get('location', None)
        destination = self.request.query_params.get('destination', None)
        if location is not None:
            queryset = queryset.filter(inventory_id__location=location)
        if destination is not None:
            queryset = queryset.filter(to_location=destination)
        return queryset

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