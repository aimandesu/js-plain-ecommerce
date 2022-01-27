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

if(isset($_POST['password'])){
    $password = $_POST['password'];
}


$login = "select * from admin where adminid = '$username' && password = '$password'";

$result = mysqli_query($dbconn, $login);

$numResult = mysqli_num_rows($result);



if($numResult == 1){
    $_SESSION['username'] = $username;
    echo"<script>location.href='customer.php'</script>";
    
}else{
    echo "<script> alert('username or password incorrect!')</script>";
    echo"<script>location.href='../login.html'</script>";
}
?>