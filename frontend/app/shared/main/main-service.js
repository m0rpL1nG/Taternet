angular
    .module('Main')
    .factory('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http) {
    return {
        getUsers: getUsers
    };

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
    }
}