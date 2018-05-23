// module
let weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

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
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) { // cityServiceというをinjectする
    $scope.city = cityService.city;

    // cityに変化があった場合に反映させる
    // ng-view='city'のこと
    $scope.$watch('city', function(newVal) {
        cityService.city = newVal;
    })
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
}]);
