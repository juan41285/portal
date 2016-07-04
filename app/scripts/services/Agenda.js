(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('Evento',Evento)
    .factory('EventoxLinea',EventoxLinea);

  /* @ngInject AGENDAS */

  function Evento($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/agendas/agenda/:fecha', //la url donde queremos consumir
        {AgFecha: '@_fecha'});
  }



/* @ngInject */
    function EventoxLinea($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/agendas/agenda/:fecha/:linea', //la url donde queremos consumir
        {linea: '@_linea', fecha: '@_fehca'});
  }


})();
