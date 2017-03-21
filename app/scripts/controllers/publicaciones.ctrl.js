(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('PublicacionesCtrl', PublicacionesCtrl);

      /* @ngInject */
  function PublicacionesCtrl ($scope, $routeParams,Publicaciones) {

   $scope.id = parseInt($routeParams.title);
   Publicaciones.getById($scope.id).then(function(res){

   	$scope.p = res;
   	console.log($scope.p); 
   	 $('html, body').animate({ scrollTop: 0 }, 1000);
   })
}





})();
 