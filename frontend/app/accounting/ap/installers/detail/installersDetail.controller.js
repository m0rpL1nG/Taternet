(function(){
    'use strict';
    
    angular.module("Accounting")
        .controller("APInstallersDetailController", APInstallersDetailController);

    APInstallersDetailController.$inject=['apinstallerservice', '$stateParams','$timeout']

    function APInstallersDetailController(apinstallerservice, $stateParams, $timeout) {  
        var vm = this;
        // vm.onRowClick = onRowClick;
        vm.clicked = null;
        vm.vendor  = {};
        
        
        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            columnMode: 'force',
            columns: [{
                name: "Order Number",
                prop: "order_number",
                width: 160,
                canAutoResize: false,
                }, {
                name: "Model Number",
                prop: "item_id",
                width: 200,
                }, {
                name: "Invoiced",
                prop: "invoiced",
                width: 110,
                canAutoResize: false,
                }, {
                name: "Install Complete",
                prop: "installed",
                width: 110,
                canAutoResize: false,
                }, {
                name: "Paid",
                prop: "paid",
                width: 110,
                canAutoResize: false,
                },] 
            };
        
        vm.orders = {
            order: 'NT12021234',
            model: 'INS-APPL INS DW',
            invoiced: true,
            installed: true, 
            paid: false
        }
        activate();

        function activate(){
            console.log("installers Detail activated")
            return apinstallerservice.getVendorSales($stateParams.id).then(function(vendorDetails){
                console.log(vendorDetails[0])
                vm.sales = vendorDetails[0].installs;
            })
        }

        function onRowClick(row){
            // console.log(row)
            if(vm.clicked === row){
                vm.clicked = null;
                console.log(row)
            } else {
                vm.clicked = row;
                $timeout(function(){
                    vm.clicked = null;
                }, 300)

            }
        }

    }
    
})();