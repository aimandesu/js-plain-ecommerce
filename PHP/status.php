<?php

session_start();

$adminID = $_SESSION['username'];
$host = 'sql6.freemysqlhosting.net';
$database = 'sql6470270';
$user = 'sql6470270';
$password = 'Wkv4wJeVBY';


$dbconn = new mysqli($host, $user, $password, $database);

 $status = $_POST['status'];
 $orderID = $_POST['ordersNo'];


 $sql = "UPDATE orders SET status='$status', adminid='$adminID' WHERE No = '$orderID'";
 mysqli_query($dbconn, $sql);
 echo "<script> alert('Order noted as delivered!')</script>";
 echo"<script>location.href='checkorder.php'</script>";

?>

