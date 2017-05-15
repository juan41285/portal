(function() {
	'use strict';


	angular
		.module('portal.controllers')
		.controller('CapacitacionesCtrl', CapacitacionesCtrl);

	/* @ngInject */
	function CapacitacionesCtrl($scope, $rootScope, Capacitaciones, $routeParams,
		SDetalleCom, $window, ComisionesCapa, SDestinatarios, capaModal,getLineas,$timeout) {
		$("html, body").animate({
			scrollTop: 0
		}, 1500);
       $rootScope.spinner.on();
       getLineas.then(function(res){
       	$scope.lineas = [];
       	for (var i = 0; i < res.length; i++) {
       		var linea = res[i].Linea_accion;

       		$scope.lineas.push(linea);
       	}
       	// $scope.lineas = res;
       	console.log('$scope.lineas', $scope.lineas);
       })



		Capacitaciones.then(function(res) {
			$scope.capacitacion = [];
			$rootScope.listadoCapa = res;
			var total = res.length;
			var sum = 0;
			for (var i = 0; i < total; i++) {

				var idc = res[i].id;
				sum = res[i].hay + sum;
				$scope.listarCom = ComisionesCapa.query({
					id: idc
				});
				// console.log('$scope.listarCom ', $scope.listarCom );
				// $scope.sinCupo= true;
				// if ($scope.listarCom.length === 0){
				//     $scope.sinCupo= false;
				//     console.log('sin cupo false');
				// }else{
				//   $scope.sinCupo= true;
				//   console.log('sin cupo TRUE');

				// }
				// console.log($scope.listarCom);

				$scope.destinatarios = SDestinatarios.query({
					id: idc
				});

				$scope.capacitacion.push({
					capa: res[i],
					datos: $scope.listarCom,
					activo: true,
					collapse: false,
					id: res[i].id,
					destinatarios: $scope.destinatarios
				});
				//console.log('nuevo array', $scope.capacitacion);
				$scope.sumCapa = sum;
			}


			console.log('$scope.capacitacion', $scope.listadoCapa);

  $timeout(function () {
      $rootScope.spinner.off();
        // AngularJS unaware of update to $scope
    }, 3000);

		})
		$scope.sinCupo = $window.localStorage.getItem('sinCupo');
		$scope.mostrarCom = {};
		$scope.mostrarCom = SDetalleCom.query({
			id: $routeParams.idComision
		});
		console.log('$scope.mostrarCom ', $scope.mostrarCom);


		$scope.funciondesplegar = function(capa) {
			capaModal.show(capa, capa);
			var capaId = capa.id;
			var habilitado = capa.capa.comision
				/*Este bloque setea la variable para mostrar o no datos en la vista*/
			$scope.listarCom1 = ComisionesCapa.query({
				id: capaId
			});

			$scope.listarCom1.$promise.then(function(res) {
				console.log();

				if (res[0].comision !== 0) {
					$window.localStorage.setItem('sinCupo', 1);
				} else {
					$window.localStorage.setItem('sinCupo', 0);
				}
				console.log(res);

			});



			// /***********/

			// if (habilitado === '0') {
			// 	//entro porque no hay comisiones disponibles para insripcion

			// 	//busco comisiones de la capa para poder mostrar datos, con una basta
			// 	$scope.comision99 = {};
			// 	$scope.comision99 = GetCom.query({
			// 		id: capaId
			// 	});
			// 	$scope.comision99.$promise.then(function(res) {
			// 		var comision = res[0].idComision;
			// 		console.log('comision', comision);
			// 		$location.path('/capacitacion/' + comision);
			// 	});

			// } else {
			// 	var total = $scope.capacitacion.length;
			// 	for (var i = 0; i <= total; i++) {

			// 		if ($scope.capacitacion[i].id === capaId) {
			// 			$scope.capacitacion[i].collapse = !$scope.capacitacion[i].collapse;
			// 		} else {
			// 			$scope.capacitacion[i].collapse = false; //!$scope.capacitacion[i].collapse;
			// 		}
			// 	}

			// }
		};


		// $scope.listarCom1 = ComisionesCapa.query({
		// 	id: $routeParams.idComision
		// });

		// $scope.listarCom1.$promise.then(function(res) {
		// 	console.log(res);

		// 	if (res[0].comision !== 0) {
		// 		$window.localStorage.setItem('sinCupo', 1);
		// 	} else {
		// 		$window.localStorage.setItem('sinCupo', 0);
		// 	}
		// 	console.log(res);

		// });
		// $scope.resultado = 20;
		// $scope.sData = {};
		// $scope.mostrar = false;
		// $scope.sinCupo = $window.localStorage.getItem('sinCupo');
		// $scope.capacitacion = [];
		// $scope.mostrarCapa = {};
		// $scope.listarCom = {};
		// $scope.destinatarios = {};

		/****************BLOQUE DE RECUPERAR PASS********************/
		//   $scope.sendPass = false;
		//   $scope.recuperarPass = function(){
		//     $scope.sendPass = !$scope.sendPass ;
		//      $scope.PassEnviado = 100;

		//   };


		// $scope.datos= {inpDNI: undefined };
		// $scope.PassEnviado = 100;
		// $scope.CorreoEnviado = undefined;
		//   $scope.ResetPass = function(){
		//     // console.log($scope.dniSinPass); 
		//     if($scope.datos.inpDNI !== undefined){

		//       $http({
		//       method  : 'POST',
		//       url     : 'http://rest.innovacioneducativa.gob.ar/docentes/pass_recuperar.php',
		//       data    : $.param($scope.datos), 
		//       headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
		//     })              
		//     .success(function(data) 
		//     {   


		//       $scope.PassEnviado = data.resultado;
		//       $scope.CorreoEnviado = data.correo;

		//     });

		//     }

		//     console.log($scope.PassEnviado );
		//   };
// $scope.lineaset = undefined;
        $scope.setLinea = function(linea){
        	$rootScope.spinner.on();
$scope.lineaset = linea;
	$scope.capacitacion = [];
			var total = $rootScope.listadoCapa.length;
			var sum = 0;
			for (var i = 0; i < total; i++) {
				if ($rootScope.listadoCapa[i].linea === linea) {
					var idc = $rootScope.listadoCapa[i].id;
					sum = $rootScope.listadoCapa[i].hay + sum;
					$scope.listarCom = ComisionesCapa.query({
						id: idc
					});
					// $scope.sinCupo= true;
					// if ($scope.listarCom.length === 0){
					//     $scope.sinCupo= false;
					//     console.log('sin cupo false');
					// }else{
					//   $scope.sinCupo= true;
					//   console.log('sin cupo TRUE');

					// }
					// console.log($scope.listarCom);

					$scope.destinatarios = SDestinatarios.query({
						id: idc
					});

					$scope.capacitacion.push({
						capa: $rootScope.listadoCapa[i],
						datos: $scope.listarCom,
						activo: true,
						collapse: false,
						id: $rootScope.listadoCapa[i].id,
						destinatarios: $scope.destinatarios
					});
					//console.log('nuevo array', $scope.capacitacion);
					$scope.sumCapa = 1;
				}
				if (!linea) {
					var idc = $rootScope.listadoCapa[i].id;
					sum = $rootScope.listadoCapa[i].hay + sum;
					$scope.listarCom = ComisionesCapa.query({
						id: idc
					});
					// $scope.sinCupo= true;
					// if ($scope.listarCom.length === 0){
					//     $scope.sinCupo= false;
					//     console.log('sin cupo false');
					// }else{
					//   $scope.sinCupo= true;
					//   console.log('sin cupo TRUE');

					// }
					// console.log($scope.listarCom);

					$scope.destinatarios = SDestinatarios.query({
						id: idc
					});

					$scope.capacitacion.push({
						capa: $rootScope.listadoCapa[i],
						datos: $scope.listarCom,
						activo: true,
						collapse: false,
						id: $rootScope.listadoCapa[i].id,
						destinatarios: $scope.destinatarios
					});
					//console.log('nuevo array', $scope.capacitacion);
					$scope.sumCapa = 1;
				}
			}
			  $timeout(function () {
      $rootScope.spinner.off();
        // AngularJS unaware of update to $scope
    }, 3000);
        }



        /***********************/

		$scope.soloAbiertas = false;
		$scope.filtrarAbiertas = function() {
      $rootScope.spinner.on();
			$scope.soloAbiertas = !$scope.soloAbiertas;
			console.log('$scope.soloAbiertas', $scope.soloAbiertas);
			$scope.capacitacion = [];
			var total = $rootScope.listadoCapa.length;
			var sum = 0;
			for (var i = 0; i < total; i++) {
				if ($rootScope.listadoCapa[i].comision && $scope.soloAbiertas) {
					var idc = $rootScope.listadoCapa[i].id;
					sum = $rootScope.listadoCapa[i].hay + sum;
					$scope.listarCom = ComisionesCapa.query({
						id: idc
					});
					// $scope.sinCupo= true;
					// if ($scope.listarCom.length === 0){
					//     $scope.sinCupo= false;
					//     console.log('sin cupo false');
					// }else{
					//   $scope.sinCupo= true;
					//   console.log('sin cupo TRUE');

					// }
					// console.log($scope.listarCom);

					$scope.destinatarios = SDestinatarios.query({
						id: idc
					});

					$scope.capacitacion.push({
						capa: $rootScope.listadoCapa[i],
						datos: $scope.listarCom,
						activo: true,
						collapse: false,
						id: $rootScope.listadoCapa[i].id,
						destinatarios: $scope.destinatarios
					});
					//console.log('nuevo array', $scope.capacitacion);
					$scope.sumCapa = sum;
					// $rootScope.spinner.off();
				}
				if (!$scope.soloAbiertas) {
					var idc = $rootScope.listadoCapa[i].id;
					sum = $rootScope.listadoCapa[i].hay + sum;
					$scope.listarCom = ComisionesCapa.query({
						id: idc
					});
					// $scope.sinCupo= true;
					// if ($scope.listarCom.length === 0){
					//     $scope.sinCupo= false;
					//     console.log('sin cupo false');
					// }else{
					//   $scope.sinCupo= true;
					//   console.log('sin cupo TRUE');

					// }
					// console.log($scope.listarCom);

					$scope.destinatarios = SDestinatarios.query({
						id: idc
					});

					$scope.capacitacion.push({
						capa: $rootScope.listadoCapa[i],
						datos: $scope.listarCom,
						activo: true,
						collapse: false,
						id: $rootScope.listadoCapa[i].id,
						destinatarios: $scope.destinatarios
					});
					//console.log('nuevo array', $scope.capacitacion);
					$scope.sumCapa = sum;
					// $rootScope.spinner.off();
				}

				
			}

			  $timeout(function () {
			      $rootScope.spinner.off();
			        // AngularJS unaware of update to $scope
			    }, 3000);

		}

	}

})();