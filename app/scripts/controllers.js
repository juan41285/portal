(function () {
  'use strict';



  /* @ngInject */
  function SlideListCtrl (Slide) {
    this.slides = Slide.query();
  }

 function CalListCtrl($scope, $http, Evento) {
        $scope.evento = Evento.get();
    }

 function MesesCtrl($scope, $filter)
 {
      var date = new Date();
   var mActual = $filter('date')(new Date(date), 'M') -1;
   
    $scope.meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    $scope.actual =$scope.meses[mActual]; // mActual; 
   $scope.prop = {
    'type': 'select', 
    'name': 'meses',
    'value': $scope.actual, 
    'values': $scope.meses
  };

}
 

 function CalHoyCtrl($scope, $http, Hoy) {
        $scope.hoy = Hoy.get();
        $scope.template = {'calendario': 'views/agenda-lista.tpl.html'};
        
    }

function ArtListCtrl($scope, $http, Articulo) {
        $scope.articulo = Articulo.get();
        $scope.template ={'articulos':'views/articulos-lista.tpl.html'};
        
    }



function ArticuloCtrl ($routeParams,Slide) {
    this.noticia = {};
    //this.galeria = {};
  
    this.noticia =  Slide.query({ id: $routeParams.pg_id });
   // this.noticia =  Galeria.query({ id: $routeParams.pg_id });

  }

function AccesosCtrl($scope)
{
        // $scope.articulo = Accesos.get();
        $scope.template ={'accesos':'views/accesos-lista.tpl.html'};
}

function SlideLineasCtrl($scope,$http, Slidelineas)
{
        $scope.slineas = Slidelineas.get();
        $scope.template ={'slideLineas':'views/slide-lineas.tpl.html'};
        $scope.primero = 1;
}

function ExpListCtrl($scope,$http, Experiencias)
{
        $scope.experiencia = Experiencias.get();
        $scope.template ={'experiencias':'views/exp-lista.tpl.html'};
        
}

function NewCtrl($scope,$http, Experiencias)
{
        $scope.items = Experiencias.get();
   
}
function BancosListCtrl($scope,$http, Bancos)
{
        $scope.bancos = Bancos.get();
        $scope.template ={'bancos':'views/recurso-lista.tpl.html'};
        
}

function PieCtrl ($scope)
{
  $scope.template = {'pie': 'views/footer.tpl.html'};
}

  /* @ngInject */

function CapaCtrl ($routeParams,Capacitacion, Comision) {
    this.capacitacion = {};
    this.comision = {};

  // var self = this;

  //   Capacitacion.query({ id: $routeParams.postId })
  //     .$promise.then(
  //       function (value) {
  //         self.capacitacion = value[0];
  //         self.comision = Comision.query({ id: self.comision.idComision });
  //       },
  //       function (error) {
  //         console.log('ERROR: ' + error);
  //       }
  //     );
    
    this.capacitacion =  Capacitacion.query({ id: $routeParams.pg_id });
    //this.capacitacion =  value[1];

    //this.comision =  Comision.query({ fk_capa: $routeParams.fk_capa});

  } 
  /***************************************************************/
  angular
    .module('portal.controllers', ['portal.services','ngLocale'])
    .controller('SlideListCtrl', SlideListCtrl)
    .controller('MesesCtrl', MesesCtrl)
    .controller('CalHoyCtrl', CalHoyCtrl)
    .controller('ArtListCtrl', ArtListCtrl)
    .controller('PieCtrl', PieCtrl)
    .controller('AccesosCtrl', AccesosCtrl)
    .controller('SlideLineasCtrl', SlideLineasCtrl)
    .controller('ExpListCtrl', ExpListCtrl)
    .controller('BancosListCtrl', BancosListCtrl)
    .controller('ArticuloCtrl', ArticuloCtrl)
    .controller('NewCtrl', NewCtrl)
    .controller('CapaCtrl', CapaCtrl)
    .controller('CalListCtrl', CalListCtrl);
})();
 