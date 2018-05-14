var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope, $log) {
    console.log('logのテスト');
    console.debug('debugテスト');
    console.info('infoのテスト');
    console.warn('warn!!!のテスト');
    console.error('例外のテスト');
});
