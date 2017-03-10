(function(){
    'use strict';
    
    angular.module("Layout")
        .controller("ShellController", ShellController);

    ShellController.$inject=['$mdSidenav']

    function ShellController($mdSidenav) {  
        var vm = this;

        vm.toggleSideNav = toggleSideNav;
    
        function toggleSideNav() {
            console.log('toggleSidenav');
            $mdSidenav('left-menu').toggle();
        };

    }
})();