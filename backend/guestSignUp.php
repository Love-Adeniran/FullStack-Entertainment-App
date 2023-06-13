<?php

require ("classes/Users.php");
    $_POST = json_decode(file_get_contents("php://input"));
    
    $full_name = $_POST->first_name. ' '. $_POST->last_name;
    $phone_number = $_POST->p_Number;
    $email = $_POST->e_mail;
    $pass = $_POST->pass_word;
    $password = password_hash($pass, PASSWORD_DEFAULT);
    
    $response;

    $user = new Users();
    $insertguest = $user->createUserGuest($full_name,$phone_number,$email,$password);

    if($insertguest){
        $response['success'] = true;
    }else {
        // echo 'not inserted';
        $response['success'] = false;
    }
    echo json_encode($response);
?>