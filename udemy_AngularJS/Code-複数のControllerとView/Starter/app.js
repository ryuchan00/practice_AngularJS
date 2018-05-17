var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.alertClick = function() {
      
        alert("クリックしました");
        
    };
    
    $scope.name = 'Ken Fukuyama';
}]);

myApp.controller('secondController', ['$scope', function ($scope) {

    $scope.alertClick = function() {

        alert("クリックしました");

    };

    $scope.name = 'Ryo Sakazaki';
}]);
