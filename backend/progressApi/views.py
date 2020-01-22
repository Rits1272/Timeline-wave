from django.shortcuts import render
from .models import Progress
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import ProgressSerializer

# Create your views here.

class ProgressView(ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
    permission_classes = [permissions.IsAuthenticated]