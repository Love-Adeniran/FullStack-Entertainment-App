<?php
    require ('classes/Users.php');
    // $_POST = json_encode(file_get_contents('php://input'));
    // $id = $_POST->id;
    $response;
    
    $user = new Users();
    $getAllMusician = $user->getAllMusician();
    if($getAllMusician){
        echo json_encode($getAllMusician);
        // $response[''];
    }
    ?>