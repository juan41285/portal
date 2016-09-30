(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('CapacitacionCtrl', CapacitacionCtrl);

    function CapacitacionCtrl($scope, $rootScope, $routeParams, Capacitaciones, ComisionesCapa, SDetalleCom, SDestinatarios, GetCom,$http, $location) {
      // $("html, body").animate({ scrollTop: 0 }, 1500);
    	$scope.sincupo = true;
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
          //console.log($scope.listarCom);
          $scope.destinatarios = SDestinatarios.query({id: idc});
          $scope.capacitacion.push({capa:res[i], datos:$scope.listarCom, activo: true, collapse: false, id: res[i].id, destinatarios:$scope.destinatarios});
          //console.log('nuevo array', $scope.capacitacion);

        }
 
      }); 
      $scope.destinatarios = SDestinatarios.query({id: 248});
      // console.log('destinatarios', $scope.destinatarios);

      $scope.mostrarCom = {};
      $scope.mostrarCom = SDetalleCom.query({id: $routeParams.idComision});
      console.log('comision',$scope.mostrarCom);    

    $scope.funciondesplegar = function(capaId,habilitado){
      
      if(habilitado === '0'){
          //entro porque no hay comisiones disponibles para insripcion
          $scope.sincupo = false;
          console.log($scope.sincupo);  

          //busco comisiones de la capa para poder mostrar datos
          $scope.comision99= {};
          $scope.comision99 = GetCom.query({id: capaId});
          $scope.comision99.$promise.then(function(res){
             var comision = res[0].idComision;
             console.log('comision', comision);
             $location.path('/capacitacion/'+comision);
          });         


      }else{
        $scope.sincupo = true;
        var total = $scope.capacitacion.length;
        for (var i = 0; i <= total; i++) {

            if($scope.capacitacion[i].id === capaId){
              $scope.capacitacion[i].collapse = !$scope.capacitacion[i].collapse;
            }
            else
            {
               $scope.capacitacion[i].collapse = false;//!$scope.capacitacion[i].collapse;
            }
        }

      }
    }; 

    /****************BLOQUE DE RECUPERAR PASS********************/ 
    $scope.sendPass = false;
    $scope.recuperarPass = function(){
      $scope.sendPass = !$scope.sendPass ;
       $scope.PassEnviado = 100;
      
    };


  $scope.datos= {inpDNI: undefined };
  $scope.PassEnviado = 100;
  $scope.CorreoEnviado = undefined;
    $scope.ResetPass = function(){
      // console.log($scope.dniSinPass); 
      if($scope.datos.inpDNI !== undefined){

        $http({
        method  : 'POST',
        url     : 'http://rest.innovacioneducativa.gob.ar/docentes/pass_recuperar.php',
        data    : $.param($scope.datos), 
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
      })              
      .success(function(data) 
      {   

        
        $scope.PassEnviado = data.resultado;
        $scope.CorreoEnviado = data.correo;
      
      });

      }

      console.log($scope.PassEnviado );
    };




    }

})();