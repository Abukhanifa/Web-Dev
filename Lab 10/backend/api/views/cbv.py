from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, CompanySerializer2, VacancySerializer, VacancySerializer2


class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class CompanyDetailAPIView(APIView):
    def get_object(self, company_id):
        try:
            company = Company.objects.get(id=company_id)
            return company
        except Company.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanySerializer(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()  # update table ...
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, company_id):
        company = self.get_object(company_id)
        company.delete()
        return Response({"deleted": True})
    

class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailAPIView(APIView):
    def get_object(self, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
            return vacancy
        except Vacancy.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        serializer = VacancySerializer(
            instance=vacancy,
            data=request.data
        )
        
        if serializer.is_valid():
            serializer.save()  # update table ...
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        vacancy.delete()
        return Response({"deleted": True})