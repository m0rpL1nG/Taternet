from server.settings.base import *
import environ

root = environ.Path(__file__) - 2
projectRoot = environ.Path(__file__) - 3
env = environ.Env(DEBUG=(bool, False),)

currentEnv = 'prod'
env.read_env('{}/{}.env'.format(root, currentEnv))

SECRET_KEY = env('SECRET_KEY')
DEBUG = env('DEBUG')

ALLOWED_HOSTS = env('HOSTS')

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

STATIC_URL = '/frontend/'
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    ]
STATICFILES_DIRS = [
    '{}{}'.format(projectRoot, env('FRONTEND_ROOT'))
    ]