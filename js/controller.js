/**
 * Created by jiawei.dong on 12/11/2015.
 */
angular.module('carListApp').controller('carListCtrl', ['$scope','$http',function ($scope, $http) {
    $http.get('cars/package.json').success(function (data) {
        $scope.cars = data;
    });

    $scope.search = '';
}]);
angular.module('carListApp').controller('carDetailCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
    $scope.carId = $routeParams.carId;
    $http.get('cars/'+$routeParams.carId+'.json').success(function (data) {
        $scope.car = data;
    });
}]);
