from django.contrib import admin

from api.models import Company, Vacancy


# Option - 1
# admin.site.register(Category)

# Option - 2
@admin.register(Company)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city', 'address')
    search_fields = ('name',)


@admin.register(Vacancy)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    search_fields = ('name',)