var app = angular.module('myApp', ['myApp.controllers', 'myApp.factories', 'ngRoute', 'ngResource']);
app.config(['routeProvider', function($routeProvider) {
    $rputeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'contactViewontroller'
    })
    .when('/posts/:id', {
        templateUrl: 'views/single.html',
        controller: 'SingleContactControl'
    })
    .ohterwise ({
        redirectTo: '/'
    });
}]);