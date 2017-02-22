from rest_framework import viewsets
from ..models import Employees
from .serializers import UserSerializer


class UserApiView(viewsets.ModelViewSet):
    queryset = Employees.objects.using('whirlwind').all()
    serializer_class = UserSerializer

