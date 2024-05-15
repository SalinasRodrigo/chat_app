from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class MyUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, unique=True)
    contacts = models.ManyToManyField("self", blank=True)

    def __str__(self):
        return self.user.username
