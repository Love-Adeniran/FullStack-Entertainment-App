<?php
    require ('classes/Users.php');
    $response;
    $user = new Users();
    $getAllMusician = $user->getAllMusician();
    if($getAllMusician){
        echo json_encode($getAllMusician);
        // $response[''];
    }
    // $getUser = $user->getUserGuest();
    // return $getUser['result'];
    // print_r($getUser['result']);
    

?>