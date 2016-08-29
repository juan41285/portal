(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('HomeCtrl', HomeCtrl)
    .controller('AgendaDescCtrl', AgendaDescCtrl);

      /* @ngInject */
  function HomeCtrl ($scope,homeSlide,$http, Hoy,$uibModal, $timeout) {

    var vm = this;

    vm.slides = homeSlide.query();
    // console.log(vm.slides);
    // 
    // //////////////////////////////////////////
    

    $scope.selectedPhoto =0;

    $scope.select=function(index){
      $scope.selectedPhoto=index;
    }
    // var tam = vm.slides.length;
    // console.log(tam);
    var tam = 16;

    var countUp = function() {
        if ($scope.selectedPhoto == tam-1){
          $scope.selectedPhoto = 0;
          $timeout(countUp, 5000);
          // exit(); 
        }else{
          $scope.selectedPhoto+= 1;
          $timeout(countUp, 5000);  
        }
        
    }
      
       $timeout(countUp, 5000);

  // $rootScope.images.$promise.then(function(res){
  //   var tam= res.length

  //   var countUp = function() {
  //         if ($scope.selectedPhoto == tam-1){
  //       $scope.selectedPhoto = 0;
  //       $timeout(countUp, 5000);
  //       exit(); 
  //         }

  //         $scope.selectedPhoto+= 1;
  //         $timeout(countUp, 5000);
  //     }
      
  //     $timeout(countUp, 5000);

  // });

    // //////////////////////////////////////////

    //agendas
    vm.hoy = Hoy.get();
  /*************************************************************/
vm.animationsEnabled = true;

   vm.open = function (size, ag_id) {
    vm.ag_id = ag_id;
      var modalInstance = $uibModal.open({
        animation:vm.animationsEnabled,
        templateUrl: 'views/modal-agenda.tpl.html',
        controller: 'AgendaDescCtrl',
        controllerAs: 'mag',
        size: size,
        resolve: {
          ag_id: function () {
            return vm.ag_id;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
       vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

   vm.toggleAnimation = function () {
     vm.animationsEnabled = !$scope.animationsEnabled;
    };



  vm.posX = 0;
  vm.posY = 0;

  vm.moveX = function (pixels) {
    vm.posX = vm.posX + pixels;
  };
  vm.moveY = function (pixels) {
    vm.posY = vm.posY + pixels;
  };
  $scope.$evalAsync(function () {
      $scope.$broadcast('content.changed', 1000);
  });
/***************************************************************/


  }

function AgendaDescCtrl(ag_id,iDagenda,$uibModalInstance)
{
var vm = this;

   vm.ag_id = ag_id;

   vm.datos = iDagenda.query({id: vm.ag_id});
   
 console.log(vm.datos);
  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}
})();
 