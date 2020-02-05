from django.urls import path, include, re_path
from rest_framework import routers
from progressApi.views import ProgressView

router = routers.DefaultRouter()
# router.register('progressApi', ProgressView.as_view({'post':'retrieve'}))

urlpatterns = [
   
    re_path(r'', include(router.urls)),
    re_path(r'^api-auth/', include('rest_framework.urls')),
    path('progressApi/', ProgressView.as_view(), name='progressApi'),

]
