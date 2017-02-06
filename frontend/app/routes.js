function routesConfig($stateProvider, $urlRouterProvider) {  
  
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
    .state("Home", {
      url: "/home",
      templateUrl: "frontend/app/components/home/home.html",
      label: "Home"
    })
    .state("login", {
      url: "/login",
      templateUrl: "frontend/app/shared/main/login.html",
      label: "Login"
    })
    .state("games", {
      url: "/games",
      templateUrl: "frontend/app/components/game/game.html",
      label: "Games"
    })
    .state("users", {
      url: "/users",
      templateUrl: "frontend/app/components/users/users.html",
      label: "Users"
    })
    .state("transfers", {
      url: "/transfers",
      templateUrl: "frontend/app/components/transfers/transfers.html",
      label: "transfers"
    })
    // .otherwise({
    //   templateUrl: "frontend/app/404.html"
    // });
}

routesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

module.exports = routesConfig;  