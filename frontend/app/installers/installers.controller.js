(function(){
    'use strict';
    
    angular.module("Installers")
        .controller("MyInstallsController", MyInstallsController);

    MyInstallsController.$inject=['apinstallerservice', '$stateParams','$timeout','$mdDialog']

    function MyInstallsController(apinstallerservice, $stateParams, $timeout, $mdDialog) {  
        var vm = this;
        // vm.onRowClick = onRowClick;
        vm.clicked = null;
        vm.vendor  = {};
        vm.selected = [];
        vm.onSelect = onSelect;
        
        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            checkboxSelection: true,
            selectable: true,
            multiSelect: true,
            columnMode: 'force',
            columns: [{
                name: "Invoice Number",
                prop: "invoice_number",
                width: 260,
                canAutoResize: false,
                isCheckboxColumn: true,
                headerCheckbox: true
                }, {
                name: "Model Number",
                prop: "model_number",
                width: 200,
                },{
                name: "Install Complete",
                prop: "installed",
                width: 150,
                canAutoResize: false,
                }, {
                name: "Paid",
                prop: "paid",
                width: 80,
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
                console.log(vendorDetails)
                vm.sales = vendorDetails;
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

        function onSelect(rows){
            console.log(rows)
        }

    }
    
})();