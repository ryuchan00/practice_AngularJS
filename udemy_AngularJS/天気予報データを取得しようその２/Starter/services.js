// service
weatherApp.service('cityService', function () {

    this.city = 'Osaka';

});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    //関数化しないと使えないよ
    this.getWeather = function (city, days) {


        let weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", {
            callback: 'JSON_CALLBACK'
        }, {
            get: {
                method: 'JSONP'
            }
        });

        return weatherAPI.get({
            q: city,
            cnt: days,
            appid: key
        });
    }
}]);