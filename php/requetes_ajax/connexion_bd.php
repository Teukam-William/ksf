<?php
    $serveur = "localhost";
    $user = "root";
    $dbname = "ksf";
    $pass = "";
    $connexion = new PDO("mysql:host=$serveur;dbname=$dbname;charset=utf8", $user, $pass);
?>