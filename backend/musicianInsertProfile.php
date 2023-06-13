<?php 
    require "classes/Users.php";
    require "vendor/autoload.php";
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    // use Firebase\JWT\ExpiredException;
    $_POST = json_decode(file_get_contents('php://input'));
    $header = getallheaders();
    $response;
    $jwtHeader = $header['authorization'];
    $jwt = trim(substr($jwtHeader,7));
    $jwtDetails = JWT::decode($jwt, new Key("4e3v2o1l", 'HS256'));
    $category = $_POST->selected;
    $country = $_POST->country;
    $town = $_POST->town;
    $priceRange = $_POST->priceRange;
    $image = $_POST->imageFile;
    $email = $jwtDetails->info->email;
    // echo $email;
    
    $response = [];
    $user = new Users();
    $insertProfile = $user->musicianInsertProfile($category,$country,$town,$priceRange,$image,$email);
    
    // if(ExpiredException){
    //     echo 'token Expired!';
    // }
    
    if($insertProfile){
        $response['success'] = true;
        $response['message'] = 'Profile Inserted!';
    }else{
        $response['message'] = 'Unable to Update Profile!';
        $response['success'] = false;
    }
    
    // echo json_encode($jwtDetails->info->email);
    // echo json_encode($_POST);
    echo json_encode($response);
    // echo json_encode($header)
    ;
?>