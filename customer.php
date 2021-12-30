<!DOCTYPE html>
<html>
  <head>
    <title></title>
  <style>
    table,
    th,
    td {
      border: 1px solid black;
    }
  </style>
  </head>
  <body>
    <?php
    $host = 'sql6.freemysqlhosting.net';
    $database = 'sql6458011';
    $user = 'sql6458011';
    $password = 'iiAemBn5sc';
    
    
    $dbconn = new mysqli($host, $user, $password, $database);

    if($dbconn->connect_error){
      die("connection failed".$dbconn->connect_error);
    }

    $sql = "SELECT 'No', names, phoneNo, locations, orders, prices FROM orders";
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
    ?>
  </body>
</html>
