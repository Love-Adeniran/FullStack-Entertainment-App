<?php
    require ('classes/Users.php');
    // $_POST = json_encode(file_get_contents('php://input'));
    // $id = $_POST->id;
    $response;
    
    $user = new Users();
    $getAllMusician = $user->getAllMusician();
    if($getAllMusician){
        $response['message'] = $getAllMusician;
        $response['success'] = true;

    }else{
        $response['message'] = "Unable to get all musician!";
        $response['success'] = false;
    }
    echo json_encode($response);
    ?>