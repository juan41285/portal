(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('ContactoCtrl', ContactoCtrl);


function ContactoCtrl ($scope, $http)
{
  
  $scope.mensaje = true;
  $scope.mnsaje = true;


  //enviar suscripcion
  $scope.sData = {};
  $scope.alta_nuevo = true;
  $scope.alta_mal = false;
  $scope.alta_ok = false;
  $scope.alta_repe = false;
  $scope.sinRobot = false;
  
    // console.log("hola"+$scope.areas);

      // enviar form
      $scope.Suscribir = function() {
       $scope.alta_nuevo = false;

        $http({
              method  : 'POST',
              url     : 'http://innovacioneducativa.gob.ar/Pagina/suscribir.php',
              data    : $.param($scope.sData),  // pass in data as strings
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
          })
              .success(function(data) {
                 console.log(data);
                  if (data.resultado == 1) {
                    //si hubo error en la base de datos
                      $scope.sData = {};
                      $scope.alta_nuevo = false;
                      $scope.alta_mal = true;

                   

                  }
                  if (data.resultado == 2) {
                    //si el mail esta repetido
                      $scope.sData = {};
                      $scope.alta_nuevo = false;
                      $scope.alta_repe = true;

                   

                  }
                  if (data.resultado == 3) {
                    //si se agrego correctamente
                      $scope.sData = {};
                      $scope.alta_nuevo = false;
                      $scope.alta_ok = true;

                   

                  }

              });
      };
    //fin de enviar
    $scope.limpiar = function()
    {
      $scope.sData = {};
      $scope.alta_nuevo = true;
      $scope.alta_mal = false;
      $scope.alta_ok = false;
      $scope.alta_repe = false;

    }

 $scope.limpiarMsj = function()
    {
      $scope.mData = {};
      $scope.msj = true;
      $scope.msj_mal = false;
      $scope.msj_ok = false;
      
      $scope.mData.destino = {};
    }
     
  //fin del form de suscripcion

  //Form para enviar mensaje
   $scope.mData = {};
   $scope.msj_ok = false;
   $scope.msj = true;
   $scope.msj_mal = false;
   $scope.enviar = false;
   $scope.destinatarios = [

    {text1: 'Coordinación Provincial TIC', correo:"coordinaciontictucuman@gmail.com", estado:false},
    {text1: 'Aula Modelo Tucumán', correo:"aulamodelotucuman@gmail.com", estado:false},
    {text1: 'Conectar Igualdad Tucumán', correo:"conectarigualdadtucuman@gmail.com", estado:false},
    {text1: 'Desarrollo Profesional', correo:"desarrolloprofesional@tictucuman.net", estado:false}
]
 $scope.checkN1 = function(correo){
  
 
$scope.mData.destino = correo;
   $scope.enviar = true;
   

 }
      // enviar form
      $scope.enviarMensaje = function() {
       $scope.alta_nuevo = false;

        $http({
              method  : 'POST',
              url     : 'http://innovacioneducativa.gob.ar/Pagina/admin/emails/mensaje_contacto.php',
              data    : $.param($scope.mData),  
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
          })
              .success(function(data) {
                 console.log(data);
                  if (data.resultado == true) {
                    //si hubo error en la base de datos
                      $scope.mData = {};
                      $scope.msj_ok = true;
                      $scope.msj = false;
                      $scope.msj_mal = false;
                  }
                  else
                  {
                      $scope.mData = {};
                      $scope.msj_ok = false;
                      $scope.msj = false;
                      $scope.msj_mal = true;

                  }
                  

              });
      };
    //fin de enviar
  //Fin del forma para enviar mensajes
}

})();
 