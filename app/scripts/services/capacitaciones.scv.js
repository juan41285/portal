(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('Capacitaciones',Capacitaciones)
    .factory('ComisionesCapa',ComisionesCapa)
    .factory('GetCom',GetCom)
    .factory('SDetalleCom',SDetalleCom)
    .factory('SDestinatarios',SDestinatarios)
    .factory('SCertificacion',SCertificacion)
    .factory('Capacitacion',Capacitacion)
    .factory('Comision',Comision)
    .factory('Publicar',Publicar)
    .factory('capaModal',capaModal);
    
    

//servicio que muestra capacitaciones 2016 en portal
function Capacitaciones ($http, BaseUrl){

  return $http({
    method: 'GET',
    url: BaseUrl+'/capacitaciones',
    headers: {'Content-Type': 'application/json; charset=utf-8'}
   }).then(function(res){
     return res.data;
     console.log('res.data', res.data);
   });

    // return $resource(BaseUrl + '/capacitaciones', {});
}
//servicio que muestra en el portal las comisiones 
//con inscripcion abierta de una capacitacion   
function ComisionesCapa($resource, BaseUrl){
    return $resource(BaseUrl + '/capacitaciones/:id',
      { pg_id: '@_id' }
    );
}
function GetCom($resource, BaseUrl){
    return $resource(BaseUrl + '/comision/:id',
      { pg_id: '@_id' }
    );
}
//servicio que muestra la informacion de una comision 
//incluidos los datos de la capacitacion
function SDetalleCom($resource, BaseUrl){
    return $resource(BaseUrl + '/comision/detalles/:id',
      { pg_id: '@_id' }
    );
}
//servicio que muestra los destinatarios de una capacitacion
function SDestinatarios($resource, BaseUrl){
    return $resource(BaseUrl + '/capacitaciones/destinatarios/:id',
      { id: '@_id' }
    );
}
//servicio que muestra datos de certificacion 
function SCertificacion ($resource, BaseUrl){
    return $resource(BaseUrl + '/ins/certificacion', {});
}

function Capacitacion ($http, BaseUrl,id) {

   return $http({
    method: 'GET',
    url: BaseUrl+'/capacitaciones/'+id,
    headers: {'Content-Type': 'application/json; charset=utf-8'}
   }).then(function(res){
     return res.data;
     console.log('res.data', res.data);
   });


}

function Comision ($http, BaseUrl) {


    return $resource(BaseUrl + '/capacitador/comision/:id',
      { idComision: '@_id' }
    );
}

function Publicar ($resource, BaseUrl) {
    return $resource(BaseUrl + '/ins/nav/:id',
      { pg_id: '@_id' }
    );
}

 function capaModal($uibModal) {

    function show(capa) {
      return $uibModal.open({
        templateUrl: '../views/capa-modal.tpl.html',
        controller: function() {
          var vm = this;
          vm.capa = capa;
         
        },
        controllerAs: 'vm'
      });
    }

    return {
      show: show
    };

  }

 //muestra mezcaldas noticias y capacitaciones
})();

