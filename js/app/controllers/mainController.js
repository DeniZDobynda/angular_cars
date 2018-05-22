angular.module('tolkienApp')

    .controller('carsController', ['$scope', 'carsService', function ($scope, carsService) {

        $scope.cars = {};

        carsService.getCars()
            .then(function (response) { $scope.cars = response.data.list.slice(0,3); })
    }])

    .controller('menuController', ['$scope', function ($scope) {

        $scope.selected = "";
        $scope.select = function (topic) {
            $scope.selected = topic;
        };

        $scope.isSelected = function (topic) {
            return $scope.selected === topic;
        };

    }])

    .controller('shopController', ['$scope', 'carsService', function ($scope, carsService) {
        $scope.cars = {};

        carsService.getCars()
            .then(function (response) { $scope.cars = response.data['list']; })
    }])

    .controller('shopItemController', ['$scope', '$routeParams', 'carsService', function ($scope, routeParams, carsService) {

        $scope.car = {};

        carsService.getCar(routeParams.id)
            .then(function (response) { $scope.car = response.data; });



        $scope.might = {};

        carsService.getCars()
            .then(function (response) {
                var cars = response.data['list'];
                var i = 0;
                while (i < cars.length) {
                    console.log(cars[i]);
                    console.log(cars[i].id);
                    if (cars[i].id !== routeParams.id) {
                        $scope.might = cars[i];
                        return ;
                    }
                    i += 1;
                }
            });



        $scope.delete = function () {
            carsService.deleteCar(routeParams.id)
                .then(function (value) { if (value === true) { window.location.href.replace("shop/" + routeParams.id, "shop") } else {alert(value);} },
                    function (reason) { alert(reason); })

        }

    }])

    .controller('publishController', ['$scope', '$routeParams', 'carsService', function($scope, routeParams, carsService) {

        $scope.car = {};

        if (routeParams.id !== undefined) {
            carsService.getCar(routeParams.id)
                .then(function (response) {
                    $scope.car = response.data;
                });
        }

        $scope.transmissions = [{value:"manual", label:"Manual"}, {value:"auto",label:"Auto"}];

        $scope.send = function() {

            console.log($scope.feedback);

            var car = Object();
            car.name = $scope.feedback.name.$viewValue;
            if ($scope.feedback.transmission !== undefined) {
                car.transmission = $scope.feedback.transmission.$viewValue;
            }
            if ($scope.feedback.price !== undefined) {
                car.price = $scope.feedback.price.$viewValue;
            }
            if ($scope.feedback.color !== undefined) {
                car.color = $scope.feedback.color.$viewValue;
            }
            if ($scope.feedback.run !== undefined) {
                car.run = $scope.feedback.run.$viewValue;
            }
            if ($scope.feedback.phone !== undefined) {
                car.phone = $scope.feedback.phone.$viewValue;
            }
            if ($scope.feedback.fuel !== undefined) {
                car.fuel = $scope.feedback.fuel.$viewValue;
            }
            car.description = $scope.feedback.description.$viewValue;
            car.city = $scope.feedback.city.$viewValue;
            car.abs = $scope.feedback.abs.$viewValue;
            car.centralLock = $scope.feedback.clock.$viewValue;
            car.airbag = $scope.feedback.abag.$viewValue;


            console.log(car);
            console.log(JSON.stringify(car));

            if (routeParams.id) {
                carsService.updateCar(car, routeParams.id)
                    .then(function (response) {
                            window.location.href.replace("publish", "shop/" + response.data['id'])
                        },
                        function (response) { // optional
                            alert("Some error just happened, try again later");
                            console.log(response);
                        });
            } else {
                carsService.sendCar(car)
                    .then(function (response) {
                            window.location.href.replace("publish", "shop/" + response.data['id'])
                        },
                        function (response) { // optional
                            alert("Some error just happened, try again later");
                            console.log(response);
                        });
            }

        };
    }]);
