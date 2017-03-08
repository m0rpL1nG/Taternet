(function(){
    'use strict';
    angular.module("Layout")
        .controller("NavController", NavController);

    NavController.$inject=['sessionservice', 'menuService']

    function NavController(sessionservice, menuService) {
        var vm = this;
        vm.items = sessionservice.getNavItems()

        vm.isOpen = isOpen;
        vm.toggleOpen = toggleOpen;
        vm.autoFocusContent = false;
        vm.menu = menuService;

        vm.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        console.log(vm.menu.sections)

        function isOpen(section) {
            // console.log("isOpen: ", ,menuService.isSectionSelected(section))
            return menuService.isSectionSelected(section);
        }

        function toggleOpen(section) {
            console.log("toggle open", section)
            menuService.toggleSelectSection(section);
        }

    }
})();