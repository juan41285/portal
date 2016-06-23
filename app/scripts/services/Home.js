(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services')    
    .factory('homeSlide',homeSlide);

function homeSlide ($resource, BaseUrl) {
    return $resource(BaseUrl + '/home/slides/:id',
      { pg_id: '@_id' }
    );
  } 





})();
