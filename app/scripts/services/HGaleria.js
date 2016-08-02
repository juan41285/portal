(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('HGaleria',HGaleria);


function HGaleria ($resource, BaseUrl) {
    return $resource(BaseUrl + '/ins/gal/:id',
      { pg_id: '@_id' }
    );
  }

})();