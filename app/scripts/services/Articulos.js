(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('Historial',Historial)
    .factory('Articulo',Articulo);

  //muestra mezcaldas noticias y capacitaciones
function Historial($resource, BaseUrl) {
return $resource(BaseUrl + '/articulos/todos', {});

}
  //muestra mezcaldas noticias y capacitaciones
function Articulo($resource, BaseUrl)
{
    return $resource(BaseUrl + '/articulos/publicaciones/:pg_id', //la url donde queremos consumir
        {pg_id: '@_id'});
}


})();
