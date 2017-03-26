import hashlib
from rest_framework.response import Response
from server.apps.whirlwind.users.models import Employees
from django.http import JsonResponse
from django.contrib.auth import get_user_model


def auto_logout(*args, **kwargs):
    """Do not compare current user with new one"""
    return {'user': None}

def my_auth_allowed(backend, details, response, *args, **kwargs):
    if not backend.auth_allowed(response, details):
        return JsonResponse({'error': 'You must use a Famous Tate email address'}, status=403)

def save_avatar(strategy, details, user=None, *args, **kwargs):
    print "get user avatar"
    """Get user avatar from social provider."""
    if user:
        backend_name = kwargs['backend'].__class__.__name__.lower()
        response = kwargs.get('response', {})
        social_thumb = None
        if 'facebook' in backend_name:
            if 'id' in response:
                social_thumb = (
                    'http://graph.facebook.com/{0}/picture?type=normal'
                ).format(response['id'])
        elif 'twitter' in backend_name and response.get('profile_image_url'):
            social_thumb = response['profile_image_url']
        elif 'googleoauth2' in backend_name and response.get('image', {}).get('url'):
            social_thumb = response['image']['url'].split('?')[0]
        else:
            social_thumb = 'http://www.gravatar.com/avatar/'
            social_thumb += hashlib.md5(user.email.lower().encode('utf8')).hexdigest()
            social_thumb += '?size=100'
        if social_thumb and user.social_thumb != social_thumb:
            user.social_thumb = social_thumb
            strategy.storage.user.changed(user)



def check_for_email(backend, uid, user=None, *args, **kwargs):
    print "check for email:"
    if not kwargs['details'].get('email'):
        return Response({'error': "Email wasn't provided by oauth provider"}, status=400)

def check_whirlwind_for_email(*args, **kwargs):
    
    email = kwargs['details'].get('email')
    User = get_user_model()
    user = User.objects.filter(email=email)
    if not user:
        print "find associated email in whirlwind before creating account \n"
        associatedEmail = Employees.objects.filter(email=email)
        if not associatedEmail:
            return JsonResponse({'error' : "Your email address is not associated with a user in whirlwind"}, status=403)

def associate_whirlwind_id(strategy, details, user=None, *args, **kwargs):
    print "associate_whirlwind_id starting"
    if user:
        print user

        print user.whirlwind_id
        email = user.email
        print "at associate whirlwind id"
        print email
        if not user.whirlwind_id:
            whirlwind_id = Employees.objects.filter(email=email).values_list('id', flat=True)[0]
            if whirlwind_id:
                print "found whirlwind ID"
                print whirlwind_id
                user.whirlwind_id = whirlwind_id
                strategy.storage.user.changed(user)
            else: 
                return JsonResponse({'error' : "There was a problem linking your whirlwind account"}, status=401)
        