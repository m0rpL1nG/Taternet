from rest_framework.serializers import ModelSerializer
from ..models import EmpEmployees


class UserSerializer(ModelSerializer):
    class Meta:
        model = EmpEmployees
        fields = '__all__'

