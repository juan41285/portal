(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('Publicaciones',Publicaciones);

function Publicaciones (BaseUrl,$http) {
    return {
    	getById:getById,
    	// getNoticias:getNoticias,
    	// getCapacitaciones:getCapacitaciones,
    	// getExperiencias:getExperiencias
  } 

  function getById(id){

	 return $http({
	  method: 'GET',
	  url: BaseUrl+'/articulos/'+ id,
	  headers: {'Content-Type': 'application/json; charset=utf-8'}
	 }).then(function(res){
	 	 return res.data;
	 });
  }

}

})();