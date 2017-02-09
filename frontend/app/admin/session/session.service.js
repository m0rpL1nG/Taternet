angular
  .module('Admin')
  .factory('sessionservice', sessionservice);

sessionservice.$inject = ['$http'];

function sessionservice($http) {
    return {
        getUser: getUser,
        getNavItems: getNavItems,
        getUserLocation: getUserLocation,
    };

    function getUser(){
        return "David"
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
}