<?php 
    require "classes/Users.php";
    require "vendor/autoload.php";
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    $header = getallheaders();
    $jwtHeader = $header['authorization'];
    $jwt = trim(substr($jwtHeader,7));
    $jwtDetails = JWT::decode($jwt, new Key("4e3v2o1l", 'HS256'));

    //Because of the Form that was sent from the frontend, there is no need for json_decode
    
    $category = $_POST['selected'];
    $country = $_POST["country"];
    $town = $_POST["town"];
    $priceRange = $_POST["priceRange"];
    $email = $jwtDetails->info->email;
    
    $imageFile = $_FILES['imageFile']['name'];
    $image = time().$imageFile;
    $addImage = move_uploaded_file($_FILES['imageFile']['tmp_name'], 'upload/'.$image);
    $user = new Users();
    $response;
    // $response = [];
    
    if($addImage){
        $insertProfile = $user->musicianUpdateProfile($category,$country,$town,$priceRange,$image,$email);
        if($insertProfile){
            $response['success'] = true;
            $response['message'] = 'Profile Inserted!';
        } 
        else{
            $response['message'] = 'Unable to Update Profile!';
            $response['success'] = false;
        }
        
    }else{
        $response['message'] = 'Unable to save image!';
        $response['success'] = false;
    }
    
    echo json_encode($response);

    ;
?>