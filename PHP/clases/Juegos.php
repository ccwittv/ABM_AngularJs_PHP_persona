<?php
require_once"accesoDatos.php";
class Juego
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	private $id;
	private $usuario;
 	private $fechajuego;
 	private $horajuego;
  	private $resultado;
  	private $observacion;
  	
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetId()
	{
		return $this->id;
	}
	public function GetUsuario()
	{
		return $this->usuario;
	}
	public function GetFechaJuego()
	{
		return $this->fechajuego;
	}
	public function GetHoraJuego()
	{
		return $this->horajuego;
	}
	public function GetResultado()
	{
		return $this->resultado;
	}
	public function GetObservacion()
	{
		return $this->observacion;
	}
	
	
	public function SetId($valor)
	{
		$this->id = $valor;
	}
	public function SetUsuario($valor)
	{
		$this->usuario = $valor;
	}	
	public function SetFechaJuego($valor)
	{
		$this->fechajuego = $valor;
	}	
	public function SetHoraJuego($valor)
	{
		$this->horajuego = $valor;
	}	
	public function SetResultado($valor)
	{
		$this->resultado = $valor;
	}	
	public function SetObservacion($valor)
	{
		$this->observacion = $valor;
	}	
	
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($id=NULL)
	{
		
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->usuario."-".$this->fechajuego."-".$this->horajuego."-".$this->resultado."-".$this->observacion;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	
//--------------------------------------------------------------------------------//

	public static function InsertarJuego($unJuego)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		/*$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into juego (usuario,fechajuego,horajuego,juego,resultado,observacion)
															values(:usuario,:fechajuego,:horajuego,:juego,:resultado,:observacion)");*/		
		$consulta =$objetoAccesoDato->RetornarConsulta("CALL InsertarJuego (:usuario,:fechajuego,:horajuego,:juego,:resultado,:observacion)");
		$consulta->bindValue(':usuario',$unJuego->usuario, PDO::PARAM_STR);
		/*$consulta->bindValue(':fechajuego', $unJuego->fechajuego, PDO::PARAM_STR);
		$consulta->bindValue(':horajuego', $unJuego->horajuego, PDO::PARAM_STR);*/
		$consulta->bindValue(':fechajuego', date("Y-m-d"), PDO::PARAM_STR);
		$consulta->bindValue(':horajuego', date("H:i:s"), PDO::PARAM_STR);
		$consulta->bindValue(':juego', $unJuego->juego, PDO::PARAM_STR);
		$consulta->bindValue(':resultado', $unJuego->resultado, PDO::PARAM_STR);
		$consulta->bindValue(':observacion', $unJuego->observacion, PDO::PARAM_STR);		
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}

    /*public static function InsertarJuego($unJuego)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into juego (usuario,juego,resultado,observacion)
															values(:usuario,:juego,:resultado,:observacion)");		
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL InsertarJuego (:usuario,:fechajuego,:horajuego,:resultado,:observacion)");
		$consulta->bindValue(':usuario',$unJuego->usuario, PDO::PARAM_STR);
		$consulta->bindValue(':juego', $unJuego->juego, PDO::PARAM_STR);
		$consulta->bindValue(':resultado', $unJuego->resultado, PDO::PARAM_STR);
		$consulta->bindValue(':observacion', $unJuego->observacion, PDO::PARAM_STR);		
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}*/		
//--------------------------------------------------------------------------------//


}
