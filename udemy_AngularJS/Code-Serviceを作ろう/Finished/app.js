var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

myApp.service('nameService', function () {

    var self = this;
    this.name = '山田 太郎';

    this.namelength = function () {
        return self.name.length;
    };

});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function (newVal) {
        nameService.name = newVal;
    });

    $log.log(nameService.name);
    $log.log(nameService.namelength());

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {
    $scope.name = nameService.name;

    $scope.$watch('name', function (newVal) {
        nameService.name = newVal;
    });

    $scope.num = $routeParams.num || 'hoge';

}]);