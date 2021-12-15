<!--Script for save data in mysql server-->
<script src="serverdb.js"></script>
<?php

$host = 'sql6.freemysqlhosting.net';
$database = 'sql6458011';
$user = 'sql6458011';
$password = 'iiAemBn5sc';


$dbconn = mysqli_connect($host, $user, $password, $database);

//$dbconn = mysqli_connect('localhost', 'root', '','studentlabbook');

$myNumber = $_POST['my-number'];
$myName = $_POST['my-name'];
$myLocation = $_POST['my-location'];
$myOrder = $_POST['my-order'];
$myPrice = $_POST['product-value'];

$insert = "INSERT INTO Orders (names, numbers, locations, orders, prices) 
VALUES ('$myName', '$myNumber', '$myLocation', '$myOrder', '$myPrice')";
$result = mysqli_query($dbconn, $insert)

echo "<script>createForm()</script>";

?>
