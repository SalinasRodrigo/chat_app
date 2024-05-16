# chat/urls.py
from django.urls import path

from . import views


urlpatterns = [
    path("", views.getRoutes),
    path('login/', view=views.login, name="login"),
    path('user/', view=views.getUser, name="get-user"),
    path('user/create/', view=views.createUser, name="create-user"),
    path('user/contacts/<int:pk>', view=views.getContacts, name="get-contacts")
]