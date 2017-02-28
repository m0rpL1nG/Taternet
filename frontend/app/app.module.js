/* Javascript Framework */
require("../bower_components/angular/angular.min");  

/* Layout Framework */
require("../bower_components/angular-aria/angular-aria.min");
require("../bower_components/angular-animate/angular-animate.min");
require("../bower_components/angular-material/angular-material.min");

/* Libs */
require("../../node_modules/angular-ui-router/release/angular-ui-router.min");   
require("../bower_components/angular-resource/angular-resource.min");
require("../bower_components/satellizer/dist/satellizer.min");
require("../assets/components/angular-data-table/release/dataTable.min");
require("../bower_components/angular-local-storage/dist/angular-local-storage.min")
require("../../node_modules/ng-barcode/dist/ng-barcode.min")

/* App Components */
require("./admin/admin.module");
require("./layout/layout.module");
require("./game/game.module");
require("./people/people.module");
require("./transfers/transfers.module");


/* App Dependencies */
angular.module("taternet", [
    "Admin",
    "Layout",
    "Game",
    "People",
    "Transfers",
    //////////////////
    // Outside Libs //
    //////////////////
    "satellizer",
    "ngMaterial",
    "ngResource",
    "ui.router",
    "data-table",
    "LocalStorageModule",
    "ngBarcode",
]);

/* Config Vars */
var routesConfig = require("./app.routes");

/* App Config */
angular.module("taternet").config(routesConfig); 
require("./app.config")

/* Interceptors */

angular.module("taternet").run(
    function($rootScope, $state, $auth){
        console.log($auth.isAuthenticated());
        if($auth.isAuthenticated()){
            $state.go('index.dashboard');
        } else {
            $state.go('authenticate')
        }
    })
