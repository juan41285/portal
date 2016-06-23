(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('HomeCtrl', HomeCtrl);

      /* @ngInject */
  function HomeCtrl (homeSlide) {

     var vm = this;

    vm.slides = homeSlide.query();
    console.log(vm.slides);
  }
})();
 