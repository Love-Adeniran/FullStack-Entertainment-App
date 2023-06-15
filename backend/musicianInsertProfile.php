<?php 
    require "classes/Users.php";
    require "vendor/autoload.php";
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    $header = getallheaders();
    $jwtHeader = $header['authorization'];
    $jwt = trim(substr($jwtHeader,7));
    $jwtDetails = JWT::decode($jwt, new Key("4e3v2o1l", 'HS256'));

    
    $_POST = json_decode(file_get_contents('php://input'));
    // $jwtDetails = $user->getJWTdetails();
    $email = $jwtDetails->info->email;
    $category = $_POST->selected;
    $country = $_POST->country;
    $town = $_POST->town;
    $priceRange = $_POST->priceRange;
    $img = $_POST->imageFile;
    
    $imageFile = $_FILES['img']['name'];
    $image = time().$imageFile;
    $addImage = move_uploaded_file($imageFile = $_FILES['img']['name'], 'upload/'.$image);
    $user = new Users();
    
    

    
    $response;
    $response = [];
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