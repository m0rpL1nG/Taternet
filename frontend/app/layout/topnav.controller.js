angular.module("Layout")
    .controller("TopNavController", TopNavController);

TopNavController.$inject=['sessionservice', '$mdSidenav', '$state', '$timeout']

function TopNavController(sessionservice, $mdSidenav, $state, $timeout) {  
    var vm = this;

    vm.logout = logout;
    vm.toggleSideNav = toggleSideNav;
    vm.user = {};

    activate()

    function activate(){
        $timeout(function(){
            return sessionservice.getUser().then(function(user){ vm.user = user});
            console.log("user at topnav controller", vm.user);
        }, 300)
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