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
        include("./php/ihm_module/entete.php");
    ?>

    <div id="pageConnexion">
        <img src="./images/LOGO K-MER SOFT FOOD.svg" height="150px" width="10px" alt="KSF">
        <br>
        <h1>Se conecter</h1>
        <br>
        <br>
        <div class="boiteFormulaire">
            <input required type="text" placeholder="Nom d'utilisateur ou restaurant" name="pageConnexion_NomUtilisateur" id="pageConnexion_NomUtilisateur">
            <br/>
            <input required type="password" placeholder="MOt de passe" name="pageConnexion_MotDePasse" id="pageConnexion_MotDePasse">
            <br/>   
            <br/>
            <button onclick="connexionUtilisateur()" id="pageConnexion_BoutonSeConnecter">Se connecter</button>
            <br>
            <p onclick="ouvrirPage('pageInscription', 'pageConnexion'), setRetour('pageConnexion')" id="pageConnexion_BoutonSinscrire">S'inscrire</p>
        </div>
        <?php
            include("./php/ihm_module/pied_de_page.php");
        ?>
    </div>

    <div id="pageInscriptionRestaurant">
        <div>
        <img src="./images/restaurant.svg" height="150px" width="10px" alt="KSF">
        <h1>S'inscrire</h1>
        </div>
        <br>
        <br>
        <div class="boiteFormulaire">
            <input required type="text" placeholder="Nom du restaurant ou cuisinier" name="pageInscriptionRestaurant_NomRestaurantOuCuisinier" id="pageInscriptionRestaurant_NomRestaurantOuCuisinier">
            <br/>
            <input required type="email" placeholder="Adresse e-mail" name="pageInscriptionRestaurant_Email" id="pageInscriptionRestaurant_Email">
            <br/>
            <input required type="tel" placeholder="Téléphone" name="pageInscriptionRestaurant_Telephone" id="pageInscriptionRestaurant_Telephone">
            <br/>
            <input required type="password" placeholder="Créer un mot de passe" name="pageInscriptionRestaurant_MotDePasse" id="pageInscriptionRestaurant_MotDePasse">
            <br/>   
            <br/>
            <button onclick="inscriptionRestaurant()" id="pageInscriptionRestaurant_BoutonSinscrire" class="btn_jaune">S'inscrire</button>
            <br>
            <p onclick="ouvrirPage('pageConnexion','pageInscriptionRestaurant'), setRetour('pageInscriptionRestaurant')" id="pageInscriptionRestaurant_BoutonSeConnecter">Se connecter</p>
        </div>
        <?php
            include("./php/ihm_module/pied_de_page.php");
        ?>
    </div>

    <div id="pageInscriptionUtilisateur">
        <div>
        <img src="./images/utilisateur.svg" height="150px" width="10px" alt="KSF">
        <h1>S'inscrire</h1>
        </div>
        <br>
        <br>
        <div class="boiteFormulaire">
            <input required type="text" placeholder="Nom d'utilisateur" name="pageInscriptionUtilisateur_NomUtilisateur" id="pageInscriptionUtilisateur_NomUtilisateur">
            <br/>
            <input required type="email" placeholder="Adresse e-mail" name="pageInscriptionUtilisateur_Email" id="pageInscriptionUtilisateur_Email">
            <br/>
            <input required type="tel" placeholder="Téléphone" name="pageInscriptionUtilisateur_Telephone" id="pageInscriptionUtilisateur_Telephone">
            <br/>
            <input required type="password" placeholder="Créer un mot de passe" name="pageInscriptionUtilisateur_MotDePasse" id="pageInscriptionUtilisateur_MotDePasse">
            <br/>   
            <br/>
            <button onclick="inscriptionUtilisateur()" id="pageInscriptionUtilisateur_BoutonSinscrire" class="btn_jaune">S'inscrire</button>
            <br>
            <p onclick="ouvrirPage('pageConnexion','pageInscriptionUtilisateur'), setRetour('pageInscriptionUtilisateur')" id="pageInscriptionUtilisateur_BoutonSeConnecter">Se connecter</p>
        </div>
        <?php
            include("./php/ihm_module/pied_de_page.php");
        ?>
    </div>
    
    <div id="pageInscription">
        <div>
        <img src="./images/LOGO K-MER SOFT FOOD.svg" height="150px" width="10px" alt="KSF">
       <br> 
        <h1>S'inscrire</h1>
        </div>
        <br>
        <br>
        <div class="boiteFormulaire">
            <div>
                <img onclick="ouvrirPage('pageInscriptionRestaurant','pageInscription'), setRetour('pageInscription')" src="./images/restaurant.svg" height="200px" width="10px" alt="KSF">
                <img onclick="ouvrirPage('pageInscriptionUtilisateur','pageInscription'), setRetour('pageInscription')"  src="./images/utilisateur.svg" height="200px" width="10px" alt="KSF">
            </div>
        </div>
        <br>
        <button onclick="ouvrirPage('pageConnexion','pageInscription'), setRetour('pageInscription')" id="pageInscription_BoutonSeConnecter">Se connecter</button>
    </div>
</body>
<script src="./js/controle_fenetres.js"></script>
<script src="./js/connexion_inscription.js"></script>
</html>