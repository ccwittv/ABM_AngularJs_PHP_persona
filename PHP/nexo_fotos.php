<?php
//var_dump($_FILES);
if ( !empty( $_FILES ) ) 
{
    $temporal = $_FILES[ 'file' ][ 'tmp_name' ];
    var_dump($temporal);
    $ruta = "..". DIRECTORY_SEPARATOR . 'fotos' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];
    var_dump($ruta);
    move_uploaded_file( $temporal, $ruta );
    echo "correcto";
}
?>