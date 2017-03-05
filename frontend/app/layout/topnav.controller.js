angular.module("Layout")
    .controller("TopNavController", TopNavController);

TopNavController.$inject=['sessionservice', '$mdSidenav', '$state']

function TopNavController(sessionservice, $mdSidenav, $state) {  
    var vm = this;

    vm.logout = logout;
    vm.toggleSideNav = toggleSideNav;
    vm.user = {};

    activate()

    function activate(){
        return sessionservice.getUser().then(function(user){ vm.user = user});
        console.log("user at topnav controller", vm.user);
    }

    function logout(){
        sessionservice.logout();
        vm.user = {};
        $state.go('login');
    }

    function toggleSideNav() {
        // console.log('toggleSidenav');
        $mdSidenav('left-menu').toggle();
    };


}