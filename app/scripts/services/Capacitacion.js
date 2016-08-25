(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('Capacitaciones',Capacitaciones)
    .factory('ComisionesCapa',ComisionesCapa)
    .factory('SDetalleCom',SDetalleCom)
    .factory('Capacitacion',Capacitacion)
    .factory('Comision',Comision)
    .factory('Publicar',Publicar);

//servicio que muestra capacitaciones 2016 en portal
function Capacitaciones ($resource, BaseUrl){
    return $resource(BaseUrl + '/ins/capanew', {});
}
//servicio que muestra en el portal las comisiones 
//con inscripcion abierta de una capacitacion   
function ComisionesCapa($resource, BaseUrl){
    return $resource(BaseUrl + '/ins/comCapa/:id',
      { pg_id: '@_id' }
    );
}
//servicio que muestra la informacion de una comision 
//incluidos los datos de la capacitacion
function SDetalleCom($resource, BaseUrl){
    return $resource(BaseUrl + '/ins/detalleCom/:id',
      { pg_id: '@_id' }
    );
}


function Capacitacion ($resource, BaseUrl) {
    return $resource(BaseUrl + '/ins/capa/:id',
      { pg_id: '@_id' }
    );
}

function Comision ($resource, BaseUrl) {
    return $resource(BaseUrl + '/capacitador/comision/:id',
      { idComision: '@_id' }
    );
}

function Publicar ($resource, BaseUrl) {
    return $resource(BaseUrl + '/ins/nav/:id',
      { pg_id: '@_id' }
    );
}

 //muestra mezcaldas noticias y capacitaciones
})();


