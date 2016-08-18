(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('CapacitacionCtrl', CapacitacionCtrl);

    function CapacitacionCtrl($scope, $routeParams, Capacitaciones){

    	$scope.mostrarCapa = {};
      	// Capacitaciones es un servicio que ejecuta una api /capanew que devuelve 
      	// un arreglo con todas las capacitaciones del segundo semestre de 2016
    	$scope.mostrarCapa =  Capacitaciones.query({});
		console.log($scope.mostrarCapa);	   


    }

})();