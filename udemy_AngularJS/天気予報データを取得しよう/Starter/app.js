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

});

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

// ngResourceをinjectする。ngResourceはhttpをラップしているみたいだ
weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function ($scope, $resource, cityService) {

    $scope.city = cityService.city;


    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast', {
        callback: 'JSON_CALLBACK'
    }, {
        get: {
            method: 'JSONP'
        }
    });

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: 2,
        appid: key
    });

    console.log($scope.weatherResult);

}]);
