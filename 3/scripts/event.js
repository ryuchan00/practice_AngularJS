angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        // 変数greetingを初期化
        $scope.greeting = 'こんにちは、権兵衛さん！';

        // ボタンクリック時に呼び出されるイベントリスナー
        $scope.onclick = function() {
            $scope.greeting = 'こんにちは、' + $scope.myName + 'さん！';
        }
    }]);
