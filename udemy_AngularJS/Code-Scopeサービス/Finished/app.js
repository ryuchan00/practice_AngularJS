var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.name = '山田 太郎';
    $scope.hobby = '釣り';
    
    $scope.getname = function() {
        return '山田';
    }
    
    console.log($scope);
    
});