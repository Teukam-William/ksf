<?php

    if(!empty($_POST['nom']) && !empty($_POST['motDePasse']))
    {
        include('connexion_bd.php');

        // ON RETIR LES CHOSOES INDESIABLE
        $nom = htmlspecialchars_decode($_POST['nom']);
        $motDePasse = htmlspecialchars_decode($_POST['motDePasse']);
        
         // ON VERIFIE SI L'UTILISATEUR ESITES 
         $infoSurUtilisateur = $connexion->query("SELECT * FROM utilisateur WHERE nom = '$nom' AND mot_de_passe = '$motDePasse' ");
         $valeur = $infoSurUtilisateur->fetch();
         if ( json_encode($valeur) == 'false' )
         {
             // ICI L'ITILISATEUR N'EXISTE PAS DANS LA BASE DE DONNEES
             echo "Ces identifiant ne sont pas reconnues !";
         }
         else
         {
            echo 'succes';
            
        session_start();
        $_SESSION['nom'] = $valeur['nom'];
        $_SESSION['email'] = $valeur['email'];
        $_SESSION['tel'] = $valeur['tel'];
        $_SESSION['role'] = $valeur['role'];
         }
    }
?>