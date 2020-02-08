from django.shortcuts import render
from .models import Progress
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import ProgressSerializer
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import ListCreateAPIView
from django.http import HttpResponse
from django.contrib.auth.models import User

# Create your views here.

class ProgressView(ListCreateAPIView):
    serializer_class = ProgressSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def post(self, request, *args, **kwargs):
        title = request.data.get('title')
        description = request.data.get('description')
        username = request.data.get('user')
        user_obj = User.objects.get(username=username)
        progress = Progress(title=title, description=description, user=user_obj)
        progress.save()
        return HttpResponse(progress)

    def get_queryset(self):
        user = self.kwargs['user']
        userObj = User.objects.get(username=user)
        return Progress.objects.filter(user=userObj)
