from rest_framework import viewsets, generics
from .models import Vendor
from .serializers import VendorSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

# Create your views here.
@permission_classes((AllowAny, ))
class VendorViewset(viewsets.ModelViewSet):
    serializer_class = VendorSerializer
    def get_queryset(self):
        queryset = Vendor.objects.all()

        # print self.request.user.whirlwind_id
        print self.request.query_params

        # return base location from whirlwind using self.request.user.id

        vendor_type = self.request.query_params.get('vendor_type', None)
        vendor_id = self.request.query_params.get('vendor_id', None)

        # return on active vendors
        queryset = queryset.filter(inactive_yn=0)
        
        if vendor_type:
            print "filter by vendor_type"
            queryset = queryset.filter(vendor_type=vendor_type)
        
        if vendor_id:
            queryset = Vendor.objects.filter(id=vendor_id)

        return queryset