angular.module("Layout")
    .controller("TopNavController", TopNavController);

TopNavController.$inject=['sessionservice', 'localStorageService']

function TopNavController(sessionservice, localStorageService) {  
    var vm = this;

    vm.logout = logout;
    vm.user = {};

    activate()

    function activate(){
        vm.user = localStorageService.get('currentUser');
        console.log("user at shell controller", vm.user);
    }

    function logout(){
        sessionservice.logout();
        vm.user = {};
    }

}