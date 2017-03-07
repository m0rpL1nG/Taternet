from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = ('is_staff', 'is_active', 'date_joined', 'password',
            'last_login', 'user_permissions', 'is_superuser',)

