from django.db import models

# Create your models here.

class Publication(models.Model):
    thumbnail = models.ImageField('Thumbnail')
    titulo = models.CharField('Título', max_length=255)
    data = models.DateTimeField(auto_now_add=True)
    data_edicao = models.DateTimeField(auto_now=True)