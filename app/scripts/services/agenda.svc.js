(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('Agendas',Agendas)
    .factory('alert',alert);

function Agendas (BaseUrl,$http) {
    return {
    	getAgenda:getAgenda,
    	getDia:getDia,
    	getHoy:getHoy,
    	// getExperiencias:getExperiencias
  } 

  function getAgenda(){

	 return $http({
	  method: 'GET',
	  url: BaseUrl+'/agendas',
	  headers: {'Content-Type': 'application/json; charset=utf-8'}
	 }).then(function(res){
	 	 return res.data.data;
	 });
  }
function getDia(dia){

   return $http({
    method: 'GET',
    url: BaseUrl+'/agendas/'+dia,
    headers: {'Content-Type': 'application/json; charset=utf-8'}
   }).then(function(res){
     return res.data;
   });
  }

  function getHoy(){

   return $http({
    method: 'GET',
    url: BaseUrl+'/agendasHoy',
    headers: {'Content-Type': 'application/json; charset=utf-8'}
   }).then(function(res){
     return res.data;
   });
  }

}

 function alert($uibModal) {

    function show(action, event) {
      return $uibModal.open({
        templateUrl: '../views/agenda-modal.tpl.html',
        controller: function() {
          var vm = this;
          vm.action = action;
          vm.event = event;
        },
        controllerAs: 'vm'
      });
    }

    return {
      show: show
    };

  }

})();