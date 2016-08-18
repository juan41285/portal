(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('Capacitaciones',Capacitaciones)
    .factory('Capacitacion',Capacitacion)
    .factory('Comision',Comision)
    .factory('Publicar',Publicar);

  //muestra mezcaldas noticias y capacitaciones
function Capacitaciones ($resource, BaseUrl){
    return $resource(BaseUrl + '/ins/capanew', {});
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


})();


