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

    function getTransfers() {
        console.log('At service before request')
        return $http.get("api/v1/transfers/")
            .then(getTransfersComplete)
            .catch(getTransfersFailed);

        function getTransfersComplete(response) {
            return response.data;
        }

        function getTransfersFailed(error) {
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