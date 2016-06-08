(function () {
  'use strict';



  /* @ngInject */
  function Slide ($resource, BaseUrl) {
    return $resource(BaseUrl + '/slides/:id',
      { pg_id: '@_id' }
    );
  }

  /* @ngInject */
  function Galeria ($resource, BaseUrl) {
    return $resource(BaseUrl + '/galerias/:id',
      { pg_id: '@_id' }
    );
  }



  /* @ngInject */

  function Evento($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/agendas/agenda', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

/* @ngInject */
    function Hoy($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/agendas/agenda/hoy', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

      function Articulo($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/articulo', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }


function Slidelineas($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/lineas/btn', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }
  // /* @ngInject */
function Experiencias($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/experiencias', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }
  
  // /* @ngInject */
function Bancos($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/capacitador/recursos', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }
  /* @ngInject */
function dateToISO() {
  return function(input) {
    input = new Date(input).toISOString();
    return input;
  };
}

/********DESARROLLO PROFESIONAL *******/

function Capacitacion ($resource, BaseUrl) {
    return $resource(BaseUrl + '/capacitador/capacitacion/:id',
      { pg_id: '@_id' }
    );
  }

function Comision ($resource, BaseUrl) {
    return $resource(BaseUrl + '/capacitador/comision/:id',
      { idComision: '@_id' }
    );
  }

/****************/
  angular
    .module('portal.services', ['ngResource'])
    .constant('BaseUrl', 'http://tictucuman.net/portal')
    .factory('Slide', Slide)
    .factory('Hoy', Hoy)
    .factory('Articulo', Articulo)
    .factory('Slidelineas',Slidelineas)
    .factory('Experiencias',Experiencias)
    .factory('Bancos',Bancos)
    .factory('Galeria',Galeria)
    .factory('Capacitacion',Capacitacion)
    .factory('Comision',Comision)
    .filter('dateToISO',dateToISO)
    .factory('Evento',Evento);
})();
