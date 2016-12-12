/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function() {
    
    'use strict'
    angular
            .module('app')
            .controller('PhoneDetailController', PhoneDetailController);
    
    PhoneDetailController.$inject = ['$routeParams', 'PhonesService'];
    //this controller first finds the id of the specific phone that was clicked, then sends the info back as a response
    function PhoneDetailController($routeParams, PhonesService) {
        var vm = this;
        
        vm.phones = {};
        var id = $routeParams.phoneId;
        
        activate();
        
        function activate() {
            PhonesService.findPhone(id).then(function(response){
                vm.phone = response;
            });
        }
    }
    
})();
