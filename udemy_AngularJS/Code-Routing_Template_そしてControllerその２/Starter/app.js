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

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'Main';

    $log.main = 'Mainで追加したプロパティ';
    $log.log($log);
    // $scopeはシングルトン例外
    $log.log($scope);

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

    console.log($routeParams.num);
    $scope.num = $routeParams.num || 'hoge';

    $log.second = 'Secondで追加したプロパティ';
    $log.log($log);
    $log.log($scope);

}]);