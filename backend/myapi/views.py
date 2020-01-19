from django.shortcuts import render
from .serializers import ProgressSerializer
from .models import Progress
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions


# Create your views here.
class ProgressView(ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
    permission_classes = [permissions.IsAuthenticated]