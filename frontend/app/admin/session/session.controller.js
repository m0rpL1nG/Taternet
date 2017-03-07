angular.module("Admin")
    .controller("SessionController", SessionController);

SessionController.$inject=['sessionservice', '$auth', '$http', '$state', '$timeout']

function SessionController(sessionservice, $auth, $http, $state, $timeout) {  
    var vm = this;
   
    sessionservice.setUser();
    vm.user = {};
    vm.user = sessionservice.getUser();
    
    vm.employeeLogin = employeeLogin;
    vm.contractorLogin = contractorLogin;
    vm.logout = logout;
    

    function employeeLogin(provider){
        $auth.authenticate(provider).then(function(response){
            console.log("social auth login success", response);
            $auth.setToken(response.data.token);
            sessionservice.setUserJWT(response.data.token)
                .then(function(){
                    $state.go("index.dashboard");
                });
        }).catch(function(data) {
            console.log("error: SessionController.authenticate");
            console.log(data)
            alert(err_msg);
        });
    }

    function contractorLogin(){
        vm.user.username = vm.user.email;
        $auth.login(vm.user)
            .then(function(response) {
                console.log("contractor login success: ", response)
                $auth.setToken(response.data.token)
                sessionservice.setUserJWT(response.data.token).then(function(){
                    $state.go("index.dashboard")
                })
            })
            .catch(function(response) {
                console.log("contractor login failure:", response)
            });
    }
    
    function logout (){
        sessionservice.logout();
    };


}