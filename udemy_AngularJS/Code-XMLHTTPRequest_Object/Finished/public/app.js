var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    // XMLHttpRequest ブラウザの標準で搭載されている
    // そもそもXMLHttpRequestは、読み込んだページからさらにHTTPリクエストを発することができ、ページ繊維することなしにデータを
    // 送受信できるAjaxの基幹技術である
    var rulesrequest = new XMLHttpRequest();

    // おまじない的な要素の強い部分
    rulesrequest.onreadystatechange = function () {
        $scope.$apply(function () {
            if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
                $scope.rules = JSON.parse(rulesrequest.responseText);
            }
        })
    };

    rulesrequest.open('GET', 'http://localhost:3000/api', true);
    rulesrequest.send();
}]);