(function() {
	'use strict';


	angular
		.module('portal.controllers')
		.controller('InscripcionCtrl', InscripcionCtrl);


	function InscripcionCtrl($scope, $routeParams, $http, $document) {

		$scope.template = {
			'formulario': 'views/articulo-formulario.tpl.html',
			'relacionados': 'views/articulo-relacionados.tpl.html'
		};
		// Esta variable determina el div que se debe mostrar (mensaje o formulario)
		$scope.resultado = 20;

		$scope.articuloDatos = {};
		// Capacitacion es un servicio que ejecuta una api cap/:pg_id que devuelve 
		// un arreglo con los datos de la comision
		//   	$scope.articuloDatos =  Capacitacion.query({ id: $routeParams.pg_id });
		// console.log($scope.articuloDatos);	   

		// formularios
		// enviar form
		$scope.InsData = {};

		//***************************************************************
		// $scope.publicar = {};
		// $scope.publicar = Publicar.query({ id: $routeParams.pg_id });

		// // console.log($scope.muestroCapa);
		// console.log($scope.publicar);
		//***************************************************************
		//

		$scope.Inscribir = function(com) {

			$scope.InsData.id = com;
			console.log($scope.InsData);
			console.log($scope.InsData.id);

			$http({
					method: 'POST',
					url: 'http://api.educaciondigitaltuc.gob.ar/api-portal/public/inscripcion',
					data: $.param($scope.InsData), // pass in data as strings
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					} // set the headers so angular passing info as form data (not request payload)
				})
				.then(function(response) {
					console.log(response.data);
					if (response.data.resultado == 0) {
						//si hubo error en la base de datos
						$scope.resultado = response.data.resultado;


					}
					if (response.data.resultado == 1) {
						//si el mail esta repetido - Suspensión momentanea
						$scope.resultado = response.data.resultado;

						$scope.fechaSuspension = response.data.fecha_suspension;
						$scope.fechaFin = response.data.fecha_fin;

					}
					if (response.data.resultado == 2) {
						//Una capacitación por vez
						$scope.resultado = response.data.resultado;

						$scope.cursando1 = response.data.curso1;

					}
					if (response.data.resultado == 3) {
						//inscripción correcta
						$scope.resultado = response.data.resultado;

						$scope.capacitacion = response.data.capacitacion;
						$scope.fecha_ini = response.data.fecha_ini;
						$scope.horario = response.data.horario;
						$scope.lugar = response.data.lugar;
						$scope.codigo = response.data.codigo;

					}
					if (response.data.resultado == 4) {
						//cupo completo
						$scope.resultado = response.data.resultado;

					}
					if (response.data.resultado == 5) {
						//ya registra inscripcion para el mismo curso
						$scope.resultado = 5;
						$scope.fecha_ins = response.data.fechaIns;
						$scope.codigo = response.data.codigo;

					}

					if (response.data.resultado == 12) {
						//Registra una edicion aprobada de la misma capacitacion
						$scope.resultado = response.data.resultado;

						// $scope.fecha_ins = data.fecha_ins;
						// $scope.codigo = data.codigo;

					}
				});

			// var someElement = angular.element(document.getElementById('form-ins'));
			//    $document.scrollToElementAnimated(someElement);   
		};
		// Fin formulario
		//fin de enviar
		$scope.limpiar = function() {
			$scope.InsData = {};
			$scope.sinEnviar = false;
			$scope.resultado = 20;

		};

	}

	//}

	// console.log($scope.resultado);

})();