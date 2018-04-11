angular.module('myApp', [''])
    .controller('MyController', ['$scope', '$sce', function ($scope, $sce) {
        // これだと、セキュリティ上危険な可能性も捨てきれないため動作しない
        // $scope.url = 'http://www.wings.msn.to/'
        $scope.url = $sce.trustAs($sce.RESOURCE_URL, 'http://www.wings.msn.to/');
    }]);
