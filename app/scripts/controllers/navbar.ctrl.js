(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('NavbarCtrl', NavbarCtrl);

      /* @ngInject */
  function NavbarCtrl ($scope, $route,$aside) {

 		$scope.template = 'views/navbar.tpl.html';
        $scope.$route = $route;
         $('html, body').animate({ scrollTop: 0 }, 1000);

             $scope.asideState = {
      open: false
    };
    
    $scope.openAside = function(position, backdrop) {
      $scope.asideState = {
        open: true,
        position: position
      };
      
      function postClose() {
        $scope.asideState.open = false;
      }
      
      $aside.open({
        templateUrl: 'views/menu-movil.tpl.html',
        placement: position,
        size: 'sm',
        backdrop: backdrop,
        controller: function($scope, $uibModalInstance) {
          $scope.ok = function(e) {
            $uibModalInstance.close();
            e.stopPropagation();
          };
          $scope.cancel = function(e) {
            $uibModalInstance.dismiss();
            e.stopPropagation();
          };
        }
      }).result.then(postClose, postClose);
    }
}





})();
 