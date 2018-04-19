angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        // 著者情報(author)を準備
        $scope.articles = [
            {
                title: 'サーブレット&JSPポケット...',
                body: 'Javaエンジニアには欠かせないサーブレット...',
                autho: '山田与四郎'
            },
            {
                title: 'iPhone/Ipad開発者ポケットリファレンス',
                body: 'スマホやだタブレットの代表格...',
                autho: '片桐安十郎'
            },
            {
                title: 'Javaポケットリファレンス',
                body: '忘れてしまいがちな基本情報を...',
                autho: '虹村億安'
            }
        ];

    }]);
