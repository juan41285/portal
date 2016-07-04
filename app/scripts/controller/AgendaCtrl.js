(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('AgendaCrtl', AgendaCrtl);


function AgendaCrtl($scope,$http,$filter,$routeParams,Hoy,Evento,EventoxLinea)
{

$("html, body").animate({ scrollTop: 0 }, 1500);
   
function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
/************************************************************/

        $scope.lineas =[
         {nombre:'CONECTAR IGUALDAD'},
         {nombre:'COORDINACION TIC'},
         {nombre:'PRIMARIA DIGITAL'},
         {nombre:'AULA MODELO'},
         {nombre:'ASISTENCIA TÉCNICA'},
         {nombre:'JÓVENES CONECTADOS'},
         {nombre:'PRÁCTICAS INSTITUCIONALES'},
         {nombre:'MULTIMEDIA'},
         {nombre:'POSTÍTULO'},
         {nombre:'EXPLORA'},
         {nombre:'OTROS'}
        ];
  console.log($scope.lineas);
/***********************************************************/

   //calendario
var hoy = new Date();
var mes = hoy.getMonth()+1;
var dia = 1;
var anio = hoy.getFullYear();
var diasSemana = new Array ('DOM','LUN','MAR','MIE','JUE','VIE','SAB');
$scope.meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
$scope.diasMes = daysInMonth(mes,anio);
$scope.dias = [];
$scope.nombreDias = [];
for(var i=1; i<=$scope.diasMes; i++)
{
        var d = new Date('"'+anio+"/"+mes+"/"+i+'"');
        var n = diasSemana[d.getDay()];
        $scope.dias.push({
          dia: i,
          ndia:n

        });
       
}


$scope.menu = true;
$scope.date =  new Date();
$scope.eventos = Hoy.get();

$scope.cambiarDia = function(dia,mes){
        mes = mes || 0;
        var fecha = new Date();
        var anio = fecha.getFullYear();
        if(mes == 0)
        { 

         
          mes = fecha.getMonth()+1;
          
        }
         var _fecha =  anio+"-"+mes+"-"+dia;
         $scope.eventos = Evento.query({fecha: _fecha });
         console.log(_fecha);
         $scope.lineas = [];
         $scope.lineas =[
         {nombre:'CONECTAR IGUALDAD'},
         {nombre:'COORDINACION TIC'},
         {nombre:'PRIMARIA DIGITAL'},
         {nombre:'AULA MODELO'},
         {nombre:'ASISTENCIA TÉCNICA'},
         {nombre:'JÓVENES CONECTADOS'},
         {nombre:'PRÁCTICAS INSTITUCIONALES'},
         {nombre:'MULTIMEDIA'},
         {nombre:'POSTÍTULO'},
         {nombre:'EXPLORA'},
         {nombre:'OTROS'}
        ];
          $scope.date= dia+"/"+mes+"/"+anio
        }
          $scope.cambiarMes = function(dia,mes){

         dia = dia || 0;
        var fecha = new Date();
        var anio = fecha.getFullYear();
        if(dia == 0)
        { 

         
          dia = fecha.getDate();
          
        }
         var _fecha =  anio+"-"+mes+"-"+dia;
         $scope.eventos = Evento.query({fecha: _fecha });
         console.log(_fecha);
         $scope.lineas = [];
         $scope.lineas =[
         {nombre:'CONECTAR IGUALDAD'},
         {nombre:'INNOVACIÓN EDUCATIVA'},
         {nombre:'PRIMARIA DIGITAL'},
         {nombre:'AULA MODELO'},
         {nombre:'ASISTENCIA TÉCNICA'},
         {nombre:'JÓVENES CONECTADOS'},
         {nombre:'PRÁCTICAS INSTITUCIONALES'},
         {nombre:'MULTIMEDIA'},
         {nombre:'POSTÍTULO'},
         {nombre:'EXPLORA'},
         {nombre:'OTROS'}
        ];
          $scope.date= dia+"/"+mes+"/"+anio
        }
        $scope.cambiarLinea = function(linea, fecha)
        {
          fecha = fecha || 0;
          if(fecha != 0)
          {
           var _fecha = fecha;//$filter('date')($scope.date, 'yyyy-MM-dd');
           $scope.eventos = EventoxLinea.query({linea: linea , fecha: _fecha });

          }
          else
          {
          
           Hoy.query(function(data){

              $scope.dateA = data[0].ag_fecha;
              var _fecha = $scope.dateA;//$filter('date')($scope.date, 'yyyy-MM-dd');
               $scope.eventos = EventoxLinea.query({linea: linea , fecha: _fecha });
              console.log($scope.dateA);
             

           });

                    }        
         
       
        }


   
}
})();
 