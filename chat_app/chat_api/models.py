from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.


class MyUser(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="email address", max_length=255, unique=True, blank=True
    )
    contacts = models.ManyToManyField("self", blank=True)

    USERNAME_FIELD = 'email'

