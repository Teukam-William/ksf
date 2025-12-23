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
                <div id="boiteCreerRepas">
                    <div class="boiteOption">
                        <button onclick="ouvrirPage('boiteListeRepas','boiteCreerRepas'), setRetour('boiteCreerRepas'), afficherTousLesRepas('<?php echo $_SESSION['nom']; ?>')" class="listeDesRepasCreer btn_jaune">
                            Repas
                            <img src="images/plat_et_couvert_blanc.svg" alt="" srcset="">
                        </button>
                        <button class="CreerUnRepas bouton_rouge">
                            Créer
                            <img src="images/Creer_plat_noir.svg" alt="" srcset="">
                        </button>
                    </div>
                    <div class="boiteAfficheRepas">
                        <div class="boiteRepas">
                            <div class="imageEtNomDuRepas">
                                <img src="./images/imageRepasTemp.svg" class="imageRepas">
                                <input onchange="afficherAppercu(this)" placeholder="Choisir une image du repas"  id="imageNouveauRepas" type="file" accept="image/*" >
                                <input placeholder="Quel est le nom du repas?" type="text" name="nomDuRepasNouveau" id="nomDuRepasNouveau" class="nomDuRepas">
                            </div>
                            <div class="heureEtAge">
                                <select placeholder="Période pour manger" name="heureDuRepas" id="heureDuRepasNouveau" class="heureDuRepas">
                                    <option value="A toute heure" selected>A toute heure</option>
                                    <option value="La matinée">La matinée</option>
                                    <option value="L'apres midi">L'apres midi</option>
                                    <option value="Le soir">Le soir</option>
                                    <option value="La matinée et L'apres midi">La matinée et L'apres midi</option>
                                    <option value="L'apres midi et Le soir">L'apres midi et Le soir</option>
                                    <option value="Le soir et La matinée">Le soir et La matinée</option>
                                </select>
                                <select placeholder="Pour quel âge?" name="agePourRepas" id="AgeConsommateurDuRepasNouveau" class="AgeConsommateurDuRepas">
                                    <option value="Tout âge" selected>Tout âge</option>
                                    <option value="0-3 ans" >0-3 ans</option>
                                    <option value="4-12 ans" >4-12 ans</option>
                                    <option value="13-21 ans" >13-21 ans</option>
                                    <option value="22-70 ans" >22-70 ans</option>
                                    <option value="+70 ans" >+70 ans</option>
                                </select>
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
                                        <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this)" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this)" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this)" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <input id="FruitsLegumesNouveauRepasMineraux" type="text" placeholder="Listez les mineraux de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <input id="FruitsLegumesNouveauRepasVitamines" type="text" placeholder="Listez les vitamines de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <input id="FruitsLegumesNouveauRepasFibre" type="text" placeholder="Estimez la teneur en fibre de ce groupe d'aliment">
                                    </div>
                                </div>
                                <button class="ajouterAlimentFruitsLegumes" onclick="ajouterChampsGroupeAliment('Fruits et Légumes', '.ajouterAlimentFruitsLegumes')">Ajouter</button>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Produit laitier">
                                <div class="nomDuGroupe">
                                    <p>Produit laitier :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this)" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this)" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this)" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <input id="ProduisLaitierNouveauRepasMineraux" type="text" placeholder="Listez les mineraux de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <input id="ProduisLaitierNouveauRepasVitamines" type="text" placeholder="Listez les vitamines de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <input id="ProduisLaitierNouveauRepasFibre" type="text" placeholder="Estimez la teneur en fibre de ce groupe d'aliment">
                                    </div>
                                </div>
                                <button class="ajouterAlimentProduisLaitier" onclick="ajouterChampsGroupeAliment('Produit laitier', '.ajouterAlimentProduisLaitier')">Ajouter</button>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Viandes, Poissons, Oeufs">
                                <div class="nomDuGroupe">
                                    <p>Viandes, Poissons, Oeufs :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this)" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this)" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this)" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <input id="ViandesPoissonsOeufsNouveauRepasMineraux" type="text" placeholder="Listez les mineraux de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <input id="ViandesPoissonsOeufsNouveauRepasVitamines" type="text" placeholder="Listez les vitamines de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <input id="ViandesPoissonsOeufsNouveauRepasFibre" type="text" placeholder="Estimez la teneur en fibre de ce groupe d'aliment">
                                    </div>
                                </div>
                                <button class="ajouterAlimentViandesPoissonsOeufs" onclick="ajouterChampsGroupeAliment('Viandes, Poissons, Oeufs', '.ajouterAlimentViandesPoissonsOeufs')">Ajouter</button>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Feculents">
                                <div class="nomDuGroupe">
                                    <p>Féculents :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this)" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this)" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this)" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <input id="FeculentNouveauRepasMineraux" type="text" placeholder="Listez les mineraux de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <input id="FeculentNouveauRepasVitamines" type="text" placeholder="Listez les vitamines de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <input id="FeculentNouveauRepasFibre" type="text" placeholder="Estimez la teneur en fibre de ce groupe d'aliment">
                                    </div>
                                </div>
                                <button class="ajouterAlimentFeculent" onclick="ajouterChampsGroupeAliment('Féculents', '.ajouterAlimentFeculent')">Ajouter</button>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Corps gras">
                                <div class="nomDuGroupe">
                                    <p>Corps gras :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this)" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this)" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this)" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <input id="CorpsGrasNouveauRepasMineraux" type="text" placeholder="Listez les mineraux de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <input id="CorpsGrasNouveauRepasVitamines" type="text" placeholder="Listez les vitamines de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <input id="CorpsGrasNouveauRepasFibre" type="text" placeholder="Estimez la teneur en fibre de ce groupe d'aliment">
                                    </div>
                                </div>
                                <button class="ajouterAlimentCorpsGras" onclick="ajouterChampsGroupeAliment('Corps gras', '.ajouterAlimentCorpsGras')">Ajouter</button>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Produit sucre">
                                <div class="nomDuGroupe">
                                    <p>Produit sucré :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this)" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this)" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this)" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <input id="ProduisSucreNouveauRepasMineraux" type="text" placeholder="Listez les mineraux de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <input id="ProduisSucreNouveauRepasVitamines" type="text" placeholder="Listez les vitamines de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <input id="ProduisSucreNouveauRepasFibre" type="text" placeholder="Estimez la teneur en fibre de ce groupe d'aliment">
                                    </div>
                                </div>
                                <button class="ajouterAlimentProduisSucre" onclick="ajouterChampsGroupeAliment('Produit sucré', '.ajouterAlimentProduisSucre')">Ajouter</button>
                            </div>
                            <br>
                            <div class="groupeDaliment" groupeAliment ="Eau">
                                <div class="nomDuGroupe">
                                    <p>Eau :</p>
                                </div>
                                <div>
                                    <div class="enteteAlimentGroupe">
                                        <input id="EauNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input  id="EauNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" value="0" disabled style="background-color: #F6CD00;">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input type="number" min="0" max="30" placeholder="Pourcentage de protéines" value="0" disabled style="background-color: #F6CD00;">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input type="number" min="0" max="20" placeholder="Pourcentage de lipides" value="0" disabled style="background-color: #F6CD00;">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Minéraux :</p>
                                        <input id="EauNouveauRepasMineraux" type="text" placeholder="Listez les mineraux de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Vitamines :</p>
                                        <input id="EauNouveauRepasVitamines" type="text" placeholder="Listez les vitamines de ce groupe d'aliment">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Fibre :</p>
                                        <input id="EauNouveauRepasFibre" type="text" placeholder="Estimez la teneur en fibre de ce groupe d'aliment" value="0" disabled style="background-color: #F6CD00;">
                                    </div>
                                </div>
                            </div>
                            <br>
                            <br>
                            <button class="btn_jaune" onclick="enregistrerRepas()">Enrégistrer</button>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <?php
                                include("valeursNutriments.php");
                            ?>
                        </div>
                    </div>
                </div>
                
                <div id="boiteListeRepas">
                    <div class="boiteOption">
                        <button class="listeDesRepasCreer bouton_rouge">
                            Repas
                            <img src="images/plat_et_couvert_blanc.svg" alt="" srcset="">
                        </button>
                        <button onclick="ouvrirPage('boiteCreerRepas', 'boiteListeRepas'), setRetour('boiteListeRepas')" class="CreerUnRepas btn_jaune">
                            Créer
                            <img src="images/Creer_plat_noir.svg" alt="" srcset="">
                        </button>
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
                            <p class="nomRestaurant">bfhfh</p>
                            <br>
                            <div style="flex-direction: row;">
                                <button >Modifier</button>
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
                    <div class="boiteOption">
                        <button onclick="ouvrirPage('boiteListeRepas','detailDuRepas'), setRetour('detailDuRepas')" class="listeDesRepasCreer btn_jaune">
                            Repas
                            <img src="images/plat_et_couvert_blanc.svg" alt="" srcset="">
                        </button>
                        <button onclick="ouvrirPage('boiteCreerRepas', 'detailDuRepas'), setRetour('detailDuRepas')" class="CreerUnRepas btn_jaune">
                            Créer
                            <img src="images/Creer_plat_noir.svg" alt="" srcset="">
                        </button>
                    </div>
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
</html>