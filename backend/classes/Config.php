<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, authorization");
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    class Config{
        protected $host='localhost';
        protected $username='root';
        protected $password='';
        protected $databaseName='entertainment_app';
        public $connection;
        public $response;
        public $user;

        public function __construct(){
            $this->connection = new mysqli($this->host,$this->username,$this->password,$this->databaseName);
            if($this->connection->connect_error){
                echo 'Pressure ti wa oo';
            }
            else{
                // echo 'Successfully connected';
            }
        }
        public function create($query, $binder){
            $statement = $this->connection->prepare($query);
            $statement->bind_param(...$binder);
            if($statement->execute()){
                $this->response['success'] = true;
                return $this->response;
            }else {
                return false;
            }
        }
        public function read($query, $binder){
            $statement = $this->connection->prepare($query);
            if($binder){
                $statement->bind_param(...$binder);
            }
            if($statement->execute()){
                $this->response['success'] = true;
                $this->user = $statement->get_result();
                $this->response = mysqli_fetch_all($this->user,MYSQLI_ASSOC);
                return $this->response;
            }else{
                return false;
            }
        }
        public function update($query, $binder){
            $statement = $this->connection->prepare($query);
            if($binder){
                $statement->bind_param(...$binder);
            }
            if($statement->execute()){
                $this->response['success'] = true;
                return $this->response;
            }else {
                return false;
            }
            
        }
        public function delete(){
            $statement = $this->connection->prepare($query);
            if($binder){
                $statement->bind_param(...$binder);
            }
            if($statement->execute()){
                $this->response['success'] = true;
                return $this->response;
            }else {
                return false;
            }
        }
    }



?>