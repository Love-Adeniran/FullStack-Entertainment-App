<?php
session_start();
require "classes/Users.php";
require "vendor/autoload.php";
$_POST = json_decode(file_get_contents('php://input'));
// $email = $_POST->email;
// $pass = $_POST->password;
$email = 'akinadee882@gmail.com';
$pass = 'esther';
$password;

$users = new Users();
$musicianLogin = $users->getUserMusician($email);
$response;

if($musicianLogin){
    $fetchedpassword = $musicianLogin[0]["password"];
    $_SESSION['musician_id'] = $musicianLogin[0]["musician_id"];

    $verifyPassword = password_verify($pass,$fetchedpassword);
    if($verifyPassword){
        $response['success']= true;
        $jwtDetails =[
            "iss"=> "localhost:4200",
            "iat"=> time(),
            "nbf"=> time(),
            "exp"=> time()+10000000000000000000000000000000000000000,
            "info"=>[
                "email"=>$email
            ]
            ];
            $jwt = \Firebase\JWT\JWT::encode($jwtDetails, '4e3v2o1l', 'HS256');
            $jwt = $jwtDetails["info"];
            $Email= $jwt['email'];
            $_SESSION['jwt']= $Email;
            $response['success']= true;
            $response['session']= $_SESSION['jwt'];

    }else{
        $response['success']= false;
        $response['message'] ='Invalid Password!';
    }
}else{
    $response['success']= false;
    $response['message'] ='Incorrect Email!';
}

echo json_encode($response);

?>