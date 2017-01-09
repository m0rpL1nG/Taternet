
import environ

ROOT = environ.Path(__file__) - 2
PROJECT_ROOT = environ.Path(__file__) - 3
ENV = environ.Env(DEBUG=(bool, False),)
CURRENT_ENV = 'dev' # 'dev' is the default Environment
ENV.read_env('{}/{}.env'.format(ROOT, CURRENT_ENV))
SECRET_KEY = ENV('SECRET_KEY')
DEBUG = ENV('DEBUG')

ALLOWED_HOSTS = ['*']
print ALLOWED_HOSTS

DATABASES = {
    'default': ENV.db(),
    'whirlwind': {
        'ENGINE': 'sql_server.pyodbc',
        'NAME': 'FamousTate',
        'USER': 'sa',
        'PASSWORD': '7777777',
        'HOST': 'SQLSANDBOX',
        'PORT': '1433',

        'OPTIONS': {
            'driver': 'ODBC Driver 13 for SQL Server',
        },
    },
}

# Application definition
INSTALLED_APPS = [
    # Django Components
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Site Apps
    'server.apps.games',
    'server.apps.whirlwind.users',

    # Django Packages
    'rest_framework',
]

ROOT_URLCONF = 'server.urls'

STATIC_URL = '/frontend/'
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]
STATICFILES_DIRS = [
    '{}{}'.format(PROJECT_ROOT, ENV('FRONTEND_ROOT'))
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['{}{}'.format(PROJECT_ROOT, ENV('FRONTEND_ROOT'))],
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
