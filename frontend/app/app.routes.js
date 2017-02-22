
routesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function routesConfig($stateProvider, $urlRouterProvider) {  
  
  $urlRouterProvider.otherwise('/dashboard');
  
  var states = [
    {
      name: "index",
      url: '',
      abstract: true,
      views: {
        '': {
          templateUrl: "frontend/app/layout/shell.html",
          controller: "ShellController",
          controllerAs: "shell"
        },
        'sidenav@index': {
          templateUrl: "frontend/app/layout/sidenav.html",
          controller: "NavController",
          controllerAs: "nav"
        },
        'topnav@index': {
          templateUrl: "frontend/app/layout/topnav.html",
          controller: "TopNavController",
          controllerAs: "top"
        },
        // 'body@index': {
        //   templateUrl: "frontend/app/layout/body.html",
        // }
      },
    },
    /////////////////////////
    {
      name: "authenticate",
      url: "/auth",
      templateUrl: "frontend/app/admin/session/login.html",
      controller: "SessionController",
      controllerAs: "session",
    },
    {
      name: "index.dashboard",
      url: "/dashboard",
      templateUrl: "frontend/app/dashboard/dashboard.html",
    },
    {
      name: "index.games",
      url: "/games",
      templateUrl: "frontend/app/game/game.html",
      controller: "GameListController",
      controllerAs: "game",
    },
    {
      name: "index.people", 
      url: "/people",
      templateUrl: "frontend/app/people/people.html",
      controller: 'PeopleController',
      controllerAs: 'people',
    },
    {
      name: "index.people.detail", 
      url: "/{id}",
      templateUrl: "frontend/app/people/detail/peopleDetail.html",
      controller: 'PeopleDetailController',
      controllerAs: 'peopleDetail',
    },
    {
      name: "index.travelSheets",
      url: "/travelsheets",
      templateUrl: "frontend/app/transfers/transfers.html",
    },
  ]

  states.forEach(function(state) {
    $stateProvider.state(state);
  });
}


module.exports = routesConfig;  