(function() {
  'use strict';


  angular
    .module('portal.controllers')
    .controller('NavbarCtrl', NavbarCtrl);

  /* @ngInject */
  function NavbarCtrl($scope, $route, $aside, $location) {

    $scope.template = 'views/navbar.tpl.html';
    $scope.$route = $route;
    $('html, body').animate({
      scrollTop: 0
    }, 1000);

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

   
    $scope.$on('$routeChangeSuccess', function(angularEvent,current,previous) {
      //vm.isoLogo = 1;
      var am = current.activeMenu;
      $scope.homeLink = '/';
      $scope.isoLogo = 'images/logo_black.png';
      $scope.activeMenu = true;
      var path = $location.path();

      if ((path === '/capacitaciones' ) || (am === 'capacitaciones')) {
        $scope.isoLogo = 'images/formame-logo.png';
        $scope.activeMenu = false;
        $scope.homeLink = '/capacitaciones';


      } else {

        $scope.isoLogo = 'images/logo_black.png';
        $scope.activeMenu = true;
        $scope.homeLink = '/';


      }



    });


  }


})();