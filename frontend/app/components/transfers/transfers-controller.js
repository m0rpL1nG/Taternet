angular.module("Transfers")
    .controller("TransfersController", TransfersController);

TransfersController.$inject=['transferdataservice']

function TransfersController(transferdataservice) {  

    var vm = this;

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
        prop: "inv_transfer_mdl_ser_id.inv_ser_model_number",
        width: 300,
        isCheckboxColumn: true,
        headerCheckbox: true
        }, {
        name: "Serial Number",
        prop: "inv_transfer_mdl_ser_id.inv_ser_serial_number",
        width: 300,
        }, {
        name: "Current Location",
        prop: "inv_transfer_mdl_ser_id.inv_ser_item_location",
        width: 300,
        }, {
        name: "Destination Location",
        prop: "inv_transfer_to_location",
        width: 300,
        }
        ]
    };
    vm.transfers = [];
    // vm.game = {};
    vm.selected = [];
    vm.determinateValue = 30;
    vm.determinateValue2 = 30;

    // vm.addGame = addGame;
    vm.onSelect = onSelect;
    vm.onRowClick = onRowClick;

    function onSelect(row) {
        console.log('ROW SELECTED!', row);
    }
    
    function onRowClick(row) {
        console.log('ROW CLICKED', row);
    }

    activate();

    function activate() {
        return getTransfers().then(function() {
            console.log('Activated Transfer recall')
            // logger.info('Activated Users View');
        });
    }

    function getTransfers() {
        console.log('transfer request begun')
        return transferdataservice.getTransfers()
            .then(function(data) {
                console.log("Transfers: ", data);
                vm.transfers = data;
            return vm.transfers;
            });
    }

    // function addGame(game) {
    //     console.log(game);
    //     return gamedataservice.addGame(game)
    //         .then(function(data) {
    //             console.log(data)
    //             // vm.data = data;
    //             getGames();
    //         return vm.data;
    //         });
    // }

}