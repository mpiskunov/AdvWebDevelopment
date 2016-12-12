/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    
    'use strict';
    angular.module('app', ['ngRoute'])
            .config(config);
    
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider) { // app.js is used to connect everything together. these are the routes and what happens when the routes are used
        $routeProvider.
                when('/', {
                    templateUrl: 'js/phone-list.template.html',
                    controller: 'PhoneListController',
                    controllerAs: 'vm'
        }).
                when('/phones/:phoneId', {
                    templateUrl:  'js/phone-detail.template.html',
                    controller: 'PhoneDetailController',
                    controllerAs: 'vm'
        }).
                otherwise({
                    redirectTo: '/'
                });
        
    }
    
})();
