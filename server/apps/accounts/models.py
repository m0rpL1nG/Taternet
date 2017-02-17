from __future__ import unicode_literals

from django.contrib import admin
from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    social_thumb = models.URLField(null=True, blank=True)

