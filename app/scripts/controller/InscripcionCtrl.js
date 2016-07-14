(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('InscripcionCtrl', InscripcionCtrl);


   	function InscripcionCtrl($scope) {

    	$scope.template = {'formulario': 'views/articulo-formulario.tpl.html'};
	}

})();
 