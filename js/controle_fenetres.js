function ouvrirPage( identifiant1, identifiant2)
{
    document.querySelector('#boutonRetour').setAttribute("pageActuel", identifiant1)
    if(identifiant2 =='')
    {
        let blocConnexion = document.querySelector('#'+identifiant1);
        blocConnexion.style.display = 'flex';
        blocConnexion.style.visibility = 'visible';
        blocConnexion.style.top = '0px';
        console.log(blocConnexion.style.display);
    }
    else
    {
        fermerPage(identifiant2)
        let blocConnexion = document.querySelector('#'+identifiant1);
        blocConnexion.style.display = 'flex';
        blocConnexion.style.visibility = 'visible';
        blocConnexion.style.top = '0px';
        console.log(blocConnexion.style.display);
    }
}
function fermerPage(identifiant1)
{
    let blocConnexion = document.querySelector('#'+identifiant1);
    blocConnexion.style.visibility = 'hidden';
    blocConnexion.style.display = 'none';
    blocConnexion.style.top = '-600px';
    
}
let navHistorique = new Array();

function setRetour(identifiant1)
{
    document.querySelector('#boutonRetour').setAttribute("retourSur", identifiant1)
    navHistorique.push(identifiant1);
    console.log(navHistorique);
}
function retour()
{
    let actuel = document.querySelector('#boutonRetour').getAttribute("pageActuel");
    let retourSur = document.querySelector('#boutonRetour').getAttribute("retourSur");
    console.log(actuel+"____"+retourSur)
    if(actuel == retourSur)
    {
        fermerPage(actuel)
    }
    else
    {
        ouvrirPage(navHistorique[navHistorique.length-1], actuel);  
        document.querySelector('#boutonRetour').setAttribute("retourSur", navHistorique[navHistorique.length-2])
        navHistorique.pop();
    }
}


function ouvrirLien(elt)
{
    open(elt,'popup');
}

// FONCTION POUR OUVRIR UN AUTRE ELEMENT EN CLIQUANT SUR UN
function cliquerSur(elt)
{
    document.querySelector(elt).click()
}