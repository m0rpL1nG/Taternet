(function(){
    'use strict';
    
    angular
    .module('Services')
    .factory('routeAuthService', routeAuthService);

    routeAuthService.$inject = ['$rootScope', '$state', 'sessionservice', '$auth'];

    function routeAuthService($rootScope, $state, sessionservice, $auth) {
        return {
            authorize: authorize,
        };

        var self = this;
        
        function authorize(){
        return sessionservice.getUser()
            .then(function() {
                var isAuthenticated = $auth.isAuthenticated();
                console.log("routeAuth.authenticated", isAuthenticated)
                console.log("rootscoop toState roles: ", $rootScope.toState.data.roles)
                console.log("length of rootscope roles: ", $rootScope.toState.data.roles.length)
                console.log("sessionservice.isInAnyRole: ", !sessionservice.isInAnyRole($rootScope.toState.data.roles))
                if ($rootScope.toState.data.roles
                    && $rootScope.toState
                                .data.roles.length > 0 
                    && !sessionservice.isInAnyRole(
                    $rootScope.toState.data.roles))
                {
                console.log("entered redirect stragey")
                if (isAuthenticated) {
                    // user is signed in but not
                    // authorized for desired state
                    $state.go('accessdenied');
                } else {
                    // user is not authenticated. Stow
                    // the state they wanted before you
                    // send them to the sign-in state, so
                    // you can return them when you're done
                    console.log("else")
                    $rootScope.returnToState
                        = $rootScope.toState;
                    $rootScope.returnToStateParams
                        = $rootScope.toStateParams;

                    // now, send them to the signin state
                    // so they can log in
                    $state.go('login');
                }
                }

            });

        }
    }

})();