angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        // 特に設定しないとfalseのようだ
        $scope.show = true;
        $scope.onclick = function () {
            angular.element(document.getElementById('panel'))
                .css({
                    backgroundColor: '#000',
                    color: '#fff'
                });
        };
    }]);
