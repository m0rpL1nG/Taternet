(function(){
    'use strict';
    
    angular
    .module('Transfers')
    .factory('transferdataservice', transferdataservice);

    transferdataservice.$inject = ['$http'];

    function transferdataservice($http) {
        return {
            getTransfers: getTransfers,
            // getGame: getGame,
            // addGame: addGame
        };
        function getTransfers(location, destination, init) {
            console.log(location, destination);
            var params = {}
            if (location){
                params.location = location;
            }
            if(destination){
                params.destination = destination;
            }
            if(init){
                params.init = init;
            }
            return $http({
                url: "api/v1/transfers/",
                method: "GET",
                params: params
                })
                .then(getTransfersComplete)
                .catch(getTransfersFailed);

            function getTransfersComplete(response) {
                console.log("get transfers success: ", response);
                return response;
            }

            function getTransfersFailed(response, error, status) {
                console.log("Get Transfers Error: ", response);
                throw response;
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        // function getGame() {
        //     return $http.get(_urlPrefixes.API + "games/:game_id/")
        //         .then(getGameComplete)
        //         .catch(getGameFailed);

        //     function getGameComplete(response) {
        //         return response.data;
        //     }

        //     function getGameFailed(error) {
        //         // logger.error('XHR Failed for getAvengers.' + error.data);
        //     }
        // }

        // function addGame(newGameObj) {
        //     console.log("newGameObj", newGameObj)
        //     return $http.post(_urlPrefixes.API + "games/", newGameObj)
        //         .then(getGameComplete)
        //         .catch(getGameFailed);

        //     function getGameComplete(response) {
        //         return response.data;
        //     }

        //     function getGameFailed(error) {
        //         // logger.error('XHR Failed for getAvengers.' + error.data);
        //     }
        // }
    }
})();