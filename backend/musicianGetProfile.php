<?php
require "classes/Users.php";
require "vendor/autoload.php";
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
    $header = getallheaders();
    $jwtHeader = $header['authorization'];
    $jwt = trim(substr($jwtHeader,7));
    $jwtDetails = JWT::decode($jwt, new Key("4e3v2o1l", 'HS256'));

$user = new Users(); 

$email = $jwtDetails->info->email;
$response=[];
$getprofile = $user->getUserMusician($email);
if($getprofile){
    $response['success']= true;
    $response = $getprofile;
}else{
    $response['success']= false;
    $response['message'] = 'Cannot get Profile'; 
}
    echo json_encode($response);

?>