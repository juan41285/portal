(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('GaleriaCtrl', GaleriaCtrl);

function GaleriaCtrl($scope, $routeParams, $http, HGaleria, $document){

	$scope.template = {'galeria': 'views/galeria.tpl.html'};
	$scope.saludo = "Ya es hora de almorzar";
	
	//Con el servicio HGaleria averiguo si el articulo en cuestion tiene galeria
	$scope.template = {};
	$scope.mostrar_galeria = HGaleria.query({ id: $routeParams.pg_id });
	console.log($scope.mostrar_galeria);


	$scope.currentPage = 0;
	//cantidad de imagenes que se muestran en una pagina de la paginación
	$scope.pageSize = 5; 
	
	//arreglo de imagenes		
	$scope.images = ["http://everythingbirdsonline.com/wp-content/uploads/2014/06/birds-of-paradise.jpg",
	"http://randomstory.org/wp-content/uploads/2013/07/44.jpg",
	"http://www.photographyblogger.net/wp-content/uploads/2012/06/Brightly-Colored-Birds22.jpg",
	"http://i.telegraph.co.uk/multimedia/archive/02649/birds-mouse_2649566k.jpg", 
	"http://creationrevolution.com/wp-content/uploads/2012/12/bird1.jpg", 
	"http://amolife.com/image/images/stories/beautiful%20birds/beautiful-birds-1.jpg", 
	"https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg", 
	"http://www.pageresource.com/wallpapers/wallpaper/birds-falcon-bird.jpg", 
	"http://news.bbcimg.co.uk/media/images/73826000/jpg/_73826131_trevorhannant-greattit.jpg"];

	//Se utiliza con ng-src, es la imagen mas grande en la vista  
	$scope.selectedPhoto=$scope.images[0];

	//función que calcula el numero de paginas de la paginación
	$scope.numberOfPages=function(){
		return Math.ceil($scope.images.length/$scope.pageSize);
	}
	//función que 
	$scope.select=function(url){
		var index= $scope.images.indexOf(url);
		$scope.selectedPhoto=$scope.images[index];
	}

	}

})();    