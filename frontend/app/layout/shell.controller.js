angular.module("Layout")
    .controller("ShellController", ShellController);

ShellController.$inject=['sessionservice', '$mdSidenav']

function ShellController(sessionservice, $mdSidenav) {  
    var vm = this;
    // Needs of this controller
    // 1. Check if user is logged
    // 2. Manage Permissions
    // 3. Redirect Major view components

    vm.toggleSideNav = toggleSideNav;
    
    function toggleSideNav() {
        console.log('toggleSidenav');
        $mdSidenav('left-menu').toggle();
    };

}