<?php
    session_start();
    require('classes/Users.php');
    require "vendor/autoload.php";
    // $_POST = json_decode(file_get_contents('php//input'));
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    
    $header = getallheaders();
    $jwtHeader = $header['authorization'];
    $jwt = trim(substr($jwtHeader,7));
    $jwtDetails = JWT::decode($jwt, new Key("4e3v2o1l", 'HS256'));

    $user = new Users();
    $email = $jwtDetails->info->email;
    $fetchmusicianInfo = $user->getUserMusician($email);
    $title = $_POST['title'];
    $name = $_POST['name'];
    // echo json_encode($fetchmusicianInfo);
    $audio = $_FILES['audio']['name'];
    $audioName = time().$audio;
    $addAudio = move_uploaded_file($_FILES['audio']['tmp_name'],'upload/'.$audioName);
    $fetchmusicianId;
    $response;
    // echo json_encode ($fetchmusicianInfo[0]['musician_id']);
    if($addAudio){
        if($fetchmusicianInfo){
            $fetchmusicianId = $fetchmusicianInfo[0]['musician_id'];
            $uploadAudio = $user->uploadAudio($title,$name,$audioName,$fetchmusicianId);
            if($uploadAudio){
                $response = $uploadAudio;
                $response['success'] = true;
                $response['message'] = 'Audio Uploaded Successful!';
            }else{
                $response['success'] = false;
                $response['message'] = 'Unable to Upload Audio';
            }
        }else{
            $response['message'] = 'Cannot find User, please Login again!';
            $response['success'] = $fetchmusicianInfo;
        }

    }else{
        $response['message'] = 'Unable to Upload Audio';
        $response['success'] = $addAudio;
    }
    echo json_encode($response);
?>