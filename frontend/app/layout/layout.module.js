(function(){
    'use strict';
    
    angular.module("Layout", []);

    require("./shell/shell.controller"); 
    require("./sidenav/sidenav.controller");
    require("./sidenav/menu.service");
    require("./sidenav/menu-toggle.directive");
    require("./sidenav/menu-link.directive");
    require("./topnav/topnav.controller"); 

})();