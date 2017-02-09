
routesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function routesConfig($stateProvider, $urlRouterProvider) {  
  
  $urlRouterProvider.otherwise('/');
  
  var states = [
    // {
    //   name: 'index',
    //   url: '/',
    //   views: {
    //     '': {templateUrl: 'frontend/app/layout/shell.html'}
    //   }
    // }
    {
      name: "index",
      url: '',
      // abstract: true,
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
          // controller: "HeaderController",
          // controllerAs: "head"
        },
        // 'body@index': {
        //   templateUrl: "frontend/app/layout/body.html",
        // }
      },
    },
    /////////////////////////
    // {
    //   name: "login", 
    //   url: "/login",
    //   templateUrl: "frontend/app/shared/main/login.html",
    // },
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