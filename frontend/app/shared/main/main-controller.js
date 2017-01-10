angular.module("Main")
    .controller("MainController", MainController);

MainController.$inject=['MainDataService', '$mdSidenav']

function MainController(MainDataService, $mdSidenav) {  
    var vm = this;

    vm.toggleSideNav = toggleSideNav;
    vm.login = login;
    vm.logout = logout;

    vm.userObj = {};
    
    function toggleSideNav() {
        console.log('toggleSidenav');
        $mdSidenav('left-menu').toggle();
    };

    function login(userObj) {
        console.log("UserObj at controller")
        MainDataService.Login(userObj)
        .then(function(response) {
            console.log(response) 
            return vm.data;
        });
    }

    function logout(){
        MainDataService.logout()
        $location.path("/");
    }


}