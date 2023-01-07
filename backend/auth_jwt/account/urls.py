from django.contrib import admin
from django.urls import path,include
# from api.views import NoteAPI
from account import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

router = DefaultRouter()

# router.register("notes",views.NoteModelViewSet,basename="notes")

urlpatterns = [
    # path("api/",include(router.urls)),
    # path("auth/",include("rest_framework.urls",namespace="rest_framework")),
    path("getToken",TokenObtainPairView.as_view(),name="token_obtain_pair"),
    path("refreshToken",TokenRefreshView.as_view(),name="token_refresh"),
    path("verifyToken",TokenVerifyView.as_view(),name="token_verify"),
]