<?php
require_once("Config.php");
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
        
        // All guest ends here
        
        public function createUserMusician($full_name,$nick_name, $email, $phone_number, $password){
            $query = "INSERT INTO musician_tb (`full_name`,`nick_name`,`email`,`phone_number`,`password`) VALUES (?,?,?,?,?)";
            $binder = array("sssss",$full_name,$nick_name, $email, $phone_number, $password);
            return $this->create($query, $binder);
        }
        public function getAllMusician(){
            $query = "SELECT * FROM musician_tb ";
            $binder = array();
            return $this->read($query,$binder);
        }
        public function getEachMusician($email){
            $query = "SELECT * FROM musician_tb WHERE `email` = ?";
            $binder = array('s', $email);
            return $this->read($query,$binder);
        }
        
        public function musicianeditProfile($nick_name,$p_number,$country,$music_style,$id){
            $query = "UPDATE musician_tb SET `nick_name`= ?, `phone_number`= ?,`country`= ?, `music_style`= ? WHERE `musician_id`= ?";
            $binder = array('sssss',$nick_name,$p_number,$country,$music_style,$id);
            return $this->update($query, $binder);
        }
        
        public function getUserMusician($email){
            $query = "SELECT * FROM musician_tb WHERE email=? ";
            $binder = array("s",$email);
            return $this->read($query,$binder);
        }
        public function musicianChangePassword($password,$id){
            $query = "UPDATE musician_tb SET `password`=? WHERE `musician_id`=?";
            $binder = array('ss',$password,$id);
            return $this->update($query,$binder);
        }
        public function musicianChangepicture($image,$email){
            $query = "UPDATE musician_tb SET `image`= ? WHERE `email`= ?";
            $binder = array('ss',$image,$email);
            return $this->update($query, $binder);
        }

        public function musicianUpdateProfile($category,$country,$town,$priceRange,$image,$musicStyle,$eventStyle,$email){
            $query = "UPDATE `musician_tb` SET `category`= ?,`country`= ?,`town`= ?,`price_range`= ?, `image`= ?, `music_style`=?, `event_style`=?  WHERE email= ?";
            $binder = array('ssssssss',$category,$country,$town,$priceRange,$image,$musicStyle,$eventStyle,$email);
            return $this->update($query,$binder);
        }

        public function uploadAudio($title,$name,$audioName,$fetchmusicianId){
            $query = "INSERT INTO audio_tb (`audio_title`, `audio_name`,`audio`,`musician_id`) VALUES (?,?,?,?)";
            $binder = array('ssss', $title,$name,$audioName,$fetchmusicianId);
            return $this->create($query, $binder);
        }

        public function getAudio($user_id){
            $query = "SELECT * FROM `audio_tb` WHERE `musician_id` = ?";
            $binder = array('s', $user_id);
            return $this->read($query, $binder);
        }
        public function deleteAudio($user_id){
            $query = "DELETE FROM `audio_tb` WHERE `audio_id`= ?";
            $binder = array('s', $user_id);
            return $this->delete($query, $binder);
        }
    }

?>