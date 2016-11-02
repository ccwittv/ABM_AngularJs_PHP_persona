<?php
require_once"accesoDatos.php";
class Usuario
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id;
	public $nombre;
 	public $apellido;
 	public $sexo;
  	public $dni;
  	public $estado_civil;
  	public $fecha_nac;
  	public $correo;
  	public $password;
  	public $lenguaje_prog;

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetId()
	{
		return $this->id;
	}
	public function GetApellido()
	{
		return $this->apellido;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetSexo()
	{
		return $this->sexo;
	}
	public function GetDni()
	{
		return $this->dni;
	}
	public function GetEstadoCivil()
	{
		return $this->estado_civil;
	}
	public function GetFechaNac()
	{
		return $this->fecha_nac;
	}
	public function GetCorreo()
	{
		return $this->correo;
	}
	public function GetPassword()
	{
		return $this->password;
	}
	public function GetLenguajeProg()
	{
		return $this->lenguaje_prog;
	}
	
	public function SetId($valor)
	{
		$this->id = $valor;
	}
	public function SetApellido($valor)
	{
		$this->apellido = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetSexo($valor)
	{
		$this->sexo = $valor;
	}
	public function SetDni($valor)
	{
		$this->dni = $valor;
	}
	public function SetEstadoCivil($valor)
	{
		$this->estado_civil = $valor;
	}
	public function SetFechaNac($valor)
	{
		$this->fecha_nac = $valor;
	}
	public function SetCorreo($valor)
	{
		$this->correo = $valor;
	}
	public function SetPassword($valor)
	{
		$this->password = $valor;
	}
	public function SetLenguajeProg($valor)
	{
		 $this->lenguaje_prog = $valor;
	}
	
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($correo=NULL)
	{
		if($correo != NULL){
			$obj = Usuario::TraerUnUsuario($correo);
			
			$this->apellido = $obj->apellido;
			$this->nombre = $obj->nombre;
			$this->dni = $obj->$dni;
			$this->sexo = $obj->sexo;
			$this->estado_civil = $obj->estado_civil;
			$this->fecha_nac = $obj->fecha_nac;
			$this->correo = $correo;
			$this->password = $obj->password;
			$this->lenguaje_prog = $obj->lenguaje_prog;

		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->apellido."-".$this->nombre."-".$this->dni."-".$this->sexo."-".$this->estado_civil
	  	."-".$this->fecha_nac."-".$this->correo."-".$this->password."-".$this->lenguaje_prog;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnUsuario($correoParametro) 
	{	

		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuario where correo =:correo");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':correo', $correoParametro, PDO::PARAM_STR);
		$consulta->execute();
		$usuarioBuscado= $consulta->fetchObject('usuario');
		return $usuarioBuscado;	
					
	}

//--------------------------------------------------------------------------------//

	public static function InsertarUsuario($usuario)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into usuario (nombre,apellido,dni,sexo,estado_civil,fecha_nac,correo,password,lenguaje_prog)
															values(:nombre,:apellido,:dni,:sexo,:estado_civil,:fecha_nac,:correo,:password,:lenguaje_prog)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL InsertarPersona (:nombre,:apellido,:dni,:foto)");
		$consulta->bindValue(':nombre',$usuario->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':apellido', $usuario->apellido, PDO::PARAM_STR);
		$consulta->bindValue(':dni', $usuario->dni, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $usuario->sexo, PDO::PARAM_STR);
		$consulta->bindValue(':estado_civil', $usuario->estado, PDO::PARAM_STR);
		$consulta->bindValue(':fecha_nac', $usuario->fechaNacimiento, PDO::PARAM_STR);
		$consulta->bindValue(':correo', $usuario->email, PDO::PARAM_STR);
		$consulta->bindValue(':password', $usuario->password, PDO::PARAM_STR);
		//$consulta->bindValue(':lenguaje_prog', $usuario->lenguaje, PDO::PARAM_STR);
		$consulta->bindValue(':lenguaje_prog', "un lenguaje cualquiera", PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//


}
