(function(){
    'use strict';
    angular
    .module('Admin')
    .factory('sessionservice', sessionservice);

    sessionservice.$inject = ['$http', 'localStorageService', '$auth', '$q'];

    function sessionservice($http, localStorageService, $auth, $q) {
        return {
            setUser: setUser,
            setUserJWT: setUserJWT,
            getUser: getUser,
            logout: logout,
            getUserLocation: getUserLocation,
            isInRole: isInRole,
            isInAnyRole: isInAnyRole,
        };

        var self = this;

        function getUser(){
            var user = localStorageService.get("currentUser");
            return $q.when(user)
        }

        function getUserLocation(){
            return "0010"
        }

        function setUserJWT(token = null){
            if (!token){
                token = $auth.getToken();
            }

            return $http.get('api/v1/user/').then(function(response){
                console.log("setUserJWT response", response);
                setUser(response);
            });
        }

        function setUser(response){
            
            var groups = [
                {name: "warehouse"},
                {name: "user_admins"}
            ]

            var source;
            var user = {};
            if (response){
                source = response.data;

            } else {
                source = {
                    'username': null,
                    'first_name': null,
                    'last_name': null,
                    'email': null,
                    'social_thumb': null,
                    'roles' : [],
                    'groups': []
                };
            }
            user.username = source.username;
            user.first_name = source.first_name;
            user.last_name = source.last_name;
            user.email = source.email;
            user.thumb = source.social_thumb;
            user.roles = source.groups;
            user.groups = source.groups;
            user.vendor_id = source.vendor_id;

            console.log("user.groups", user.groups);
            if (user.groups.length === 0 ){
                user.groups = ['warehouse', 'employees'];
                user.roles = user.groups;
            }
            localStorageService.set('currentUser', user);
        };

        function logout (){
            $auth.removeToken();
            setUser();
            console.log("username after logout", localStorageService.get('currentUser').email);
        };

        function isInRole(role){
            var user = localStorageService.get("currentUser");
            if (!$auth.isAuthenticated() || !user.roles) return false;

                return user.roles.indexOf(role) != -1;
        }


        function isInAnyRole(roles) {

            var user = localStorageService.get("currentUser");

            if (!$auth.isAuthenticated() || !user.roles) return false;

            for (var i = 0; i < roles.length; i++) {
                if (isInRole(roles[i])) return true;
                
            }

            return false
        }

    }

})();