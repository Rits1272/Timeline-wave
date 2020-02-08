from rest_framework import serializers
from django.contrib.auth.models import User
from .models import ConnectionsAwaiting, Friends


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=('email','username',)


class ConnectionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConnectionsAwaiting
        fields = '__all__'


class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends
        fields = '__all__'