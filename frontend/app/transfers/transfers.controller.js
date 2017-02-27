angular.module("Transfers")
    .controller("TransfersController", TransfersController);

TransfersController.$inject=[
    'transferdataservice',
    '$filter',
    'filterFilter',
    'sessionservice',
    '$mdDialog'
    ]

function TransfersController(transferdataservice, $filter, filterFilter, sessionservice, $mdDialog) {  

    var vm = this;
    
    //Page variables and functions
    vm.filterTransfers = filterTransfers;
    vm.transfers = undefined;
    vm.inLocationFilter = {};
    vm.toLocationFilter = {};
    vm.selected = [];
    vm.printList = [];
    vm.resetFilters = resetFilters;
    vm.showFilters = showFilters;
    vm.filterDisabled = true;
    //Data Table Setup
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
            name: "Model Number",
            prop: "inventory_id.model_number",
            width: 220,
            canAutoResize: false,
            isCheckboxColumn: true,
            headerCheckbox: true
            }, {
            name: "Serial Number",
            prop: "inventory_id.serial_number",
            width: 200,
            canAutoResize: false,
            }, {
            name: "from",
            prop: "inventory_id.location",
            width: 100,
            canAutoResize: false,
            }, {
            name: "to",
            prop: "to_location",
            width: 100,
            canAutoResize: false,
            }, {
            name: "Notes",
            prop: "notes",
            cellRenderer: function(scope, ele) {
                var rowNumber = scope.$parent.ctrl.transfers.indexOf(scope.$row);
                 return `<md-input-container md-no-float style="margin: 0px; width:100%; height: 36px;"><input type="text" placeholder="Notes" ng-model-options="{ updateOn: 'blur' }" ng-model="ctrl.transfers[${rowNumber}].notes"></md-input-container>`;
                }
            }
            ]
    };
    // vm.onSelect = onSelect;
    // vm.onRowClick = onRowClick;

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
 
        // console.log(month, day, year);
        vm.date = `${month}/${day}/${year}`;
        // console.log(vm.date);
        getTransfers(null, null, true, true);
        vm.toLocationFilter = {
            store: {
                name: "",
                id: ""
            },
            stockClassification : {
                name: "",
                id: ""
            }
        }
        return getTransfers().then(console.log("all transfers complete"))
    }

    function getTransfers(location = null, destination = null, partial=false, init=false) {
        console.log('transfer request begun')
        return transferdataservice.getTransfers(location, destination, init)
            .then(function(data) {
                // console.log("Transfers: ", data);
                if(partial){vm.transfers = data;}
                else{
                    vm.dataStore = data;
                    vm.filterDisabled = false;
                };
                // console.log("filtered", vm.transfersFilter)
            // return vm.transfers;
            });
    }

    function filterTransfers(){
        // Set inLocationFilter Value
        console.log("start of filter Transfers")
        console.log(vm.inLocationFilter, vm.toLocationFilter)
        if (vm.inLocationFilter.store.id){
            vm.inLocationFilter.value = vm.inLocationFilter.store.id;
            if(vm.inLocationFilter.stockClassification.id){
                vm.inLocationFilter.value = `${vm.inLocationFilter.store.id}${vm.inLocationFilter.stockClassification.id}`;
            }
        } else {
            vm.inLocationFilter.value = null;
        }
        
        // set toLocationFilter Value
        if (vm.toLocationFilter.store.id){
            vm.toLocationFilter.value = vm.toLocationFilter.store.id;
            if(vm.toLocationFilter.stockClassification){
                // console.log(vm.toLocationFilter)
                vm.toLocationFilter.value = `${vm.toLocationFilter.store.id}${vm.toLocationFilter.stockClassification.id}`;
            }
        } else {
            vm.toLocationFilter.value = null;
        }
        
        // Filter based on values
        var  matchingTransfers= [];
        
        if (vm.inLocationFilter.value){
            // console.log(vm.inLocationFilter.value)
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
            // console.log(vm.toLocationFilter.value);
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
    }

    
    // function onSelect(row) {
    //     console.log('ROW SELECTED!', row);
    // }
    
    // function onRowClick(row) {
    //     console.log('ROW CLICKED', row);
    // }

    function printDiv (divName) {
        // if (vm.selected.length === 0) {
        //     vm.printList = vm.transfers;
        // } else {
        //     vm.printList = vm.selected;
        //     vm.selected = [];
        // }
        var printContents = document.getElementById(divName).innerHTML;
        var popupWin = window.open('', '_blank', 'width=800,height=600');
        popupWin.document.open()
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="frontend/app/transfers/style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
    } 

    function showFilters(ev) {
        $mdDialog.show({
            controller: DialogController,
            controllerAs: 'dialog',
            templateUrl: 'frontend/app/transfers/filterDialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            // fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
            vm.status = 'You said the information was "' + answer + '".';
            }, function() {
            vm.status = 'You cancelled the dialog.';
        });
    };

    function DialogController($mdDialog) {
        var dialog = this;

        var inLocationId = extractID(vm.inLocationFilter)
        var toLocationId = extractID(vm.toLocationFilter)
        
        dialog.inLocationInput = inLocationId || null;
        dialog.toLocationInput = toLocationId || null;
        
        // console.log(inLocationId, toLocationId)

        
        function extractID(filter){
            if(Object.keys(filter).length > 0){

                return filter.store.id + filter.stockClassification.id;
            }
        }

        function extractFilterObject(userInput, direction){
            var filterObj = {
                    store: {name: null, id:null},
                    stockClassification: {name: null, id: null}
                };
        
            if (userInput){

                filterObj.store.id = userInput.substr(0,2);          
                if (userInput.length > 1){ filterObj.stockClassification.id = userInput.substr(2,3)};
            }
            if(filterObj.store.id){
                for (var i = 0; i < vm.stores.length; i++){
                    if(filterObj.store.id === vm.stores[i].id){
                        filterObj.store.name = vm.stores[i].name;
                    }
                }
            }
            
            if(filterObj.stockClassification.id){
                for (var i = 0; i < vm.stockClassifications.length; i++){
                    if(filterObj.stockClassification.id === vm.stockClassifications[i].id){
                        filterObj.stockClassification.name = vm.stockClassifications[i].name;
                    }
                }
            }

            if (direction === 'in'){
                vm.inLocationFilter = filterObj;
            } else {
                vm.toLocationFilter = filterObj;
            }
            // console.log("after extraction")
            // console.log(vm.inLocationFilter, vm.toLocationFilter);
        }

        dialog.cancel = function() {
            $mdDialog.cancel();
        };

        dialog.submit = function() {
            // console.log("in filter at submit", dialog.inLocationInput);
            // console.log("to filter at submit", dialog.toLocationInput);
            extractFilterObject(dialog.inLocationInput, "in");
            extractFilterObject(dialog.toLocationInput, "to");
            vm.filterTransfers();
            $mdDialog.hide();
        };
  }


}