angular.module("Layout")
    .controller("TopNavController", TopNavController);

TopNavController.$inject=['sessionservice', 'localStorageService', '$mdSidenav', '$state']

function TopNavController(sessionservice, localStorageService, $mdSidenav, $state) {  
    var vm = this;

    vm.logout = logout;
    vm.toggleSideNav = toggleSideNav;
    vm.user = {};

    activate()

    function activate(){
        vm.user = localStorageService.get('currentUser');
        console.log("user at shell controller", vm.user);
    }

    function logout(){
        sessionservice.logout();
        vm.user = {};
        $state.go('authenticate');
    }

    function toggleSideNav() {
        // console.log('toggleSidenav');
        $mdSidenav('left-menu').toggle();
    };


}