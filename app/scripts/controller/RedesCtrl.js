(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('RedesCtrl', RedesCtrl);


   function RedesCtrl($scope) {

   
    $scope.template = {'redes': 'views/redes-sociales.tpl.html'};
}

})();
 