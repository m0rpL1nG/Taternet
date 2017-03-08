(function(){
    'use strict';
    
    angular.module("Layout")
        .controller("ShellController", ShellController);

    ShellController.$inject=['sessionservice', '$mdSidenav', 'localStorageService', 'menuService']

    function ShellController(sessionservice, $mdSidenav, localStorageService, menuService) {  
        var vm = this;

        vm.toggleSideNav = toggleSideNav;
        
        vm.isOpen = isOpen;
        vm.toggleOpen = toggleOpen;
        vm.autoFocusContent = false;
        vm.menu = menuService;

        vm.status = {
          isFirstOpen: true,
          isFirstDisabled: false
        };

        function isOpen(section) {
          return menu.isSectionSelected(section);
        }

        function toggleOpen(section) {
          menu.toggleSelectSection(section);
        }

        function toggleSideNav() {
            console.log('toggleSidenav');
            $mdSidenav('left-menu').toggle();
        };

    }
})();