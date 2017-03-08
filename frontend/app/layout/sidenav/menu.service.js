(function(){

'use strict';

  angular.module('Layout')
  .factory('menuService', [
      '$rootScope', '$state', 
      function ($rootScope, $state) {

        var sections = [];

        var warehouse = {
          name: 'Warehouse',
          type: 'toggle', 
          pages: [{
            name: 'Travel Sheets',
            type: 'link',
            state: 'index.travelSheets',
            // icon: 'fa fa-group'
          }]
        }

        var useradmin = {
          name: 'Settings',
          type: 'toggle', 
          pages: [{
            name: 'Games',
            type: 'link',
            state: 'index.games',
            // icon: 'fa fa-group'
          },{
            name: 'People',
            type: 'link',
            state: 'index.people',
            // icon: 'fa fa-group'
          }]
        }

        sections.push(warehouse);
        sections.push(useradmin);

        // sections.push({
        //   name: 'Getting Started',
        //   state: 'home.gettingstarted',
        //   type: 'link'
        // });

        // sections.push({
        //   name: 'Beers',
        //   type: 'toggle',
        //   pages: [{
        //     name: 'IPAs',
        //     type: 'link',
        //     state: 'home.beers.ipas',
        //     icon: 'fa fa-group'
        //   }, {
        //     name: 'Porters',
        //     state: 'home.beers.porters',
        //     type: 'link',
        //     icon: 'fa fa-map-marker'
        //   },
        //     {
        //       name: 'Wheat',
        //       state: 'home.beers.wheat',
        //       type: 'link',
        //       icon: 'fa fa-plus'
        //     }]
        // });

        // sections.push({
        //   name: 'Munchies',
        //   type: 'toggle',
        //   pages: [{
        //     name: 'Cheetos',
        //     type: 'link',
        //     state: 'munchies.cheetos',
        //     icon: 'fa fa-group'
        //   }, {
        //     name: 'Banana Chips',
        //     state: 'munchies.bananachips',
        //     type: 'link',
        //     icon: 'fa fa-map-marker'
        //   },
        //     {
        //       name: 'Donuts',
        //       state: 'munchies.donuts',
        //       type: 'link',
        //       icon: 'fa fa-map-marker'
        //     }]
        // });

        var self = {
          sections: sections,
          toggleSelectSection: toggleSelectSection,
          isSectionSelected: isSectionSelected,
          // selectPage: selectPage
        };

        return self;
        
        function toggleSelectSection(section) {
            self.openedSection = (self.openedSection === section ? null : section);
            console.log("menuService.toggleSelectSection:", self.openedSection);
        }
        
        function isSectionSelected(section) {
            return self.openedSection === section;
        }
        
        // function selectPage(section, page) {
        //     page && page.url && $state.go(page.url);
        //     self.currentSection = section;
        //     self.currentPage = page;
        // }
        
        // function sortByHumanName(a, b) {
        //   return (a.humanName < b.humanName) ? -1 :
        //     (a.humanName > b.humanName) ? 1 : 0;
        // }

      }]);
      
})();