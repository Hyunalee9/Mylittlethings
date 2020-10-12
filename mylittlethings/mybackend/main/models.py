from django.db import models

class Main(models.Model):
    name = models.CharField(max_length=140)
    date = models.DateTimeField('date published')
    image = models.ImageField(upload_to="image")

    def __str__(self):
        return self.name

    class Meta:
        ordering=['name']