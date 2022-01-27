<html>
  <head>
    <title></title>
  </head>
  <style>
    body {
      background-color: #290849;
    }
    .login-body {
      background-color: #ecb602;
      margin: 100px 40%;
    }

    .login-body input,
    button {
      padding: 10px;
      margin: 10px;
    }

    .login-body input {
      width: 90%;
    }

    .login-body h1 {
      text-align: center;
      color: #290849;
    }

    .top h1 {
      text-align: center;
      color: #ecb602;
    }
    #right {
      float: right;
      padding: 10px;
      top: 0;
    }
    a:hover {
      background-color: #ecb602;
    }

    a:active {
      color: #ffffff;
    }
    a {
      background-color: #ffffff;
      padding: 20px;
      text-decoration: none;
    }
    #access{
  text-align:center;
  color: #ecb602;
}

  </style>
  <body>
    

<?php

session_start();
if(isset($_SESSION['username'])){
  

  echo"<div class='top'>
  <h1>Account</h1>
</div>
<a id='right' href='customer.php'>Back</a>
<div class='login-body'>
  <h1>Update Account</h1>
  <form action='updateaccount.php' method='post'>
    <input
      type='text'
      id='username'
      name='username'
      placeholder='Old account Id'
      required
    />
    <br />
    <input
      type='text'
      id='newusername'
      name='newusername'
      placeholder='New account Id'
      required
    />
    <br />
    <input
      type='password'
      id='password'
      name='password'
      placeholder='New password'
      required
    />
    <br />
    <button type='submit'>Update</button>
  </form>
</div>
";
}else{
  echo"<h1 id='access'>Non Authorized Access</h1>";
}
?>
  </body>
</html>
