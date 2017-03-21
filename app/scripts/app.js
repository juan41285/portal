(function () {
  'use strict';

  // /* @ngInject */
  angular
    .module('portal', ['ngRoute','portal.controllers', 'portal.services','portal.templates', 'portal.filters',
                        'ngSanitize','ui.bootstrap','slickCarousel', 'angularGrid','slugifier',
                        'angularVideoBg','ngAnimate','angularMoment','mwl.calendar'])
    .config(config);


 
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        activeMenu: '/'
      })
       .when('/publicaciones', {
        templateUrl: 'views/publicaciones.tpl.html',
        controller: 'PublicacionesCtrl',
        controllerAs: 'pub',
        activeMenu: 'publicaciones'
      })
      .when('/publicaciones/:title', {
        templateUrl: 'views/publicacion.tpl.html',
        controller: 'PublicacionesCtrl',
        controllerAs: 'pub',
        activeMenu: 'publicaciones'
      })
       .when('/agendas', {
        templateUrl: 'views/agendas.tpl.html',
        controller: 'AgendasCtrl',
        controllerAs: 'agenda',
        activeMenu: 'agendas'
      })
      .when('/recursos', {
        templateUrl: 'views/recursos.tpl.html',
        controller: 'RecursosCtrl',
        controllerAs: 'recurso',
        activeMenu: 'recursos'
      }) 
    .when('/contacto', {
        templateUrl: 'views/contacto.tpl.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto',
        activeMenu: 'contacto'
      }) 
      .otherwise({ reditrectTo : "/" });
  }




   

})();

