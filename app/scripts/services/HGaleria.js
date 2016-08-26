(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('HGaleria',HGaleria);

//servicio que devuelve la galeria de foto de un articulo
function HGaleria ($resource, BaseUrl) {
    return $resource(BaseUrl + '/ins/gal/:id',
      { pg_id: '@_id' }
    );
  }

})();