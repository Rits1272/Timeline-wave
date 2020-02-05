from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from django.contrib.auth.models import User


class UserListView (generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer