(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('GaleriaCtrl', GaleriaCtrl);

function GaleriaCtrl($scope, $rootScope, $routeParams, $http, HGaleria, $document, $timeout){

	$scope.template = {'galeria': 'views/galeria.tpl.html'};
	
	// Con el servicio HGaleria averiguo si el articulo en cuestion tiene galeria
	$scope.mostrar_galeria = {};
	$scope.mostrar_galeria = HGaleria.query({ id: $routeParams.pg_id });
	// console.log($scope.mostrar_galeria);

	$scope.selectedPhoto =0;
	//arreglo de imagenes		
	$rootScope.images= $scope.mostrar_galeria;
	// console.log('galeria data: '+$rootScope.images);

	
	$scope.select=function(index){
		$scope.selectedPhoto=index;
	}
	
	$rootScope.images.$promise.then(function(res){
		var tam= res.length

		var countUp = function() {
	        if ($scope.selectedPhoto == tam-1){
				$scope.selectedPhoto = 0;
				$timeout(countUp, 5000);
				exit(); 
	        }

	        $scope.selectedPhoto+= 1;
	        $timeout(countUp, 5000);
	    }
	    
	    $timeout(countUp, 5000);

	});

    
    

    



	// }

}

})();    