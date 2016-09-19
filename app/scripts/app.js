(function () {
  'use strict';

  // /* @ngInject */
  angular
    .module('portal', ['ngRoute','portal.controllers', 'portal.services','portal.templates', 'portal.filters','ngSanitize','ui.bootstrap','ngScrollable','angularUtils.directives.dirPagination','720kb.socialshare','angularVideoBg','ngAnimate'])
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
       .when('/articulos', {
        templateUrl: 'views/publicaciones.tpl.html',
        controller: 'PublicacionesCtrl',
        controllerAs: 'pub',
        activeMenu: 'articulos'
      })
      .when('/articulo/:pg_id', {
        templateUrl: 'views/articulo-detalle.tpl.html',
        controller: 'ArticuloCtrl',
        controllerAs: 'art',
        activeMenu: 'articulos'
      })
      .when('/capacitaciones', {
        templateUrl: 'views/capacitaciones.tpl.html',
        controller: 'CapacitacionCtrl',
        controllerAs: 'cap',
        activeMenu: 'capacitacion'
      })
      .when('/capacitacion/:idComision', {
        templateUrl: 'views/capacitaciones-detalle.tpl.html',
        controller: 'CapacitacionCtrl',
        controllerAs: 'cap',
        activeMenu: 'capacitacion'
      })
      .when('/certificacion', {
        templateUrl: 'views/certificacion.tpl.html',
        controller: 'CertificacionCTRL',
        controllerAs: 'cer',
        activeMenu: 'certificacion'
      })
      .when('/agenda', {
        templateUrl: 'views/agenda.tpl.html',
        controller: 'AgendaCrtl',
        activeMenu: 'agenda'
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

