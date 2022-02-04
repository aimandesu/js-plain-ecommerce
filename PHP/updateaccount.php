<?php
session_start();
$host = 'sql6.freemysqlhosting.net';
$database = 'sql6470270';
$user = 'sql6470270';
$password = 'Wkv4wJeVBY';


$dbconn = new mysqli($host, $user, $password, $database);

if(isset($_POST['username'])){
    $username = $_POST['username'];
}

if(isset($_POST['password'])){
    $password = $_POST['password'];
}

$test = $_SESSION['username'];

if($username == $test ){
    $sql = "UPDATE admin SET adminid='$username', password='$password'
    WHERE adminid='$username'";
    mysqli_query($dbconn, $sql);
    echo "<script> alert('Account details have been updated')</script>";
    echo"<script>location.href='customer.php'</script>";
}else{
    echo "<script> alert('Wrong account details')</script>";
    echo"<script>location.href='account.php'</script>";
}


?>