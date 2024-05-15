from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import MyUser
from .serializers import UserSerializer
from django.contrib.auth.models import User


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            "Endpoint": "chat/",
            "method": "GET",
            "body": None,
            "description": "Retorna las rutas.",
        },
        {
            "Endpoint": "chat/user",
            "method": "POST",
            "body": None,
            "description": "Retorna un usuario.",
        }
    ]
    return Response(routes)

@api_view(['POST'])
def getUser(request):
    data = request.data
    print(data)
    user = User.objects.get(email=data["email"])
    myUser = MyUser.objects.get(user=user)
    print(myUser)
    if user.check_password(data["password"]):
        serial_users = UserSerializer(myUser, many=False)
        return Response(serial_users.data)
    return Response("ERROR")

@api_view(['POST'])
def createUser(request):
    data = request.data
    try:
        user = MyUser.objects.get(username=data["username"])
    except MyUser.DoesNotExist:
        user = MyUser.objects.create_user(
        username=data["username"], email=data["email"], password=data["password"]
        )
        serial_user = UserSerializer(user, many=False)
        return Response(serial_user.data)
    return Response("el usuario ya existe")



