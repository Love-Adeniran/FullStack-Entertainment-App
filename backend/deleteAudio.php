<?php
    require("classes/Users.php");
    $_POST= json_decode(file_get_contents('php://input')); 
    $user_id = $_POST->id;
    $user = new Users();
    $response=[];
    
    $deleteAudio = $user->deleteAudio($user_id);
    if($deleteAudio){
        $response['deleted'] = true;
            $response['message'] = "Data deleted successfully.";
        } else {
            $response['deleted'] = true;
            $response['message'] = "Unable to delete data.";
        }
    
        echo json_encode($response);
?>