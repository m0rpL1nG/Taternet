/* Libs */
require("../bower_components/angular/angular");  
require("../bower_components/angular-route/angular-route");   
require("../bower_components/angular-resource/angular-resource");
require("../bower_components/angular-animate/angular-animate");
require("../bower_components/angular-touch/angular-touch");
require("../bower_components/angular-bootstrap/index");

/* Globals */
_ = require("../bower_components/lodash");  
_urlPrefixes = {  
  API: "api/v1/",
  TEMPLATES: "frontend/app/"
};

/* Components */
require("./components/navigation/navigation");
require("./components/home/home");
require("./components/game/game");



/* App Dependencies */
angular.module("myApp", [
    "Navigation",
    "Home",
    "Game",
    "ngResource",
    "ngRoute",
    "ngAnimate",
    "ngTouch",
    "ui.bootstrap"
]);

/* Config Vars */
var routesConfig = require("./routes");  

/* App Config */
angular.module("myApp").config(routesConfig); 