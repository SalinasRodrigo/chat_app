# chat/urls.py
from django.urls import path

from . import views


urlpatterns = [
    path("", views.getRoutes),
    path('user/', view=views.getUser, name="one-user"),
    path('create/user/', view=views.createUser, name="create-user"),
]