from rest_framework import serializers
from .models import Vendor
from ..sales.serializers import OrderDetailSerializer

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = [
            'id',
            'name'
        ]

class VendorDetailSerializer(serializers.ModelSerializer):
    # installs = OrderDetailSerializer(many=True)
    class Meta:
        model = Vendor
        fields = [
            'id',
            'name',
            'vendor_id'
        ]
