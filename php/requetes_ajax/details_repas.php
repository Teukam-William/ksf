<?php
    if(isset($_POST['nomRestaurant']) && isset($_POST['nomRepas']) && isset($_POST['utilisateur']) )
    {
        include('connexion_bd.php');

        $nomRestaurant = htmlspecialchars_decode($_POST['nomRestaurant']);
        $nomRepas = htmlspecialchars_decode($_POST['nomRepas']);
        // ON VERIFIE SI LES REPAS SONT DISPONIBLES 
        $infoSurUtilisateur = $connexion->query("SELECT * FROM repas WHERE nom_restaurant = '$nomRestaurant' AND nom = '$nomRepas' ");
        $valeur = $infoSurUtilisateur->fetchAll();
        

        if ( json_encode($valeur))
        {
        $nbrRepas = intval(sizeof($valeur));
        for($i = 0; $i <= ($nbrRepas - 1); $i++)
        {
            // echo $valeur[$i]['nom'];
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
                        <p class="compositionDuRepas">CompositiOn du repas</p>
                        <br>';
                        // ICI ON DOIT MAINTENANT RECUPERER LES DIFFERENT ALIMENTS QUI SONCTITUE LE RPAS ET LES RENGER PAR GROUPE
                        
                        // ON COMMANCE PAR LE GROUPE DES FRUITS ET LEGUMES
                        $aliment = $connexion->query("SELECT * FROM aliment WHERE nom_restaurant = '".$valeur[$i]['nom_restaurant']."' AND nom_repas = '$nomRepas' AND groupe_aliment = 'Fruits et Legumes' ");
                        $valeuraliment = $aliment->fetchAll();
                        
                        if ( json_encode($valeuraliment) )
                        {
                            echo '<div class="groupeDaliment" groupeAliment = "Fruits et Legumes">
                                <div class="nomDuGroupe">
                                    <p>Fruits et Légumes:</p>
                                </div>';
                                // ON RECUPERE TOUS LES ALIMENT DU GROUPE
                                for($i = 0; $i <= intval(sizeof($valeuraliment) - 1); $i++)
                                {
                                    echo '<div>
                                        <div class="enteteAlimentGroupe">
                                            <p>'; echo $valeuraliment[$i]['nom_aliment']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Glucides :</p> 
                                            <p>'; echo $valeuraliment[$i]['glucides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Protéines :</p>
                                            <p>'; echo $valeuraliment[$i]['proteines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Lipide :</p>
                                            <p>'; echo $valeuraliment[$i]['lipides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Minéraux :</p>
                                            <p>'; echo $valeuraliment[$i]['mineraux']; echo '</p>    
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Vitamines :</p>
                                            <p>'; echo $valeuraliment[$i]['vitamines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Fibre :</p>
                                            <p>'; echo $valeuraliment[$i]['fibre']; echo '</p>
                                        </div>
                                    </div>';
                                }
                            echo '</div>';
                        }
                        echo '<br>';
                        
                        // ON PASSE AU  GROUPE DES Produit laitier
                        $aliment = $connexion->query("SELECT * FROM aliment WHERE nom_restaurant = '$nomRestaurant' AND nom_repas = '$nomRepas' AND groupe_aliment = 'Produit laitier' ");
                        $valeuraliment = $aliment->fetchAll();
                        
                        if ( json_encode($valeuraliment) )
                        {
                            echo '<div class="groupeDaliment" groupeAliment = "Produit laitier">
                                <div class="nomDuGroupe">
                                    <p>Produit laitier :</p>
                                </div>';
                                // ON RECUPERE TOUS LES ALIMENT DU GROUPE
                                for($i = 0; $i <= intval(sizeof($valeuraliment) - 1); $i++)
                                {
                                    echo '<div>
                                        <div class="enteteAlimentGroupe">
                                            <p>'; echo $valeuraliment[$i]['nom_aliment']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Glucides :</p> 
                                            <p>'; echo $valeuraliment[$i]['glucides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Protéines :</p>
                                            <p>'; echo $valeuraliment[$i]['proteines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Lipide :</p>
                                            <p>'; echo $valeuraliment[$i]['lipides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Minéraux :</p>
                                            <p>'; echo $valeuraliment[$i]['mineraux']; echo '</p>    
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Vitamines :</p>
                                            <p>'; echo $valeuraliment[$i]['vitamines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Fibre :</p>
                                            <p>'; echo $valeuraliment[$i]['fibre']; echo '</p>
                                        </div>
                                    </div>';
                                }
                            echo '</div>';
                        }
                        echo '<br>';
                        

                        // ON PASSE AU  GROUPE DES Viandes, Poissons, Oeufs
                        $aliment = $connexion->query("SELECT * FROM aliment WHERE nom_restaurant = '$nomRestaurant' AND nom_repas = '$nomRepas' AND groupe_aliment = 'Viandes, Poissons, Oeufs' ");
                        $valeuraliment = $aliment->fetchAll();
                        
                        if ( json_encode($valeuraliment) )
                        {
                            echo '<div class="groupeDaliment" groupeAliment = "Produit laitier">
                                <div class="nomDuGroupe">
                                    <p>Viandes, Poissons, Oeufs :</p>
                                </div>';
                                // ON RECUPERE TOUS LES ALIMENT DU GROUPE
                                for($i = 0; $i <= intval(sizeof($valeuraliment) - 1); $i++)
                                {
                                    echo '<div>
                                        <div class="enteteAlimentGroupe">
                                            <p>'; echo $valeuraliment[$i]['nom_aliment']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Glucides :</p> 
                                            <p>'; echo $valeuraliment[$i]['glucides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Protéines :</p>
                                            <p>'; echo $valeuraliment[$i]['proteines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Lipide :</p>
                                            <p>'; echo $valeuraliment[$i]['lipides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Minéraux :</p>
                                            <p>'; echo $valeuraliment[$i]['mineraux']; echo '</p>    
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Vitamines :</p>
                                            <p>'; echo $valeuraliment[$i]['vitamines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Fibre :</p>
                                            <p>'; echo $valeuraliment[$i]['fibre']; echo '</p>
                                        </div>
                                    </div>';
                                }
                            echo '</div>';
                        }
                        echo '<br>';
                        
                        // ON PASSE AU  GROUPE DES Feculents
                        $aliment = $connexion->query("SELECT * FROM aliment WHERE nom_restaurant = '$nomRestaurant' AND nom_repas = '$nomRepas' AND groupe_aliment = 'Feculents' ");
                        $valeuraliment = $aliment->fetchAll();
                        
                        if ( json_encode($valeuraliment) )
                        {
                            echo '<div class="groupeDaliment" groupeAliment = "Feculents">
                                <div class="nomDuGroupe">
                                    <p>Feculents:</p>
                                </div>';
                                // ON RECUPERE TOUS LES ALIMENT DU GROUPE
                                for($i = 0; $i <= intval(sizeof($valeuraliment) - 1); $i++)
                                {
                                    echo '<div>
                                        <div class="enteteAlimentGroupe">
                                            <p>'; echo $valeuraliment[$i]['nom_aliment']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Glucides :</p> 
                                            <p>'; echo $valeuraliment[$i]['glucides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Protéines :</p>
                                            <p>'; echo $valeuraliment[$i]['proteines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Lipide :</p>
                                            <p>'; echo $valeuraliment[$i]['lipides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Minéraux :</p>
                                            <p>'; echo $valeuraliment[$i]['mineraux']; echo '</p>    
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Vitamines :</p>
                                            <p>'; echo $valeuraliment[$i]['vitamines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Fibre :</p>
                                            <p>'; echo $valeuraliment[$i]['fibre']; echo '</p>
                                        </div>
                                    </div>';
                                }
                            echo '</div>';
                        }
                        echo '<br>';
                        
                        // ON PASSE AU  GROUPE DES Corps gras
                        $aliment = $connexion->query("SELECT * FROM aliment WHERE nom_restaurant = '$nomRestaurant' AND nom_repas = '$nomRepas' AND groupe_aliment = 'Corps gras' ");
                        $valeuraliment = $aliment->fetchAll();
                        
                        if ( json_encode($valeuraliment) )
                        {
                            echo '<div class="groupeDaliment" groupeAliment = "Corps gras">
                                <div class="nomDuGroupe">
                                    <p>Corps gras:</p>
                                </div>';
                                // ON RECUPERE TOUS LES ALIMENT DU GROUPE
                                for($i = 0; $i <= intval(sizeof($valeuraliment) - 1); $i++)
                                {
                                    echo '<div>
                                        <div class="enteteAlimentGroupe">
                                            <p>'; echo $valeuraliment[$i]['nom_aliment']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Glucides :</p> 
                                            <p>'; echo $valeuraliment[$i]['glucides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Protéines :</p>
                                            <p>'; echo $valeuraliment[$i]['proteines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Lipide :</p>
                                            <p>'; echo $valeuraliment[$i]['lipides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Minéraux :</p>
                                            <p>'; echo $valeuraliment[$i]['mineraux']; echo '</p>    
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Vitamines :</p>
                                            <p>'; echo $valeuraliment[$i]['vitamines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Fibre :</p>
                                            <p>'; echo $valeuraliment[$i]['fibre']; echo '</p>
                                        </div>
                                    </div>';
                                }
                            echo '</div>';
                        }
                        echo '<br>';
                        
                        // ON PASSE AU  GROUPE DES Produit sucre
                        $aliment = $connexion->query("SELECT * FROM aliment WHERE nom_restaurant = '$nomRestaurant' AND nom_repas = '$nomRepas' AND groupe_aliment = 'Produit sucre' ");
                        $valeuraliment = $aliment->fetchAll();
                        
                        if ( json_encode($valeuraliment) )
                        {
                            echo '<div class="groupeDaliment" groupeAliment = "Produit sucre">
                                <div class="nomDuGroupe">
                                    <p>Produit sucre:</p>
                                </div>';
                                // ON RECUPERE TOUS LES ALIMENT DU GROUPE
                                for($i = 0; $i <= intval(sizeof($valeuraliment) - 1); $i++)
                                {
                                    echo '<div>
                                        <div class="enteteAlimentGroupe">
                                            <p>'; echo $valeuraliment[$i]['nom_aliment']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Glucides :</p> 
                                            <p>'; echo $valeuraliment[$i]['glucides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Protéines :</p>
                                            <p>'; echo $valeuraliment[$i]['proteines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Lipide :</p>
                                            <p>'; echo $valeuraliment[$i]['lipides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Minéraux :</p>
                                            <p>'; echo $valeuraliment[$i]['mineraux']; echo '</p>    
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Vitamines :</p>
                                            <p>'; echo $valeuraliment[$i]['vitamines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Fibre :</p>
                                            <p>'; echo $valeuraliment[$i]['fibre']; echo '</p>
                                        </div>
                                    </div>';
                                }
                            echo '</div>';
                        }
                        echo '<br>';
                        
                        // ON PASSE AU  GROUPE DES Eau
                        $aliment = $connexion->query("SELECT * FROM aliment WHERE nom_restaurant = '$nomRestaurant' AND nom_repas = '$nomRepas' AND groupe_aliment = 'Eau' ");
                        $valeuraliment = $aliment->fetchAll();
                        
                        if ( json_encode($valeuraliment) )
                        {
                            echo '<div class="groupeDaliment" groupeAliment = "Eau">
                                <div class="nomDuGroupe">
                                    <p>Eau:</p>
                                </div>';
                                // ON RECUPERE TOUS LES ALIMENT DU GROUPE
                                for($i = 0; $i <= intval(sizeof($valeuraliment) - 1); $i++)
                                {
                                    echo '<div>
                                        <div class="enteteAlimentGroupe">
                                            <p>'; echo $valeuraliment[$i]['nom_aliment']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Glucides :</p> 
                                            <p>'; echo $valeuraliment[$i]['glucides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Protéines :</p>
                                            <p>'; echo $valeuraliment[$i]['proteines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Lipide :</p>
                                            <p>'; echo $valeuraliment[$i]['lipides']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Minéraux :</p>
                                            <p>'; echo $valeuraliment[$i]['mineraux']; echo '</p>    
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Vitamines :</p>
                                            <p>'; echo $valeuraliment[$i]['vitamines']; echo '</p>
                                        </div>
                                        <div class="NutrimentEtAutres">
                                            <p>Fibre :</p>
                                            <p>'; echo $valeuraliment[$i]['fibre']; echo '</p>
                                        </div>
                                    </div>';
                                }
                            echo '</div>';
                        }
                        echo '<br>';
                        
                        echo '<br>';

                        if($_POST['utilisateur'] == 'restaurant')
                        {
                            echo '<button ">Modifier</button>';
                        }
                        else if($_POST['utilisateur'] == 'consommateur')
                        {
                            echo '
                            <div style="flex-direction: row;">
                                <input type="number" class="nbrRepas" placeholder="Quantité" min="0" value="1">
                                <button onclick="commanderRepas2(this)">Commander</button>
                            </div>';
                        }

                        echo '<br>
                        <br>
                        <br>
                        <br>
                        <br>
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
?>