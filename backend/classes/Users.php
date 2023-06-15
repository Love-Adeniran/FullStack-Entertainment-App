<?php
require_once("Config.php");
// use Firebase\JWT\JWT;
// use Firebase\JWT\Key;
    class Users extends Config{
        public function __construct(){
            parent::__construct();
        }
        
        // all guest starts here
        public function createUserGuest($full_name, $phone_number, $e_mail, $password){
            $query = "INSERT INTO guest_tb (full_name, phone_number, email, `password`) VALUES (?, ?, ?, ?)";
            $binder = array("ssss", $full_name, $phone_number, $e_mail, $password);
            return $this->create($query, $binder);
            
        }
        public function getUserGuest(){
            $query = "SELECT * FROM guest_tb";
            $binder = null;
            return $this->read($query, $binder);
        }
        
        public function guestLogin($email){
            $query = "SELECT * FROM guest_tb WHERE email=? ";
            $binder = array("s",$email);
            return $this->read($query,$binder);
        }
        
        //Jwt decode
        // public function getJWTdetails(){
        //     $header = getallheaders();
        //     $jwtHeader = $header['authorization'];
        //     $jwt = trim(substr($jwtHeader,7));
        //     $jwtDetails = JWT::decode($jwt, new Key("4e3v2o1l", 'HS256'));
        //     return $jwtDetails;
        // }
        // All guest ends here
        
        public function createUserMusician($full_name,$nick_name, $email, $phone_number, $password){
            $query = "INSERT INTO musician_tb (`full_name`,`nick_name`,`email`,`phone_number`,`password`) VALUES (?,?,?,?,?)";
            $binder = array("sssss",$full_name,$nick_name, $email, $phone_number, $password);
            return $this->create($query, $binder);
        }
        

        
        public function getUserMusician($email){
            $query = "SELECT * FROM musician_tb WHERE email=? ";
            $binder = array("s",$email);
            return $this->read($query,$binder);
        }

        public function musicianInsertProfile($category,$country,$town,$priceRange,$image,$email){
            $query = "UPDATE `musician_tb` SET `category`= ?,`country`= ?,`town`= ?,`price_range`= ?, `image`= ? WHERE email= ?";
            $binder = array('ssssss',$category,$country,$town,$priceRange,$image,$email);
            return $this->update($query,$binder);
        }
    }

?>