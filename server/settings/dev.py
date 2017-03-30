import environ
from server.settings.base import *

root = environ.Path(__file__) - 2
projectRoot = environ.Path(__file__) - 3
env = environ.Env(DEBUG=(bool, False),)
currentEnv = 'dev'
env.read_env('{}/{}.env'.format(root, currentEnv))


SECRET_KEY = env('SECRET_KEY')
# DEBUG = env('DEBUG')
DEBUG = True

#DEBUG TOOLBAR SETTING
INTERNAL_IPS = ('10.20.1.112')

def show_toolbar(request):
    if request.is_ajax():
        return False
    return True

DEBUG_TOOLBAR_CONFIG = {
    'SHOW_TOOLBAR_CALLBACK': 'server.settings.dev.show_toolbar',
}

ALLOWED_HOSTS = [
    u'10.20.1.112',
    u'10.20.1.112.xip.io',
    u'10.20.1.112.nip.io',
    u'localhost',
    u'10.10.1.75', 
    u'10.10.1.75.xip.io',
    u'10.10.1.75.nip.io',
    u'david-ubuntuser',
    ]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': env('AUTH_DB_NAME'),
        'USER': env('AUTH_DB_USERNAME'),
        'PASSWORD': env('AUTH_DB_PASSWORD'),
        'HOST': 'localhost',
        'PORT': '',
    },
    'whirlwind': {
        'ENGINE': 'sql_server.pyodbc',
        'NAME': env('WHIRLWIND_DB_NAME'),
        'USER': env('WHIRLWIND_USERNAME'),
        'PASSWORD': env('WHIRLWIND_PW'),
        'HOST': env('WHIRLWIND_IP'),
        'PORT': '1433',

        'OPTIONS': {
            'driver': 'ODBC Driver 13 for SQL Server',
        },
    },
}

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['{}{}'.format(projectRoot, env('FRONTEND_ROOT'))],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.debug',
                'django.template.context_processors.i18n',
                'django.template.context_processors.media',
                'django.template.context_processors.static',
                'django.template.context_processors.tz',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

##### AUTH Settings ####

# Google API Settings
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = env('CLIENT_ID')
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = env('CLIENT_SECRET')
SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = ['email', 'profile']


STATIC_URL = '/frontend/'
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    ]
STATICFILES_DIRS = [
    '{}{}'.format(projectRoot, env('FRONTEND_ROOT')),
    '{}'.format(projectRoot),
    ]