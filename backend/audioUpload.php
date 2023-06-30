<?php
    session_start();
    require('classes/Users.php');
    require "vendor/autoload.php";

    $user = new Users();
    $id = $_POST['id'];
    $title = $_POST['title'];
    $name = $_POST['name'];
    $audio = $_FILES['audio']['name'];
    $audioName = time().$audio;
    $addAudio = move_uploaded_file($_FILES['audio']['tmp_name'],'upload/'.$audioName);
    $fetchmusicianId;
    $response;
    if($addAudio){
            $uploadAudio = $user->uploadAudio($title,$name,$audioName,$id);
            if($uploadAudio){
                $response = $uploadAudio;
                $response['success'] = true;
                $response['message'] = 'Audio Uploaded Successful!';
            }else{
                $response['success'] = false;
                $response['message'] = 'Unable to Upload Audio';
            }

    }else{
        $response['message'] = 'Unable to Upload Audio';
        $response['success'] = $addAudio;
    }
    echo json_encode($response);
?>