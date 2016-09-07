(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('CapacitacionCtrl', CapacitacionCtrl);

    function CapacitacionCtrl($scope,$rootScope, $routeParams, Capacitaciones, ComisionesCapa, SDetalleCom){

    	$scope.sData = {};
  		$scope.mostrar = false;
      $scope.capacitacion = [];
     	// Capacitaciones es un servicio que ejecuta una api /capanew que devuelve 
     	// un arreglo con todas las capacitaciones del segundo semestre de 2016
    	$scope.mostrarCapa = {};
       $scope.listarCom = {};
      $scope.mostrarCapa =  Capacitaciones.query({});
		  $scope.mostrarCapa.$promise.then(function(res){
        console.log('res', res);
        var total = res.length;
        for (var i = 0; i <= total; i++) {
             
       var idc = res[i].id;
   
      $scope.listarCom = ComisionesCapa.query({id: idc});
      $scope.capacitacion.push({capa:res[i], datos:$scope.listarCom, activo: true, collapse: false, id: res[i].id});
        // console.log('nuevo array', $scope.capacitacion);

        }
 
      }); 

      console.log('nuevo array', $scope.capacitacion);

      // DetalleCom es un servicio que ejecuta una api /detalleCom que devuelve 
      // todos los datos de una comision
      // Nota: $routeParams.idComision - idComision es el nombre que se puso en la ruta
      // en app.js en este caso '/capacitacion/:idComision'
      $scope.mostrarCom = {};
      $scope.mostrarCom = SDetalleCom.query({id: $routeParams.idComision});
      console.log($scope.mostrarCom);  

     $scope.capaVar = true;
		$scope.funcionMostrarCom = function(pg_id){
			$scope.mostrar = true;
			$scope['capaVar'+pg_id] = !$scope['capaVar'+pg_id];
			$scope.listarCom = {};
			$scope.listarCom = ComisionesCapa.query({id: pg_id});
			console.log(pg_id);



		}


    }

})();