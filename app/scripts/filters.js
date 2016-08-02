(function () {
  'use strict';
/****************/

  /* @ngInject */
function dateToISO() {
  return function(input) {
    // input = new Date(input).toISOString();
    input = input.replace(/(.+) (.+)/, "$1T$2Z");
    input = new Date(input).getTime();
    return input;
  };
}

function GetYouTubeID ($sce) {
  return function (text) {
      var video_id = text.split('v=')[1].split('&')[0];
      return video_id;
  }
}

function QuitarTagHTML(){

  return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
}

function CortarTexto()
{
          return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
}

function startFrom()
{
  return function(input,start){
      start = +start;
      return input.slice(start);
  }
}

  angular
    .module('portal.filters', ['portal.services','ngLocale'])
    .filter('dateToISO',dateToISO)
    .filter('GetYouTubeID',GetYouTubeID)
    .filter('QuitarTagHTML',QuitarTagHTML)
    .filter('CortarTexto',CortarTexto)
    .filter('startFrom',startFrom)
    .filter('trustAsHTML', ['$sce', function($sce){
				return function(text) {
					return $sce.trustAsHtml(text);
				};
	}]);


})();
