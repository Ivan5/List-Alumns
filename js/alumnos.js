(function(){
   var app = angular.module('app',[]);
    app.controller('AlumnoController',function($scope){
        $scope.alumnos = [
          { "nombre" : "Jossy", "telefono" : "7775655678", "curso" : "Tercero" },
          { "nombre" : "Rolando", "telefono" : "7775655678", "curso" : "Segundo" },
          { "nombre" : "Germano", "telefono" : "7775655678", "curso" : "Primero" }
        ];
        
        $scope.save = function(){
            $scope.alumnos.push({
                nombre:$scope.nuevoAlumno.nombre,
                telefono:$scope.nuevoAlumno.telefono,
                curso:$scope.nuevoAlumno.curso
            });
        }
    });
})();