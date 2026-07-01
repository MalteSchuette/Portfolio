<?php

require '/var/www/portfolio/mail_config.php';
require '/var/www/portfolio/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

switch ($_SERVER['REQUEST_METHOD']) {
    case 'OPTIONS':
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Allow-Headers: content-type');
        exit;
    case 'POST':
        header('Access-Control-Allow-Origin: *');

        $json    = file_get_contents('php://input');
        $params  = json_decode($json);
        $name    = $params->name;
        $email   = $params->email;
        $message = $params->message;

        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = MAIL_USER;
        $mail->Password   = MAIL_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom(MAIL_USER, 'Portfolio Kontakt');
        $mail->addAddress(MAIL_USER);
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "Kontaktanfrage von $name";
        $mail->Body    = "Von: $name &lt;$email&gt;<br><br>$message";

        $mail->send();
        echo json_encode(['ok' => true]);
        break;
    default:
        header('Allow: POST', true, 405);
        exit;
}
