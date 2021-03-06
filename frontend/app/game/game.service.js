(function(){
   'use strict'; 
    angular
    .module('Game')
    .factory('gamedataservice', gamedataservice);

    gamedataservice.$inject = ['$http'];

    function gamedataservice($http) {
        return {
            getGames: getGames,
            getGame: getGame,
            addGame: addGame
        };

        function getGames() {
            return $http.get("api/v1/games/")
                .then(getGamesComplete)
                .catch(getGamesFailed);

            function getGamesComplete(response) {
                return response.data;
            }

            function getGamesFailed(error) {
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        function getGame() {
            return $http.get("api/v1/games/:game_id/")
                .then(getGameComplete)
                .catch(getGameFailed);

            function getGameComplete(response) {
                return response.data;
            }

            function getGameFailed(error) {
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        function addGame(newGameObj) {
            console.log("newGameObj", newGameObj)
            return $http.post("api/v1/games/", newGameObj)
                .then(getGameComplete)
                .catch(getGameFailed);

            function getGameComplete(response) {
                return response.data;
            }

            function getGameFailed(error) {
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
})();