function inscriptionRestaurant()
{
    let nom = document.querySelector("#pageInscriptionRestaurant_NomRestaurantOuCuisinier");
    let email = document.querySelector("#pageInscriptionRestaurant_Email");
    let tel = document.querySelector("#pageInscriptionRestaurant_Telephone");
    let motDePasse = document.querySelector("#pageInscriptionRestaurant_MotDePasse");

    // ON VERIFI QUE TOUS LES CHAMPS SONT PLEIN
    if(nom.value != '' && email.value != '' && tel.value != '' && motDePasse.value != '')
    {
        let nom_  = encodeURI(nom.value);
        let email_  = encodeURI(email.value);
        let tel_  = encodeURI(tel.value);
        let motDePasse_  = encodeURI(motDePasse.value);
        let xhr_inscriptionRestaurant = new XMLHttpRequest();
        xhr_inscriptionRestaurant.open('POST', './php/requetes_ajax/inscription.php');
        xhr_inscriptionRestaurant.setRequestHeader('content-type', ' application/x-www-form-urlencoded');
        xhr_inscriptionRestaurant.send('nom='+nom_+'&email='+email_+'&tel='+tel_+'&motDePasse='+motDePasse_+'&role=restaurant')
        xhr_inscriptionRestaurant.onreadystatechange = function ()
        {
            if(xhr_inscriptionRestaurant.readyState == 4 && xhr_inscriptionRestaurant.status == 200)
            {
                if(xhr_inscriptionRestaurant.responseText == 'Inscription réussie !')
                {
                    alert(xhr_inscriptionRestaurant.responseText);
                    window.location.replace("./");
                }
                else if ( xhr_inscriptionRestaurant.responseText == "CE NOM D'UTILISATEUR EST DEJA PRIS! CHOISISSEZ UN AUTRE SVP!" )
                {
                    alert(xhr_inscriptionRestaurant.responseText);
                }
            }
        }
    }
    else
    {
        alert("Remplisez toutes les informations svp !")
    }
}

function inscriptionUtilisateur()
{
    let nom = document.querySelector("#pageInscriptionUtilisateur_NomUtilisateur");
    let email = document.querySelector("#pageInscriptionUtilisateur_Email");
    let tel = document.querySelector("#pageInscriptionUtilisateur_Telephone");
    let motDePasse = document.querySelector("#pageInscriptionUtilisateur_MotDePasse");

    // ON VERIFI QUE TOUS LES CHAMPS SONT PLEIN
    if(nom.value != '' && email.value != '' && tel.value != '' && motDePasse.value != '')
    {
        let nom_  = encodeURI(nom.value);
        let email_  = encodeURI(email.value);
        let tel_  = encodeURI(tel.value);
        let motDePasse_  = encodeURI(motDePasse.value);
        let xhr_inscriptionUtilisateur = new XMLHttpRequest();
        xhr_inscriptionUtilisateur.open('POST', './php/requetes_ajax/inscription.php');
        xhr_inscriptionUtilisateur.setRequestHeader('content-type', ' application/x-www-form-urlencoded');
        xhr_inscriptionUtilisateur.send('nom='+nom_+'&email='+email_+'&tel='+tel_+'&motDePasse='+motDePasse_+'&role=consommateur')
        xhr_inscriptionUtilisateur.onreadystatechange = function ()
        {
            if(xhr_inscriptionUtilisateur.readyState == 4 && xhr_inscriptionUtilisateur.status == 200)
            {
                if(xhr_inscriptionUtilisateur.responseText == 'Inscription réussie !')
                {
                    alert(xhr_inscriptionUtilisateur.responseText);
                    window.location.replace("./");
                }
                else if ( xhr_inscriptionUtilisateur.responseText == "CE NOM D'UTILISATEUR EST DEJA PRIS! CHOISISSEZ UN AUTRE SVP!" )
                {
                    alert(xhr_inscriptionUtilisateur.responseText);
                }
            }
        }
    }
    else
    {
        alert("Remplisez toutes les informations svp !")
    }
}


function connexionUtilisateur()
{
    let nom = document.querySelector("#pageConnexion_NomUtilisateur");
    let motDePasse = document.querySelector("#pageConnexion_MotDePasse");

    // ON VERIFI QUE TOUS LES CHAMPS SONT PLEIN
    if(nom.value != ''&& motDePasse.value != '')
    {
        let nom_  = encodeURI(nom.value);
        let motDePasse_  = encodeURI(motDePasse.value);
        let xhr_pageConnexion = new XMLHttpRequest();
        xhr_pageConnexion.open('POST', './php/requetes_ajax/connexion.php');
        xhr_pageConnexion.setRequestHeader('content-type', ' application/x-www-form-urlencoded');
        xhr_pageConnexion.send('nom='+nom_+'&motDePasse='+motDePasse_);
        xhr_pageConnexion.onreadystatechange = function ()
        {
            if(xhr_pageConnexion.readyState == 4 && xhr_pageConnexion.status == 200)
            {
                if(xhr_pageConnexion.responseText == 'succes')
                {
                    alert(xhr_pageConnexion.responseText);
                    window.location.replace("./");
                }
                else if ( xhr_pageConnexion.responseText == "Ces identifiant ne sont pas reconnues !" )
                {
                    alert(xhr_pageConnexion.responseText);
                }
            }
        }
    }
    else
    {
        alert("Remplisez toutes les informations svp !")
    }
}
