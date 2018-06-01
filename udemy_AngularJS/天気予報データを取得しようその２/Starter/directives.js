// directive
weatherApp.directive('weatherReport', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.htm',
        replace: true,
        scope: {
            weatherDay: '=', // オブジェクトを渡してほしい
            convertToStandard: '&', // 関数を渡してほしい
            convertToDate: '&',
            dateFormat: '@' // テキストを渡してほしい
        }
    }
});