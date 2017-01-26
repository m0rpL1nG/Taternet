
import datetime
import environ

ROOT = environ.Path(__file__) - 2
PROJECT_ROOT = environ.Path(__file__) - 3
ENV = environ.Env(DEBUG=(bool, False),)
CURRENT_ENV = 'dev' # 'dev' is the default Environment
ENV.read_env('{}/{}.env'.format(ROOT, CURRENT_ENV))
SECRET_KEY = ENV('SECRET_KEY')
DEBUG = ENV('DEBUG')

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': '{}{}'.format(PROJECT_ROOT, 'db.sqlite3'),
    },
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

DATABASE_ROUTERS = [
    #'server.settings.routers.auth.AuthRouter',
    'server.settings.routers.whirlwindDB.WhirlwindRouter',
]

# Application definition
INSTALLED_APPS = [
    # Django Components
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    # 'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Site Apps
    'server.apps.games',
    'server.apps.whirlwind.users',
    'server.apps.whirlwind.inventory',

    # Django Packages
    'rest_framework',
    'rest_framework_jwt',
]

MIDDLEWARE = [
    # 'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'server.urls'

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

WSGI_APPLICATION = 'server.wsgi.application'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        # 'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # 'rest_framework.authentication.SessionAuthentication',
        # 'rest_framework.authentication.BasicAuthentication',
        # 'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
    ),
}

# Django Rest Framework JWT auth
JWT_AUTH = {
    'JWT_EXPIRATION_DELTA': datetime.timedelta(seconds=1800), #30 minutes until exp.

    'JWT_ALLOW_REFRESH': True,
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=7),
}


# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATIC_URL = '/frontend/'
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    ]
STATICFILES_DIRS = [
    '{}{}'.format(PROJECT_ROOT, ENV('FRONTEND_ROOT'))
    ]