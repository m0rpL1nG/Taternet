from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import SlugRelatedField
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(ModelSerializer):
    groups = SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
     )
    class Meta:
        model = User
        exclude = ('is_staff', 'is_active', 'date_joined', 'password',
            'last_login', 'user_permissions', 'is_superuser',)

