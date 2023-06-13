<?php
    require "classes/Users.php";
    require "vendor/autoload.php";
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    $header = getallheaders();
    $response;
    $jwtHeader = $header['authorization'];
    $jwt = trim(substr($jwtHeader,7));
    $jwtDetails = \Firebase\JWT\JWT::decode($jwt, new Key("4e3v2o1l", 'HS256'));
    if($jwtDetails){
        $response = $jwtDetails;
    }else{
        $response['success'] = false;
    }
    
    echo json_encode($response);

?>