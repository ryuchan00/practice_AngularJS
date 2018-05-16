var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function (newValue, oldValue) {
        console.log('occur change something');
        console.log('old:', oldValue);
        console.log('new:', newValue);
    });

    // setInterval(function () {
    $timeout(function () {
        // $digestで監視対象にするように宣言するための$scope.$apply
        // ちなみに$timeoutと書くとAngularJSで定義されているサービスとなり、$applyが必要なくなる
        // $scope.$apply(function () {
        $scope.handle = 'hogehoge';
        console.log('スコープが変わりました');
        // });
    }, 3000);

}]);