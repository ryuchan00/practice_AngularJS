angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        $scope.books = [
            'サーブレット&JSPポケット...',
            'iPhone/Ipad開発者ポケットリファレンス',
            'Javaポケットリファレンス',
            'Javaポケットリファレンス',
        ];
    }]);
