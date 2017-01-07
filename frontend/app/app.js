/* Libs */
require("../bower_components/angular/angular");  

require("../bower_components/angular-aria/angular-aria");
require("../bower_components/angular-animate/angular-animate");
require("../bower_components/angular-material/angular-material");

require("../bower_components/angular-route/angular-route");   
require("../bower_components/angular-resource/angular-resource");
require("../bower_components/angular-data-table/release/dataTable");

/* Globals */
_ = require("../bower_components/lodash");  
_urlPrefixes = {  
  API: "api/v1/",
  TEMPLATES: "frontend/app/"
};

/* Components */
require("./components/navigation/navigation");
require("./shared/main/main");
require("./components/home/home");
require("./components/game/game");
require("./components/users/users");



/* App Dependencies */
angular.module("myApp", [
    "Main",
    "Navigation",
    "Home",
    "Game",
    "Users",
    "ngMaterial",
    "ngResource",
    "ngRoute",
    "data-table",
]);

/* Config Vars */
var routesConfig = require("./routes");

/* App Config */
angular.module("myApp").config(routesConfig); 
require("./materialTheme")