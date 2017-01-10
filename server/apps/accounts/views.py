from rest_framework_jwt.views import ObtainJSONWebToken
from rest_framework_jwt.serializers import (
    JSONWebTokenSerializer, RefreshJSONWebTokenSerializer,
    VerifyJSONWebTokenSerializer
)


class TokenAuth(ObtainJSONWebToken):
    serializer_class = JSONWebTokenSerializer
    