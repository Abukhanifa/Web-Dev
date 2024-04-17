from django.contrib import admin
from django.urls import path
from api.views.fbv import company_vacancies, vacancy_top_ten
from api.views.cbv import CompanyListAPIView, CompanyDetailAPIView, VacancyListAPIView, VacancyDetailAPIView



urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:company_id>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies/', company_vacancies),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:vacancy_id>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten', vacancy_top_ten)
    
]
