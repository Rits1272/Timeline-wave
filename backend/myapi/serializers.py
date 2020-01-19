from .models import Progress
from rest_framework.serializers import ModelSerializer


class ProgressSerializer(ModelSerializer):
    class Meta:
        model = Progress
        fields = '__all__'