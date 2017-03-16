(function(){
    'use strict';
    angular
    .module('Accounting')
    .factory('apinstallerservice', apinstallerservice);

    apinstallerservice.$inject = ['$http'];

    function apinstallerservice($http) {
        return {
            getVendors: getVendors,
            getVendorSales: getVendorSales,
        };

        var self = this;

        function getVendors(vendor_type, vendor_id){
            var params = {}

            if (vendor_type){
                params.vendor_type = vendor_type
            }

            if (vendor_id){
                params.vendor_id = vendor_id
            }

            return $http({
                url: "api/v1/vendors/",
                method: "GET",
                params: params
                })
                .then(processComplete)
                .catch(processFailure)
            
            function processComplete(response){
                return response.data
            }

            function processFailure(response){
                console.log(response)
            }
        };

        function getVendorSales(vendor_id){
            var params = {}
            params.vendor_id = vendor_id;

            return $http({
                url: "api/v1/vendordetail/",
                method: "GET",
                params: params
                })
                .then(processComplete)
                .catch(processFailure)
            
            function processComplete(response){
                return response.data
            }

            function processFailure(response){
                console.log("vendor Sales failed", response)
            }
        };

        
    }

})();