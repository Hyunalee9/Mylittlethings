from rest_framework.serializers import ModelSerializer

from.models import Main

class MainSerializer(ModelSerializer):
    class Meta:
        model= Main
        fields = ['id','name','date','image']
        