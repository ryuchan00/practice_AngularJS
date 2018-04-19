angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        var max = 140;
        $scope.count = max;
        $scope.myStyle = {color: '#00f'}

        // テキストエリアの変更を監視
        $scope.onchange = function () {
            // 残り文字数を反映
            $scope.count = max - $scope.tweet.length;
            // 残り文字数に応じて、スタイルを変更
            if ($scope.count > 10) {
                $scope.myStyle = {color: '#00f'};
            } else if ($scope.count > 0) {
                $scope.myStyle = {color: '#f0f'};
            } else {
                $scope.myStyle = {color: '#f00', fontWeight: 'bold'};
            }
        }
    }]);
