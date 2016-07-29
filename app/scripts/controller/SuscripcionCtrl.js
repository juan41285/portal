(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('SuscripcionCtrl', SuscripcionCtrl);


function SuscripcionCtrl ($scope, $http)
{
  $scope.template = {'suscribir':'views/suscribir.tpl.html'};
  $scope.hola = "hola mundo";
  
}

})();