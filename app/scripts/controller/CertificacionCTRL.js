(function () {
  'use strict';

   angular
    .module('portal.controllers')
    .controller('CertificacionCTRL', CertificacionCTRL);


function CertificacionCTRL($scope,SCertificacion){

	$scope.datosCert = {};
	$scope.datosCert = SCertificacion.query({});
	console.log($scope.datosCert);

}


})();