<?php

    if(!empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['tel']) && !empty($_POST['motDePasse']) && !empty($_POST['role']))
    {
        include('connexion_bd.php');

        // ON RETIR LES CHOSOES INDESIABLE
        $nom = htmlspecialchars_decode($_POST['nom']);
        $email = htmlspecialchars_decode($_POST['email']);
        $tel = htmlspecialchars_decode($_POST['tel']);
        $motDePasse = htmlspecialchars_decode($_POST['motDePasse']);
        $role = $_POST['role'];

        session_start();
        $_SESSION['nom'] = $nom;
        $_SESSION['email'] = $email;
        $_SESSION['tel'] = $tel;
        $_SESSION['role'] = $role;

       if($role == "restaurant")
       {
         // ON VERIFIE SI L'UTILISATEUR N'ESITES PAS ENCORE 
         $infoSurUtilisateur = $connexion->query("SELECT * FROM utilisateur WHERE nom = '$nom' ");
         $valeur = $infoSurUtilisateur->fetch();
         
 
         if ( json_encode($valeur) == 'false' )
         {
             // ICI L'ITILISATEUR N'EXISTE PAS DANS LA BASE DE DONNEES
             
             // ON ECRIT LA REQUETES POUR L'ENREGISTRER
             $enregistrement = $connexion->query("INSERT INTO utilisateur VALUES('$nom', '$email', '$tel', '$motDePasse', '$role')");
             if( json_encode($enregistrement) == "{\"queryString\":\"INSERT INTO utilisateur VALUES('".$nom."', '".$email."', '".$tel."', '".$motDePasse."', '".$role."')\"}" )
             {
                 echo "Inscription réussie !";
             }
             else
             {
                 echo "Une erreur s'est produit veuillez reessayer !";
             }
 
         }
         else
         {
             // ICI L'UTILISATEUR EXITE DANS LA BASE DEDONNEES
             echo "CE NOM D'UTILISATEUR EST DEJA PRIS! CHOISISSEZ UN AUTRE SVP!";
         }
       }

       if($role == "consommateur")
       {
         // ON VERIFIE SI L'UTILISATEUR N'ESITES PAS ENCORE 
         $infoSurUtilisateur = $connexion->query("SELECT * FROM utilisateur WHERE nom = '$nom' ");
         $valeur = $infoSurUtilisateur->fetch();
         
 
         if ( json_encode($valeur) == 'false' )
         {
             // ICI L'ITILISATEUR N'EXISTE PAS DANS LA BASE DE DONNEES
             
             // ON ECRIT LA REQUETES POUR L'ENREGISTRER
             $enregistrement = $connexion->query("INSERT INTO utilisateur VALUES('$nom', '$email', '$tel', '$motDePasse', '$role')");
             if( json_encode($enregistrement) == "{\"queryString\":\"INSERT INTO utilisateur VALUES('".$nom."', '".$email."', '".$tel."', '".$motDePasse."', '".$role."')\"}" )
             {
                 echo "Inscription réussie !";
             }
             else
             {
                 echo "Une erreur s'est produit veuillez reessayer !";
             }
 
         }
         else
         {
             // ICI L'UTILISATEUR EXITE DANS LA BASE DEDONNEES
             echo "CE NOM D'UTILISATEUR EST DEJA PRIS! CHOISISSEZ UN AUTRE SVP!";
         }
       }
    }

?>