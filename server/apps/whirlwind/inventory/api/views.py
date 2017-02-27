from rest_framework import viewsets, generics
from ..models import TransferRequest, Inventory
from ...users.models import Employees
from .serializers import TransferSerializer, InventorySerializer


class TransferViewset(viewsets.ModelViewSet):
    serializer_class = TransferSerializer
    def get_queryset(self):
        queryset = TransferRequest.objects.all()

        print self.request.user.whirlwind_id
        print self.request.query_params

        # return base location from whirlwind using self.request.user.id

        location = self.request.query_params.get('location', None)
        destination = self.request.query_params.get('destination', None)
        init = self.request.query_params.get('init', None)
        if init:
            destination = Employees.objects.get(pk=self.request.user.whirlwind_id).location[:2]
            print destination

        if location is not None:
            queryset = queryset.filter(inventory_id__location__startswith=location)
        if destination is not None:
            queryset = queryset.filter(to_location__startswith=destination)
        
        return queryset

class InventoryViewset(viewsets.ModelViewSet):
    serializer_class = InventorySerializer
    queryset = Inventory.objects.filter(
            active=True
        ).values(
            'model_number',
            'serial_number',
            'location',
        )