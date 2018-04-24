angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        $scope.data = {book: {}};

        // 全てチェックがオンオフされた時の挙動
        $scope.onchange = function () {
            console.log('in function onchange.');
            for (var i = 0; i < $scope.books.length; i++) {
                var isbn = $scope.books[i].isbn;
                $scope.data.book[isbn] = $scope.all;
            }
        };

        $scope.books = [
            {
                isbn: '978-111-111-222',
                title: 'サーブレット&JSPポケット...',
                price: 2600,
                publish: '技術評論社',
            },
            {
                isbn: '978-111-111-333',
                title: 'PHPポケット...',
                price: 1980,
                publish: 'PHP出版',
            },
        ];

    }]);
