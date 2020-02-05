from django.shortcuts import render
from .models import Progress
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import ProgressSerializer
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import ListCreateAPIView

# Create your views here.

class ProgressView(ListCreateAPIView):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
    permission_classes = [permissions.IsAuthenticated]
