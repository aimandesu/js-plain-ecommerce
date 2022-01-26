<html>
  <head>
    <title></title>
  </head>
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
  color: #ecb602;
  
}

select{
  margin-top: 17px;
}

a{
  background-color: #ffffff;
  padding: 20px;
  text-decoration: none;
}

#right{
  float: right;
  padding: 10px;
  top: 0;
}

a:hover{
  background-color: #ecb602;
  
}

a:active{
  color: #ffffff;
}

  </style>
  <body class="class-body">
      
      <?php 
      session_start();
      if(isset($_SESSION['username'])){
        echo"<h1>New Order</h1>";
      $_SESSION['username'];
            $status = "process";

            $database = mysqli_connect('localhost', 'root', '', 'kimoya');
            $check = "select status from orders where status = '$status'";
            $insertToQuery = mysqli_query($database, $check);

            $numResult = mysqli_num_rows($insertToQuery);

            echo"<a id='right' href='customer.php'>Back</a>";
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
                <th>Status</th>
                <th>Option</th>
              </tr>";
              
              $sql = "SELECT orders.No, customer.names, customer.phoneNo, customer.locations, 
              orders.orders, orders.prices, orders.status FROM orders INNER JOIN customer where customer.names = orders.names AND orders.status ='process'  
              order by orders.no LIMIT 0,20 ";
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
                    <option value='done'>Delivered</option>
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
              echo "<h1 style='color:rgb(221, 205, 235);'>No order left to submit</h1>";
              
            }
          }else{
            echo"<h1>Non Authorized Access</h1>";
          }
            ?>
  </body>
</html>
