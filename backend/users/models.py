from django.db import models
from django.contrib.auth.models import User

class ConnectionsAwaiting(models.Model):
    requested_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requested_to', to_field='username')
    requested_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requested_by', to_field='username')

    def __str__(self):
        return '%s to %s'%(str(self.requested_by), str(self.requested_to))

class Friends(models.Model):
    person = models.ForeignKey(User, on_delete=models.CASCADE, related_name='person', to_field='username')
    friend = models.ForeignKey(User, on_delete=models.CASCADE, related_name='friend', to_field='username')

    def __str__(self):
        return str(self.person)