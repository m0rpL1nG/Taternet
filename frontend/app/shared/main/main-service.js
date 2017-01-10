angular
  .module('Main')
  .factory('MainDataService', MainDataService);

MainDataService.$inject = ['$http', 'jwtHelper', 'localStorageService'];

function MainDataService($http, jwtHelper, localStorageService) {

    var service = {
        getUsers: getUsers,
        Login: Login,
        Logout: Logout,
    };

    return service;

    function getUsers() {
        return $http.get('https://cdn.rawgit.com/Swimlane/angular-data-table/master/demos/data/100.json')
            .then(getUsersComplete)
            .catch(getUsersFailed);

        function getUsersComplete(response) {
            return response.data;
        }

        function getUsersFailed(error) {
            // logger.error('XHR Failed for getAvengers.' + error.data);
        }
    };

    function Login(userObj) {
        return $http.post('/api-token-auth/', userObj)
            .then(loginComplete)
            .catch(loginFailed);
        
        function loginComplete(response) {
            // login successful if there's a token in the response
            console.log("response", response)
            if (response.data.token) {
                // store username and token in local storage to keep user logged in between page refreshes
                var user = jwtHelper.decodeToken(response.data.token)
                localStorageService.set('currentUser', {username: user.username, token: response.data.token });
                console.log("newly saved current user:", localStorageService.get('currentUser'));
                // add jwt token to auth header for all requests made by the $http service
                // $http.defaults.headers.common.Authorization = 'JWT ' + response.data.token;
                return response.data
            } else {
                // login unsuccessful
                console.log("no token in response, uncaught error")
            }

        };

        function loginFailed(response){
            throw {success: false, error: "Inccorect Username or Password"}
        };
    };

    function Logout() {
        // remove user from local storage and clear http auth header
        localStorageService.remove('currentUser');
        $http.defaults.headers.common.Authorization = '';
    };


}