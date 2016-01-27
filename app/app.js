'use strict';

angular.module('progress', ['ngRoute']).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/view/usage.html'
        }).when('/demo', {
            templateUrl: 'app/view/demo.html',
            controller: 'DemoCtrl'
        }).otherwise(
            { redirectTo: '/' }
        );
    }]);