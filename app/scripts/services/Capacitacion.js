(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('Capacitacion',Capacitacion)
    .factory('Comision',Comision);

  //muestra mezcaldas noticias y capacitaciones

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

})();


