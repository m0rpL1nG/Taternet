angular.module("Layout")
    .controller("NavController", NavController);

NavController.$inject=['sessionservice']

function NavController(sessionservice) {  
    var vm = this;
    vm.items = sessionservice.getNavItems()

}