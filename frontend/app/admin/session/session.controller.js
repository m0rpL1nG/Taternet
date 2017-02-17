angular.module("Admin")
    .controller("SessionController", SessionController);

SessionController.$inject=['sessionservice', '$mdDialog', '$auth']

function SessionController(sessionservice, $mdDialog, $auth) {  
    var vm = this;
    vm.authenticate = authenticate;
    vm.logout = logout;
    vm.user = {};
    
    set_user();

    if ($auth.getToken()){
        $http.get('user').then(function(response){
            set_user(response);
        });
    }

    self.jwtPayload = $auth.getPayload();

    function authenticate(provider){
        $auth.authenticate(provider).then(function(response){
            console.log(response);
            $auth.setToken(response.data.token);
            set_user(response);
            self.jwtPayload = $auth.getPayload();
        }).catch(function(data) {
            var err_msg = "Something went wrong, maybe you haven't installed 'djangorestframework-jwt'?";
            console.log(data)
            console.log(err_msg);
            alert(err_msg);
        });
    }
    
    function logout (){
        console.log("username before logout:", vm.user.username)
        $auth.removeToken();
        set_user();
        vm.jwtPayload = $auth.getPayload();
        console.log("username after logout", vm.user.username);

    };

    function set_user(response){
            var source;
            if (response){
                source = response.data;
            } else {
                source = {
                    'username': null,
                    'first_name': null,
                    'last_name': null,
                    'email': null,
                    'social_thumb': null
                };
            }
            vm.user.username = source.username;
            vm.user.first_name = source.first_name;
            vm.user.last_name = source.last_name;
            vm.user.email = source.email;
            vm.user.thumb = source.social_thumb;
     };

    // vm.showLogin = showLogin;

    // function showLogin(ev){
    //     var options = [
    //         'https://accounts.google.com/o/oauth2/v2/auth?',
    //         'scope=email%20profile&',
    //         'redirect_uri=http://10.20.1.112.xip.io/auth/google&',
    //         'response_type=token&',
    //         'client_id=373420519079-h24np71la11of55ccqef6ne5q9hcvo9p.apps.googleusercontent.com',
    //     ]

    //     var compiledUrl = '';
    //     for (var i = 0; i < options.length; i++){
    //         compiledUrl += options[i];
    //         console.log(options[i]);
    //     }

    //     console.log("complided url: ", compiledUrl);
    //     $mdDialog.show({templateUrl: 'http://www.google.com'}).then(function(result) {
    //         console.log(result);
    //     })
    //     window.location.replace(compiledUrl);

        // $mdDialog.show({
        //     controller: DialogController,
        //     template: '<md-dialog-content style="height:568px;width:320px;overflow:scroll;">' +
        //               '<div class="md-dialog-content" id="dialog-content">' +
        //             //   '<iframe src="http://www.google.com/" frameborder="0" allowfullscreen style="position: absolute;top: 0;left: 0;width: 100%;height: 90%;" align="center"></iframe>' +
        //               '</div>' +
        //               '</md-dialog-content>', 
        //     parent: angular.element(document.body),
        //     targetEvent: ev,
        //     clickOutsideToClose:true
        // })
        // function DialogController($scope, $mdDialog) {
        //     var options = [
        //     'https://accounts.google.com/o/oauth2/v2/auth?',
        //     'scope=email%20profile&',
        //     'redirect_uri=http://localhost:8000/auth/google&',
        //     'response_type=token&',
        //     'client_id=373420519079-h24np71la11of55ccqef6ne5q9hcvo9p.apps.googleusercontent.com',
        //     ]

        //     var compiledUrl = '';
        //     for (var i = 0; i < options.length; i++){
        //         compiledUrl += options[i];
        //         console.log(options[i]);
        //     }
        //     // window.location.replace(compiledUrl)
        //     // $http.get('http://www.example.com/page/test/test?id=10475').success(function(data) {
        //     //     $scope.data = data;
        //     //     $scope.closeDialog = function() {
        //     //         var mainApp = angular.element(document.body).controller();
        //     //         $mdDialog.hide();
        //     //     }
        //     // }).error(function(data, status, headers, config) {
        //     //     console.log("Error in retrieving data from server");
        //     // });
        // }
    

    // };

}