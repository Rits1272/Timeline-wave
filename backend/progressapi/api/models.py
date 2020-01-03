from django.db import models

# Create your models here.


class Progress(models.Model):
    post = models.TextField(max_length=100)
    date = models.DateField(auto_now_add=True)
