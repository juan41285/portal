(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('NavbarCtrl', NavbarCtrl);


   function NavbarCtrl($scope, $route) {

    $scope.$route = $route;
    $scope.template = {'navbar': 'views/navbar.tpl.html'};
}

})();
 