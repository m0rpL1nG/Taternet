/* Libs */
require("../bower_components/angular/angular");  

require("../bower_components/angular-aria/angular-aria");
require("../bower_components/angular-animate/angular-animate");
require("../bower_components/angular-material/angular-material");

require("../bower_components/angular-route/angular-route");   
require("../bower_components/angular-resource/angular-resource");
require("../bower_components/angular-jwt/dist/angular-jwt.min");
require("../bower_components/angular-data-table/release/dataTable");
require("../bower_components/angular-local-storage/dist/angular-local-storage.min")


/* Globals */
_ = require("../bower_components/lodash");  
_urlPrefixes = {  
  API: "api/v1/",
  TEMPLATES: "frontend/app/"
};

/* Components */
require("./shared/main/main");
require("./components/navigation/navigation");
require("./components/home/home");
require("./components/game/game");
require("./components/users/users");
require("./components/transfers/transfers");


/* App Dependencies */
angular.module("myApp", [
    "Main",
    "Navigation",
    "Home",
    "Game",
    "Users",
    "Transfers",
    "angular-jwt",
    "ngMaterial",
    "ngResource",
    "ngRoute",
    "data-table",
    "LocalStorageModule",
]);

/* Config Vars */
var routesConfig = require("./routes");

/* App Config */
angular.module("myApp").config(routesConfig); 
require("./config/materialTheme")
require("./config/angularJWT")
// angular
//   .module('myApp')
//   .config(function Config($httpProvider, jwtOptionsProvider) {
    // jwtOptionsProvider.config({
    //   authPrefix: 'JWT ',
    //   tokenGetter: ['options', function(options) {
    //     // Skip authentication for any requests ending in .html
    //     // if (options.url.substr(options.url.length - 5) == '.json') {
    //     //   return null;
    //     // }
    //     return JSON.parse(localStorage.getItem('ls.currentUser')).token
    //   }]
    // });

    // $httpProvider.interceptors.push('jwtInterceptor');
  // })