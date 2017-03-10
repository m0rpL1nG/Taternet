(function(){
    'use strict';
    angular.module("Layout")
        .controller("NavController", NavController);

    NavController.$inject=['sessionservice', 'menuService']

    function NavController(sessionservice, menuService) {
        var vm = this;

        vm.isOpen = isOpen;
        vm.toggleOpen = toggleOpen;
        vm.autoFocusContent = false;
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

        function isOpen(section) {
            return menuService.isSectionSelected(section);
        }

        function toggleOpen(section) {
            console.log("toggle open", section)
            menuService.toggleSelectSection(section);
        }

    }
})();