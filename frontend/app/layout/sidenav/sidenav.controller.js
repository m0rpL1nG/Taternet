(function(){
    'use strict';
    angular.module("Layout")
        .controller("NavController", NavController);

    NavController.$inject=['sessionservice', 'menuService', "$mdSidenav", '$mdMedia']

    function NavController(sessionservice, menuService, $mdSidenav, $mdMedia) {
        var vm = this;

        vm.isOpen = isOpen;
        vm.toggleOpen = toggleOpen;
        vm.toggleSideNav = toggleSideNav;
        vm.menu = menuService;
        activate();
        function activate(){
            return menuService.getSections().then(function(sections){
                vm.menu.sections = sections;
                console.log("activate:",  vm.menu.sections)
            })
        }

        vm.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        console.log(vm.menu.sections)

        function toggleSideNav(){
            if (!$mdMedia('gt-sm')){
                $mdSidenav('left-menu').toggle();
            }
        }

        function isOpen(section) {
            return menuService.isSectionSelected(section);
        }

        function toggleOpen(section) {
            console.log("toggle open", section)
            menuService.toggleSelectSection(section);
        }

    }
})();