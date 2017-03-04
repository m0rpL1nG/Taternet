angular.module("Admin")
    .controller("SessionController", SessionController);

SessionController.$inject=['sessionservice', '$auth', '$http', '$state']

function SessionController(sessionservice, $auth, $http, $state) {  
    var vm = this;
    
    vm.authenticate = authenticate;
    vm.logout = logout;
    

    // activate();
    sessionservice.setUser();
    vm.user = sessionservice.getUser();

    // If there's a token in localstorage, set the user using the token
    // if ($auth.getToken()){
    //     console.log("token: ", $auth.getToken())
    //     $http.get('api/v1/user/').then(function(response){
    //         sessionservice.setUser(response);
    //     });
    // }

    function authenticate(provider){
        $auth.authenticate(provider).then(function(response){
            console.log("response from google", response);
            $auth.setToken(response.data.token);
            sessionservice.setUser(response);
            $state.go("index.dashboard");
        }).catch(function(data) {
            console.log("error: SessionController.authenticate");
            console.log(data)
            alert(err_msg);
        });
    }
    
    function logout (){
        sessionservice.logout();
    };


}