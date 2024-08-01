from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProcedimentoViewSet

router = DefaultRouter()
router.register(r'procedimentos', ProcedimentoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
