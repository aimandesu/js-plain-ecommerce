<?php
session_start();

$dbconnect = mysqli_connect('localhost', 'root', '','kimoya');

if(isset($_POST['username'])){
    $username = $_POST['username'];
}

if(isset($_POST['password'])){
    $password = $_POST['password'];
}


$login = "select * from admin where adminid = '$username' && password = '$password'";

$result = mysqli_query($dbconnect, $login);

$numResult = mysqli_num_rows($result);



if($numResult == 1){
    $_SESSION['username'] = $username;
    echo"<script>location.href='customer.php'</script>";
    
}else{
    echo "<script> alert('username or password incorrect!')</script>";
    echo"<script>location.href='logintest.html'</script>";
}
?>