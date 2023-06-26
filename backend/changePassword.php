<?php
    require('classes/Users.php');
    $_POST = json_decode(file_get_contents('php://input'));
    $newPassword = $_POST->pass;
    $id = $_POST->id;
    $password = password_hash($newPassword, PASSWORD_DEFAULT);
    $response;

    $user =new Users;
    $insert = $user->musicianChangePassword($password,$id);
    echo json_encode($insert);
    if($insert){
        
    }
?>