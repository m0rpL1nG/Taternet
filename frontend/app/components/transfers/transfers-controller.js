angular.module("Transfers")
    .controller("TransfersController", TransfersController);

TransfersController.$inject=['transferdataservice', '$filter', 'filterFilter']

function TransfersController(transferdataservice, $filter, filterFilter) {  

    var vm = this;
    
    //Page variables and functions
    vm.filterTransfers = filterTransfers;
    vm.transfers = undefined;
    vm.inLocationFilter = null;
    vm.toLocationFilter = null;

    //Data Table Setup
    vm.options = {
        rowHeight: 50,
        headerHeight: 50,
        footerHeight: false,
        scrollbarV: false,
        checkboxSelection: true,
        selectable: true,
        multiSelect: true,
        columns: [{
            name: "Model Number",
            prop: "inventory_id.model_number",
            width: 300,
            isCheckboxColumn: true,
            headerCheckbox: true
            }, {
            name: "Serial Number",
            prop: "inventory_id.serial_number",
            width: 200,
            }, {
            name: "Current Location",
            prop: "inventory_id.location",
            width: 100,
            }, {
            name: "Destination Location",
            prop: "to_location",
            width: 100,
            }, {
            name: "Notes",
            // prop: "notes",
            width: 300,
            cellRenderer: function(scope, ele) {
                var rowNumber = scope.$parent.ctrl.transfers.indexOf(scope.$row);
                 return `<md-input-container md-no-float style="margin: 0px; height: 36px;"><input type="text" placeholder="Notes" ng-model-options="{ updateOn: 'blur' }" ng-model="ctrl.transfers[${rowNumber}].notes"></md-input-container>`;
                }
            }
            ]
    };
    vm.selected = [];
    vm.onSelect = onSelect;
    vm.onRowClick = onRowClick;

    //Barcode Setup
    vm.barcodeBackground = [255, 255, 255]
    vm.barcodeColor = { r: 0, g: 0, b: 0 };
    vm.locations = ['0000', '0005', '0006', '0007', '0010', '0012']    
    
    //Print Setup
    vm.printDiv = printDiv;

    
    //// functions
    activate();

    function activate() {
        return getTransfers().then(function() {
            // console.log('Activated Transfer recall')
            // logger.info('Activated Users View');
        });
    }

    function getTransfers() {
        console.log('transfer request begun')
        return transferdataservice.getTransfers()
            .then(function(data) {
                // console.log("Transfers: ", data);
                vm.transfers = data;
                vm.dataStore = data;
                // console.log("filtered", vm.transfersFilter)
            return vm.transfers;
            });
    }

    function filterTransfers(){
        console.log("changed")
        vm.transfers = filterFilter(vm.dataStore, { inv_transfer_to_location: vm.toLocationFilter })
    //    vm.transfers = $filter('filter')(vm.dataStore, { inv_transfer_to_location: vm.toLocationFilter });
    } 
    
    function onSelect(row) {
        console.log('ROW SELECTED!', row);
    }
    
    function onRowClick(row) {
        console.log('ROW CLICKED', row);
    }

    function printDiv (divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var popupWin = window.open('', '_blank', 'width=800,height=600');
        popupWin.document.open()
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="frontend/bower_components/angular-data-table/release/style-old.css" /></head><body>' + printContents + '</body></html>');
        popupWin.document.close();
    } 


}