
from django.urls import path, include, re_path
from rest_framework import routers
from myapi.views import ProgressView

router = routers.DefaultRouter()
router.register('myapi', ProgressView)

urlpatterns = [
   
    re_path(r'', include(router.urls)),
    re_path(r'^api-auth/', include('rest_framework.urls')),

]