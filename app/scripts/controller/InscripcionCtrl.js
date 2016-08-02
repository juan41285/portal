(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('InscripcionCtrl', InscripcionCtrl);


   	function InscripcionCtrl($scope, $routeParams,Capacitacion,Publicar, $http, $document) {

    	$scope.template = {'formulario': 'views/articulo-formulario.tpl.html', 'relacionados':'views/articulo-relacionados.tpl.html'};
		// Esta variable determina el div que se debe mostrar (mensaje o formulario)
    	$scope.resultado = 20;
         
    	$scope.articuloDatos = {};
      	// Capacitacion es un servicio que ejecuta una api cap/:pg_id que devuelve 
      	// un arreglo con los datos de la comision
    	$scope.articuloDatos =  Capacitacion.query({ id: $routeParams.pg_id });
		console.log($scope.articuloDatos);	   
   		
   		// formularios
        // enviar form
      	$scope.InsData = {};

      	//***************************************************************
      	$scope.publicar = {};
      	$scope.publicar = Publicar.query({ id: $routeParams.pg_id });
      	
      	// console.log($scope.muestroCapa);
      	console.log($scope.publicar);
      	//***************************************************************
      	//
     	
      	$scope.Inscribir = function(com) {
      
	      	$scope.InsData.id = com;
	      	console.log($scope.InsData);
	      	console.log($scope.InsData.id);
	        $http({
	              method  : 'POST',
	              url     : 'http://innovacioneducativa.gob.ar/Pagina/alta_curso_angular.php',
	              data    :  $.param($scope.InsData),  // pass in data as strings
	              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	          })
	            .success(function(data) {
	                  console.log(data);
	                  if (data.resultado == 0) {
	                    //si hubo error en la base de datos
	                      $scope.resultado = data.resultado;
	                      

	                  }
	                  if (data.resultado == 1) {
	                    //si el mail esta repetido - Suspensión momentanea
	                      $scope.resultado = data.resultado;
	                      
	                      $scope.fecha_suspension = data.fecha_suspension;
	                      $scope.fecha_alta = data.fecha_fin;

	                  }
	                  if (data.resultado == 2) {
	                  	//Una capacitación por vez
	                      $scope.resultado = data.resultado;
	                      
	                      $scope.cursando1 = data.curso1;
	                      $scope.cursando2 = data.curso2;

	                  }
	                  if (data.resultado == 3) {
	                      //inscripción correcta
	                      $scope.resultado = data.resultado;
	                      
	                      $scope.capacitacion = data.capacitacion;
	                      $scope.fecha_ini = data.fecha_ini;
	                      $scope.horario = data.horario;
	                      $scope.lugar = data.lugar;
	                      $scope.codigo = data.codigo;

	                  }
	                  if (data.resultado == 4) {
	                      //cupo completo
	                      $scope.resultado = data.resultado;
	                      
	                     

	                  }
	                  if (data.resultado == 5) {
	                      //ya registra inscripcion para el mismo curso
	                      $scope.resultado = 5;
	                      $scope.fecha_ins = data.fecha_ins;
	                      $scope.codigo = data.codigo;
	                   
	                  }
	                    if (data.resultado == 6) {
	                      $scope.resultado = data.resultado;
	                      
	                      // $scope.fecha_ins = data.fecha_ins;
	                      // $scope.codigo = data.codigo;
	                   
	                  }

	                   if (data.resultado == 12) {
	                      //Registra una edicion aprobada de la misma capacitacion
	                      $scope.resultado = data.resultado;
	                      
	                      // $scope.fecha_ins = data.fecha_ins;
	                      // $scope.codigo = data.codigo;

	                  }
	            });

			var someElement = angular.element(document.getElementById('form-ins'));
		    $document.scrollToElementAnimated(someElement);   
    	};
   // Fin formulario
   //fin de enviar
    $scope.limpiar = function()
    {
      $scope.InsData = {};
      $scope.sinEnviar = false;
      $scope.resultado = 20;

    }

 } 

	//}

	console.log($scope.resultado);

})();
 