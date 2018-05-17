var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.alertClick = function () {

        alert("クリックしました");

    };

    $scope.name = 'Ken Fukuyama';
}]);

myApp.controller('secondController', ['$scope', function ($scope) {

    $scope.alertClick = function () {

        alert("クリックしました");

    };

    $scope.name = 'Ryo Sakazaki';
}]);

// ちなみにidで定義してあるハッシュがなくても、イベントは発火する
// フラグメント識別子が変わることでSPAが動くんだな
window.addEventListener('hashchange', function () {
    console.log('ハッシュが変わりました' + window.location.hash);

    if (window.location.hash === '#/bookmark/1') {
        console.log('ページ1にきました')
    }

    if (window.location.hash === '#/bookmark/2') {
        console.log('ページ2にきました')
    }

    if (window.location.hash === '#/bookmark/3') {
        console.log('ページ3にきました')
    }
});
