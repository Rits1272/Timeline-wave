from django.db import models

# Create your models here.
class Progress(models.Model):
    data=models.TextField(max_length=300)
    date=models.DateField(auto_now_add=True)