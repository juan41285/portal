(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('FooterCtrl', FooterCtrl);


   function FooterCtrl($scope) {

   
    $scope.template = {'footer': 'views/footer.tpl.html'};
}



})();
 