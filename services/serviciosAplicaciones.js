angular
  .module('AngularABM')
  .service('serviciosApps', function ($http) {

    this.insertar = function (URL,objetoInsertar) {

      return $http.post(URL + JSON.stringify(objetoInsertar))
                .then(function(respuesta) {        
               //aca se ejecuta si retorno sin errores        
                   console.info('Respuesta Slim:',respuesta.data);
                   return respuesta.data;
                },function errorCallback(response) {        
              //aca se ejecuta cuando hay errores
                    console.log(response);
                    return response.data;           
                });
    }

  })
