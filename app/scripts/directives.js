(function () {
  'use strict';
/****************/
function disableAnimation($animate){

     return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
    }

}


 function scrollpanel(){

return {
    // atribuímos em forma de classe css nesse caso
    restrict: 'C',
    link: function (scope, element, attrs) {

     $(element).scrollpanel();
    }
  }
 }

//Marcar todos los chk
function toggleCheckbox() {
    return {
        restrict : "A",
        // require: '?ngModel',
        link : function(scope, element, attrs, modelCtrl) {
            var list = scope.$eval(attrs.toggleCheckboxList),
                property = attrs.toggleCheckboxProperty;

            element.bind('change', function() {
                scope.$apply(function () {
                    var isChecked = element.prop('checked');
                    
                    // Set each child's selected property to the checkbox's checked property
                    angular.forEach(list, function(child) {
                        child[property] = isChecked;
                    });
                });
            });
        }
    };
};


// function fancybox() {
//   return {
//     restrict: 'A',
//     link: function(scope, element) {
//       if (scope.$last) setTimeout(function() {
//        $('.fancybox').fancybox({
//           theme : 'dark'
//         });
//        }, 1);
//     }
//   };
// }
function mdButton()
{

     return {
        replace: true,
        restricte: 'E',
        transclude: true,
        template: '<button class="btn btn-link md-button" ng-transclude></button>'
    };
}

function myYoutube($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div class="embed-container"><iframe src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal + "?rel=0&autoplay=1&amp;controls=0&amp;showinfo=0");
           }
        });
    }
  };
};

/*******/
function scrollSpy ($window) {
  return {
    restrict: 'A',
    controller: function ($scope) {
      $scope.spies = [];
      this.addSpy = function (spyObj) {
        console.log("addSpy");
        $scope.spies.push(spyObj);
      };
    },
    link: function (scope, elem, attrs) {
      var spyElems;
      spyElems = [];

      scope.$watchCollection('spies', function (spies) {
        var spy, _i, _len, _results;
        _results = [];

        for (_i = 0, _len = spies.length; _i < _len; _i++) {
          spy = spies[_i];

          if (spyElems[spy.id] == null) {
            _results.push(spyElems[spy.id] = elem.find('#' + spy.id));
          }
        }
        console.log(_results);
        
        
        return _results;
        
      });

      $($window).scroll(function () {
        var highlightSpy, pos, spy, _i, _len, _ref;
        highlightSpy = null;
        _ref = scope.spies;
        
        // cycle through `spy` elements to find which to highlight
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          spy = _ref[_i];
          spy.out();
          
          // catch case where a `spy` has id = ""
          if (spy.id == "") {
            continue;
          }
          
          // catch case where a `spy` does not have an associated `id` anchor
          if (spyElems[spy.id] === undefined) {
            continue;
          }
          
          if ((pos = spyElems[spy.id].offset().top) - $window.scrollY <= 0) {
            // the window has been scrolled past the top of a spy element
            spy.pos = pos;

            if (highlightSpy == null) {
              highlightSpy = spy;
            }
            if (highlightSpy.pos < spy.pos) {
              highlightSpy = spy;
            }
          }
        }

        // select the last `spy` if the scrollbar is at the bottom of the page
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
          spy.pos = pos;
          highlightSpy = spy;
        }        

        return highlightSpy != null ? highlightSpy["in"]() : void 0;
      });
    }
  };
};

function spy ($location, $anchorScroll) {
  return {
    restrict: "A",
    require: "^scrollSpy",
    link: function(scope, elem, attrs, affix) {
      elem.click(function () {
        scope.$apply(function() {
          $location.hash(attrs.spy);
          $anchorScroll();
        });
      });

      if (attrs.spy != "") {
        affix.addSpy({
          id: attrs.spy,
          in: function() {
            elem.addClass('active');
            $('.sidenav li').has('.active').addClass('active');
          },
          out: function() {
            elem.removeClass('active');
            $('.sidenav li').not(':has(.active)').removeClass('active');
          }
        });
      }
    }
  };
};

/***********/

  angular
    .module('portal.directives',['portal.services','ngLocale'])
    .directive('scrollpanel',scrollpanel)
    .directive('disableAnimation',disableAnimation)
    .directive('toggleCheckbox',toggleCheckbox)
    .directive('myYoutube',myYoutube)
    .directive('mdButton',mdButton)
    .directive('spy',spy)
    .directive('scrollSpy',scrollSpy)
    .directive('fileModel', ['$parse', function($parse){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                })
            })
        }
    }
}]);

   
})();
