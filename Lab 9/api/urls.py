from django.contrib import admin
from django.urls import path
from api.views import company_list, company_detail, company_vacancies, vacancy_list, vacancy_detail, vacancy_top_ten



urlpatterns = [
    path('companies/', company_list ),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', company_vacancies),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten', vacancy_top_ten)
    
]
