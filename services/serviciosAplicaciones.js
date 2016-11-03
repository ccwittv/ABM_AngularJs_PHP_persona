angular
  .module('AngularABM')
  .service('serviciosApps', function ($http) {

    this.insertar = function (URL,objetoInsertar) {

      return $http.post(URL + JSON.stringify(objetoInsertar))
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

    this.traerTodo = function (URL) {

      return $http.get(URL)
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

    this.borrar = function (URL,objetoBorrar) {

      return $http.delete(URL + JSON.stringify(objetoBorrar))
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

    this.modificar = function (URL,objetoModificar) {

      return $http.put(URL + JSON.stringify(objetoModificar))
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

  })
