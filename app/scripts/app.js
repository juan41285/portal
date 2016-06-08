(function () {
  'use strict';



 
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/slide-lista.tpl.html',
        controller: 'SlideListCtrl',
        controllerAs: 'slidelista'
      })
      .when('/articulo/:pg_id', {
        templateUrl: 'views/articulos-detalle.tpl.html',
        controller: 'ArticuloCtrl',
        controllerAs: 'noticias'
      })
      
       .when('/novedades', {
        templateUrl: 'views/novedades.tpl.html',
        controller: 'NewCtrl',
        controllerAs: 'novedades'
      })

        .when('/desarrollo/:pg_id', {
        templateUrl: 'views/desarrollo.tpl.html',
        controller: 'CapaCtrl',
        controllerAs: 'capacitaciones'
      })

      .otherwise({ reditrectTo : "/" });
  }



  // /* @ngInject */
  angular
    .module('portal', ['ngRoute','portal.controllers', 'portal.services','ngSanitize','ui.bootstrap'])
    .config(config);

   

})();

