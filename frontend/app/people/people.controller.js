(function(){
    'use strict';
    
    angular.module("People")
        .controller("PeopleController", PeopleController);

    PeopleController.$inject=['dataservice', '$state']

    function PeopleController(dataservice, $state) {  
        var vm = this;

        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            selectable: true,
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
        vm.onRowClick = onRowClick;
        
        activate();

        function activate() {
            return getPeople().then(function() {
                // logger.info('Activated People View');
            });
        }

        function getPeople() {
            return dataservice.getPeople()
                .then(function(data) {
                    vm.data = data;
                return vm.data;
                });
        }
        
        function onRowClick(row) {
            console.log('ROW CLICKED', row);
            $state.transitionTo('index.people.detail', {id: row.id});
        }

    }
})();