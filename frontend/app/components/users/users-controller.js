angular.module("Users")
    .controller("UsersController", UsersController);

UsersController.$inject=['dataservice']

function UsersController(dataservice) {  
    var vm = this;

    vm.options = {
        rowHeight: 50,
        headerHeight: 50,
        footerHeight: false,
        scrollbarV: false,
        selectable: false,
        columns: [{
            name: "Name",
            width: 300
            }, {
            name: "Gender"
            }, {
            name: "Company"
        }]
    };
    vm.data = [];
    
    activate();

    function activate() {
        return getUsers().then(function() {
            // logger.info('Activated Users View');
        });
    }

    function getUsers() {
        return dataservice.getUsers()
            .then(function(data) {
                vm.data = data;
            return vm.data;
            });
    }

}