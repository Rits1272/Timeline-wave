from django.urls import include,path
from . import views

urlpatterns=[
    path('userlist/',views.UserListView.as_view()),
    path('connections/', views.Connections.as_view(), name='connections'),
    path('friends/', views.FriendsView.as_view(), name='friendlist'),
    path('friendRequest/<str:name>', views.GetFriendRequest.as_view(), name='fRequest'),
]