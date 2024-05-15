from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import MyUser
from .serializers import UserSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            "Endpoint": "ingresos/year/",
            "method": "GET",
            "body": None,
            "description": "Retorna los ingresos agrupados por año.",
        }
    ]
    return Response(routes)

@api_view(['POST'])
def getUser(request):
    data = request.data
    users = MyUser.objects.get(username=data["username"])
    
    if users.check_password(data["password"]):
        serial_users = UserSerializer(users, many=False)
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



