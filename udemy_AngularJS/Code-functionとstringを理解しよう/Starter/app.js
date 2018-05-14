var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope) {
    console.log($scope);
});

let searchPeople = function ($scope, lastName, height, age, hobby) {
    return '山田　太郎'
};

console.log(angular.injector().annotate(searchPeople));