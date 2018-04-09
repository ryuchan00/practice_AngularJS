// モジュールを定義する。ここでは`myApp`というモジュールを定義した。
angular.module('myApp', [])
// コントローラーを定義する。moduleメソッドの戻り値はモジュール(Moduleオブジェクト)です。
// ここでは(myApp モジュールの)controllerメソッドを利用して、新たにMyControllerコントローラーを定義しいてます。
    .controller('MyController', function ($scope) {
        // スコープオブジェクト($scope)とは、テンプレート(HTML)とJSによるモデルとを橋渡しするためのオブジェクトです。
        // AngularJSの世界では、テンプレートで利用する値や挙動は、スコープを介して受け取るのが基本です。
        $scope.msg = 'こんにちは、AngularJS！'
    });