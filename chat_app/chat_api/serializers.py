from rest_framework.serializers import ModelSerializer
from .models import MyUser
from django.contrib.auth.models import User

class UserSerializer (ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'


class MyUserSerializer (ModelSerializer):
  user = UserSerializer()
  class Meta:
    model = MyUser
    fields = '__all__'