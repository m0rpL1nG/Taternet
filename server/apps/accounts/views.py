from django.http import HttpResponse
# from django.views.decorators.csrf import csrf_exempt

# @csrf_exempt
def OkResponse(request):
    # print request
    print request.body
    return HttpResponse(status=201)
