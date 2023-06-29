<?php
    require 'classes/Users.php';
    $_POST= json_decode(file_get_contents('php://input')); 
    // $user_id = 4;
    $user_id = $_POST->id;
    $user = new Users();
    $response=[];
    
    $getAudio= $user->getAudio($user_id);
    echo json_encode($getAudio);
    // if($getAudio){
    //     $response['data'] = $getAudio;
    //     $response['success'] = true;
    // }else{
    //     $response['success'] = false;
    //     $response['message'] = 'No Audio Found!';
    // }
    
    // echo json_encode($response);

?>