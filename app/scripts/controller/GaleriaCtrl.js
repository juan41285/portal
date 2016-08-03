(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('GaleriaCtrl', GaleriaCtrl);

function GaleriaCtrl($scope, $rootScope, $routeParams, $http, HGaleria, $document){

	$scope.template = {'galeria': 'views/galeria.tpl.html'};
	
	// Con el servicio HGaleria averiguo si el articulo en cuestion tiene galeria
	$scope.mostrar_galeria = {};
	$scope.mostrar_galeria = HGaleria.query({ id: $routeParams.pg_id });
	console.log($scope.mostrar_galeria);

	$scope.selectedPhoto =0;
	//arreglo de imagenes		
	$scope.images= $scope.mostrar_galeria;
	console.log($scope.images);
	
	$scope.select=function(index){
		$scope.selectedPhoto=index;
	}

}

})();    