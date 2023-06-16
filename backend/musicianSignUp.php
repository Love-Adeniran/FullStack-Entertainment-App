<?php
require ("classes/Users.php");
$_POST = json_decode(file_get_contents("php://input"));

$full_name = $_POST->first_name. ' '.$_POST->last_name;
$nick_name = $_POST->nick_name;
$email = $_POST->e_mail;
$phone_number = $_POST->p_Number;
$pass = $_POST->pass_word;
$password = password_hash($pass, PASSWORD_DEFAULT);

$response;
$user = new Users();
$insertmusician = $user->createUserMusician($full_name, $nick_name, $email, $phone_number,$password);
if($insertmusician){
    $response['success'] = true; 
}else {
    $response['success'] = false; 
}

echo json_encode($response);


?>