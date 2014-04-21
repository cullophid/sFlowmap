'use strict';

angular
    .module('sFlowmapApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'sFlowmap'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });