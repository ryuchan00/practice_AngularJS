let myApp = angular.module('myApp', ['ngMessages']); // moduleの第二引数には依存するモジュールを入れる
// この場合は、'ngMessages'というモジュールに依存してるよ!!とAngularJSに教えている

myApp.controller('mainController', function () {
});
