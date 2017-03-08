(function(){
  'use strict';
  
  angular.module('Layout')
    .run(['$templateCache', function ($templateCache) {
      $templateCache.put('frontend/app/layout/sidenav/menu-link.tmpl.html');
    }])
    .directive('menuLink', function () {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'frontend/app/layout/sidenav/menu-link.tmpl.html',
        link: function ($scope, $element) {
          var controller = $element.parent().controller();

          $scope.focusSection = function () {
            // set flag to be used later when
            // $locationChangeSuccess calls openPage()
            controller.autoFocusContent = true;
          };
        }
      };
    })
})();