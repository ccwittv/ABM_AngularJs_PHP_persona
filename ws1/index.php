<?php
include "../PHP/clases/Personas.php";

/**
 * Step 1: Require the Slim Framework using Composer's autoloader
 *
 * If you are not using Composer, you need to load Slim Framework with your own
 * PSR-4 autoloader.
 */
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require 'vendor/autoload.php';

/**
 * Step 2: Instantiate a Slim application
 *
 * This example instantiates a Slim application using
 * its default settings. However, you will usually configure
 * your Slim application now by passing an associative array
 * of setting names and values into the application constructor.
 */
$app = new Slim\App();

/**
 * Step 3: Define the Slim application routes
 *
 * Here we define several Slim application routes that respond
 * to appropriate HTTP request methods. In this example, the second
 * argument for `Slim::get`, `Slim::post`, `Slim::put`, `Slim::patch`, and `Slim::delete`
 * is an anonymous function.
 */
/**
* GET: Para consultar y leer recursos
* POST: Para crear recursos
* PUT: Para editar recursos
* DELETE: Para eliminar recursos
*
*  GET: Para consultar y leer recursos */

//******************************************
// PARA PRUEBAS DEL GET
//******************************************
$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");
    var_dump($response);
    echo $response;
    //return $response;
    var_dump($request);
   //echo $request;
});

$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});

//*************************************  
// PARA PERSONAS
//*************************************

//GET: para consultar y leer recursos
$app->get('/personas[/]', function ($request, $response, $args) {
    //$response->write("Lista de usuarios");
    //return $response;
    
    $respuesta= array();    
    $respuesta['listado']=Persona::TraerTodasLasPersonas();
    //var_dump($respuesta);
    $arrayJson = json_encode($respuesta);     
    echo  $arrayJson;
    
});

//GET: para consultar y leer un solo recursos
$app->get('/persona[/{id}[/{name}]]', function ($request, $response, $args) {
    $response->write("Datos persona ");
    var_dump($args);
    //var_dump($request);
    //return $response;

    //echo json_encode(Persona::TraerUnaPersona($response->datos->id));
    echo json_encode(Persona::TraerUnaPersona($args['id']));

});

/* POST: Para crear recursos */
$app->post('/persona/{unaPersona}', function ($request, $response, $args) {
    /*$response->write("Welcome to Slim!");
    var_dump($args);
    var_dump($response);
    return $response;*/

    $respuesta = json_decode($args['unaPersona']);// decodifica un string de JSON
    if($respuesta->foto!="pordefecto.png")
            {
                $rutaVieja="../fotos/".$respuesta->foto;
                $rutaNueva=$respuesta->dni.".".PATHINFO($rutaVieja, PATHINFO_EXTENSION);
                copy($rutaVieja, "../fotos/".$rutaNueva);
                unlink($rutaVieja);
                $respuesta->foto=$rutaNueva;
            }
    var_dump($respuesta);
    Persona::InsertarPersona($respuesta);    

});

// /* DELETE: Para eliminar recursos */
$app->delete('/persona/{unaPersona}', function ($request, $response, $args) {
    /*$response->write("borrar !", $args->id);
    var_dump($args);
    return $response;*/
     $respuesta = json_decode($args['unaPersona']);// decodifica un string de JSON
    if($respuesta->foto!="pordefecto.png")
            {
                unlink("../fotos/".$respuesta->foto);
            }
    Persona::BorrarPersona($respuesta->id);
});

// /* PUT: Para editar recursos */
$app->put('/persona/{unaPersona}', function ($request, $response, $args) {
    // $response->write("Welcome to Slim!");
    // var_dump($args);    
    // return $response;
     $respuesta = json_decode($args['unaPersona']);// decodifica un string de JSON
    //var_dump($respuesta);
    var_dump(substr($respuesta->foto,0,-4)); 
    //Si el dni es distinto al número que está como nombre de la foto es que pudo subirse una nueva foto
    if ($respuesta->dni != substr($respuesta->foto,0,-4)) 
     {
        if($respuesta->foto!="pordefecto.png")
            {
                $rutaVieja="../fotos/".$respuesta->foto;
                $rutaNueva=$respuesta->dni.".".PATHINFO($rutaVieja, PATHINFO_EXTENSION);
                copy($rutaVieja, "../fotos/".$rutaNueva);
                unlink($rutaVieja);
                $respuesta->foto=$rutaNueva;
            }
      }      
    Persona::ModificarPersona($respuesta);
});

//*************************************  
// PARA USUARIOS
//*************************************
//GET: para consultar y leer recursos
$app->get('/usuarios[/]', function ($request, $response, $args) {
    $response->write("Lista de usuarios");
    return $response;
});

//GET: para consultar y leer un solo recurso
$app->get('/usuario[/{id}[/{name}]]', function ($request, $response, $args) {
    $response->write("Datos usuario ");
    var_dump($args);
    return $response;
});
/* POST: Para crear recursos */
$app->post('/usuario/{id}', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    var_dump($args);
    return $response;
});

// /* PUT: Para editar recursos */
$app->put('/usuario/{id}', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    var_dump($args);    
    return $response;
});

// /* DELETE: Para eliminar recursos */
$app->delete('/usuario/{id}', function ($request, $response, $args) {
    $response->write("borrar !", $args->id);
    var_dump($args);
    return $response;
});

//*************************************  
// PARA SALA DE JUEGOS
//*************************************
//GET: para consultar y leer recursos
$app->get('/juegos[/]', function ($request, $response, $args) {
    $response->write("Lista de usuarios");
    return $response;
});

//GET: para consultar y leer un solo recurso
$app->get('/juego[/{id}[/{name}]]', function ($request, $response, $args) {
    $response->write("Datos usuario ");
    var_dump($args);
    return $response;
});
/* POST: Para crear recursos */
$app->post('/juego/{id}', function ($request, $response, $args) {
    $response->write("Welcome to Slim Sala de juegos! ");
    var_dump($args);
    return $response;
});

// /* PUT: Para editar recursos */
$app->put('/juego/{id}', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    var_dump($args);    
    return $response;
});

// /* DELETE: Para eliminar recursos */
$app->delete('/juego/{id}', function ($request, $response, $args) {
    $response->write("borrar !", $args->id);
    var_dump($args);
    return $response;
});

/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
