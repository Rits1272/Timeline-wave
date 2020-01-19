from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

# Register your models here.
from .models import CustomUser
from .forms import CustomerUserChangeForm, CustomerUserCreationForm

class CustomUserAdmin(UserAdmin):
    add_form=CustomerUserCreationForm
    form = CustomerUserChangeForm
    model =CustomUser
    list_display=['email','username','name']


admin.site.register(CustomUser,CustomUserAdmin)