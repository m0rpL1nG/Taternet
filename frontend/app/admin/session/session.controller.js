(function(){
    'use strict';
    angular.module("Admin")
        .controller("SessionController", SessionController);

    SessionController.$inject=['sessionservice', '$auth', '$http', '$state', '$timeout', '$mdDialog']

    function SessionController(sessionservice, $auth, $http, $state, $timeout, $mdDialog) {  
        var vm = this;
    
        vm.user = {}
        vm.serverErrors ={};
        
        vm.employeeLogin = employeeLogin;
        vm.contractorLogin = contractorLogin;
        vm.logout = logout;
        

        function employeeLogin(provider){
            $auth.authenticate(provider).then(function(response){
                console.log("social auth login success", response);
                $auth.setToken(response.data.token);
                sessionservice.setUserJWT(response.data.token)
                    .then(function(){
                        $state.go("index.employees");
                    });
            }).catch(function(response) {
                console.log("error: SessionController.authenticate");
                console.log(response);
                loginError(response.data.error)
            });
        }

        function contractorLogin(form){

            vm.user.username = vm.user.email;
            console.log(form)
            if(form.$valid){
                $auth.login(vm.user)
                    .then(function(response) {
                        console.log("contractor login success: ", response)
                        $auth.setToken(response.data.token)
                        sessionservice.setUserJWT(response.data.token).then(function(){
                            return sessionservice.getUser().then(function(user){
                                console.log("user", user);
                                $state.go("index.installers", {id: user.vendor_id })
                            })
                        })
                    })
                    .catch(function(response) {
                        console.log("contractor login failure:", response)
                        var serverResponse = response.data[Object.keys(response.data)[0]][0]
                        loginError(serverResponse)
                    });
            }
        }
        
        function logout (){
            sessionservice.logout();
        };

        function loginError(error){
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .clickOutsideToClose(true)
                    .title('Login Error')
                    .textContent(error)
                    .ariaLabel('Server Login Error')
                    .ok('OK!')
                    .targetEvent(angular.element(document.body))
            );
        }

    }
})();