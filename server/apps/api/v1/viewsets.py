from rest_framework import viewsets  
from server.apps.games.models import Game  
from server.apps.api.v1.serializers import GameSerializer


class GameViewSet(viewsets.ModelViewSet):  
    queryset = Game.objects.all()
    serializer_class = GameSerializer