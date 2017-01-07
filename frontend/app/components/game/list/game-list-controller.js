angular.module("Game")
    .controller("GameListController", GameListController);

GameListController.$inject=['gamedataservice']

function GameListController(gamedataservice) {  

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
        name: "Title",
        prop: "title",
        width: 300,
        isCheckboxColumn: true,
        headerCheckbox: true
        }, {
        name: "Description",
        prop: "description",
        width: 300,
        },{}]
    };
    vm.data = [];
    vm.game = {};
    vm.selected = [];

    vm.addGame = addGame;
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
        return getGames().then(function() {
            // logger.info('Activated Users View');
        });
    }

    function getGames() {
        return gamedataservice.getGames()
            .then(function(data) {
                vm.data = data;
            return vm.data;
            });
    }

    function addGame(game) {
        console.log(game);
        return gamedataservice.addGame(game)
            .then(function(data) {
                console.log(data)
                // vm.data = data;
                getGames();
            return vm.data;
            });
    }

}