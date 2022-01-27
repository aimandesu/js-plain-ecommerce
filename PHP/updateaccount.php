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

$newaccount = $_POST['account'];

if(isset($_POST['password'])){
    $password = $_POST['password'];
}

$test = $_SESSION['username'];

if($username == $test ){
    echo "<script> alert('Account details have been updated')</script>";
    $sql = "UPDATE admin SET adminid='$newaccount', password='$password'
    WHERE adminid='$username'";
    echo "<script> alert('Account details have been updated')</script>";
    
}else{
    echo "<script> alert('Wrong account details')</script>";
    echo"<script>location.href='account.php'</script>";
}
$yes = mysqli_query($dbconn, $sql);
$_SESSION['username'] = $newaccount;
if($yes){
    echo"<script>location.href='customer.php'</script>";
}
?>