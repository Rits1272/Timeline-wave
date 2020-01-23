from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Progress(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return '<{title}><{user}>'.format(title=self.title, user=self.user)