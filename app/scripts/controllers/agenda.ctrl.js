(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('AgendasCtrl', AgendasCtrl);

      /* @ngInject */
  function AgendasCtrl ($scope, moment, alert, calendarConfig, Agendas) {
   

    Agendas.getHoy().then(function(res){
        $scope.hoy = res;
        $scope.slickConfig3Loaded = true;

console.log('$scope.hoy', $scope.hoy);

    })
    calendarConfig.templates.calendarMonthCell = 'groupedMonthEvents.html';

    $scope.$on('$destroy', function() {
      calendarConfig.templates.calendarMonthCell = 'mwl/calendarMonthCell.html';
    });

    //These variables MUST be set as a minimum for the calendar to work
    $scope.calendarView = 'month';
    $scope.viewDate = new Date();
    $scope.events = [];
    Agendas.getAgenda().then(function(res){
    	$scope.evt = res;
    	
    	for (var i = 0; i < $scope.evt.length; i++) {
    				$scope.events[i] = {};
                    $scope.events[i].title = $scope.evt[i].ag_tipo_visita +' - '+$scope.evt[i].esc_Nombre;
    				$scope.events[i].escuela = $scope.evt[i].esc_Nombre;
                    $scope.events[i].type = setTypeEvent($scope.evt[i].ag_tipo_visita);
    				$scope.events[i].tipo = $scope.evt[i].ag_tipo_visita;
    				$scope.events[i].linea = $scope.evt[i].ag_linea_accion;
    				var startsAt = $scope.evt[i].ag_fecha.substr(0,10) +' ' + $scope.evt[i].ag_entrada;
    				var endsAt = $scope.evt[i].ag_fecha.substr(0,10) +' ' + $scope.evt[i].salida;
    				$scope.events[i].startsAt = new Date(startsAt);
    				$scope.events[i].endsAt = new Date(endsAt);
    				$scope.events[i].color = calendarConfig.colorTypes[setTypeEvent($scope.evt[i].ag_tipo_visita)];
                    $scope.events[i].objetivo = $scope.evt[i].ag_objetivo;
                    $scope.events[i].fecha = $scope.evt[i].ag_fecha;
                    // $scope.events[i].entrada = $scope.evt[i].ag_fecha;

    				
    			 $scope.events.push($scope.events[i]);
    		
    	}
// console.log('$scope.events', $scope.events);
// console.log('$scope.events', $scope.events);
    })

    function setTypeEvent(tipo){

    	switch (tipo) {
    		case 'VISITA TEC/PEDAGOGICA':
    			var color =  'tecpedagogica';
    			break;
    		case 'VISITA TECNICA':
    			var color =  'tecnica';
    			break;
    		case 'VISITA INTEGRAL':
    			var color =  'integral';
    			break;
    	    case 'PNIDE':
    			var color =  'pnide';
    			break;
    		case 'OTROS':
    			var color =  'otros';
    			break;
    		case 'MESA DE TRABAJO':
    			var color =  'trabajo';
    			break;
    		case 'VISITA PEDAGOGICA':
    			var color =  'pedagogica';
    			break;
    		
    	    case 'CIAE':
    			var color =  'ciae';
    			break;
    		case 'CAPACITACIONES(Des.Prof.)':
    			var color =  'capas';
    			break;
    		case 'ENTREGA':
    			var color =  'entrega';
    			break;
    		case 'PERFECCIONAMIENTO PROFESIONAL':
    			var color =  'perfeccion';
    			break;
    		default:
    			var color =  'otros';
    			break;
    	}
return color;
    }

   $scope.setImageEvent = function(tipo){

        switch (tipo) {
            case 'VISITA TEC/PEDAGOGICA':
                var imagen =  'images/agenda-tec-ped.jpg';
                break;
            case 'VISITA TECNICA':
                var imagen =  'images/agenda-tec.jpg';
                break;
            case 'VISITA INTEGRAL':
                var imagen =  'images/agenda-integral.jpg';
                break;
            case 'PNIDE':
                var imagen =  'images/agenda-otros.jpg';
                break;
            case 'OTROS':
                var imagen =  'images/agenda-otros.jpg';
                break;
            case 'MESA DE TRABAJO':
                var imagen =  'images/agenda-mesa.jpg';
                break;
            case 'VISITA PEDAGOGICA':
                var imagen =  'images/agenda-ped.jpg';
                break;
            
            case 'CIAE':
                var imagen =  'images/agenda-otros.jpg';
                break;
            case 'CAPACITACIONES(Des.Prof.)':
                var imagen =  'images/agenda-otros.jpg';
                break;
            case 'ENTREGA':
                var imagen =  'images/agenda-otros.jpg';
                break;
            case 'PERFECCIONAMIENTO PROFESIONAL':
                var imagen =  'images/agenda-otros.jpg';
                break;
            default:
                var imagen =  'images/agenda-otros.jpg';
                break;
        }
return imagen;
    }

     $scope.groupEvents = function(cell) {
      cell.groups = {};
      cell.events.forEach(function(event) {
        cell.groups[event.type] = cell.groups[event.type] || [];
        cell.groups[event.type].push(event);
      });
    };



    $scope.cellIsOpen = true;

    calendarConfig.colorTypes ={
      info: {
        primary: '#1e90ff',
        secondary: '#d1e8ff'
      },
      important: {
        primary: '#ad2121',
        secondary: '#fae3e3'
      },
      warning: {
        primary: '#e3bc08',
        secondary: '#fdf1ba'
      },
      inverse: {
        primary: '#1b1b1b',
        secondary: '#c1c1c1'
      },
      special: {
        primary: '#800080',
        secondary: '#ffe6ff'
      },
      success: {
        primary: '#006400',
        secondary: '#caffca'
      },
      tecpedagogica: {
        primary: '#009688',
        secondary: '#009688'
      },
      tecnica: {
        primary: '#3F51B5',
        secondary: '#3F51B5'
      },
      integral: {
        primary: '#2196F3',
        secondary: '#2196F3'
      },
      pnide: {
        primary: '#795548',
        secondary: '#795548'
      },
      otros: {
        primary: '#00BCD4',
        secondary: '#00BCD4'
      },
      trabajo: {
        primary: '#C2185B',
        secondary: '#C2185B'
      },
      pedagogica: {
        primary: '#03A9F4',
        secondary: '#03A9F4'
      },
      ciae: {
        primary: '#607D8B',
        secondary: '#607D8B'
      },
      capas: {
        primary: '#00BCD4',
        secondary: '#00BCD4'
      },
      entrega: {
        primary: '#FFA000',
        secondary: '#FFA000'
      },
      perfeccion: {
        primary: '#FF5722',
        secondary: '#FF5722'
      }
    }
    

    $scope.eventClicked = function(event) {

      if(event.ag_fk_esc){
        event.title = event.ag_tipo_visita +' - '+event.esc_Nombre;
            event.escuela = event.esc_Nombre;
                    event.type = setTypeEvent(event.ag_tipo_visita);
            event.tipo = event.ag_tipo_visita;
            event.linea = event.ag_linea_accion;
            var startsAt = event.ag_fecha.substr(0,10) +' ' + event.ag_entrada;
            var endsAt = event.ag_fecha.substr(0,10) +' ' + event.salida;
            event.startsAt = new Date(startsAt);
            event.endsAt = new Date(endsAt);
            event.color = calendarConfig.colorTypes[setTypeEvent(event.ag_tipo_visita)];
                    event.objetivo = event.ag_objetivo;
                    event.fecha = event.ag_fecha;
      }
      alert.show('Clicked', event);
    };

   

    $scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

    $scope.timespanClicked = function(date, cell) {

      if ($scope.calendarView === 'month') {
        if (($scope.cellIsOpen && moment(date).startOf('day').isSame(moment($scope.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
          $scope.cellIsOpen = false;
        } else {
          $scope.cellIsOpen = true;
          $scope.viewDate = date;
        }
      } else if ($scope.calendarView === 'year') {
        if (($scope.cellIsOpen && moment(date).startOf('month').isSame(moment($scope.viewDate).startOf('month'))) || cell.events.length === 0) {
          $scope.cellIsOpen = false;
        } else {
          $scope.cellIsOpen = true;
          $scope.viewDate = date;
        }
      }

    };

          $scope.fakaSlider = {
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
         

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
}





})();
 