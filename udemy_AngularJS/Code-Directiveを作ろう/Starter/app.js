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

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

}]);

myApp.directive('searchResult', function () {
    return {
        // restrictはdirectiveの書き方を制限できる。
        //E: elemtent
        //A: attribute
        //C: class
        //M: comment
        //推奨の書き方はEAのみ
        restrict: 'EACM',
        template: '<a href="#" class="list-group-item"> <h4 class="list-group-item-heading">山田　太郎</h4> <p class="list-group-item-text">どこどこに在住</p> </a>',
        replace: true
    }
});
