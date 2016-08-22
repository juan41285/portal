(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('CapacitacionCtrl', CapacitacionCtrl);

    function CapacitacionCtrl($scope, $routeParams, Capacitaciones, ComisionesCapa){

    	$scope.sData = {};
  		$scope.mostrar = false;

    	$scope.mostrarCapa = {};
      	// Capacitaciones es un servicio que ejecuta una api /capanew que devuelve 
      	// un arreglo con todas las capacitaciones del segundo semestre de 2016
    	$scope.mostrarCapa =  Capacitaciones.query({});
		console.log($scope.mostrarCapa);	


		$scope.funcionMostrarCom = function($pg_id){
			$scope.mostrar = true;
			
			$scope.listarCom = {};
			$scope.listarCom = ComisionesCapa.query({id: $pg_id});
			console.log($scope.listarCom);

		}


    }

})();