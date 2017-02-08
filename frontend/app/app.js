/* Libs */
require("../bower_components/angular/angular");  

require("../bower_components/angular-aria/angular-aria.min");
require("../bower_components/angular-animate/angular-animate.min");
require("../bower_components/angular-material/angular-material.min");

require("../../node_modules/angular-ui-router/release/angular-ui-router");   
require("../bower_components/angular-resource/angular-resource.min");
require("../bower_components/angular-jwt/dist/angular-jwt.min");
require("../bower_components/angular-data-table/release/dataTable");
require("../bower_components/angular-local-storage/dist/angular-local-storage.min")
require("../bower_components/angular-barcode/dist/ng-barcode.min")

/* Globals */

/* Components */
require("./shared/main/main");
require("./navigation/navigation");
require("./home/home");
require("./game/game");
require("./people/people");
require("./transfers/transfers");


/* App Dependencies */
angular.module("taternet", [
    "Main",
    "Navigation",
    "Home",
    "Game",
    "People",
    "Transfers",
    "angular-jwt",
    "ngMaterial",
    "ngResource",
    "ui.router",
    "data-table",
    "LocalStorageModule",
    "ngBarcode",
]);

/* Config Vars */
var routesConfig = require("./config/routes");

/* App Config */
angular.module("taternet").config(routesConfig); 
require("./config/materialTheme")
require("./config/angularJWT")
