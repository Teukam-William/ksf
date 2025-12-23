<?php
    if(!empty($_POST['nomRestaurant']))
    {
        include('connexion_bd.php');

        $nomRestaurant = htmlspecialchars_decode($_POST['nomRestaurant']);
         // ON VERIFIE SI LES REPAS SONT DISPONIBLES 
         $infoSurUtilisateur = $connexion->query("SELECT * FROM repas WHERE nom_restaurant = '$nomRestaurant' ");
         $valeur = $infoSurUtilisateur->fetchAll();
         
 
         if ( json_encode($valeur))
         {
            $nbrRepas = intval(sizeof($valeur));
            for($i = 0; $i <= ($nbrRepas - 1); $i++)
            {
                echo '
                        <div class="boiteRepas">
                            <div class="imageEtNomDuRepas">
                                <img src="'; echo $valeur[$i]['image']; echo '" class="imageRepas">
                                <p class="nomDuRepas">'; echo $valeur[$i]['nom']; echo '</p>
                            </div>
                            <div class="heureEtAge">
                                <p class="heureDuRepas">'; echo $valeur[$i]['heure']; echo '</p>
                                <p class="AgeConsommateurDuRepas">'; echo $valeur[$i]['ages']; echo '</p>
                            </div>
                            <p class="nomRestaurant">'; echo $valeur[$i]['nom_restaurant']; echo '</p>
                            <br>
                            <div style="flex-direction: row;">
                                <button >Modifier</button>
                                <button onclick="ouvrirPage(\'detailDuRepas\', \'boiteListeRepas\'), setRetour(\'boiteListeRepas\'), afficherLesDetailsDuRepas(\''; echo $valeur[$i]['nom_restaurant']; echo '\', \''; echo $valeur[$i]['nom']; echo '\', \'restaurant\' )" class="btnTransparentBnlanc">Détails</button>
                            </div>
                            <br>
                            <br>
                        </div>';
            }
         }
         else
         {
            echo 'AUNCUN REPAS ENREGISTER POUR LE MOMENT';
         }
    }
    
    if(!empty($_POST['tout']) && $_POST['tout'] == 'tout')
    {
        if($_POST['tout'] == 'tout')
        {
            include('connexion_bd.php');

            // ON VERIFIE SI LES REPAS SONT DISPONIBLES 
            $infoSurUtilisateur = $connexion->query("SELECT * FROM repas");
            $valeur = $infoSurUtilisateur->fetchAll();
            
            if ( json_encode($valeur))
            {
            $nbrRepas = intval(sizeof($valeur));
            for($i = 0; $i <= ($nbrRepas - 1); $i++)
            {
                echo '
                        <div class="boiteRepas">
                            <div class="imageEtNomDuRepas">
                                <img src="'; echo $valeur[$i]['image']; echo '" class="imageRepas">
                                <p class="nomDuRepas">'; echo $valeur[$i]['nom']; echo '</p>
                            </div>
                            <div class="heureEtAge">
                                <p class="heureDuRepas">'; echo $valeur[$i]['heure']; echo '</p>
                                <p class="AgeConsommateurDuRepas">'; echo $valeur[$i]['ages']; echo '</p>
                            </div>
                            <div style="flex-direction: row;">
                                <p class="nomRestaurant">'; echo $valeur[$i]['nom_restaurant']; echo '</p>
                                <input type="number" class="nbrRepas" placeholder="Quantité" min="0" value="1">
                            </div>
                            <br>
                            <div style="flex-direction: row;">
                                <button class="btn_jaune" onclick="commanderRepas(this)" >commander</button>
                                <button onclick="ouvrirPage(\'detailDuRepas\', \'boiteListeRepasConsommateur\'), setRetour(\'boiteListeRepasConsommateur\'), afficherLesDetailsDuRepas(\''; echo $valeur[$i]['nom_restaurant']; echo '\', \''; echo $valeur[$i]['nom']; echo '\', \'consommateur\')" class="btnTransparentBnlanc">Détails</button>
                            </div>
                            <br>
                            <br>
                        </div>';
            }
            }
            else
            {
            echo 'AUNCUN REPAS ENREGISTER POUR LE MOMENT';
            }
        }
    }
    
    if(isset($_POST['recherche']))
    {
        $elt = $_POST['recherche'];
        include('connexion_bd.php');

        // ON VERIFIE SI LES REPAS SONT DISPONIBLES 
        $infoSurUtilisateur = $connexion->query("SELECT * FROM repas WHERE nom LIKE '$elt%' OR heure LIKE '$elt%' OR ages LIKE '$elt%' OR nom_restaurant = '$elt' ");
        $valeur = $infoSurUtilisateur->fetchAll();
        
        if ( json_encode($valeur))
        {
        $nbrRepas = intval(sizeof($valeur));
        for($i = 0; $i <= ($nbrRepas - 1); $i++)
        {
            echo '
                    <div class="boiteRepas">
                        <div class="imageEtNomDuRepas">
                            <img src="'; echo $valeur[$i]['image']; echo '" class="imageRepas">
                            <p class="nomDuRepas">'; echo $valeur[$i]['nom']; echo '</p>
                        </div>
                        <div class="heureEtAge">
                            <p class="heureDuRepas">'; echo $valeur[$i]['heure']; echo '</p>
                            <p class="AgeConsommateurDuRepas">'; echo $valeur[$i]['ages']; echo '</p>
                        </div>
                        <div style="flex-direction: row;">
                            <p class="nomRestaurant">'; echo $valeur[$i]['nom_restaurant']; echo '</p>
                            <input type="number" class="nbrRepas" placeholder="Quantité" min="0" value="1">
                        </div>
                        <br>
                        <div style="flex-direction: row;">
                            <button class="btn_jaune" onclick="commanderRepas(this)" >commander</button>
                            <button onclick="ouvrirPage(\'detailDuRepas\', \'boiteListeRepasConsommateur\'), setRetour(\'boiteListeRepasConsommateur\'), afficherLesDetailsDuRepas(\''; echo $valeur[$i]['nom_restaurant']; echo '\', \''; echo $valeur[$i]['nom']; echo '\', \'consommateur\')" class="btnTransparentBnlanc">Détails</button>
                        </div>
                        <br>
                        <br>
                    </div>';
        }
        }
        else
        {
            echo 'AUNCUN REPAS NE CORRESPOND A VOTRE RECHERCHE';
        }
    }
?>