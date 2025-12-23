<?php
    if(!empty($_GET['nom']))
    {
        include('connexion_bd.php');
        $nom = htmlspecialchars($_GET['nom']);
        $image_ = $connexion->query("SELECT * FROM repas WHERE id_plat = '?'");
        $imageVal = $image_->execute(array($nom));
        // header('Content-type: image/*');
        if(json_encode($imageVal))
        {    
            // echo $imageVal[0]['image'];
            echo json_encode($imageVal);
        }
        echo json_encode($imageVal);
        ECHO $nom;
    }
?>