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
require("./services/services.module")


/* App Dependencies */
angular.module("taternet", [
    "Admin",
    "Layout",
    "Game",
    "People",
    "Transfers",
    "Services",
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


angular.module("taternet").run(runBlock)

runBlock.$inject = [
    '$rootScope',
    '$state', 
    '$auth',
    'sessionservice',
    'routeAuthService']

function runBlock($rootScope, $state, $auth, sessionservice, routeAuthService){
    console.log($auth.isAuthenticated());
    if($auth.isAuthenticated()){
        $state.go('index.dashboard');
    } else {
        $state.go('login')
    }

    $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
        var payload = $auth.getPayload()
        console.log(payload);
        if (toState.name != 'login'){
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;
            console.log(toState, toStateParams)
            routeAuthService.authorize();
        }


            // routeAuthService.authorize(); 

            // var refreshToken = store.get('refreshToken');
            // if (token) {
            //   if (!jwtHelper.isTokenExpired(token)) {
            //     if (!auth.isAuthenticated) {
            //       auth.authenticate(store.get('profile'), token);


            //       //Store the status in the scope 
            //       $rootScope.isAuthenticated = auth.isAuthenticated
            //     }
            //   } else {
            //     if (refreshToken) {
            //       if (refreshingToken === null) {
            //         refreshingToken = auth.refreshIdToken(refreshToken).then(function(idToken) {
            //           store.set('token', idToken);
            //           auth.authenticate(store.get('profile'), idToken);
            //         }).finally(function() {
            //           refreshingToken = null;
            //         });
            //       }
            //       return refreshingToken;
            //     } else {
            //       $location.path('/login');
            //     }
            //   }
            // }

    });
}


// (function () {
//     'use strict';

//     angular.module('taternet')
//         .factory('authMiddleware', authMiddleware);
    
//     authMiddleware.$inject = ['$auth', '$state']

//     function authMiddleware($auth, $state) {

//         var authMiddleware = this;

//         //if user is not logged in re-direct to login route
//         authMiddleware.run = function(event){
//             if(authService.isLoggedIn() == false){
//                 event.preventDefault();
//                 console.error('You are not logged in, so you cant browse this');
//                 $state.go('login');
//             }
//         };

//         return {
//             run : authMiddleware.run
//         };
//     };

// })();
