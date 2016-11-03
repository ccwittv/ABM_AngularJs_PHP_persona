angular
  .module('AngularABM')
  .service('serviciosApps', function ($http) {

/*Variable privada*/
    var url = 'http://localhost/ABM_AngularJs_PHP_persona/ws1';

//Funciones públicas
    this.insertar = function (ruta,objetoInsertar) {

      return $http.post(TraerUrl(ruta) + JSON.stringify(objetoInsertar))
                .then(function(respuesta) {        
               //aca se ejecuta si retorno sin errores        
                   console.info('Respuesta Slim: ',respuesta.data);
                   return respuesta.data;
                },function errorCallback(response) {        
              //aca se ejecuta cuando hay errores
                    console.info('ERROR Slim: ',response);
                    return response.data;           
                });
    }

    this.traerTodo = function (ruta) {

      return $http.get(TraerUrl(ruta))
                .then(function(respuesta) {        
               //aca se ejecuta si retorno sin errores        
                   console.info('Respuesta Slim: ',respuesta.data);
                   return respuesta.data;
                },function errorCallback(response) {        
              //aca se ejecuta cuando hay errores
                    console.info('ERROR Slim: ',response);
                    return response.data;           
                });
    }

    this.borrar = function (ruta,objetoBorrar) {

      return $http.delete(TraerUrl(ruta) + JSON.stringify(objetoBorrar))
                .then(function(respuesta) {        
               //aca se ejecuta si retorno sin errores        
                   console.info('Respuesta Slim: ',respuesta.data);
                   return respuesta.data;
                },function errorCallback(response) {        
              //aca se ejecuta cuando hay errores
                    console.info('ERROR Slim: ',response);
                    return response.data;           
                });
    }

    this.modificar = function (ruta,objetoModificar) {

      return $http.put(TraerUrl(ruta) + JSON.stringify(objetoModificar))
                .then(function(respuesta) {        
               //aca se ejecuta si retorno sin errores        
                   console.info('Respuesta Slim: ',respuesta.data);
                   return respuesta.data;
                },function errorCallback(response) {        
              //aca se ejecuta cuando hay errores
                    console.info('ERROR Slim: ',response);
                    return response.data;           
                });
    }

    function TraerUrl(Parametro){ //esta funcion es privada
      if(!Parametro){
        return url;
      }
      else
      {
        return url + "/" + Parametro + '/';
      }
    }

  })
