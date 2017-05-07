(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('HomeCtrl', HomeCtrl);

      /* @ngInject */
  function HomeCtrl ($scope,Home,angularGridInstance, $http, $q, $location,Slug) {
   // $scope.PubSliderActive = false;
   Home.getSlides().then(function(res){
   	$scope.slide = res;
   	console.log($scope.slide );
          $scope.slickConfig3Loaded = true;

   })
   $scope.page = 1;
   $scope.publicaciones = [];

   Home.getPublicaciones($scope.page).then(function(res) {
         $scope.PubSliderActive = true;
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
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    arrows: true,
    draggable: true,          
  };
 $scope.PubSlider = {
        method: {},
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
         autoplay: true,
         centerMode: false,
         arrows: true,
         draggable: true,  
         initialSlide:7,

        responsive: [
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   $scope.linkOpen = function(id, titulo){
    var slug = id +'-'+Slug.slugify(titulo);
    $location.path('/publicaciones/'+slug);

   }

}





})();
 