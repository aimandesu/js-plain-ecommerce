<?php

session_start();

$adminID = $_SESSION['username'];
$conn = mysqli_connect('localhost', 'root', '', 'kimoya');

 $status = $_POST['status'];
 $orderID = $_POST['ordersNo'];


 $sql = "UPDATE orders SET status='$status', adminid='$adminID' WHERE No = '$orderID'";
 mysqli_query($conn, $sql);
 echo "<script> alert('Reservation Status Recorded')</script>";
 echo"<script>location.href='checkorder.php'</script>";

?>

