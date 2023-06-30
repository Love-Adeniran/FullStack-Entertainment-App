<?php
    require ('classes/Users.php');
    $_POST = json_decode(file_get_contents('php://input'));
    $id = $_POST->musician_id;
    $response;
    
    $user = new Users();
    $getEachMusician = $user->getEachMusician($id);
    if($getEachMusician){
        $response['success'] = true; 
        $response= $getEachMusician;
    }else{
        $response['success'] = false; 
    }
    echo json_encode($response);
    

?>