<?php
session_start();
$dbconnect = mysqli_connect('localhost', 'root', '','kimoya');

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
    mysqli_query($dbconnect, $sql);
    echo "<script> alert('Account details have been updated')</script>";
    echo"<script>location.href='customer.php'</script>";
}else{
    echo "<script> alert('Wrong account details')</script>";
    echo"<script>location.href='account.php'</script>";
}


?>