from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import MyUser
from .serializers import MyUserSerializer
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
            "Endpoint": "chat/login/",
            "method": "POST",
            "body": None,
            "description": "Retorna un usuario.",
        },
        {
            "Endpoint": "chat/user/",
            "method": "POST",
            "body": None,
            "description": "Retorna un usuario por su id.",
        },
        {
            "Endpoint": "chat/user/create",
            "method": "POST",
            "body": None,
            "description": "Crea un usuario.",
        },
    ]
    return Response(routes)

@api_view(['POST'])
def login(request):
    data = request.data
    user = User.objects.get(email=data["email"])
    myUser = MyUser.objects.get(user=user)
    if user.check_password(data["password"]):
        serial_users = MyUserSerializer(myUser, many=False)
        return Response(serial_users.data)
    return Response("ERROR")

@api_view(['POST'])
def getUser(request):
    data = request.data
    user = User.objects.get(id=data["id"])
    myUser = MyUser.objects.get(user=user)
    serial_users = MyUserSerializer(myUser, many=False)
    return Response(serial_users.data)

@api_view(['POST'])
def createUser(request):
    data = request.data
    try:
        user = MyUser.objects.get(username=data["username"])
    except MyUser.DoesNotExist:
        user = MyUser.objects.create_user(
        username=data["username"], email=data["email"], password=data["password"]
        )
        serial_user = MyUserSerializer(user, many=False)
        return Response(serial_user.data)
    return Response("el usuario ya existe")

@api_view(['GET'])
def getContacts(request, pk):
    user = User.objects.get(id=pk)
    print(user)
    myUser = MyUser.objects.get(user=user)
    print(myUser)
    contacts = myUser.contacts.all()
    serial_contacts = MyUserSerializer(contacts, many=True)
    return Response(serial_contacts.data)



