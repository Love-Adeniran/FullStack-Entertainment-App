<?php
require "classes/Users.php";
require "vendor/autoload.php";


$user = new Users(); 
$jwtDetails = $user->getJWTdetails(); 
$email = $jwtDetails->info->email;
$response;
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