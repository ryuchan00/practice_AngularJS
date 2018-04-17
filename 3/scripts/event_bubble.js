angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        $scope.onclick1 = function () {
            console.log("outerをクリックしました");
        };
        $scope.onclick2 = function($event) {
            // stopPropagationがないと、親要素にも伝播してしまう
            $event.stopPropagation();
            console.log("innerをクリックしました")
        }
    }]);
