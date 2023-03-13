<?php
$PHPtext = "inside pho";

$firstname = $_POST["fullName"];
$email = $_POST["inputEmail"];
$phone = $_POST["phone"];
$message = $_POST["message"];
 
$EmailTo = "irfannathaniel@yahoo.com";
$Subject = "Edwina Shahid: Contact us";
$Body = "New email received from Edwina Shahid website with the details below \n\n";

// prepare email body text
$Body .= "Name: ";
$Body .= $_POST["fullName"];
$Body .= "\n";

$Body .= "Email: ";
$Body .= $_POST["inputEmail"];
$Body .= "\n";
 
$Body .= "Phone: ";
$Body .= $_POST["phone"];
$Body .= "\n";

$Body .= "Message: ";
$Body .= $_POST["message"];
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body);
 
// redirect to success page
if ($success){
   header('Location: ../pages/thankyou.htm');
   die();
}else{
    echo "invalid";
}
 
?>