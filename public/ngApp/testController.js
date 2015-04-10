(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('testController', testController);

    testController.$inject = ['$location'];

    function testController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Hello From Angular Controller';

        init();

        function init() { }
    }
})();