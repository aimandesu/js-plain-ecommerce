<!DOCTYPE html>
<html>
  <head>
    <title></title>
  <style>
    table {
  border-collapse: collapse;
  width: 100%;
}
.class-body{
  background-color: #55185d;
}
th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even), tr:nth-child(odd) {background-color: #f2f2f2;}

h1{
  text-align:center;
  color: #ecb602;
}

a{
  background-color: #ffffff;
  padding: 20px;
  text-decoration: none;
}

#right{
  text-align: right;
}

a:hover{
  background-color: #ecb602;
}

a:active{
  color: #ffffff;
}

  </style>
  </head>
  <body class="class-body">
    

<?php 
session_start(); /* Starts the session */


 
  echo"<a href='logout.php'>Log Out</a>";
  echo"<a href='account.php'>Account</a>";
  echo"<a id='right' href='checkorder.php'>Check New Order</a>";
  echo "<h1>Order Listing</h1>";
  echo"<h1>$test</h1>";

    $host = 'sql6.freemysqlhosting.net';
    $database = 'sql6458011';
    $user = 'sql6458011';
    $password = 'iiAemBn5sc';
    
  
    $dbconn = new mysqli($host, $user, $password, $database);

    if($dbconn->connect_error){
      die("connection failed".$dbconn->connect_error);
    }

    $sql = "SELECT orders.No, customer.names, customer.phoneNo, customer.locations, 
    orders.orders, orders.prices FROM orders INNER JOIN customer where customer.names = orders.names AND orders.status ='done' order by orders.no";
    $result = $dbconn->query($sql);

    if($result->num_rows > 0){
      
      echo "<div style='overflow-x: auto;'><table>
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
      echo "</table></div>";
    }else{
      echo "<h1>No completed order record.</h1>";
    }
    $dbconn-> close();
  
    ?>
  </body>
</html>
