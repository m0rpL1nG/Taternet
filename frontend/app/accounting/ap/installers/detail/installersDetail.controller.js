(function(){
    'use strict';
    
    angular.module("Accounting")
        .controller("ARInstallersDetailController", ARInstallersDetailController);

    ARInstallersDetailController.$inject=['$stateParams']

    function ARInstallersDetailController($stateParams) {  
        var vm = this;

        vm.person = {};
        
        activate();

        function activate() {
            console.log($stateParams)
            // return getPerson($stateParams.id).then(function(result) {
            //     if(result){
            //         console.log(result)
            //     }
            // });
        }


    }
})();