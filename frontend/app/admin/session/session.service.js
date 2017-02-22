angular
  .module('Admin')
  .factory('sessionservice', sessionservice);

sessionservice.$inject = ['$http', 'localStorageService', '$auth'];

function sessionservice($http, localStorageService, $auth) {
    return {
        setUser: setUser,
        getUser: getUser,
        logout: logout,
        getNavItems: getNavItems,
        getUserLocation: getUserLocation,
    };

    function getUser(){
        return localStorageService.get("currentUser")
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
                    'social_thumb': null
                };
            }
            user.username = source.username;
            user.first_name = source.first_name;
            user.last_name = source.last_name;
            user.email = source.email;
            user.thumb = source.social_thumb;

            localStorageService.set('currentUser', user);
     };

    function logout (){
        console.log("username before logout:", localStorageService.get('currentUser').email);
        $auth.removeToken();
        setUser();
        console.log("username after logout", localStorageService.get('currentUser').email);
    };
}