import environ
from server.settings.base import *

root = environ.Path(__file__) - 2
projectRoot = environ.Path(__file__) - 3
env = environ.Env(DEBUG=(bool, False),)
currentEnv = 'dev'
env.read_env('{}/{}.env'.format(root, currentEnv))


SECRET_KEY = env('SECRET_KEY')
DEBUG = env('DEBUG')

ALLOWED_HOSTS = [u'10.20.1.112', u'10.20.1.112.xip.io']

DATABASES = {
    'default': env.db(),
    'whirlwind': {
        'ENGINE': 'sql_server.pyodbc',
        'NAME': env('WHIRLWIND_DB_NAME'),
        'USER': env('WHIRWIND_USERNAME'),
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
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

##### AUTH Settings ####

# Google API Settings
GOOGLE_OAUTH2_CLIENT_ID = env('CLIENT_ID')
GOOGLE_OAUTH2_CLIENT_SECRET = env('CLIENT_SECRET')
GOOGLE_OAUTH2_SCOPES = ('email', 'profile')
# "redirect_uris": [],
# "auth_uri": "https://accounts.google.com/o/oauth2/auth",
# "token_uri": "https://accounts.google.com/o/oauth2/token"

STATIC_URL = '/frontend/'
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    ]
STATICFILES_DIRS = [
    '{}{}'.format(projectRoot, env('FRONTEND_ROOT'))
    ]