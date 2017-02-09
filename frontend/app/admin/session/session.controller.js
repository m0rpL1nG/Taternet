angular.module("Admin")
    .controller("SessionController", SessionController);

SessionController.$inject=['sessionservice']

function SessionController(sessionservice) {  
    var vm = this;
}