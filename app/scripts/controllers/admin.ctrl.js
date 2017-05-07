(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('AdminCtrl', AdminCtrl);

      /* @ngInject */
  function AdminCtrl ($scope, Upload,$http,$timeout,Capacitaciones, $route, $window) {

  	Capacitaciones.then(function(res) {
			// $scope. = [];
			$scope.listadoCapa = res;
			console.log('$scope.listadoCapa', $scope.listadoCapa);
		});

 // $scope.$watch('files', function () {
 //        $scope.upload($scope.files);
 //    });
 //    $scope.$watch('file', function () {
 //        if ($scope.file != null) {
 //            $scope.files = [$scope.file]; 
 //        }
 //    });
    $scope.log = '';

    $scope.upload = function (url, id, tipo) {
    	var files = [url];
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: 'http://api.educaciondigitaltuc.gob.ar/api-portal/public/file',
                    data: {
                      id: id,
                      tipo: tipo,
                      file: file  
                    }
                }).then(function (resp) {

                	console.log('entrs por resp');
                    $timeout(function() {
                        $scope[tipo+'_'+id] = JSON.stringify(resp.data);

         console.log('termino', $scope[tipo+'_'+id]);
         // $scope[tipo+'_'+id] = false;
$scope[tipo+'_'+id] = false;
                    });

                                  
                }, null, function (evt) {
                	console.log('entrs por evt');

                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope[tipo+'_'+id] =  progressPercentage;
                });
              }
            }
        }

    };

   $scope.act = function(){

   	
    
    $timeout(function () {
    $window.location.reload() 
        
    }, 2000);
   	   
   } 
    }
 // $scope.uploaded = [];
 
 //    $scope.$watch('files', function () {
 //        $scope.upload($scope.files);
 //    });
 
 //    $scope.upload = function (files) {
 //        if (files && files.length) {
 //            for (var i = 0; i < files.length; i++) {
 //                var file = files[i];
 //                $upload.upload({
 //                    url: '/file',
 //                    file: file
 //                }).progress(function (evt) {
 //                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
 //                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
 //                }).success(function (data, status, headers, config) {
 //                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
 //                    $scope.getfiles();
 //                });
 //            }
 //        }
 //    };
 
 
 //    $scope.getfiles = function(){
 //        $http.get('/list').
 //            success(function(data, status, headers, config) {
 //                $scope.uploaded = data;
 //            });
 //    };
 
 
 //    $scope.delete = function(name){
 //        $http.get('/delete/'+ name).
 //            success(function(data, status, headers, config) {
 //                $scope.getfiles();
 //            });
 //    };
 
 
 //    $scope.getfiles();






})();
 