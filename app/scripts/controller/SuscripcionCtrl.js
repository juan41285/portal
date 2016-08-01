(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('SuscripcionCtrl', SuscripcionCtrl);


function SuscripcionCtrl ($scope, $http)
{
  // $scope.template = {'suscribir':'views/suscribir.tpl.html'};
  $scope.mensaje = {};
  // $scope.suscribir = false;
      
  //enviar suscripcion
  $scope.sData = {};
  $scope.alta_nuevo = true;
  $scope.alta_mal = false;
  $scope.alta_repe = false;
  $scope.alta_ok = false;

      $scope.Suscribir = function()
      {
          $scope.alta_nuevo = false;
          
          $http({
                  method  : 'POST',
                  url     : 'http://innovacioneducativa.gob.ar/Pagina/suscribir.php',
                  data    : $.param($scope.sData),  // pass in data as strings
                  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
              })

          .success(function(data){
              console.log(data);
              if(data.resultado == 1){
                //error en la base de datos
                $scope.sData = {};
                $scope.alta_mal = true;
                $scope.alta_nuevo = false;
                // $scope.mensaje = "La suscripción no pudo realizarse, Reinicie su navegador e intente nuevamente";
                
              }

              if(data.resultado == 2){
                 //ya existe el mail
                 $scope.sData = {};
                 $scope.alta_repe = true;
                 $scope.alta_nuevo = false;
                 $scope.mensaje = "Usted ya se encuentra suscripto!.Si no esta recibiendo mensajes verifique su carpeta de correo no deseado y agregue la dirección novedades@tictucuman.net a su lista de contactos";
                 console.log($scope.alta_repe);
                 console.log($scope.mensaje);

              }

              if(data.resultado == 3){
                 //insercion correcta 
                 $scope.sData = {};
                 $scope.alta_ok = true;
                 $scope.alta_nuevo = false;
                 // $scope.mensaje = "La suscripción se realizó correctamente!";
                 // console.log($scope.mensaje);
                 
              }

          });  
      }

      $scope.limpiar = function(){
        $scope.sData = {};
        $scope.alta_nuevo = true;
        $scope.alta_mal = false;
        $scope.alta_repe = false;
        $scope.alta_ok = false;
        
      }
      
     }

})();