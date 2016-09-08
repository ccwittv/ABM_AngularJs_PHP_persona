
var app = angular.module('ABMangularPHP', []);//primer parametro es el nombre de modulo. puede tener muchos modulos


app.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Lopez**";//el scope significa que se puede ver desde el js y html
   $scope.OtroDato="**Witt**";
});


app.controller('controlAlta', function($scope, $http) {
  $scope.DatoTest="**alta**";

//inicio las variables
  $scope.persona={}; //se define un objeto de tipo json vacío. Si no se define los datos no salen en el formAlta.html
  $scope.persona.nombre= "natalia" ;
  $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="sinfoto";

  $scope.mascota={"nombre":"Rocco", "tipo":"Perro", "cumpleanos":new Date()};


  $scope.Guardar=function(iva){

    console.log("Se pasa el porcentaje del iva por parámetro");
    console.log(iva);
  	console.log("Mascota a guardar:");
    console.log($scope.mascota);

    /*
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
 	  .then(function(respuesta) {     	
 		     //aca se ejetuca si retorno sin errores      	
      	 console.log(respuesta.data);

    },function errorCallback(response) {     		
     		//aca se ejecuta cuando hay errores
     		console.log( response);     			
 	  });

  */

  }
});


app.controller('controlGrilla', function($scope, $http) {
  	$scope.DatoTest="**grilla**";
  console.log("Estoy en la grilla");
  //En esta parte se consumen los datos en forma asincrónica. Es nuestro AJAX.
  $http.get('http://www.mocky.io/v2/57d124811000002c17208d9d')
    .then(function(respuesta){
      //aca va la respuesta
      console.info("volvio", respuesta.data);
      $scope.ListadoPersonas = respuesta.data;

    },function(error){
      //aca van los errores
      $scope.ListadoPersonas= [];
      console.log(error);
      console.info("Cuidado Error!!!:", error);

    })  

  //Esta parte es la llamada a nuestra base mysql local para consumir datos.
 	/*$http.get('PHP/nexo.php', { params: {accion :"traer"}})
 	.then(function(respuesta) {     	

      	 $scope.ListadoPersonas = respuesta.data.listado;
      	 console.log(respuesta.data);

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];
     		console.log( response);
     		
 	 });*/




  /*

          https://docs.angularjs.org/api/ng/service/$http

          the response object has these properties:

        data – {string|Object} – The response body transformed with the transform functions.
        status – {number} – HTTP status code of the response.
        headers – {function([headerName])} – Header getter function.
        config – {Object} – The configuration object that was used to generate the request.
        statusText – {string} – HTTP status text of the response.
            A response status code between 200 and 299 is considered a success
             status and will result in the success callback being called. 
             Note that if the response is a redirect, XMLHttpRequest will 
             transparently follow it, meaning that 
             the error callback will not be called for such responses.
   */
 	$scope.Borrar=function(persona){
		console.log("borrar"+persona);



/*$http.post("PHP/nexo.php",{accion :"borrar",persona:persona},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
.success(function(data, status, headers, config) {
    console.log("bien"+data);
  }).error(function(data, status, headers, config) {
     console.log("mal"+data);
});*/


/*
     $http.post('PHP/nexo.php', 
      headers: 'Content-Type': 'application/x-www-form-urlencoded',
      params: {accion :"borrar",persona:persona})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

*/
 	}




 	$scope.Modificar=function(id){
 		
 		console.log("Modificar"+id);
 	}





});
