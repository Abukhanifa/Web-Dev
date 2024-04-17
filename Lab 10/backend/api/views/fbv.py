from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer, VacancySerializer2
from django.core import serializers as core_serializers
import json

@csrf_exempt
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return JsonResponse(serializer.data, safe = False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
        
        
@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as c:
        return JsonResponse({"error": str(c)}, status=400)
    
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data) 
    elif request.method == "PUT":
        data = json.loads(request.body)
        company.city = data.get("city")
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"deleted": True})
    

@csrf_exempt
def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many = True)
        return JsonResponse(serializer.data, safe = False)
    elif request.method == "POST":
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(name=data.get("name"), description=data.get("description"), salary=data.get("salary"))
        return JsonResponse(vacancy.to_json(), status=201)


@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as c:
        return JsonResponse({"error": str(c)}, status=400)
    
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        vacancy.name = data.get("name")
        vacancy.save()
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({"deleted": True})    
    
    
@csrf_exempt
def company_vacancies(request, company_id):
    try:
        vacancies = Vacancy.objects.all().filter(companyId = company_id)
        vacancies_json = [v.to_json() for v in vacancies]
    except Company.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status = 400)
    return JsonResponse(vacancies_json, safe = False)


def vacancy_top_ten(request):
    top_ten = Vacancy.objects.all().order_by('-salary')[:10]
    serializer = VacancySerializer2(top_ten, many=True)
    data = json.loads(json.dumps(serializer.data))  # Parse JSON response
    return JsonResponse(data, safe=False)
    