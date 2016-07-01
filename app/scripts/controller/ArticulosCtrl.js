(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('PublicacionesCtrl', PublicacionesCtrl)
    .controller('ArticuloCtrl', ArticuloCtrl);
      /* @ngInject */
  function PublicacionesCtrl ($scope, Historial) {

     // var $scope = this;

  $("html, body").animate({ scrollTop: 0 }, 1500);
      var fecha=new Date();
      $scope.mes= fecha.getMonth() +1 ;
      $scope.anio= fecha.getFullYear();
      $scope.tipo= 'Todos';

     
     $scope.cambiaMes = function(mes){
  $scope.mes= mes;
  $scope.noticias = Historial.query({anio: $scope.anio, mes: $scope.mes, tipo: $scope.tipo });
     }

         $scope.cambiaTipo = function(tipo){
   $scope.tipo= tipo;
   $scope.noticias = Historial.query({anio: $scope.anio, mes: $scope.mes, tipo: $scope.tipo });
     }

           $scope.cambiaAnio = function(anio){
   $scope.anio= anio;
   $scope.noticias = Historial.query({anio: $scope.anio, mes: $scope.mes, tipo: $scope.tipo });
     }     

         $scope.pageChanged = function(newPage) {
        $("html, body").animate({ scrollTop: 0 }, 1500);
    };
 $scope.noticias = Historial.query({anio: $scope.anio, mes: $scope.mes, tipo: $scope.tipo });

    console.log($scope.noticias);

  }

function ArticuloCtrl ($scope,$routeParams,Articulo) {
  $("html, body").animate({ scrollTop: 0 }, 1500);
    $scope.noticia = {};
    // this.relacion = Slide.get();
  
    $scope.noticia =  Articulo.query({ id: $routeParams.pg_id });
    //this.galeria =  Galeria.query({ id: $routeParams.pg_id });

  } 
})();
 