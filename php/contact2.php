<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $tel = htmlspecialchars($_POST['tel']);
    $sub = htmlspecialchars($_POST['sub']);
    $message = htmlspecialchars($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    
    $to = "support@yourwebsite.com";
    $subject = "Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\nContact: $tel\nSubject: $sub\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us. We will get back to you shortly!";
    } else {
        echo "Sorry, there was a problem sending your message.";
    }
}
?>