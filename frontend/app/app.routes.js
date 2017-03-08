(function () {

    'use strict';

    angular.module("taternet")
    .config(routesConfig)
    
    routesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    
    function routesConfig($stateProvider, $urlRouterProvider) {  
      
      // $urlRouterProvider.otherwise('/dashboard');
      
      var states = [
        {
          name: "index",
          url: '',
          abstract: true,
          // resolve: {
          //   user: ['sessionservice',
          //     function(sessionservice) {
                
          //       return sessionservice.setUserJWT();
          //     }
          //   ]
          // },
          views: {
            '': {
              templateUrl: "frontend/app/layout/shell/shell.html",
              controller: "ShellController",
              controllerAs: "shell"
            },
            'sidenav@index': {
              templateUrl: "frontend/app/layout/sidenav/sidenav.html",
              controller: "NavController",
              controllerAs: "nav"
            },
            'topnav@index': {
              templateUrl: "frontend/app/layout/topnav/topnav.html",
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
          name: "login",
          url: "/login",
          templateUrl: "frontend/app/admin/session/login.html",
          controller: "SessionController",
          controllerAs: "session",
        },
        {
          name: "index.dashboard",
          url: "/dashboard",
          data: 
            {
              roles: []
            },
          templateUrl: "frontend/app/dashboard/dashboard.html",
        },
        {
          name: "index.games",
          url: "/games",
          data: 
            {
              roles: ['Admin']
            },
          templateUrl: "frontend/app/game/game.html",
          controller: "GameListController",
          controllerAs: "game",
        },
        {
          name: "index.people", 
          url: "/people",
          data: 
            {
              roles: ['Admin']
            },
          templateUrl: "frontend/app/people/people.html",
          controller: 'PeopleController',
          controllerAs: 'people',
        },
        {
          name: "index.people.detail", 
          url: "/{id}",
          data: 
            {
              roles: ['Admin']
            },
          templateUrl: "frontend/app/people/detail/peopleDetail.html",
          controller: 'PeopleDetailController',
          controllerAs: 'peopleDetail',
        },
        {
          name: "index.travelSheets",
          url: "/travelsheets",
          data: 
            {
              roles: ['warehouse']
            },
          templateUrl: "frontend/app/transfers/transfers.html",
        },
      ]

      states.forEach(function(state) {
        $stateProvider.state(state);
      });
      
    }

})();
