<?php
$to = 'aimanafiqbinesam@gmail.com';
$name = $_POST['name']; 
$message = $_POST['message'];
$from = $_POST['email'];
$emailsubject = $_POST['email-subject'];

$email_body = "Name: $name.\n"."Message: $message";

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
 
// Sending email
if(mail($to, $emailsubject, $email_body, $headers)){
    echo 'Your mail has been sent successfully.';
} else{
    echo 'Unable to send email. Please try again.';
}

?>