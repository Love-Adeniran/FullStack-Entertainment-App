<?php
    require ('classes/Users.php');
    $_POST = json_decode(file_get_contents('php://input'));
    $email = $_POST->email;
    $response;
    
    $user = new Users();
    $getEachMusician = $user->getEachMusician($email);
    if($getEachMusician){
        $response['success'] = true; 
        $response= $getEachMusician;
    }else{
        $response['success'] = false; 
    }
    echo json_encode($response);
    

?>