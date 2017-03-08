(function(){
    'use strict';
    
    angular
        .module('People')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        return {
            getPeople: getPeople,
            getPerson: getPerson
        };

        function getPeople() {
            return $http({
                url: 'frontend/assets/data/people.json',
                // url: 'https://cdn.rawgit.com/Swimlane/angular-data-table/master/demos/data/100.json',
                // skipAuthorization: true,
                method: 'GET'
                })
                .then(getPeopleComplete)
                .catch(getPeopleFailed);

            function getPeopleComplete(response) {
                return response.data;
            }

            function getPeopleFailed(error) {
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        function getPerson(id) {
        function personMatchesParam(person) {
            return person.id == id
        }
        
        return getPeople().then(function (people) {
            return people.find(personMatchesParam) 
        });
        }
        
    }
})();