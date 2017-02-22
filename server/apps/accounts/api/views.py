from rest_framework import viewsets
from django.contrib.auth import get_user_model

from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated


# class UsersViewset(viewsets.ModelViewSet):
#     User = get_user_model()
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class UserDetailView(generics.RetrieveAPIView):
    permission_classes = IsAuthenticated,
    serializer_class = UserSerializer
    model = get_user_model()

    def get_object(self, queryset=None):
        return self.request.user
