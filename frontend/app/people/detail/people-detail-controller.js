angular.module("People")
    .controller("PeopleDetailController", PeopleDetailController);

PeopleDetailController.$inject=['dataservice', '$stateParams']

function PeopleDetailController(dataservice, $stateParams) {  
    var vm = this;

    vm.person = {};
    
    activate();

    function activate() {
        console.log($stateParams)
        return getPerson($stateParams.id).then(function(result) {
            if(result){
                console.log(result)
            }
        });
    }

    function getPerson(id) {
        return dataservice.getPerson(id)
            .then(function(data) {
                console.log("get person", data);
                vm.person = data;
                return true
            });
    }

}