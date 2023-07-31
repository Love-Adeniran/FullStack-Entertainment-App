<?php 
    require "classes/Users.php";
    require "vendor/autoload.php";
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    session_start();
    $user = new Users();
    // $header = getallheaders();
    // $jwtHeader = $header['authorization'];
    // $jwt = trim(substr($jwtHeader,7));
    // $jwtDetails = JWT::decode($jwt, new Key("4e3v2o1l", 'HS256'));

    //Because of the Form that was sent from the frontend, there is no need for json_decode
    
    $category = $_POST['selected'];
    $country = $_POST["country"];
    $town = $_POST["town"];
    $priceRange = $_POST["priceRange"];
    $musicStyle = $_POST["musicStyle"];
    $eventStyle = $_POST["eventStyle"];
    $email = $_POST["email"];
    // print_r($_SESSION['jwt']);
    $imageFile = $_FILES['imageFile']['name'];
    $image = time().$imageFile;
    $addImage = move_uploaded_file($_FILES['imageFile']['tmp_name'], 'upload/'.$image);
    $response;
    $response[1] = $musicStyle;
    $response[2] = $eventStyle;
    // $response[3] = $email;
    
    if($addImage){
        $insertProfile = $user->musicianUpdateProfile($category,$country,$town,$priceRange,$image,$musicStyle,$eventStyle,$email);
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