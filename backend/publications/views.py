from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PublicationModelSerializer
from .models import Publication
# Create your views here.


class PublicationModelViewSet(viewsets.ModelViewSet):
    serializer_class = PublicationModelSerializer
    queryset = Publication.objects.all()
