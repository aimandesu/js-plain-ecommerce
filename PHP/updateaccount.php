<?php
session_start();
$host = 'sql6.freemysqlhosting.net';
$database = 'sql6468310';
$user = 'sql6468310';
$password = 'llISE3uK1s';


$dbconn = new mysqli($host, $user, $password, $database);

if(isset($_POST['username'])){
    $username = $_POST['username'];
}

if(isset($_POST['newusername'])){
    $newusername = $_POST['newusername'];
}

if(isset($_POST['password'])){
    $password = $_POST['password'];
}

$test = $_SESSION['username'];

if($username == $test ){
    $sql = "UPDATE admin SET adminid='$newusername', password='$password'
    WHERE adminid='$test'";
     $_SESSION['username'] = $newusername;
    mysqli_query($dbconn, $sql);
    echo "<script> alert('Account details have been updated')</script>";
    echo"<script>location.href='customer.php'</script>";
}else{
    echo "<script> alert('Wrong account details')</script>";
    echo"<script>location.href='account.php'</script>";
}


?>