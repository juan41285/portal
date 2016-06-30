(function () {
  'use strict';

  // /* @ngInject */
  angular
    .module('portal', ['ngRoute','portal.controllers', 'portal.services','ngSanitize','ui.bootstrap','ngScrollable'])
    .config(config);


 
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
       .when('/articulos', {
        templateUrl: 'views/publicaciones.tpl.html',
        controller: 'PublicacionesCtrl',
        controllerAs: 'articulos'
      })
      .otherwise({ reditrectTo : "/" });
  }




   

})();

