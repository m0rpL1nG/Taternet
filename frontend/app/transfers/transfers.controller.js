angular.module("Transfers")
    .controller("TransfersController", TransfersController);

TransfersController.$inject=[
    'transferdataservice',
    '$filter',
    'filterFilter',
    'sessionservice',
    ]

function TransfersController(transferdataservice, $filter, filterFilter, sessionservice) {  

    var vm = this;
    
    //Page variables and functions
    vm.filterTransfers = filterTransfers;
    vm.transfers = undefined;
    vm.inLocationFilter = {};
    vm.toLocationFilter = {};
    vm.resetFilters = resetFilters;

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
            width: 600,
            cellRenderer: function(scope, ele) {
                var rowNumber = scope.$parent.ctrl.transfers.indexOf(scope.$row);
                 return `<md-input-container md-no-float style="margin: 0px; width: 100%; height: 36px;"><input type="text" placeholder="Notes" ng-model-options="{ updateOn: 'blur' }" ng-model="ctrl.transfers[${rowNumber}].notes"></md-input-container>`;
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
    
    vm.stores = [
        {name: "Corporate", id: "00"},
        {name: "North Tampa", id:"01"},
        {name: "Brandon", id:"02"},
        {name: "South Tampa", id:"03"},
        {name: "Lakeland", id:"04"},
        {name: "Winter Haven", id:"05"},
        {name: "Oldsmar", id:"06"},
        {name: "Wesley Chapel", id:"07"},
        {name: "Distribution", id:"09"},
        {name: "Largo", id:"11"},
        {name: "Port Richey", id:"12"},
        {name: "Spring Hill", id:"13"},
                ]    
    vm.stockClassifications = [
        {name: "Floor Model", id:"01"},
        {name: "Display", id:"02"},
        {name: "Boxed", id:"03"},
        {name: "Depot", id:"04"},
        {name: "Return", id:"05"},
        {name: "Lost", id:"06"},
        {name: "Eval", id: "10"},
        {name: "Depot Overstock", id:"12"},
    ]
    
    //Print Setup
    vm.printDiv = printDiv;
    // vm.date = new Date().toISOString().slice(0,10).replace(/-/g,"");
    
    vm.baseLocation;

    //// functions
    activate();

    function activate() {
        var month = new Date().toISOString().slice(0,10).replace(/-/g,"").slice(4,6);
        var day = new Date().toISOString().slice(0,10).replace(/-/g,"").slice(6,8);
        var year = new Date().toISOString().slice(0,10).replace(/-/g,"").slice(0, 4);
 
        console.log(month, day, year);
        vm.date = `${month}/${day}/${year}`;
        console.log(vm.date);
        getTransfers(null, sessionservice.getUserLocation(), true);
        vm.toLocationFilter = {
            store: {
                name: "Corporate",
                id: "00"
            },
            stockClassification : {
                name: "Eval",
                id: "10"
            }
        }
        getTransfers();
        // return getTransfers().then(function() {
        //     // console.log('Activated Transfer recall')
        //     // logger.info('Activated Users View');
        // });
    }

    function getTransfers(location = null, destination = null, partial=false) {
        console.log('transfer request begun')
        return transferdataservice.getTransfers(location, destination)
            .then(function(data) {
                // console.log("Transfers: ", data);
                if(partial){vm.transfers = data;}
                else{vm.dataStore = data};
                // console.log("filtered", vm.transfersFilter)
            // return vm.transfers;
            });
    }

    function filterTransfers(){
        // Set inLocationFilter Value
        if (vm.inLocationFilter.store == "None"){ vm.inLocationFilter.store = null;}
        if (vm.toLocationFilter.store == "None"){ vm.toLocationFilter.store = null;}
        
        if (vm.inLocationFilter.store){
            vm.inLocationFilter.value = vm.inLocationFilter.store;
            if(vm.inLocationFilter.stockClassification){
                vm.inLocationFilter.value = `${vm.inLocationFilter.store}${vm.inLocationFilter.stockClassification}`;
            }
        } else {
            vm.inLocationFilter.store = null;
            vm.inLocationFilter.stockClassification = null;
            vm.inLocationFilter.value = null;
        }
        
        // set toLocationFilter Value
        if (vm.toLocationFilter.store){
            vm.toLocationFilter.value = vm.toLocationFilter.store;
            if(vm.toLocationFilter.stockClassification){
                console.log(vm.toLocationFilter)
                vm.toLocationFilter.value = `${vm.toLocationFilter.store}${vm.toLocationFilter.stockClassification}`;
            }
        } else {
            vm.toLocationFilter.store = null;
            vm.toLocationFilter.stockClassification = null;
            vm.toLocationFilter.value = null;
        }
        
        // Filter based on values
        var  matchingTransfers= [];
        
        if (vm.inLocationFilter.value){
            console.log(vm.inLocationFilter.value)
			for(var i = 0; i < vm.dataStore.length; i++){
				if(vm.dataStore[i].inventory_id.location.substr(0, vm.inLocationFilter.value.length) == vm.inLocationFilter.value){
					matchingTransfers.push(vm.dataStore[i]);
				}
			}
			vm.transfers = matchingTransfers;
		} else {
            vm.transfers = vm.dataStore;
        }
        matchingTransfers = [];

        if (vm.toLocationFilter.value){
            console.log(vm.toLocationFilter.value);
			for(var i = 0; i < vm.transfers.length; i++){
				if(vm.transfers[i].to_location.substr(0, vm.toLocationFilter.value.length) == vm.toLocationFilter.value){
					matchingTransfers.push(vm.transfers[i]);
				}
			}
			vm.transfers = matchingTransfers;
		}

        // vm.transfers = filterFilter(vm.dataStore, { to_location: vm.toLocationFilter })
    //    vm.transfers = $filter('filter')(vm.dataStore, { inv_transfer_to_location: vm.toLocationFilter });
    }   

    function resetFilters(){
        vm.transfers = vm.dataStore;
        if(vm.inLocationFilter){
            vm.inLocationFilter = {};};
        if(vm.toLocationFilter){vm.toLocationFilter= {};};
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
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="frontend/app/transfers/style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
    } 


}