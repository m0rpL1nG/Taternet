angular.module("Main")
    .controller("MainController", MainController);

MainController.$inject=['dataservice', '$mdSidenav']

function MainController(dataservice, $mdSidenav) {  
    var vm = this;

    vm.reg_errors = {};
    vm.animals = {};
    vm.username = '';
    vm.toggleSideNav = toggleSideNav;
    vm.logout = logout;

    // if($localStorage.currentUser){
    //     $scope.username = $localStorage.currentUser.username
    //     $scope.tokenDate = jwtHelper.getTokenExpirationDate($localStorage.currentUser.token)
    // } else {
    //     $scope.username = "none";
    // }
    
    function toggleSideNav() {
        console.log('toggleSidenav');
        $mdSidenav('left-menu').toggle();
    };

    function logout(){
        dataservice.logout()
        $location.path("/");
    }


}