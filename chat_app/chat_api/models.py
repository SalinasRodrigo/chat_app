from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class MyUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, unique=True)
    contacts = models.ManyToManyField("self", blank=True)

    def __str__(self):
        return self.user.username
    
class Message (models.Model):
    content = models.TextField()
    destinatario = models.ForeignKey(MyUser, on_delete=models.CASCADE, null=True, related_name='destinatarios')
    remitente = models.ForeignKey(MyUser, on_delete=models.CASCADE, null=True, related_name="remitentes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content[:10] 
