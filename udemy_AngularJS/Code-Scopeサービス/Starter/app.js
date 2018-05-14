var myApp = angular.module('myApp', []);

// $scopeについては、特別な意味はない
myApp.controller('mainController', function($scope) {
    $scope.name = '山田太郎';
    $scope.hobby = '釣り';
    $scope.getname = function () {
        return '山田';
    };
    console.log($scope.getname());
    console.log($scope);
});