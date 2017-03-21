(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('FooterCtrl', FooterCtrl);

      /* @ngInject */
  function FooterCtrl ($scope) {

   $scope.template = 'views/footer.tpl.html'
}





})();
 