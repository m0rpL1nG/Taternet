angular.module("Admin")
    .controller("SessionController", SessionController);

SessionController.$inject=['sessionservice', '$auth', '$http', '$state']

function SessionController(sessionservice, $auth, $http, $state) {  
    var vm = this;
    
    vm.employeeLogin = employeeLogin;
    vm.contractorLogin = contractorLogin;
    vm.logout = logout;
    vm.user = {};

    // activate();
    sessionservice.setUser();
    vm.user = sessionservice.getUser();

    // If there's a token in localstorage, set the user using the token
    // function setUserFromJWT(token){
    //     $http.get('api/v1/user/').then(function(response){
    //         sessionservice.setUser(response);
    //     });
    // }

    function employeeLogin(provider){
        $auth.authenticate(provider).then(function(response){
            console.log("server reponse after social auth", response);
            $auth.setToken(response.data.token);
            sessionservice.setUser(response);
            $state.go("index.dashboard");
        }).catch(function(data) {
            console.log("error: SessionController.authenticate");
            console.log(data)
            alert(err_msg);
        });
    }

    function contractorLogin(){
        vm.user.username = vm.user.email;
        console.log("contractorLogin start")
        $auth.login(vm.user)
            .then(function(response) {
                console.log("contractor login success: ", response)
                $auth.setToken(response.data.token);
                sessionservice.setUserJWT(response.data.token);
                $state.go("index.dashboard");
            })
            .catch(function(response) {
            // Handle errors here, such as displaying a notification
            // for invalid email and/or password.
                console.log("contractor login failure:", response)
            });
    }
    
    function logout (){
        sessionservice.logout();
    };


}