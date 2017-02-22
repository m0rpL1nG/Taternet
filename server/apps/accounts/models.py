from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    social_thumb = models.URLField(null=True, blank=True)
    whirlwind_id = models.IntegerField(null=False, default=0)
