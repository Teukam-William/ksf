<?php
    if(isset($_POST['infos']))
    {
        include('connexion_bd.php');
        if($_POST['infos'] =='principale')
        {
            if( isset($_FILES['image']) && isset($_POST['nom']) && isset($_POST['heure']) && isset($_POST['age']) && isset($_POST['glucides']) && isset($_POST['proteines']) && isset($_POST['lipides']) && isset($_POST['nomRestaurant']))
            {
                $idPlat = htmlspecialchars_decode($_POST['nomRestaurant']."_".$_POST['nom']);
                $nom = htmlspecialchars_decode($_POST['nom']);
                $heure = htmlspecialchars_decode($_POST['heure']);
                $age = htmlspecialchars_decode($_POST['age']);
                $glucides = htmlspecialchars_decode($_POST['glucides']);
                $proteines = htmlspecialchars_decode($_POST['proteines']);
                $lipides = htmlspecialchars_decode($_POST['lipides']);
    
                $fileName = $_FILES['image']['name'];
                $filesTmpName = $_FILES['image']['tmp_name'];
                $filesType = $_FILES['image']['type']; 
    
                $fileExt0 = explode('.', $fileName);
                $fileExt = strtolower(end($fileExt0));
                $fileNewName = $idPlat.".".$fileExt;
                $repertoirFichier = "../../images/imagesRepas/".$fileNewName;
                move_uploaded_file($filesTmpName, $repertoirFichier);
    
                $image = "images/imagesRepas/".$fileNewName;
    
                $nomRestaurant = htmlspecialchars_decode($_POST['nomRestaurant']);
                $AjouteRepas = $connexion->prepare("INSERT INTO repas VALUES(?,?,?,?,?,?,?,?,?)");
                $AjouteRepas->execute(array( $idPlat, $nom, $heure, $age, $glucides, $proteines, $lipides, $image, $nomRestaurant));
                if(json_encode($AjouteRepas))
                {
                    echo "succes";
    
                }
                else
                {
                    // echo json_encode($AjouteRepas);
                }
            }
        }
        else if($_POST['infos'] =='secondaire')
        {
            if( isset($_POST['nomRepas']) && isset($_POST['nomAliment']) && isset($_POST['groupeAliment']) && isset($_POST['glucides']) && isset($_POST['proteines']) && isset($_POST['lipides']) && isset($_POST['mineraux']) && isset($_POST['vitamines']) && isset($_POST['fibres']) && isset($_POST['nomRestaurant']))
            {
                $nomRepas = htmlspecialchars_decode($_POST['nomRepas']);
                $nomAliment = htmlspecialchars_decode($_POST['nomAliment']);
                $groupeAliment = htmlspecialchars_decode($_POST['groupeAliment']);
                $glucides = htmlspecialchars_decode($_POST['glucides']);
                $proteines = htmlspecialchars_decode($_POST['proteines']);
                $lipides = htmlspecialchars_decode($_POST['lipides']);
                $mineraux = htmlspecialchars_decode($_POST['mineraux']);
                $vitamines = htmlspecialchars_decode($_POST['vitamines']);
                $fibres = htmlspecialchars_decode($_POST['fibres']);
                $nomRestaurant = htmlspecialchars_decode($_POST['nomRestaurant']);
                $id_aliment = $nomAliment."_".$nomRepas."_".$nomRestaurant;
                
                $AjouteAlimentRepas = $connexion->prepare("INSERT INTO aliment VALUES(?,?,?,?,?,?,?,?,?,?,?)");
                $AjouteAlimentRepas->execute(array(  $id_aliment, $nomAliment, $nomRepas, $nomRestaurant, $groupeAliment, $glucides, $proteines, $lipides, $mineraux, $vitamines, $fibres));
                if(json_encode($AjouteAlimentRepas))
                {
                    echo "succes";
    
                }
                else
                {
                    // echo json_encode($AjouteRepas);
                }
            }
        }
    }
    
?>