(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('HomeCtrl', HomeCtrl);

      /* @ngInject */
  function HomeCtrl ($scope,Home,angularGridInstance, $http, $q, $location,Slug) {

   Home.getSlides().then(function(res){
   	$scope.slide = res;
   	console.log($scope.slide );
          $scope.slickConfig3Loaded = true;

   })
   $scope.page = 1;
   $scope.publicaciones = [];

   Home.getPublicaciones($scope.page).then(function(res) {
         $scope.publicaciones = res.data;
         console.log($scope.publicaciones);
         // angularGridInstance.gallery.refresh();
    });

   $scope.cargarMas = function() {
      $scope.page++;
      Home.getPublicaciones($scope.page).then(function(res) {   
          $scope.publicaciones = $scope.publicaciones.concat(res.data);  
      }); 
  };
  $scope.fakaSlider = {
    method: {},
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    arrows: true,
    draggable: true,          
  };

   $scope.linkOpen = function(id, titulo){
    var slug = id +'-'+Slug.slugify(titulo);
    $location.path('/publicaciones/'+slug);

   }

}





})();
 