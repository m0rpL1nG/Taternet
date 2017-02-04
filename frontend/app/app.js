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


/* App Dependencies */
angular.module("myApp", [
    "Main",
    "Navigation",
    "Home",
    "Game",
    "Users",
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
