from rest_framework import viewsets
from ..models import EmpEmployees
from .serializers import UserSerializer


class UserApiView(viewsets.ModelViewSet):
    queryset = EmpEmployees.objects.using('whirlwind').all()
    serializer_class = UserSerializer

