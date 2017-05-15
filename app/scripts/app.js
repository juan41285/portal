(function () {
  'use strict';

  // /* @ngInject */
  angular
    .module('portal', ['ngRoute','portal.controllers', 'portal.services','portal.templates', 'portal.filters',
                        'ngSanitize','ui.bootstrap','slickCarousel', 'angularGrid','slugifier','ngAside','angular-ladda',
                        'angularVideoBg','ngAnimate','angularMoment','mwl.calendar','angularFileUpload','ngFileUpload','treasure-overlay-spinner'])
    .config(config)
 .run(run);  

 
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        activeMenu: '/'
      })
       .when('/capacitaciones', {
        templateUrl: 'views/capacitaciones.tpl.html',
        controller: 'CapacitacionesCtrl',
        controllerAs: 'pub',
        activeMenu: 'capacitaciones'
      })
       .when('/capacitacion/:idComision', {
        templateUrl: 'views/capacitacion-detalle.tpl.html',
        controller: 'CapacitacionesCtrl',
        controllerAs: 'cap',
        activeMenu: 'capacitaciones'
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
      .when('/protocolo-para-trayectos-formativos-2017', {
        templateUrl: 'views/protocolo.tpl.html',
         controller: 'CapacitacionesCtrl',
        controllerAs: 'cap',
        activeMenu: 'capacitaciones'
      }) 
      .when('/admin/capas', {
        templateUrl: 'views/admin-capas.tpl.html',
         controller: 'AdminCtrl',
        controllerAs: 'admin',
        activeMenu: 'capacitacionesaaaaa'
      }) 
      .otherwise({ reditrectTo : "/" });
  }

run.$inject = ['$rootScope'];
    function run ($rootScope) {
      $rootScope.spinner = {
        active: false,
        on: function () {
          this.active = true;
        },
        off: function () {
          this.active = false;
        }
      };
    }


   

})();

