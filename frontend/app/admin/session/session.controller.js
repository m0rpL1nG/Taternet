angular.module("Admin")
    .controller("SessionController", SessionController);

SessionController.$inject=['sessionservice', '$mdDialog', '$auth', '$http', '$state', 'localStorageService']

function SessionController(sessionservice, $mdDialog, $auth, $http, $state, localStorageService) {  
    var vm = this;
    
    vm.authenticate = authenticate;
    vm.logout = logout;
    

    // activate();
    sessionservice.setUser();
    vm.user = sessionservice.getUser();

    // function activate(){
    //     $state.go('dashboard');
    // }

    if ($auth.getToken()){
        console.log("token: ", $auth.getToken())
        $http.get('api/v1/user/').then(function(response){
            sessionservice.setUser(response);
        });
    }

    vm.jwtPayload = $auth.getPayload();

    function authenticate(provider){
        $auth.authenticate(provider).then(function(response){
            console.log("response from google", response);
            $auth.setToken(response.data.token);
            sessionservice.setUser(response);
            $state.go("index.dashboard");
        }).catch(function(data) {
            var err_msg = "Something went wrong, maybe you haven't installed 'djangorestframework-jwt'?";
            console.log(data)
            console.log(err_msg);
            alert(err_msg);
        });
    }
    
    function logout (){
        sessionservice.logout();
    };


}