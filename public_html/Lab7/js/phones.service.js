(function () {
    
    'use strict';
    angular
            .module('app')
            .factory ('PhonesService', PhonesService);
    
    PhonesService.$inject = ['$http', 'REQUEST'];
    
    function PhonesService ($http, REQUEST){ // this service gets the phones and displays if succesful
        var url = REQUEST.Phones;
        var service = {
            'getPhones' : getPhones,
            'findPhone' : findPhone
        };
        return service;
        
        function getPhones() {
            return $http.get(url)
                    .then(getPhonesComplete, getPhonesFailed);
            
            function getPhonesComplete(response) {
                return response.data;
            }
            
            function getPhonesFailed(error) {
                return [];
            }
        }
        function findPhone(id) {
            return getPhones()
                    .then(function(data) {
                        return findPhoneComplete(data);;
            });
            function findPhoneComplete(data) {
                var results = {};
                
                angular.forEach(data, function (value, key) { // array that travels through array of phones
                    if (!results.length ) {
                        if ( value.hasOwnProperty('id') && value.id === id ) {
                            results = angular.copy(value);
                        }
                    }
                }, results);
                
                return results;
                
            }
        }
    }
    
}) ();