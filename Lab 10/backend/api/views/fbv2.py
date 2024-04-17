from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from api.models import Company, Vacancy
from rest_framework import status
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework.response import Response

@api_view(["GET", "POST"])
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return Response(serializer.data, safe = False)
    elif request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
@api_view(["GET", "PUT", "DELETE"])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as c:
        return JsonResponse({"error": str(c)}, status=400)
    
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data) 
    elif request.method == "PUT":
        serializer = CompanySerializer(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == "DELETE":
        company.delete()
        return Response({"deleted": True})
    

@api_view(["GET", "POST"])
def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many = True)
        return JsonResponse(serializer.data, safe = False)
    elif request.method == "POST":
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        

@api_view(["GET", "PUT", "DELETE"])
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as c:
        return JsonResponse({"error": str(c)}, status=400)
    
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
       serializer = VacancySerializer(
            instance=vacancy,
            data=request.data
        )
       if serializer.is_valid():
           serializer.save()
           return Response(serializer.data)  
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    elif request.method == "DELETE":
        vacancy.delete()
        return Response({"deleted": True})    
    
    

def company_vacancies(request, company_id):
    try:
        vacancies = Vacancy.objects.all().filter(companyId = company_id)
        vacancies_json = [v.to_json() for v in vacancies]
    except Company.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status = 400)
    return JsonResponse(vacancies_json, safe = False)


@api_view(["GET"])
def vacancy_top_ten(request):
    top_ten = Vacancy.objects.all().order_by('-salary')[:10].values()
    serializer = VacancySerializer(top_ten, many = True)
    return JsonResponse(serializer.data, safe = False)
    