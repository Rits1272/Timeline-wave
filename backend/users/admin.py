from django.contrib import admin
from .models import ConnectionsAwaiting, Friends

admin.site.register(ConnectionsAwaiting)
admin.site.register(Friends)