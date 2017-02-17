/* Libs */
require("../bower_components/angular/angular");  

require("../bower_components/angular-aria/angular-aria.min");
require("../bower_components/angular-animate/angular-animate.min");
require("../bower_components/angular-material/angular-material");

require("../../node_modules/angular-ui-router/release/angular-ui-router.min");   
require("../bower_components/angular-resource/angular-resource.min");
require("../bower_components/satellizer/dist/satellizer");
// require("../bower_components/angular-jwt/dist/angular-jwt.min");
require("../bower_components/angular-data-table/release/dataTable.min");
// require("../bower_components/angular-local-storage/dist/angular-local-storage.min")
require("../bower_components/angular-barcode/dist/ng-barcode.min")

/* Globals */

/* Components */
require("./admin/admin.module");
require("./layout/layout.module");
// require("./shared/main/main");
// require("./navigation/navigation");
// require("./home/home.module");
require("./game/game.module");
require("./people/people.module");
require("./transfers/transfers.module");


/* App Dependencies */
angular.module("taternet", [
    "Admin",
    "Layout",
    // "Navigation",
    // "Home",
    "Game",
    "People",
    "Transfers",
    //////////////////
    // Outside Libs //
    //////////////////
    "satellizer",
    // "angular-jwt",
    "ngMaterial",
    "ngResource",
    "ui.router",
    "data-table",
    // "LocalStorageModule",
    "ngBarcode",
]);

/* Config Vars */
var routesConfig = require("./app.routes");

/* App Config */
angular.module("taternet").config(routesConfig); 
require("./app.config")
