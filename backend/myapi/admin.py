from django.contrib import admin

# Register your models here.
from .models import Progress


class ProgressAdmin(admin.ModelAdmin):

    readonly_fields = ['date']

    class Meta:
        model = Progress
        fields = '__all__'


admin.site.register(Progress, ProgressAdmin)