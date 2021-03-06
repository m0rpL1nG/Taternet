(function(){
  
  'use strict';
  
  angular.module('Layout')
    .run(['$templateCache', function ($templateCache) {
        $templateCache.put('frontend/app/layout/sidenav/sidenavMenu_toggle.tmpl.html')
      }])
    .directive('menuToggle', ['$timeout', function ($timeout ) {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'frontend/app/layout/sidenav/menu-toggle.tmpl.html',
        link: function (scope, element) {
          var controller = element.parent().controller();

          scope.isOpen = function () {
            return controller.isOpen(scope.section);
          };
          scope.toggle = function () {
            controller.toggleOpen(scope.section);
          };
          
          var parentNode = element[0].parentNode.parentNode.parentNode;
          if (parentNode.classList.contains('parent-list-item')) {
            var heading = parentNode.querySelector('h2');
            element[0].firstChild.setAttribute('aria-describedby', heading.id);
          }
        }
      }
    }])

})();