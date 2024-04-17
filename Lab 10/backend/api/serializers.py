from rest_framework import serializers
from api.models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()
    
    def create(self, validated_data):
        instance = Company(name=validated_data.get('name'), 
                           description=validated_data.get('description'), 
                           city=validated_data.get('city'),
                           address=validated_data.get('address'))
        instance.save()
        return instance
    
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance
    
    
class CompanySerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    class Meta:
        model = Company
        fields = ("id", "name", "description", "city", "address")
        
    
    
class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=1500)
    description = serializers.CharField(max_length=2500)
    salary = serializers.FloatField()
    companyId = serializers.PrimaryKeyRelatedField(queryset = Company.objects.all())
    
    
    def create(self, validated_data):
        instance = Vacancy.objects.create(**validated_data)
        return instance
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance
    
    
    
class VacancySerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=1500)
    description = serializers.CharField(max_length=2500)
    salary = serializers.FloatField()
    companyId = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
   

    class Meta:
        model = Vacancy
        fields = ("id", "name", "description", "salary", "companyId")
        
