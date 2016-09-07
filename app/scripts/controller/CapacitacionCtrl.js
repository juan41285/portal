(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('CapacitacionCtrl', CapacitacionCtrl);

    function CapacitacionCtrl($scope,$rootScope, $routeParams, Capacitaciones, ComisionesCapa, SDetalleCom, SDestinatarios){
      $("html, body").animate({ scrollTop: 0 }, 1500);
    	$scope.sData = {};
  		$scope.mostrar = false;
      $scope.capacitacion = [];
    	$scope.mostrarCapa = {};
      $scope.listarCom = {};
      $scope.destinatarios = {};
      $scope.mostrarCapa =  Capacitaciones.query({});
		  $scope.mostrarCapa.$promise.then(function(res){
        var total = res.length;
        for (var i = 0; i <= total; i++) {
           
          var idc = res[i].id;
   
          $scope.listarCom = ComisionesCapa.query({id: idc});
          $scope.destinatarios = SDestinatarios.query({id: idc});
          $scope.capacitacion.push({capa:res[i], datos:$scope.listarCom, activo: true, collapse: false, id: res[i].id, destinatarios:$scope.destinatarios});
        // console.log('nuevo array', $scope.capacitacion);

        }
 
      }); 
   $scope.destinatarios = SDestinatarios.query({id: 248});
      // console.log('destinatarios', $scope.destinatarios);

      $scope.mostrarCom = {};
      $scope.mostrarCom = SDetalleCom.query({id: $routeParams.idComision});
      // console.log('comision',$scope.mostrarCom);    

    $scope.funciondesplegar = function(capa_id){
     
      var total = $scope.capacitacion.length;
      for (var i = 0; i <= total; i++) {

         
          if($scope.capacitacion[i].id === capa_id){
            $scope.capacitacion[i].collapse = !$scope.capacitacion[i].collapse;
          }
          else
          {
             $scope.capacitacion[i].collapse = false;//!$scope.capacitacion[i].collapse;
          }
      }
    }




    }

})();