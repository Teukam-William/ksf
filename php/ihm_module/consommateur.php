<!DO requiredCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KSF</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    
    <?php
        include('entete.php');
        include('php/requetes_ajax/connexion_bd.php');
    ?>

    <!-- ON VERIFIE SI L'UTILISATEUR A UNE SESSION EN COURS -->
     <?php
        if(empty($_SESSION['nom']) || empty($_SESSION['email']) || empty($_SESSION['tel']) || empty($_SESSION['role']))
        {
            session_start();
        }
        if(!empty($_SESSION['nom']) && !empty($_SESSION['email']) && !empty($_SESSION['tel']) && !empty($_SESSION['role']))
        {
            ?>
                <div id="boiteListeRepasConsommateur">
                    <div class="boiteOption">
                        <input onkeyup="consommateurRechercherLesRepas(this)" style="position : fixed; margin-top: 25px;" type="text" placeholder="RECHERCHER UN REPAS ICI..." name="rechercherRepas" id="rechercherRepas">
                    </div>
                    <div class="boiteAfficheListeRepas">
                        <div class="boiteRepas">
                            <div class="imageEtNomDuRepas">
                                <img src="./images/imageRepasTemp.svg" class="imageRepas">
                                <p class="nomDuRepas">nom repas</p>
                            </div>
                            <div class="heureEtAge">
                                <p class="heureDuRepas">Heure</p>
                                <p class="AgeConsommateurDuRepas">age</p>
                            </div>
                            <div style="flex-direction: row;">
                                <p class="nomRestaurant">bfhfh</p>
                                <input type="number" class="nbrRepas" placeholder="Quantité" min="0" value="1">
                            </div>
                            <br>
                            <div style="flex-direction: row;">
                                <button onclick="commanderRepas(this)" >Commander</button>
                                <button onclick="ouvrirPage('detailDuRepas', 'boiteListeRepas'), setRetour('boiteListeRepas')" class="btnTransparentBnlanc">Détails</button>
                            </div>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                        </div>
                    </div>
                    <?php
                        include("pied_de_page.php");
                    ?>
                </div>

                <div id="detailDuRepas">
                    <div class="boiteAfficheDetailsRepas">
                        <div class="boiteRepas">
                            <div class="imageEtNomDuRepas">
                                <img src="./images/imageRepasTemp.svg" class="imageRepas">
                                <input onchange="afficherAppercu(this)" placeholder="Choisir une image du repas"  id="imageNouveauRepas" type="file" accept="image/*" >
                                <input placeholder="Quel est le nom du repas?" type="text" name="nomDuRepasNouveau" id="nomDuRepasNouveau" class="nomDuRepas">
                            </div>
                            <div class="heureEtAge">
                                <p class="heureDuRepas">Heure</p>
                                <p class="AgeConsommateurDuRepas">age</p>
                            </div>
                            <p class="nomRestaurant"><?php echo $_SESSION['nom']; ?></p>
                            <p class="compositionDuRepas">CompositiOn du repas</p>
                            <br>
                            <div class="groupeDaliment" groupeAliment = "Fruits et Legumes">
                                <div class="nomDuGroupe">
                                    <p>Fruits et Légumes:</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <p></p>    
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Produit laitier">
                                <div class="nomDuGroupe">
                                    <p>Produit laitier :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <p></p>    
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Viandes, Poissons, Oeufs">
                                <div class="nomDuGroupe">
                                    <p>Viandes, Poissons, Oeufs :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <p></p>    
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Feculents">
                                <div class="nomDuGroupe">
                                    <p>Féculents :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <p></p>    
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Corps gras">
                                <div class="nomDuGroupe">
                                    <p>Corps gras :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <p></p>    
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Produit sucre">
                                <div class="nomDuGroupe">
                                    <p>Produit sucré :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <p></p>    
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Eau">
                                <div class="nomDuGroupe">
                                    <p>Eau :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <p></p>
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <p></p>    
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <br>
                            <button ">Modifier</button>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                        </div>
                    </div>
                    <?php
                        include("pied_de_page.php");
                    ?>
                </div>
            <?php
        }
     ?>

</body>
<script src="./js/controle_fenetres.js"></script>
<script src="./js/repas.js"></script>
<script src="./js/deconnexion.js"></script>
<script>
    afficherTousLesRepas2()
</script>
</html>