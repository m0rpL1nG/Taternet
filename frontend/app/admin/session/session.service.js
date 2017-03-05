angular
  .module('Admin')
  .factory('sessionservice', sessionservice);

sessionservice.$inject = ['$http', 'localStorageService', '$auth', '$q'];

function sessionservice($http, localStorageService, $auth, $q) {
    return {
        setUser: setUser,
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
        var links = [
            {
                title: "Games",
                link: "games"
            },
            {
                title: "People",
                link: "people"
            },
            {
                title: "Travel Sheets",
                link: "travelSheets"
            },
        ]
        return links
    }

    function setUser(response){
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
                    'roles' : []
                };
            }
            user.username = source.username;
            user.first_name = source.first_name;
            user.last_name = source.last_name;
            user.email = source.email;
            user.thumb = source.social_thumb;
            user.roles = ['Admin'];

            localStorageService.set('currentUser', user);
     };

    function logout (){
        console.log("username before logout:", localStorageService.get('currentUser').email);
        $auth.removeToken();
        setUser();
        console.log("username after logout", localStorageService.get('currentUser').email);
    };

    function isInRole(role){
        var user = localStorageService.get("currentUser");
        if (!$auth.isAuthenticated() || !user.roles) return false;
            console.log(role);
            console.log(user.roles.indexOf(role) != -1)
            return user.roles.indexOf(role) != -1;
    }


    function isInAnyRole(roles) {

        var user = localStorageService.get("currentUser");

        console.log(user);
        console.log("not authed:", !$auth.isAuthenticated())
        console.log("doesnt have roles:, ", !user.roles)
        if (!$auth.isAuthenticated() || !user.roles) return false;

            for (var i = 0; i < roles.length; i++) {
                console.log("result of isInRole:", isInRole(roles[i]))
                if (isInRole(roles[i])) return true;
                
            }
            console.log("fell to bottom of isInAnyRole")

            return false
    }

}