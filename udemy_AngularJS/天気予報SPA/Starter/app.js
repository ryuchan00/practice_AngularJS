// module
let weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);   // weatherAppモジュールを読み込む前に、ngROuteとngResourceを依存ファイルごと読み込んで、依存関係を解消してくれる。

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

weatherApp.controller('homeController', ['$scope', function ($scope) {

}]);

weatherApp.controller('forecastController', ['$scope', function ($scope) {

}]);
