(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('homeSlide',homeSlide)
    .factory('Hoy',Hoy)
    .factory('iDagenda',iDagenda);

function homeSlide ($resource, BaseUrl) {
    return $resource(BaseUrl + '/home/slides/:id',
      { pg_id: '@_id' }
    );
  } 

function Hoy($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/agendas/agenda/hoy', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

  function iDagenda ($resource, BaseUrl) {
    return $resource(BaseUrl + '/agendas/iDagenda/:id',
      { ag_id: '@_id' }
    );
  }



})();
