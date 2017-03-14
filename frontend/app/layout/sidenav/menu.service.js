(function(){

'use strict';

  angular.module('Layout')
  .factory('menuService', menuService)
 
  menuService.$inject = ['sessionservice']

    function menuService(sessionservice) {


      var self = this;
      var sections = [];

      var corporate_manager = {};

      var buyer = {};

      var accounting_managers = {};
      
      var accounting_ar = {
        name: 'Accounts Receivable',
        type: 'toggle', 
        pages: [{
          name: 'People',
          type: 'link',
          state: 'index.people',
          // icon: 'fa fa-group'
        }]
      };
      var accounting_ap = {
        name: 'Accounts Payable',
        type: 'toggle', 
        pages: [{
          name: 'People',
          type: 'link',
          state: 'index.people',
          // icon: 'fa fa-group'
        }]
      };

      var sales_manager = {};
      var sales = {};

      var warehouse_manager = {};
      var warehouse = {
        name: 'Warehouse',
        type: 'toggle', 
        pages: [{
          name: 'Travel Sheets',
          type: 'link',
          state: 'index.travelSheets',
          // icon: 'fa fa-group'
        }]
      };

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
        }],
      };

      var groups = [
        {name: "warehouse", sections: [warehouse]},
        {name: "user_admins", sections: [useradmin]},
        {name: "accounting_managers", sections: [accounting_ap, accounting_ar] }
      ];
    

      return {
        getSections: getSections,
        toggleSelectSection: toggleSelectSection,
        isSectionSelected: isSectionSelected,
        // selectPage: selectPage
      };

      function getSections(){
        return sessionservice.getUser()
          .then(function(user){
            sections = [];
            for (var i = 0; i < groups.length; i++){
                console.log(user.groups.indexOf(groups[i].name) != -1)
                if(user.groups.indexOf(groups[i].name) != -1){
                  for (var j = 0; j < groups[i].sections.length; j++){
                    sections.push(groups[i].sections[j])
                  }
                } 
            }
            return sections
          })
      }

      function setSections(){
        // var sections = []
        sessionservice.getUser()
          .then(function(user){
            sections.push(warehouse);
            sections.push(useradmin);
            console.log(sections)
            return sections
          })
      }
      
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

    };
      
})();