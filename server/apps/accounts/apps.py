from __future__ import unicode_literals

from django.apps import AppConfig


class AccountsConfig(AppConfig):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
        (_('Imported User Data'), {'fields': ('social_thumb', 'whirlwind_id')}),
    )
