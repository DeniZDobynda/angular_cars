app = angular.module('tolkienApp', ['ngRoute'])

    .config(function ($routeProvider) {
       $routeProvider
           .when('/main', {
               templateUrl : 'main.html',
               controller : 'carsController'
           })
           .when('/shop/:id', {
               templateUrl : 'shopItem.html',
               controller : 'shopItemController'
           })
           .when('/shop', {
               templateUrl : 'shop.html',
               controller : 'shopController'
           })
           .when('/about', {
               templateUrl : 'about.html',
               controller : ''
           })
           .when('/publish/:id', {
               templateUrl : 'publish.html',
               controller : 'publishController'
           })
           .when('/publish', {
               templateUrl : 'publish.html',
               controller : 'publishController'
           })
           .otherwise('/main')
    });