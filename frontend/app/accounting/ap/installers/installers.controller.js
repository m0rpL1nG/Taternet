(function(){
    'use strict';
    
    angular.module("Accounting")
        .controller("APInstallersController", APInstallersController);

    APInstallersController.$inject=['apinstallerservice', '$timeout', '$state']

    function APInstallersController(apinstallerservice, $timeout, $state) {  
        var vm = this;
        vm.onRowClick = onRowClick;
        vm.clicked = null;
        vm.vendors  = {};
        
        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            columnMode: 'force',
            columns: [{
                name: "Vendor ID",
                prop: "id",
                width: 150,
                canAutoResize: false,
                }, {
                name: "Vendor Name",
                prop: "name",
                width: 200,
                },] 
            };
        
        activate();

        function activate(){
            console.log("installers activated")
            return apinstallerservice.getVendors('Installer').then(function(vendors){
                // console.log(vendors)
                vm.vendors = vendors;
            })
        }

        function onRowClick(row){
            // console.log(row)
            if(vm.clicked === row){
                vm.clicked = null;
                console.log(row.id)
                $state.go('index.ap.installers.installer', {id: row.id});
            } else {
                vm.clicked = row;
                $timeout(function(){
                    vm.clicked = null;
                }, 300)

            }
        }

    }
    
})();