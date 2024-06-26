from django.urls import path
from api.views import products_list, product_details, category_list, category_detail, category_products

urlpatterns = [
    path('products/', products_list),
    path('products/<int:product_id>/', product_details),
    path('categories/', category_list),
    path('categories/<int:category_id>/', category_detail),
    path('categories/<int:category_id>/products/', category_products),
]