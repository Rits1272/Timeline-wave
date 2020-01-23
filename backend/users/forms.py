from django import forms
from django.contrib.auth.forms import UserCreationForm ,UserChangeForm
from django.contrib.auth.models import User

class CustomerUserCreationForm (UserCreationForm):

    class Meta:
        model = User
        fields ={'username','email'}

class CustomerUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields= UserChangeForm.Meta.fields