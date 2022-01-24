<html>
  <head>
    <title></title>
  </head>
  <body>
      <h1>New Order</h1>
      <?php 
      session_start();

      $_SESSION['username'];
            $status = "process";

            $database = mysqli_connect('localhost', 'root', '', 'kimoya');
            $check = "select status from orders where status = '$status'";
            $insertToQuery = mysqli_query($database, $check);

            $numResult = mysqli_num_rows($insertToQuery);

            if($numResult>=1){
              echo
              "<table>
              <tr>
                <th>No</th>
                <th>Names</th>
                <th>Phone No</th>
                <th>Location</th>
                <th>Order</th>
                <th>Price</th>
              </tr>";
              
              $sql = "SELECT orders.No, customer.names, customer.phoneNo, customer.locations, 
              orders.orders, orders.prices, orders.status FROM orders INNER JOIN customer where customer.names = orders.names AND orders.status ='process'  
              LIMIT 0,10 ";
              $result = $database-> query($sql);

              if($result-> num_rows > 0){
                while($row = $result-> fetch_assoc()){
                    
                    if($row['status'] == 'process'){
                    echo 
                    "<tr>
                    <td>".$row['No']."</td>
                    <td>".$row['names']."</td>
                    <td>".$row['phoneNo']."</td>
                    <td>".$row['locations']."</td>
                    <td>".$row['orders']."</td>
                    <td>".$row['prices']."</td>
                    <td>".$row['status']."</td>
                    <td>".
                    "<form action='status.php' method='POST' id='new'>
        
                    <input type='hidden' id='ordersNo' name='ordersNo' value='".$row['No']."'>
        
                    <select name='status'>
                    <option disabled selected>Select Status</option>
                    <option value='done'>success</option>
                    </select>
                    
                    <button type='submit' id='submit'>submit</button>
                    </form>"
        
                    ."</td>
                    </tr>";
                }
        
        
            }
            
                echo "</table>";
            }
            else{
                echo "0 result";
            }

            }
            else{
              echo "<h1 style='color:rgb(221, 205, 235);'>No reservation left to submit</h1>";
              echo "<a href='customer.php'>Go back</a>";
            }
            ?>
  </body>
</html>
