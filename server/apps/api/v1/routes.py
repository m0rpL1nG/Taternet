from django.conf.urls import include, url
from rest_framework import routers  
from server.apps.games.api.views import GameApiView
from server.apps.whirlwind.users.api.views import UserApiView
from server.apps.whirlwind.inventory.api.views import TransferViewset, InventoryViewset
from server.apps.accounts.api.views import UserDetailView


api_router = routers.DefaultRouter()
api_router.register('games', GameApiView)
api_router.register('whirlwindusers', UserApiView)
api_router.register('transfers', TransferViewset, base_name="transfers")
api_router.register('inventory', InventoryViewset)
# api_router.register('users', UsersViewset)

urlpatterns = [
     url(r'^login/', include('rest_social_auth.urls_jwt')),
     url(r'user/', UserDetailView.as_view()), 
]

urlpatterns += api_router.urls
