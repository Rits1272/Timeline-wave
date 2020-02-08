from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from django.contrib.auth.models import User
from .models import ConnectionsAwaiting, Friends
from .serializers import ConnectionsSerializer, FriendsSerializer
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404

class UserListView (generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class Connections(generics.ListCreateAPIView):
    queryset = ConnectionsAwaiting.objects.all()
    serializer_class = ConnectionsSerializer

    def post(self, request):
        requested_to = request.data.get('requested_to')
        requested_by = request.user 
        requested_to_obj = User.objects.get(username=requested_to)
        requested_by_obj = User.objects.get(username=requested_by)
        friends = ConnectionsAwaiting.objects.filter(requested_by=requested_to_obj.id)
        search = ConnectionsAwaiting.objects.filter(requested_to=requested_to_obj.id, requested_by=requested_by_obj.id)
        if search:
            search.delete()
        
        elif requested_by_obj==requested_to_obj:
            pass

        else:
            connection = ConnectionsAwaiting(requested_to=requested_to_obj, requested_by=requested_by_obj)
            connection.save()
        return HttpResponse({"status": 201})


class FriendsView(generics.ListCreateAPIView):
    queryset = Friends.objects.all()
    serializer_class = FriendsSerializer

    def post(self, request):
        requested_to = request.data.get('requested_to')
        requested_by_obj = User.objects.get(username=requested_to)
        requested_to_obj = User.objects.get(username=request.user)

        if(requested_to_obj == requested_by_obj):
            pass 
        else:
            friends = Friends(person=requested_to_obj, friend=requested_by_obj)
            friends.save()
            search = ConnectionsAwaiting.objects.get(requested_to=requested_to_obj.id, requested_by=requested_by_obj.id)
            search.delete()

        return HttpResponse({'status': 201})


class GetFriendRequest(generics.ListAPIView):
    serializer_class = ConnectionsSerializer
 
    def get_queryset(self):
        friends = ConnectionsAwaiting.objects.filter(requested_to=self.kwargs['name'])
        return friends
