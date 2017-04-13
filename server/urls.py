
from django.contrib import admin
from django.conf.urls import include, url
from django.views.generic import TemplateView
from server.apps.api.v1.routes import api_router
from server.apps import api
from server.apps.accounts.api.views import UserDetailView
from server.apps.accounts.views import OkResponse


urlpatterns = [
    # Admin 
    url(r'^admin/', admin.site.urls),
    
    # API:V1
    url(r'^api/v1/', include(api.v1.routes)),
    url(r'auth/google/', OkResponse),

    # App Entry point
    url(r'^$', TemplateView.as_view(template_name="app/index.html"), name='index'),
]


# if settings.DEBUG:
import debug_toolbar
urlpatterns = [
    url(r'^__debug__/', include(debug_toolbar.urls)),
] + urlpatterns
