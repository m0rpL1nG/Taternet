from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _

class CustomUser(AbstractUser):
    email = models.EmailField(_('email address'), unique=True, null=True)
    social_thumb = models.URLField(null=True, blank=True)
    whirlwind_id = models.IntegerField(null=False, default=0)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []