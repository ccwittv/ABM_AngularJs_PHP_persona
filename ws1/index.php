<?php
include "../PHP/clases/Personas.php";

/*if ( !empty( $_FILES ) ) 
{
    $temporal = $_FILES[ 'file' ][ 'tmp_name' ];
    $ruta = "..". DIRECTORY_SEPARATOR . 'fotos' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];
    move_uploaded_file( $temporal, $ruta );
    echo "correcto";
}*/

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

$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    var_dump($response);
    echo $response;
    //return $response;
    var_dump($request);
   //echo $request;
});


$app->delete('/persona/{id}', function ($request, $response, $args) {
    $response->write("borrar !", $args->id);
    var_dump($args);
    return $response;
});

$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});

$app->get('/personas[/]', function ($request, $response, $args) {
    //$response->write("Lista de usuarios");
    //return $response;
    
    $response= array();    
    $response['listado']=Persona::TraerTodasLasPersonas();
    //var_dump(Persona::TraerTodasLasPersonas());
    $arrayJson = json_encode($response);     
    echo  $arrayJson;
    
});

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
/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
