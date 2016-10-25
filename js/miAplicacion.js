var miApp = angular.module("AngularABM",['ui.router','angularSpinners','angularFileUpload','satellizer']);

miApp.config(function($stateProvider,$urlRouterProvider,$authProvider){
	
  $authProvider.loginUrl = 'ABM_AngularJs_PHP_persona/PHP/auth.php';
  $authProvider.tokenName='MiTokenGeneradoEnPHP';
  $authProvider.tokenPrefix='AngularABM';
  $authProvider.authHeader='data';

   $authProvider.oauth2({
      name: 'ABM_AngularJs_PHP_persona',
      url: 'http://localhost',
      clientId: '6f75fe7eef2e44b657dd',
      redirectUri: 'http://localhost/ABM_AngularJs_PHP_persona/index.html#/usuario/iniciarSesion',
      authorizationEndpoint:  'http://localhost/ABM_AngularJs_PHP_persona/index.html#/usuario/iniciarSesion',
    });

  $stateProvider
		.state(
			"inicio",
			{
				url:'/inicio',
				templateUrl: 'vistas/inicio.html',
				controller: "controlInicio"
			}
		  )

/* USUARIOS */		
    .state(
      "usuario", {
        url: "/usuario",
        abstract: true,
        templateUrl: 'vistas/LogInRegistroUsuario/abstractaUsuario.html',
        controller : 'controlUsuario'
      }
      )

    .state(
      "usuario.menu", {
        url: "/menu",
        views: {
          "contenido":{
            templateUrl: 'vistas/LogInRegistroUsuario/usuarioMenu.html',
            controller: "controlUsuarioMenu"

          }
          
          
        }

      }
      )

    .state(
      "usuario.iniciarSesion", {
        url: "/iniciarSesion",
        views: {
          "contenido":{
            templateUrl: 'vistas/LogInRegistroUsuario/usuarioLogin.html',
            controller: "controlUsuarioLogin"

          }
          
          
        }

      }
      )

    .state(
      "usuario.registro", {
        url: "/registro",
        views: {
          "contenido":{
            templateUrl: 'vistas/LogInRegistroUsuario/usuarioRegistro.html',
            controller: "controlUsuarioRegistro"

          }
          
          
        }

      }
      )

/* PERSONAS */
		.state(
			"persona", {
				url: "/persona",
				abstract: true,
				templateUrl: 'vistas/ABMpersona/abstractaPersona.html',
        controller : 'controlPersona'
			}
			)

		.state(
			"persona.menu", {
				url: "/menu",
				views: {
					"contenido":{
						templateUrl: 'vistas/ABMpersona/personaMenu.html',
						controller: "controlPersonaMenu"

					}
					
					
				}

			}
			)

		.state(
			"persona.alta", {
				url: "/alta",
				views: {
					"contenido":{
						templateUrl: 'vistas/ABMpersona/personaAlta.html',
						controller: "controlPersonaAlta"

					}
					
					
				}

			}
			)

    .state(
      "persona.modificacion", {
        url: "/modificacion/{id}?:nombre:apellido:dni:foto",
        views: {
          "contenido":{
            templateUrl: 'vistas/ABMpersona/personaAlta.html',
            controller: "controlPersonaModificacion"

          }
          
          
        }

      }
      )

		.state(
			"persona.grilla", {
				url: "/grilla",
				views: {
					"contenido":{
						templateUrl: 'vistas/ABMpersona/personaGrilla.html',
						controller: "controlPersonaGrilla"

					}
					
					
				}

			}
			)

    /*.state('modificacion',
      {url: '/modificacion/{id}?:nombre:apellido:dni:foto',
      templateUrl: 'vistas/ABMpersona/personaAlta.html',
      controller: 'controlModificacion'})*/

/* JUEGOS */
     .state(
      "juego", {
        url: "/juego",
        abstract: true,
        templateUrl: 'vistas/SalaJuegos/abstractaSalaJuegos.html',
        controller : 'controlSalaJuegos'
      }
      )

     .state(
      "juego.menu", {
        url: "/menu",
        views: {
          "contenido":{
            templateUrl: 'vistas/SalaJuegos/salajuegosMenu.html',
            controller: "controlSalaJuegosMenu"

          }
          
          
        }

      }
      )

     .state(
      "juego.AdivinaElNumero1", {
        url: "/AdivinaElNumero1",
        views: {
          "contenido":{
            templateUrl: 'vistas/SalaJuegos/AdivinaElNumero1.html',
            controller: "controlAdivinaElNumero1"

          }
          
          
        }

      }
      ) 

     .state(
      "juego.AdivinaElNumero2", {
        url: "/AdivinaElNumero2",
        views: {
          "contenido":{
            templateUrl: 'vistas/SalaJuegos/AdivinaElNumero2.html',
            controller: "controlAdivinaElNumero2"

          }
          
          
        }

      }
      ) 

     .state(
      "juego.PiedarPapelTijera1", {
        url: "/PiedarPapelTijera1",
        views: {
          "contenido":{
            templateUrl: 'vistas/SalaJuegos/PiedarPapelTijera1.html',
            controller: "controlPiedarPapelTijera1"

          }
          
          
        }

      }
      )

      .state(
      "juego.PiedarPapelTijera2", {
        url: "/PiedarPapelTijera2",
        views: {
          "contenido":{
            templateUrl: 'vistas/SalaJuegos/PiedarPapelTijera2.html',
            controller: "controlPiedarPapelTijera2"

          }
          
          
        }

      }
      )  

      .state(
      "juego.AgilidadAritmetica1", {
        url: "/AgilidadAritmetica1",
        views: {
          "contenido":{
            templateUrl: 'vistas/SalaJuegos/AgilidadAritmetica1.html',
            controller: "controlAgilidadAritmetica1"

          }
          
          
        }

      }
      )

      .state(
      "juego.AgilidadAritmetica2", {
        url: "/AgilidadAritmetica2",
        views: {
          "contenido":{
            templateUrl: 'vistas/SalaJuegos/AgilidadAritmetica2.html',
            controller: "controlAgilidadAritmetica2"

          }
          
          
        }

      }
      )    

      .state(
      "juego.ReflejosDaltonicos1", {
        url: "/ReflejosDaltonicos1",
        views: {
          "contenido":{
            templateUrl: 'vistas/SalaJuegos/ReflejosDaltonicos1.html',
            controller: "controlReflejosDaltonicos1"

          }
          
          
        }

      }
      )    

    //$urlRouterProvider.otherwise("/persona/menu");
    $urlRouterProvider.otherwise("inicio");
	});	

miApp.controller("controlInicio", function($scope, $http){

});

miApp.controller('controlUsuario', function($scope, $http) {
  $scope.DatoTest="**Menu Usuario en la abstracta**";
});

miApp.controller('controlUsuarioMenu', function($scope, $state, $http) {

  $scope.iraIniciarSesion = function(){

    $state.go("usuario.iniciarSesion");

  }

  $scope.iraRegistro = function(){

    $state.go("usuario.registro");

  }


});

miApp.controller('controlUsuarioLogin', function($scope, $state, $timeout, spinnerService, $http, $auth) {

    $scope.usuario={};
    $scope.usuario.email= "usuario@dominio.com";
    $scope.usuario.password= "claveadmin";

    if($auth.isAuthenticated())
     {
       console.info('token',$auth.getPayload());
     }
     else
     {
       console.info('no token',$auth.getPayload());
     }
     console.info('Esta autenticado? ',$auth.isAuthenticated()); 
     console.info('Payload: ',$auth.getPayload());
     console.info('El token es: ',$auth.getToken()); 


    $scope.IniciarSesion= function () {
      console.log("login a retener:");
      console.log($scope.usuario);            
      spinnerService.show('html5spinner');
      
      /*$auth.authenticate('ABM_AngularJs_PHP_persona')
        .then(function(response) {
          console.info('correcto', response);
          // Signed in with ABM_AngularJs_PHP_persona.
          if ($auth.isAuthenticated()) {                   
                  $timeout(function () {
                  spinnerService.hide('html5spinner');
                  $scope.loggedIn = true;}, 2500);   
            }     
            else {
                 $timeout(function () {
                 spinnerService.hide('html5spinner');
                 $scope.loggedIncorrecto = true;}, 2500);
            }
        })
        .catch(function(response) {
          // Something went wrong.
          console.info('no volviio bien', response);
        });*/

      $auth.login($scope.usuario)
          .then(function(response) {
            console.info('correcto', response);
            if ($auth.isAuthenticated()) {                   
                  $timeout(function () {
                  spinnerService.hide('html5spinner');
                  $scope.loggedIn = true;}, 2500);  
                  $state.go("inicio");             
            }     
            else {
                 $timeout(function () {
                 spinnerService.hide('html5spinner');
                 $scope.loggedIncorrecto = true;}, 2500);
            }
            
          })
          .catch(function(response) {
            console.info('no volvio bien', response);
           
          });
           
    };

    $scope.iraRegistro = function(){

      $state.go("usuario.registro");

    };
  });

miApp.controller('controlUsuarioRegistro', function($scope, $state, $http) {

  $scope.usuario={};
  $scope.usuario.nombre = "Juan";
  $scope.usuario.apellido = "Gonzalez";
  $scope.usuario.edad = 38;
  $scope.usuario.sexo = "Masculino";
  $scope.usuario.dni = 23444444;
  $scope.usuario.estado = "opcion1";
  $scope.usuario.fechaNacimiento = new Date("1999-03-25");
  $scope.usuario.email = "juan@juan.com";
  $scope.usuario.password = "contrasena";
  $scope.usuario.copiapassword = "contrasena";
    
  $scope.Registrar=function(){

      console.log("usuario a crear:");
      console.log($scope.usuario);
      $http.post('PHP/nexo_usuario.php', { datos: {accion :"insertar",usuario:$scope.usuario}})
        .then(function(respuesta) {       
             //aca se ejecuta si retorno sin errores        
             console.info("Correcto: ",respuesta.data);
             $state.go("usuario.iniciarSesion");
        },function errorCallback(response) {        
            //aca se ejecuta cuando hay errores
            console.info("Incorrecto: ",response);           
        });
                
    }

  $scope.iraIniciarSesion = function(){

    $state.go("usuario.iniciarSesion");

  }

});

miApp.controller('controlPersona', function($scope, $http) {
  $scope.DatoTest="**Menu Persona en la abstracta**";
  $scope.OtroDato="Inicio y presentacion de la WEB"
});

miApp.controller("controlPersonaMenu", function($scope, $state, $http, $auth){

  if( ($auth.isAuthenticated()) )
     {
        $scope.DatoTest="**Lopez**";//el scope significa que se puede ver desde el js y html
        $scope.OtroDato="**Witt**";
     } 
    else
     {
       $state.go("usuario.iniciarSesion");
     }
 
    //$scope.DatoTest="**Lopez**";//el scope significa que se puede ver desde el js y html
    //$scope.OtroDato="**Witt**";
  

	$scope.iraAlta = function(){

		$state.go("persona.alta");

	}

	$scope.iraGrilla = function(){

		$state.go("persona.grilla");

	}

});

miApp.controller("controlPersonaAlta", function($scope, $state, $http, FileUploader){

  $scope.DatoTest="**alta**";

  //inicio las variables
  $scope.verdatos = true;
  $scope.uploader=new FileUploader({url:'PHP/nexo_fotos.php'});
  //$scope.uploader=new FileUploader({url:'PHP/nexo.php'});
 //$scope.uploader=new FileUploader({url:'ws1/index.php'});
  $scope.persona={};
  $scope.persona.nombre= "natalia" ;
  $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="pordefecto.png";
  //$scope.foto="fotos/pordefecto.png";
  //$scope.persona.foto="fotos/pordefecto.png";
  $scope.uploader.onSuccessItem=function(item, response, status, headers)
  {
  //$http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
  $http.post('http://localhost/ABM_AngularJs_PHP_persona/ws1/persona/' + JSON.stringify($scope.persona))
  //$http.post('http://localhost/ABM_AngularJs_PHP_persona/ws1/persona/' + "4")
    .then(function(respuesta) {        
       //aca se ejetuca si retorno sin errores        
     console.log(respuesta.data);
     $state.go("persona.grilla");

  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    });
  console.info("Ya guardé el archivo.", item, response, status, headers);
  };


  $scope.Guardar=function(){
  console.log($scope.uploader.queue);
  if($scope.uploader.queue[0]!=undefined)
  {
    var nombreFoto = $scope.uploader.queue[0]._file.name;
    $scope.persona.foto=nombreFoto;
  }
  $scope.uploader.uploadAll();
    console.log("persona a guardar:");
    console.log($scope.persona);
  
  }


//inicio las variables
/*  $scope.verdatos = true;
  $scope.persona={}; //se define un objeto de tipo json vacío. Si no se define los datos no salen en el formAlta.html
  $scope.persona.nombre= "natalia" ;
  $scope.persona.dni= "444412312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="sinfoto";

  //$scope.mascota={"nombre":"Rocco", "tipo":"Perro", "cumpleanos":new Date()};

   $scope.Guardar=function(){

    console.log("persona a guardar:");
    console.log($scope.persona);

    /*console.log("Se pasa el porcentaje del iva por parámetro");
    console.log(iva);
  	console.log("Mascota a guardar:");
    console.log($scope.mascota);*/

    /*
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
 	  .then(function(respuesta) {     	
 		     //aca se ejetuca si retorno sin errores      	
      	 console.log(respuesta.data);

    },function errorCallback(response) {     		
     		//aca se ejecuta cuando hay errores
     		console.log( response);     			
 	  });

  
	}*/
  
});

miApp.controller("controlPersonaGrilla", function($scope, $http, $state){  
  $scope.DatoTest="**grilla**";
  console.log("Estoy en la grilla");
  //$http.get('PHP/nexo.php', { params: {accion :"traer"}})
  $http.get('http://localhost/ABM_AngularJs_PHP_persona/ws1/personas')
  .then(function(respuesta) {        
             $scope.ListadoPersonas = respuesta.data.listado;
             console.info("Respuesta arrayJson: ",respuesta);
             console.log(respuesta.data);

    },function errorCallback(response) {
         $scope.ListadoPersonas= [];
        console.log( response);

  //En esta parte se consumen los datos en forma asincrónica. Es nuestro AJAX.
  /*$http.get('http://www.mocky.io/v2/57dac8f40f00005a008b6f28')
    .then(function(respuesta){
      //aca va la respuesta
      console.info("volvio", respuesta.data);
      $scope.ListadoPersonas = respuesta.data;

    },function(error){
      //aca van los errores
      $scope.ListadoPersonas= [];
      console.log(error);
      console.info("Cuidado Error!!!:", error);

    }) */ 
    });

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

    //$http.post("PHP/nexo.php",{datos:{accion :"borrar",persona:persona}},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
     $http.delete('http://localhost/ABM_AngularJs_PHP_persona/ws1/persona/' + JSON.stringify(persona))
     .then(function(respuesta) {       
             //aca se ejetuca si retorno sin errores        
             console.log(respuesta.data);
         //$http.get('PHP/nexo.php', { params: {accion :"traer"}})
        $http.get('http://localhost/ABM_AngularJs_PHP_persona/ws1/personas')
        .then(function(respuesta) {       

           $scope.ListadoPersonas = respuesta.data.listado;
           console.log(respuesta.data);

        },function errorCallback(response) {
             $scope.ListadoPersonas= [];
            console.log( response);
         });

        },function errorCallback(response) {        
            //aca se ejecuta cuando hay errores
            console.log( response); 
                      
    });

   }
 	/*$scope.Borrar=function(persona){
		console.log("borrar"+" "+persona);*/



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
 	

 	/*$scope.Modificar=function(id){
 		
 		console.log("Modificar"+" "+id);
 	}*/


});

miApp.controller('controlPersonaModificacion', function($scope, $http, $state, $stateParams, FileUploader)//, $routeParams, $location)
{
  $scope.verdatos = true;
  $scope.persona={};
  $scope.DatoTest="**Modificar**";
  //$scope.uploader=new FileUploader({url:'PHP/nexo.php'});
  $scope.uploader=new FileUploader({url:'PHP/nexo_fotos.php'});
  console.log($stateParams);//$scope.persona=$stateParams;
  $scope.persona.id=$stateParams.id;
  $scope.persona.nombre=$stateParams.nombre;
  $scope.persona.apellido=$stateParams.apellido;
  $scope.persona.dni=$stateParams.dni;
  $scope.persona.foto=$stateParams.foto;
  $scope.uploader.onSuccessItem=function(item, response, status, headers)
  {
    //$http.post('PHP/nexo.php', { datos: {accion :"modificar",persona:$scope.persona}})
    $http.put('http://localhost/ABM_AngularJs_PHP_persona/ws1/persona/' + JSON.stringify($scope.persona))
    .then(function(respuesta) 
    {
      //aca se ejecuta si retorno sin errores       
      console.log(respuesta.data);
      $state.go("persona.grilla");
    },
    function errorCallback(response)
    {
      //aca se ejecuta cuando hay errores
      console.log( response);           
    });
    console.info("Ya guardé el archivo.", item, response, status, headers);
  };
  $scope.Guardar=function(persona)
  {
    if($scope.uploader.queue[0]!=undefined)
    {
      var nombreFoto = $scope.uploader.queue[0]._file.name;
      $scope.persona.foto=nombreFoto;
      $scope.uploader.uploadAll();
    }
    else
    {
       $http.put('http://localhost/ABM_AngularJs_PHP_persona/ws1/persona/' + JSON.stringify($scope.persona))
        .then(function(respuesta) 
        {
          //aca se ejecuta si retorno sin errores       
          console.log(respuesta.data);
          $state.go("persona.grilla");
        },
        function errorCallback(response)
        {
          //aca se ejecuta cuando hay errores
          console.log( response);           
        });
        //console.info("Ya guardé el archivo.", item, response, status, headers);
    }
  }
});

miApp.controller('controlSalaJuegos', function($scope, $http) {
  $scope.DatoTest="**Menu Sala de Juegos en la abstracta**";
});

miApp.controller('controlSalaJuegosMenu', function($scope, $state, $http, $auth) {

  if( !($auth.isAuthenticated()) )
     {
       $state.go("usuario.iniciarSesion");
     }

  $scope.iraAdivinaElNumero1 = function(){

    $state.go("juego.AdivinaElNumero1");

  }

  $scope.iraAdivinaElNumero2 = function(){

    $state.go("juego.AdivinaElNumero2");

  }

  $scope.iraPiedarPapelTijera1 = function(){

    $state.go("juego.PiedarPapelTijera1");

  }

   $scope.iraPiedarPapelTijera2 = function(){

    $state.go("juego.PiedarPapelTijera2");

  }

   $scope.iraAgilidadAritmetica1 = function(){

    $state.go("juego.AgilidadAritmetica1");

  }

 $scope.iraAgilidadAritmetica2 = function(){

    $state.go("juego.AgilidadAritmetica2");

  } 

  $scope.iraReflejosDaltonicos1 = function(){

    $state.go("juego.ReflejosDaltonicos1");

  } 

});

miApp.controller("controlAdivinaElNumero1", function($scope, $state, $http){
  var numeroSecreto=0; 
  var contadorIntentos;
  $scope.datos={};
    $scope.Comenzar=function(){
    //Genero el número RANDOM entre 1 y 100   
    numeroSecreto =Math.floor( Math.random()*100)+1;
    contadorIntentos=0;
    $scope.datos.intentos=contadorIntentos;
  
    //alert(numeroSecreto );
  
  }

  $scope.Verificar=function(){
    if (numeroSecreto==0)
    {
        $scope.resultado= "Elija Comenzar";
        return;
    }

    numeroIngresado=$scope.datos.numero;

    contadorIntentos++;
    $scope.datos.intentos=contadorIntentos;
      //alert(numeroIngresado );
    if(numeroIngresado==numeroSecreto)
      {
         //alert("usted es un ganador!!!, y solo en "+contadorIntentos+" intentos.");
         $scope.resultado= "usted es un ganador!!!, y solo en "+contadorIntentos+" intentos.";
      }
    else if(numeroIngresado<numeroSecreto)
      {
        //alert("falta...");
        $scope.resultado="falta...";
      }
    else
      {
        //alert("se Pasó...");
        $scope.resultado="se Pasó...";
      }
    
    }
  

});//cada vez que se recarga la pagina se recarga el controlador

miApp.controller("controlAdivinaElNumero2", function($scope, $state, $http){
  var numeroSecreto=0; 
  var contadorIntentos;
  $scope.datos={};
    $scope.Comenzar=function(){
    //Genero el número RANDOM entre 1 y 100   
    numeroSecreto =Math.floor( Math.random()*100)+1;
    contadorIntentos=0;
    $scope.datos.intentos=contadorIntentos;
  
    //alert(numeroSecreto );
  
  }

  $scope.Verificar=function(){

     if (numeroSecreto==0)
      {
        $scope.resultado= "Elija Comenzar";
        return;
      }

    numeroIngresado=$scope.datos.numero;

    contadorIntentos++;
    $scope.datos.intentos=contadorIntentos;
      //alert(numeroIngresado );
    if(numeroIngresado==numeroSecreto)
      {
         //alert("usted es un ganador!!!, y solo en "+contadorIntentos+" intentos.");
         switch(contadorIntentos)
        {
          case 1:
            $scope.resultado="usted es un psíquico";
            break;
          case 2:
            $scope.resultado="excelente percepción";
            break;
          case 3:
            $scope.resultado="Esto es suerte";
            break;
          case 4:
            $scope.resultado="Excelente técnica";
            break;
          case 5:
            $scope.resultado="usted está en la media";
            break;
          default:
            if(contadorIntentos<10)
            {
              $scope.resultado="falta técnica";
            }
            else
            {
              $scope.resultado="afortunado en el amor!!";
            }
            
            break;
        }
      } 
    else if(numeroIngresado<numeroSecreto)
      {
        $scope.resultado="falta...";
      }
    else
      {
        $scope.resultado="se Pasó...";
      }
    
    }


});//cada vez que se recarga la pagina se recarga el controlador

miApp.controller("controlPiedarPapelTijera1", function($scope, $state, $http){
var eleccionMaquina;
$scope.comenzar=function()
{
  //Genero el número RANDOM entre 1 y 3
    numeroSecreto =Math.floor( Math.random()*3)+1;
    //alert(numeroSecreto);
    switch(numeroSecreto)
    {
      case 1:
        eleccionMaquina="piedra";
        break;
      case 2:
        eleccionMaquina="papel";
        break;
      case 3:
        eleccionMaquina="tijera";
        break;

    }
    //alert(eleccionMaquina);
    return eleccionMaquina;
    
}//FIN DE LA FUNCIÓN

$scope.piedra = function()
{
  $scope.seleccionMaquina="la máquina seleccionó: "+eleccionMaquina;
  eleccionHumano="piedra";
  if(eleccionHumano==eleccionMaquina)
  {
    $scope.resultado="empate.";   
  }
  else if(eleccionMaquina=="tijera")
  {
    $scope.resultado="vos ganastes.";
  }
  else
  {
    $scope.resultado="ganó la Máquina.";
  }
    $scope.comenzar();
}//FIN DE LA FUNCIÓN

$scope.papel = function()
{
  $scope.seleccionMaquina="la máquina seleccionó: "+eleccionMaquina;
  eleccionHumano="papel";
  if(eleccionHumano==eleccionMaquina)
  {
    $scope.resultado="empate.";
  }
  else if(eleccionMaquina=="piedra")
  {
    $scope.resultado="vos ganastes.";
  }
  else
  {
    $scope.resultado="ganó la Máquina.";
  }
  $scope.comenzar();
}//FIN DE LA FUNCIÓN

$scope.tijera = function()
{
  $scope.seleccionMaquina="la máquina seleccionó: "+eleccionMaquina;
  eleccionHumano="tijera";
  if(eleccionHumano==eleccionMaquina)
  {
    $scope.resultado="empate."; 
  }
  else if(eleccionMaquina=="papel")
  {
    $scope.resultado="vos ganastes.";
  }
  else
  {
    $scope.resultado="ganó la Máquina.";
  }
  $scope.comenzar();
}//FIN DE LA FUNCIÓN

});//cada vez que se recarga la pagina se recarga el controlador

miApp.controller("controlPiedarPapelTijera2", function($scope, $state, $http){
var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
$scope.datos={};
$scope.comenzar=function()
{
  //Genero el número RANDOM entre 1 y 3
    numeroSecreto =Math.floor( Math.random()*3)+1;
    //alert(numeroSecreto);
    switch(numeroSecreto)
    {
      case 1:
        eleccionMaquina="piedra";
        break;
      case 2:
        eleccionMaquina="papel";
        break;
      case 3:
        eleccionMaquina="tijera";
        break;

    }
    //alert(eleccionMaquina);
    return eleccionMaquina;
    
}//FIN DE LA FUNCIÓN

$scope.piedra = function()
{
  $scope.seleccionMaquina="la máquina seleccionó: "+eleccionMaquina;
  eleccionHumano="piedra";
  if(eleccionHumano==eleccionMaquina)
  {
    $scope.resultado="empate.";
    ContadorDeEmpates++;      
  }
  else if(eleccionMaquina=="tijera")
  {
    $scope.resultado="vos ganastes.";
    ContadorDeGanadas++;
  }
  else
  {
    $scope.resultado="ganó la máquina.";
    ContadorDePerdidas++;
  }
  $scope.mostrarResultado();
}//FIN DE LA FUNCIÓN

$scope.papel = function()
{
  $scope.seleccionMaquina="la máquina seleccionó: "+eleccionMaquina;
  eleccionHumano="papel";
  if(eleccionHumano==eleccionMaquina)
  {
    $scope.resultado="empate.";
    ContadorDeEmpates++;  
  }
  else if(eleccionMaquina=="piedra")
  {
    $scope.resultado="vos ganastes.";
    ContadorDeGanadas++;
  }
  else
  {
    $scope.resultado="ganó la máquina.";
    ContadorDePerdidas++;
  }
  $scope.mostrarResultado();
}//FIN DE LA FUNCIÓN

$scope.tijera = function()
{
  $scope.seleccionMaquina="la máquina seleccionó: "+eleccionMaquina;
  eleccionHumano="tijera";
  if(eleccionHumano==eleccionMaquina)
  {
    $scope.resultado="empate.";
    ContadorDeEmpates++;    
  }
  else if(eleccionMaquina=="papel")
  {
    $scope.resultado="vos ganastes.";
    ContadorDeGanadas++;
  }
  else
  {
    $scope.resultado="ganó la máquina.";
    ContadorDePerdidas++;
  }
  $scope.mostrarResultado();
}//FIN DE LA FUNCIÓN

$scope.mostrarResultado = function()
{

  $scope.datos.empatadas=ContadorDeEmpates + " partidas empatadas.";
  $scope.datos.perdidas=ContadorDePerdidas + " partidas perdidas.";
  $scope.datos.ganadas=ContadorDeGanadas + " partidas ganadas.";

  $scope.comenzar();
}

});//cada vez que se recarga la pagina se recarga el controlador

miApp.controller("controlAgilidadAritmetica1", function($scope, $state, $http){

  var totaloperacion;
  var operador;
  $scope.datos={};
  $scope.comenzar = function()
  {
      $scope.datos.randomprimernumero = Math.floor( Math.random()*10)+1;
      $scope.datos.randomsegundonumero = Math.floor( Math.random()*10)+1;
    operador = Math.floor( Math.random()*4)+1; 
    switch(operador)
    {
      case 1:       
        $scope.datos.randomoperador="Suma";
        totaloperacion = $scope.datos.randomprimernumero + $scope.datos.randomsegundonumero
        break;
      case 2:
        $scope.datos.randomoperador="Resta";
        totaloperacion = $scope.datos.randomprimernumero - $scope.datos.randomsegundonumero
        break;
      case 3:
        $scope.datos.randomoperador="Multiplicación";
        totaloperacion = $scope.datos.randomprimernumero * $scope.datos.randomsegundonumero
        break;
      case 4:
        $scope.datos.randomoperador="División";
        totaloperacion = $scope.datos.randomprimernumero / $scope.datos.randomsegundonumero
        break;
    }
     return totaloperacion;
  }//FIN DE LA FUNCIÓN
  
  $scope.Responder = function()
  {
    if ( parseInt($scope.datos.respuesta) == totaloperacion )
     {
           $scope.resultado = "Correcto!!";
     } 
    else
     {
           $scope.resultado = "Incorrecto!!";
     } 
       $scope.comenzar();
  }//FIN DE LA FUNCIÓN

});//cada vez que se recarga la pagina se recarga el controlador

miApp.controller("controlAgilidadAritmetica2", function($scope, $state, $http){
  var totaloperacion;
  var operador;
  var tiempo=0;
  var finTiempo;
  $scope.datos={};
  $scope.comenzar = function()
  {
      $scope.datos.randomprimernumero = Math.floor( Math.random()*10)+1;
      $scope.datos.randomsegundonumero = Math.floor( Math.random()*10)+1;
    operador = Math.floor( Math.random()*4)+1; 
    switch(operador)
    {
      case 1:       
        $scope.datos.randomoperador="Suma";
        totaloperacion = $scope.datos.randomprimernumero + $scope.datos.randomsegundonumero
        break;
      case 2:
        $scope.datos.randomoperador="Resta";
        totaloperacion = $scope.datos.randomprimernumero - $scope.datos.randomsegundonumero
        break;
      case 3:
        $scope.datos.randomoperador="Multiplicación";
        totaloperacion = $scope.datos.randomprimernumero * $scope.datos.randomsegundonumero
        break;
      case 4:
        $scope.datos.randomoperador="División";
        totaloperacion = $scope.datos.randomprimernumero / $scope.datos.randomsegundonumero
        break;
    }
     //tiempo = 5000.
     finTiempo = setTimeout($scope.temporizador, 5000);  
     return totaloperacion;
  }//FIN DE LA FUNCIÓN
  
  $scope.Responder = function()
  {
    if ( parseInt($scope.datos.respuesta) == totaloperacion )
     {
           $scope.resultado = "Correcto!!";
           clearTimeout(finTiempo);
     } 
    else
     {
           $scope.resultado = "Incorrecto!!";
           clearTimeout(finTiempo);
     } 
       //$scope.comenzar();
  }//FIN DE LA FUNCIÓN
  
  $scope.temporizador = function()
  {
       //tiempo = tiempo / 1000. 
       //$scope.resultado = "Incorrecto!! (fin del tiempo)";
       alert("Incorrecto!! (fin del tiempo)"); 
  }

});//cada vez que se recarga la pagina se recarga el controlador

miApp.controller("controlReflejosDaltonicos1", function($scope, $state, $http){

var ColorSecreto;
var tiempoInicio;
$scope.comenzar = function ()
{
  
  //Genero el número RANDOM entre 1 y 4
   EleccionColorSecreto =Math.floor( Math.random()*6)+1;
    
    switch(EleccionColorSecreto)
    {
      case 1:
        
        ColorSecreto="rojo";
        break;
      case 2:
        ColorSecreto="azul";
        break;
      case 3:
        ColorSecreto="verde";
        break;
      case 4:
        ColorSecreto="amarillo";
        break;
      case 5:
        ColorSecreto="marron";
        break;
      case 6:
        ColorSecreto="celeste";
        break;
      

    }
    
 $scope.ColorElejido=ColorSecreto;

 tiempoInicio=  new Date();
 tiempoInicio=tiempoInicio.getTime();

}//FIN DE LA FUNCIÓN
$scope.Responder = function(colorParametro)
{
  
  if(colorParametro==ColorSecreto)
    {
      tiempoFinal= new Date();
      tiempoFinal=tiempoFinal.getTime();
      resultado=tiempoFinal-tiempoInicio;
      $scope.resultado="su tiempo fue: "+resultado;
    }
    else
    {
      $scope.resultado="incorrecto";
    }


}//FIN DE LA FUNCIÓN

});//cada vez que se recarga la pagina se recarga el controlador