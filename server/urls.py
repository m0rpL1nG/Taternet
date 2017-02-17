
from django.contrib import admin
from django.conf.urls import include, url
from django.views.generic import TemplateView
from server.apps.api.v1.routes import api_router
from server.apps.accounts.api.views import UserDetailView
from server.apps.accounts.views import OkResponse

urlpatterns = [
    # Admin 
    url(r'^admin/', admin.site.urls),
    
    # Auth
    # url(r'^api/login/', include('rest_social_auth.urls_jwt')),
    
    # API:V1
    url(r'^api/v1/', include(api_router.urls)),
    url(r'^api/v1/login/', include('rest_social_auth.urls_jwt')),
    url(r'^api/v1/user/', UserDetailView.as_view()),
    url(r'auth/google/callback/', OkResponse),

    # App Entry point
    url(r'^$', TemplateView.as_view(template_name="app/index.html"), name='index'),
]
