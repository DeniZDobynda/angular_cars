app = angular.module('tolkienApp')

    .constant('baseURL', 'http://lab.kids-lu-server.xyz/api/v1/auto')

    .service('carsService',[ '$http', 'baseURL', function ($http, baseURL) {

        this.getCars = function() {
            $http.defaults.headers.common.Authorization = "Basic dGVzdDp0ZXN0";
            return $http.get(baseURL);
        };

        this.getCar = function (id) {
            $http.defaults.headers.common.Authorization = "Basic dGVzdDp0ZXN0";
            return $http.get(baseURL + '/' + id);
        };

        this.sendCar = function (car) {
            $http.defaults.headers.post['Content-Type'] = 'application/json';
            $http.defaults.headers.post['Authorization'] = 'Basic dGVzdDp0ZXN0';
            // $http.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
            var js = JSON.stringify(car);
            console.log(js);
            return $http({
                method: 'POST',
                url: baseURL,
                withCredentials: true,
                data : js,
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Basic dGVzdDp0ZXN0'
                }
            })
        };

        this.updateCar = function (car, id) {
            $http.defaults.headers.post['Content-Type'] = 'application/json';
            $http.defaults.headers.post['Authorization'] = 'Basic dGVzdDp0ZXN0';
            // $http.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
            var js = JSON.stringify(car);
            console.log(js);
            return $http({
                method: 'PUT',
                url: baseURL + "/" + id,
                withCredentials: true,
                data : js
            })
        };

        this.deleteCar = function (id) {
            return $http.delete(baseURL + "/" + id);
        }


    }]);