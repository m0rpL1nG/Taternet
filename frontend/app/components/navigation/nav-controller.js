angular.module("Navigation")
    .controller("NavController", NavController);

NavController.$inject=['$location']
function NavController($location) {  
    var vm = this;

    vm.navigate = navigate;

    function navigate(place) {
        $location.path(`/${place}`)
    }

}