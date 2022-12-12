
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Publication
from .serializers import PublicationModelSerializer


class PublicationModelViewSet(viewsets.ModelViewSet):
    serializer_class = PublicationModelSerializer
    queryset = Publication.objects.all()
    permission_classes = [IsAuthenticated]
