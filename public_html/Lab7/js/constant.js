(function(){
    'use strict';
    //used as constant code for the project so it can be used again on different routes
    angular
            .module('app')
            .constant('REQUEST', {
                'Phones' : './data/phones.json'
            });
})();