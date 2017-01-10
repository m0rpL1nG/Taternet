function routesConfig($routeProvider) {  
  $routeProvider
    .when("/", {
      templateUrl: _urlPrefixes.TEMPLATES + "components/home/home.html",
      label: "Home"
    })
    .when("/login", {
      templateUrl: _urlPrefixes.TEMPLATES + "shared/main/login.html",
      label: "Login"
    })
    .when("/games", {
      templateUrl: _urlPrefixes.TEMPLATES + "components/game/game.html",
      label: "Games"
    })
    .when("/users", {
      templateUrl: _urlPrefixes.TEMPLATES + "components/users/users.html",
      label: "Users"
    })
    .otherwise({
      templateUrl: _urlPrefixes.TEMPLATES + "404.html"
    });
}

routesConfig.$inject = ["$routeProvider"];

module.exports = routesConfig;  