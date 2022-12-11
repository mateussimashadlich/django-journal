from rest_framework.routers import SimpleRouter
from .views import PublicationModelViewSet


router = SimpleRouter()
router.register('publications', PublicationModelViewSet)

urlpatterns = router.urls
