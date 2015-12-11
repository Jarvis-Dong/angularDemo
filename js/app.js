/**
 * Created by jiawei.dong on 12/11/2015.
 */
var carListApp = angular.module('carListApp', ['ngRoute']);
carListApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/cars',{templateUrl:'partials/car-list.html' , controller:'carListCtrl'}).
    when('/cars/:carId',{templateUrl:'partials/car-detail.html' , controller:'carDetailCtrl'}).
        otherwise({redirectTo:'/cars'})

}]);

