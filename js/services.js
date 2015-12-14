/**
 * Created by jiawei.dong on 12/14/2015.
 */
angular.module('carListApp',['ngResource']).factory('car',function($resource){
   return $resource('cars/:carId.json',{},{
       query:{method:'get',params:{carId:'car'},isArray:true}
   });
});