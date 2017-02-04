
from rest_framework import routers  
from server.apps.games.api.views import GameApiView
from server.apps.whirlwind.users.api.views import UserApiView
from server.apps.whirlwind.inventory.api.views import TransferViewset, InventoryViewset


api_router = routers.SimpleRouter()
api_router.register('games', GameApiView)
api_router.register('whirlwindusers', UserApiView)
api_router.register('transfers', TransferViewset)
api_router.register('inventory', InventoryViewset)
