from django.conf.urls import include, url
from rest_framework import routers  
from server.apps.games.api.views import GameApiView
from server.apps.whirlwind.users.api.views import UserApiView
from server.apps.whirlwind.inventory.views import TransferViewset, InventoryViewset
from server.apps.whirlwind.vendors.views import VendorViewset, VendorDetailViewset
from server.apps.whirlwind.sales.views import OrderViewset, InvoiceViewset
from server.apps.accounts.api.views import UserDetailView
from rest_framework_jwt.views import obtain_jwt_token


api_router = routers.DefaultRouter()
api_router.register('games', GameApiView)
api_router.register('whirlwindusers', UserApiView)
api_router.register('transfers', TransferViewset, base_name="transfers")
api_router.register('vendors', VendorViewset, base_name="vendors")
api_router.register('orders', OrderViewset, base_name="orders")
api_router.register('invoices', InvoiceViewset, base_name="invoices")
api_router.register('vendordetail', VendorDetailViewset, base_name="vendordetail")
api_router.register('inventory', InventoryViewset)
# api_router.register('users', UsersViewset)

urlpatterns = [
     url(r'^employeelogin/', include('rest_social_auth.urls_jwt')),
     url(r'^contractorlogin/', obtain_jwt_token),
     url(r'user/', UserDetailView.as_view()), 
]

urlpatterns += api_router.urls
