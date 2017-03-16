(function(){
    'use strict';
    
    angular.module("Accounting", []);

    require("./ap/installers/installers.controller")
    require("./ap/installers/detail/installersDetail.controller")     
    require("./ap/installers/installers.service")
})();