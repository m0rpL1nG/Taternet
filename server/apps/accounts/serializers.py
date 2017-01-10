from rest_framework_jwt.compat import get_username_field

from rest_framework_jwt.serializers import (
    JSONWebTokenSerializer
)

class CustomJSONWebTokenSerializer(JSONWebTokenSerializer):
    def username_field(self):
        return get_username_field()

