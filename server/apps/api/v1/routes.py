
from rest_framework import routers  
from server.apps.games.api.views import GameApiView
from server.apps.whirlwind.users.api.views import UserApiView


api_router = routers.SimpleRouter()
api_router.register('games', GameApiView)
api_router.register('whirlwindusers', UserApiView)
