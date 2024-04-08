from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=1000)
    city = models.CharField(max_length=250)
    address = models.TextField(max_length=1000)
    
    
    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Description: {self.description}, City: {self.city}, Address: {self.address}"
    
    
    class Meta:
        verbose_name = "Company"
        verbose_name_plural = 'Companies'
        
        
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.description,
            'address': self.address
        }
    
    
class Vacancy(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=1000)
    salary = models.FloatField()
    companyId = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies")
    
    
    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Salary: {self.salary}, Company: {self.companyId}"
    
    
    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
        
        
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary
        }
    
