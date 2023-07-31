<?php
    require "classes/Users.php";
    $_POST = json_decode(file_get_contents('php://input'));
    
    $id =$_POST->musician_id;
    $nick_name = $_POST->nick_name;
    $p_number= $_POST->p_Number;
    $country = $_POST->country;
    $music_style = $_POST->music_style;
    $response;
    $user = new Users();
    $edit = $user->musicianeditProfile($nick_name,$p_number,$country, $music_style,$id);
    if($edit){
        $response = $edit;
        $response['message'] = 'Profile Saved successful!';
    }else{
        $response['message'] = 'Unable to Save Profile!';
    }
    echo json_encode($response); 
?>