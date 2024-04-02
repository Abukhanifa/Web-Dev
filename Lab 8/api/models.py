from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=500)
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
        
        
    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"
    
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        
        
    
class Product(models.Model):
    name = models.CharField(max_length=400)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    categoryId = models.ForeignKey(Category, on_delete=models.CASCADE)
    
    
    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, price: {self.price}, 'description: {self.description}, count: {self.count}, is_active: {self.is_active}, self.ca"
        
    
    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }
        
    