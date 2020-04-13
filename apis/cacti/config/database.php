<?php 

class Database{
	private $host = "localhost";
	private $username = "nagios";
	private $password = "OC8TznxtPB2mZgN5";

	public function getConnection($dbName){
		$pdo = null;

		try{
			$pdo = new PDO("mysql:host=" . $this->host . ";dbname=" . $dbName, $this->username, $this->password);
		}catch(PDOException $exception){
			echo "Connection error: " . $exception->getMessage();
		}

		return $pdo;
	}
}

?>