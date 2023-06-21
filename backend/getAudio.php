<?php
    require 'classes/Users.php';
    $_POST= json_decode(file_get_contents('php://input')); 
    $user_id = 4;
    $user_id = $_POST->id;
    $user = new Users();
    $response=[];
    
    $getAudio= $user->getAudio($user_id);
    if($getAudio){
        $response = $getAudio;
        $response['success'] = true;
    }else{
        $response = $uploadAudio;
        $response['success'] = false;
        $response['message'] = '!Unable to get Audio!';
    }
    
    echo json_encode($getAudio);
    // echo $user_id;

    
    // echo json_encode($getMusicianId);
?>