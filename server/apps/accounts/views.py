from django.http import HttpResponse

def OkResponse(request):
    print request

    return HttpResponse(status=201)