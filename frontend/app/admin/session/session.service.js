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
            getNavItems: getNavItems,
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

        function getNavItems(){
            var availableLinks = [
                {title: "Games", link: "games"},
                {title: "People", link: "people"},
                {title: "Travel Sheets", link: "travelSheets"},
                {title: "User Admin", link: "useradmin"},
            ]

            var groups = [
                {id: 5, name: "warehouse", links: [2]},
                {id: 8, name: "user_admins", links: [3]}
            ]

            var user = localStorageService.get("currentUser");
            var links = [];
            for (var i = 0; i < groups.length; i++){
                if(user.groups.indexOf(groups[i].id) != -1){
                    for(var j = 0; j < groups[i].links.length; j++){
                        links.push(availableLinks[groups[i].links[j]]);
                    }
                } 
            }
            // console.log(links)


            return links
        }

        function setUserJWT(token = null){
            if (!token){
                token = $auth.getToken();
            }

            return $http.get('api/v1/user/').then(function(response){
                setUser(response);
            });
        }

        function setUser(response){
            
            var groups = [
                {id: 5, name: "warehouse"},
                {id: 8, name: "user_admins"}
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
            user.roles = [];
            user.groups = source.groups;

            for (var i = 0; i < groups.length; i++){
                if(source.groups.indexOf(groups[i].id) != -1){
                    user.roles.push(groups[i].name);
                } 
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