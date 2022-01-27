<?php

/**not used 
$host = 'sql6.freemysqlhosting.net';
$database = 'sql6458011';
$user = 'sql6458011';
$password = 'iiAemBn5sc';
*/


//new database as of 27/1
$host = 'sql6.freemysqlhosting.net'
$user = 'sql6468310'
$password = 'llISE3uK1s'
$database = 'sql6468310'
$port = '3306'
 

//$dbconn = mysqli_connect('localhost', 'root', '','kimoya');

$dbconn = mysqli_connect($host, $user, $password, $database, $port);

$myNumber = $_POST['my-number'];
$myName = $_POST['my-name'];
$myLocation = $_POST['my-location'];
$myOrder = $_POST['my-order'];
$myPrice = $_POST['product-value'];
$status = 'process';

$insert = "INSERT INTO customer(names, phoneNo, locations)
VALUES ('$myName', '$myNumber', '$myLocation')";
mysqli_query($dbconn, $insert);

$inser = "INSERT INTO orders (orders, prices, names, adminid, status) 
VALUES ('$myOrder', '$myPrice', '$myName', NULL, '$status' )";
mysqli_query($dbconn, $inser);

echo "<script>window.close();</script>";
?>