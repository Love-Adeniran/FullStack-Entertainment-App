<?php
require 'classes/Users.php';
    $email = $_POST['email'];
    $imageFile = $_FILES['file']['name'];
    $image = time().$imageFile;
    $addImage = move_uploaded_file($_FILES['file']['tmp_name'], 'upload/'.$image);
    $response;
    $user = new Users();
    $insert = $user->musicianChangepicture($image,$email);
    if($insert){
        $response =$insert;
    }else{
        $response['message'] = "Unable to Change Picture";
    }
    echo json_encode($response);

?>