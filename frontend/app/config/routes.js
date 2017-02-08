
routesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function routesConfig($stateProvider, $urlRouterProvider) {  
  
  $urlRouterProvider.otherwise('/home');
  
  var states = [
    {
      name: "home",
      url: "/home",
      templateUrl: "frontend/app/home/home.html",
    },
    {
      name: "login", 
      url: "/login",
      templateUrl: "frontend/app/shared/main/login.html",
    },
    {
      name: "games",
      url: "/games",
      templateUrl: "frontend/app/game/game.html",
    },
    {
      name: "people", 
      url: "/people",
      templateUrl: "frontend/app/people/people.html",
      controller: 'PeopleController',
      controllerAs: 'people',
    },
    {
      name: "people.detail", 
      url: "/{id}",
      templateUrl: "frontend/app/people/detail/peopleDetail.html",
      controller: 'PeopleDetailController',
      controllerAs: 'peopleDetail',
    },
    {
      name: "transfers",
      url: "/transfers",
      templateUrl: "frontend/app/transfers/transfers.html",
    },
  ]

  states.forEach(function(state) {
    $stateProvider.state(state);
  });
}


module.exports = routesConfig;  