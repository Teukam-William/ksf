<?php
    session_start();
    if(!empty($_SESSION['role']))
    {
        if($_SESSION['role'] == "restaurant")
        {
            include('./php/ihm_module/restaurant.php');
            
            echo $_SESSION['nom']."\n";
            echo $_SESSION['email']."\n";
            echo $_SESSION['tel']."\n";
            echo $_SESSION['role']."\n";
        }
        else if($_SESSION['role'] == "consommateur")
        {
            include('./php/ihm_module/consommateur.php');
            echo $_SESSION['nom']."\n";
            echo $_SESSION['email']."\n";
            echo $_SESSION['tel']."\n";
            echo $_SESSION['role']."\n";
        }
    }
    else
    {
        include('Connexion_Inscription.php');
    }
?>