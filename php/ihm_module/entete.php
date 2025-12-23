<div class="entete">
    <img src="./images/LOGO K-MER SOFT FOOD.svg" alt="KSF" class="logo">
    <img onclick="ouvrirPage('menuLateral','')" src="./images/bouton menu.svg" alt="MENU" class="boutonMenu"/>
</div>
<div id="menuLateral">
    <div class="boite_close">
        <img onclick="fermerPage('menuLateral')" src="./images/bouton_close.svg" class="bouton_close">
    </div>
    <button>CALCULER MON IMC</button>
    <br>
    <button onclick="ouvrirLien('https:/\/api.whatsapp.com/send?phone=237693003156')"  >CONTACTER LE DEVELOPPEUR</button>
    <br><?php
    if(!empty($_SESSION['role']))
    {
        echo '<button onclick="deconnexion()" class="bouton_rouge">SE DECONNCTER</button>
        <br>';
    }
?>
</div>