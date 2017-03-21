(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('NavbarCtrl', NavbarCtrl);

      /* @ngInject */
  function NavbarCtrl ($scope, $route) {

 		$scope.template = 'views/navbar.tpl.html';
        $scope.$route = $route;
         $('html, body').animate({ scrollTop: 0 }, 1000);
}





})();
 