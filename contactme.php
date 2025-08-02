<?php
require("./mailing/mailfunction.php");

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_NUMBER_INT);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

// Honeypot check
if (!empty($_POST['website'])) {
    die('Bot detected.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('<center><h1>Invalid email address.</h1></center>');
}

$body = "
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Message:</strong><br>$message</p>
";

$status = mailfunction("yashdeeps0509@gmail.com", "Kriyato Contact Form", $body);

if ($status) {
    echo '<center><h1>Thanks! We will contact you soon.</h1></center>';
} else {
    echo '<center><h1>Error sending message! Please try again.</h1></center>';
}
?>
