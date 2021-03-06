// module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// config
weatherApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    });

})

// service
weatherApp.service('cityService', function () {

    this.city = 'Osaka';

});

// controller
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function (newVal) {

        cityService.city = newVal;

    });

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function ($scope, cityService) {

    $scope.city = cityService.city;

}]);