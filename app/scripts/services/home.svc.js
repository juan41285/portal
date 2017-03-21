(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('Home',Home);

function Home (BaseUrl,$http) {
return { 
      getSlides:getSlides,
      getPublicaciones:getPublicaciones
      
    }

    function getSlides(){
  
    return $http({
          method: 'GET',
          url: BaseUrl+'/articulos/publicaciones/slides',
          headers: {'Content-Type': 'application/json; charset=utf-8'}
         }).then(function(res){
         	 return res.data;
         });
  } 
function getPublicaciones(page){
  
    return $http({
          method: 'GET',
          url: BaseUrl+'/articulos/publicaciones',
          headers: {'Content-Type': 'application/json; charset=utf-8'},
          params: {'page' : page}
         }).then(function(res){
           return res.data;
         });
  } 


}
})();