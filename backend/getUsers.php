<?php
    require ('classes/Users.php');
    
    $user = new Users();
    $getUser = $user->getUserGuest();
    return $getUser['result'];
    // print_r($getUser['result']);
    

?>