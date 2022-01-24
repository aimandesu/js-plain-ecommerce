Congratulation! You have logged into password protected page. <a href="logout.php">Click here</a> to Logout.
go to <a href="checkorder.php">check</a>
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  <style>
    table,
    th,
    td {
      border: 1px solid black;
      background-color: white;
    }
    .class-body{
      background-color: #55185d;
    }
    h1{
      text-align: center;
      color: #ecb602;
    }
  </style>
  </head>
  <body class="class-body">
    <h1>Order Listing</h1>

<?php 
session_start(); /* Starts the session */
$test = $_SESSION['username'];
if(isset($_SESSION['username'])){
  echo"<h1>$test</h1>";




    
    $host = 'sql6.freemysqlhosting.net';
    $database = 'sql6458011';
    $user = 'sql6458011';
    $password = 'iiAemBn5sc';
    
  
    $dbconn = new mysqli('localhost', 'root', '','kimoya');

    if($dbconn->connect_error){
      die("connection failed".$dbconn->connect_error);
    }

    $sql = "SELECT orders.No, customer.names, customer.phoneNo, customer.locations, 
    orders.orders, orders.prices FROM orders INNER JOIN customer where customer.names = orders.names AND orders.status ='done' order by orders.no ";
    $result = $dbconn->query($sql);

    if($result->num_rows > 0){
      echo "<table>
      <tr>
        <th>No</th>
        <th>Names</th>
        <th>Phone No</th>
        <th>Location</th>
        <th>Order</th>
        <th>Price</th>
      </tr>";
      while($row = $result->fetch_assoc()){
        echo 
        "<tr>
        <td>".$row["No"]."</td>
        <td>".$row["names"]."</td>
        <td>".$row["phoneNo"]."</td>
        <td>".$row["locations"]."</td>
        <td>".$row["orders"]."</td>
        <td>".$row["prices"]."</td></tr>";
      }
      echo "</table>";

    }else{
      echo "0 results";
    }
    $dbconn-> close();
  }
    ?>
  </body>
</html>
