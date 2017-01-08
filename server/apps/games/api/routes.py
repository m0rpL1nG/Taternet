from server.api.v1.routes import api_router  
from server.apps.games.api.viewsets import GameViewSet

api_router = routers.SimpleRouter()  
api_router.register('games', GameViewSet)  