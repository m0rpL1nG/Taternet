from rest_framework import viewsets, generics
from models.transfers import TransferRequest
from models.inventory import Inventory
from ..users.models import Employees
from .serializers import TransferSerializer, InventorySerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny


# Create your views here.
@permission_classes((AllowAny, ))
class TransferViewset(viewsets.ModelViewSet):
    serializer_class = TransferSerializer
    def get_queryset(self):
        # queryset = TransferRequest.objects.values(
        #     'comments', 
        #     'notes', 
        #     'warehouse_notes', 
        #     'to_location', 
        #     'inventory_id',
        #     'inventory_id__model_number',
        #     'inventory_id__serial_number',
        #     'inventory_id__unique_id',
        #     'inventory_id__location')
                   
        queryset = TransferRequest.objects.all().select_related('inventory_id')

        # print self.request.user.whirlwind_id
        # print self.request.query_params

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