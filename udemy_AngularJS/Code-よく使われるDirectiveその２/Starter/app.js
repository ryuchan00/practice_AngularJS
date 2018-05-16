var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {
    $scope.alertClick = function() {

        alert("クリックしました");

    };

    $scope.name = 'Ken Fukuyama';

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $scope.rules = [
        { rulename: '5文字でなければいけません'},
        { rulename: 'まだ使われていないものでなければいけません'},
        { rulename: '格好いいハンドルネームにしてください' }
    ];
    
    console.log($scope.rules);

}]);