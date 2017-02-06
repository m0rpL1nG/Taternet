/* Libs */
require("../bower_components/angular/angular.min");  

require("../bower_components/angular-aria/angular-aria.min");
require("../bower_components/angular-animate/angular-animate.min");
require("../bower_components/angular-material/angular-material.min");

// require("../bower_components/angular-route/angular-route.min");
require("../../node_modules/angular-ui-router/release/angular-ui-router.min");   
require("../bower_components/angular-resource/angular-resource.min");
require("../bower_components/angular-jwt/dist/angular-jwt.min");
require("../bower_components/angular-data-table/release/dataTable");
require("../bower_components/angular-local-storage/dist/angular-local-storage.min")
require("../app/components/ngPrint/ngPrint.min")
require("../bower_components/angular-barcode/dist/ng-barcode.min")

/* Globals */
// _ = require("../bower_components/lodash");  
// _urlPrefixes = {  
//   API: "api/v1/",
//   TEMPLATES: "frontend/app/"
// };

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
    "ui.router",
    "data-table",
    "LocalStorageModule",
    "ngPrint",
    "ngBarcode",
]);

/* Config Vars */
var routesConfig = require("./routes");

/* App Config */
angular.module("myApp").config(routesConfig); 
require("./config/materialTheme")
require("./config/angularJWT")
