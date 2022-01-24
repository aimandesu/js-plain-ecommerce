<?php

$host = 'sql6.freemysqlhosting.net';
$database = 'sql6458011';
$user = 'sql6458011';
$password = 'iiAemBn5sc';


$dbconn = mysqli_connect('localhost', 'root', '','kimoya');

//$dbconn = mysqli_connect('localhost', 'root', '','studentlabbook');

$myNumber = $_POST['my-number'];
$myName = $_POST['my-name'];
$myLocation = $_POST['my-location'];
$myOrder = 'HHH';//$_POST['my-order'];
$myPrice = 12;//$_POST['product-value'];

$insert1 = "INSERT INTO customer(names, phoneNo, locations)
VALUES ('$myName', '$myNumber', '$myLocation')"
$insert2 = "INSERT INTO Orders (orders, prices, adminid) 
VALUES ('$myOrder', '$myPrice' NULL)";

mysqli_query($dbconn, $insert1);
mysqli_query($dbconn, $insert2);
echo "<script>window.close();</script>";
?>