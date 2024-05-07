from rest_framework.response import Response
from rest_framework.decorators import api_view


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