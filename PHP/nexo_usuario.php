<?php
	include "clases/Usuarios.php";
	if(isset($_GET['accion']))
		{
			
		}
	else
		{ 
			$DatosPorPost = file_get_contents("php://input");
			$respuesta = json_decode($DatosPorPost);
	//var_dump($respuesta);
			switch($respuesta->datos->accion)
				{
					case "insertar";
					 {
					 	break;
					 }
				}
		} 

?>
