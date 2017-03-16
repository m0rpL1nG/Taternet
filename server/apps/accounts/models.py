from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _

class CustomUser(AbstractUser):
    email = models.EmailField(_('email address'), unique=True, null=True)
    social_thumb = models.URLField(null=True, blank=True)
    whirlwind_id = models.IntegerField(null=True, blank=True)
    vendor_id = models.CharField(null=True, blank=True, max_length=10)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def save(self, *args, **kwargs):
        if not self.whirlwind_id:
            self.whirlwind_id = None
        if not self.vendor_id:
            self.vendor_id = None
        

        super(CustomUser, self).save(*args, **kwargs)