const MAX_GLUCIDES = 50;
const MAX_PROTEINES = 30;
const MAX_LIPIDES = 20;
function calculeNutriment(nutriment, valeur, fenetre_)
{
    let fenetre = document.querySelector(fenetre_)
    let valeurGlucides = fenetre.querySelector(".valeurGlucides");
    let valeurProteines = fenetre.querySelector(".valeurProteines");
    let valeurLipides = fenetre.querySelector(".valeurLipides");
    let valeurDesNutriments = new Array();
    valeurDesNutriments[0] = 0;
    valeurDesNutriments[1] = 0;
    valeurDesNutriments[2] = 0;
    if(nutriment == "glucides")
    {
        let tousLesGlucides = fenetre.querySelectorAll('.glucides');
        let sommeGlucide = 0;
        // ON CALCULE LA SOMMES DE TOUS LES GUCIDES
        // console.log(tousLesGlucides.length)
        for(var i = 0; i < tousLesGlucides.length; i++)
        {
            // console.log(tousLesGlucides[i].value)
            if(tousLesGlucides[i].value == undefined || tousLesGlucides[i].value == '' || tousLesGlucides[i].value == 0)
            {
                // console.log('RAS')
            }
            else
            {
                sommeGlucide = sommeGlucide + parseFloat(tousLesGlucides[i].value)
            }
        }
        // console.log(sommeGlucide)
        if(parseFloat(valeur.value) <= MAX_GLUCIDES && parseFloat(valeur.value) >= 0)
        {
            if(sommeGlucide < MAX_GLUCIDES)
            {
                valeurGlucides.innerHTML = sommeGlucide;
                // SI LA SOMME MAX N'EST PAS ENCORE ATTEINTE ON ACTIVE LES CHAMPS
                for(var i = 0; i < tousLesGlucides.length; i++)
                    {
                        tousLesGlucides[i].removeAttribute("disabled");
                        tousLesGlucides[i].setAttribute("placeholder", "Pourcentage de gluicde");
                        tousLesGlucides[i].style.backgroundColor = "white";
                    }
            }
            else if( sommeGlucide == MAX_GLUCIDES)
            {
                valeurGlucides.innerHTML = sommeGlucide;
                
                // UNE FOIS QUE LE TAUX DE GLUCIDE EST ATTEINT ON DESACTIVE TOUS LES AUTRES CHAMPS POUR GLUDICES
                for(var i = 0; i < tousLesGlucides.length; i++)
                {
                    if(tousLesGlucides[i] == valeur || parseFloat(tousLesGlucides[i].value) > 0) 
                    {
                        continue
                    }
                    else
                    {
                        tousLesGlucides[i].value = 0;
                        tousLesGlucides[i].setAttribute("disabled", "disabled");
                        tousLesGlucides[i].setAttribute("placeholder", "COMPLET");
                        tousLesGlucides[i].style.background = "#F6CD00";
                    }
                }
            }
            // else if( sommeGlucide > MAX_GLUCIDES)
            // {
                
            //     valeur.value = "";
            //     valeur.setAttribute("disabled", "disabled");
            //     valeur.setAttribute("placeholder", "COMPLET");
            //     valeur.style.backgroundColor = "#F6CD00";
            //     // calculeNutriment(nutriment, valeur);
            //     // UNE FOIS QUE LE TAUX DE GLUCIDE EST ATTEINT ON DESACTIVE TOUS LES AUTRES CHAMPS POUR GLUDICES
            //     // for(var i = 0; i < tousLesGlucides.length; i++)
            //     // {
            //     //     if(tousLesGlucides[i] == valeur || parseFloat(tousLesGlucides[i].value) > 0) 
            //     //     {
            //     //         continue
            //     //     }
            //     //     else
            //     //     {
            //     //         tousLesGlucides[i].value = '';
            //     //         tousLesGlucides[i].setAttribute("disabled", "disabled");
            //     //         tousLesGlucides[i].setAttribute("placeholder", "COMPLET");
            //     //         tousLesGlucides[i].style.backgroundColor = "#F6CD00";
            //     //     }
            //     // }
            // }
            else
            {
                valeur.value = 0;
                calculeNutriment(nutriment, valeur, fenetre_);
                alert("LE POURCENTAGE DE GLUCIDE NE DOIS PAS DEPASSE "+MAX_GLUCIDES+" SVP !");
            }
        }
        else if( typeof(valeur.value) === undefined || valeur.value == "")
        {
            valeur.value = 0;
            calculeNutriment(nutriment, valeur, fenetre_);
        }
        else
        {
            valeur.value = 0;
            calculeNutriment(nutriment, valeur, fenetre_);
            alert("LE POURCENTAGE DE GLUCIDE COMPRISE ENTRE 0 ET "+MAX_GLUCIDES+" SVP !");
        }
        valeurDesNutriments[0] = sommeGlucide;
    }
    else if(nutriment == "proteines")
        {
            let toutesLesProteines = fenetre.querySelectorAll('.proteines');
            let sommeProteines = 0;
            // ON CALCULE LA SOMMES DE TOuTeS LES proteines
            // console.log(toutesLesProteines.length)
            for(var i = 0; i < toutesLesProteines.length; i++)
            {
                // console.log(toutesLesProteines[i].value)
                if(toutesLesProteines[i].value == undefined || toutesLesProteines[i].value == '' || toutesLesProteines[i].value == 0)
                {
                    // console.log('RAS')
                }
                else
                {
                    sommeProteines = sommeProteines + parseFloat(toutesLesProteines[i].value)
                }
            }
            // console.log(sommeProteines)
            if(parseFloat(valeur.value) <= MAX_PROTEINES && parseFloat(valeur.value) >= 0)
            {
                if(sommeProteines < MAX_PROTEINES)
                {
                    valeurProteines.innerHTML = sommeProteines;
                    // SI LA SOMME MAX N'EST PAS ENCORE ATTEINTE ON ACTIVE LES CHAMPS
                    for(var i = 0; i < toutesLesProteines.length; i++)
                        {
                            toutesLesProteines[i].removeAttribute("disabled");
                            toutesLesProteines[i].setAttribute("placeholder", "Pourcentage de protéines");
                            toutesLesProteines[i].style.backgroundColor = "white";
                        }
                }
                else if( sommeProteines == MAX_PROTEINES)
                {
                    valeurProteines.innerHTML = sommeProteines;
                    
                    // UNE FOIS QUE LE TAUX DE GLUCIDE EST ATTEINT ON DESACTIVE TOUS LES AUTRES CHAMPS POUR GLUDICES
                    for(var i = 0; i < toutesLesProteines.length; i++)
                    {
                        if(toutesLesProteines[i] == valeur || toutesLesProteines[i].value > 0) 
                        {
                            continue
                        }
                        else
                        {
                            
                            toutesLesProteines[i].value = 0;
                            toutesLesProteines[i].setAttribute("disabled", "disabled");
                            toutesLesProteines[i].setAttribute("placeholder", "COMPLET");
                            toutesLesProteines[i].style.backgroundColor = "#F6CD00";
                        }
                    }
                }
                // else if( sommeProteines > MAX_PROTEINES)
                // {
                    
                //     valeur.value = "";
                //     valeur.setAttribute("disabled", "disabled");
                //     valeur.setAttribute("placeholder", "COMPLET");
                //     valeur.style.backgroundColor = "#F6CD00";
                //     // calculeNutriment(nutriment, valeur);
                //     // UNE FOIS QUE LE TAUX DE GLUCIDE EST ATTEINT ON DESACTIVE TOUS LES AUTRES CHAMPS POUR GLUDICES
                //     // for(var i = 0; i < toutesLesProteines.length; i++)
                //     // {
                //     //     if(toutesLesProteines[i] == valeur || toutesLesProteines[i].value > 0) 
                //     //     {
                //     //         continue
                //     //     }
                //     //     else
                //     //     {
                            
                //     //         toutesLesProteines[i].value = '';
                //     //         toutesLesProteines[i].setAttribute("disabled", "disabled");
                //     //         toutesLesProteines[i].setAttribute("placeholder", "COMPLET");
                //     //         toutesLesProteines[i].style.backgroundColor = "#F6CD00";
                //     //     }
                //     // }
                // }
                else
                {
                    valeur.value = 0;
                    calculeNutriment(nutriment, valeur, fenetre_);
                    alert("LE POURCENTAGE DE GLUCIDE NE DOIS PAS DEPASSE "+MAX_PROTEINES+" SVP !");
                }
            }
            else if( typeof(valeur.value) === undefined || valeur.value == "")
            {
                valeur.value = 0;
                calculeNutriment(nutriment, valeur, fenetre_);
            }
            else
            {
                valeur.value = 0;
                calculeNutriment(nutriment, valeur, fenetre_);
                alert("LE POURCENTAGE DE PROTEINE DOIT ETRE COMPRIS ENTRE 0 ET "+MAX_PROTEINES+" SVP !");
            }
            valeurDesNutriments[1] = sommeProteines;
    }
    else if(nutriment == "lipides")
        {
            let toutesLesLipides = fenetre.querySelectorAll('.lipides');
            let sommeLipides = 0;
            // ON CALCULE LA SOMMES DE TOuTeS LES proteines
            // console.log(toutesLesLipides.length)
            for(var i = 0; i < toutesLesLipides.length; i++)
            {
                // console.log(toutesLesLipides[i].value)
                if(toutesLesLipides[i].value == undefined || toutesLesLipides[i].value == '' || toutesLesLipides[i].value == 0)
                {
                    // console.log('RAS')
                }
                else
                {
                    sommeLipides = sommeLipides + parseFloat(toutesLesLipides[i].value)
                }
            }
            // console.log(sommeLipides)
            if(parseFloat(valeur.value) <= MAX_LIPIDES && parseFloat(valeur.value) >= 0)
            {
                if(sommeLipides < MAX_LIPIDES)
                {
                    valeurLipides.innerHTML = sommeLipides;
                    // SI LA SOMME MAX N'EST PAS ENCORE ATTEINTE ON ACTIVE LES CHAMPS
                    for(var i = 0; i < toutesLesLipides.length; i++)
                        {
                            toutesLesLipides[i].removeAttribute("disabled");
                            toutesLesLipides[i].setAttribute("placeholder", "Pourcentage de protéines");
                            toutesLesLipides[i].style.backgroundColor = "white";
                        }
                }
                else if( sommeLipides == MAX_LIPIDES)
                {
                    valeurLipides.innerHTML = sommeLipides;
                    
                    // UNE FOIS QUE LE TAUX DE GLUCIDE EST ATTEINT ON DESACTIVE TOUS LES AUTRES CHAMPS POUR GLUDICES
                    for(var i = 0; i < toutesLesLipides.length; i++)
                    {
                        if(toutesLesLipides[i] == valeur || toutesLesLipides[i].value > 0) 
                        {
                            continue
                        }
                        else
                        {
                            
                            toutesLesLipides[i].value = 0;
                            toutesLesLipides[i].setAttribute("disabled", "disabled");
                            toutesLesLipides[i].setAttribute("placeholder", "COMPLET");
                            toutesLesLipides[i].style.backgroundColor = "#F6CD00";
                        }
                    }
                }
                // else if( sommeLipides > MAX_LIPIDES)
                // {
                    
                //     valeur.value = "";
                //     valeur.setAttribute("disabled", "disabled");
                //     valeur.setAttribute("placeholder", "COMPLET");
                //     valeur.style.backgroundColor = "#F6CD00";
                //     // calculeNutriment(nutriment, valeur);
                //     // UNE FOIS QUE LE TAUX DE GLUCIDE EST ATTEINT ON DESACTIVE TOUS LES AUTRES CHAMPS POUR GLUDICES
                //     // for(var i = 0; i < toutesLesProteines.length; i++)
                //     // {
                //     //     if(toutesLesProteines[i] == valeur || toutesLesProteines[i].value > 0) 
                //     //     {
                //     //         continue
                //     //     }
                //     //     else
                //     //     {
                            
                //     //         toutesLesProteines[i].value = '';
                //     //         toutesLesProteines[i].setAttribute("disabled", "disabled");
                //     //         toutesLesProteines[i].setAttribute("placeholder", "COMPLET");
                //     //         toutesLesProteines[i].style.backgroundColor = "#F6CD00";
                //     //     }
                //     // }
                // }
                else
                {
                    valeur.value = 0;
                    calculeNutriment(nutriment, valeur, fenetre_);
                    alert("LE POURCENTAGE DE GLUCIDE NE DOIS PAS DEPASSE "+MAX_LIPIDES+" SVP !");
                }
            }
            else if( typeof(valeur.value) === undefined || valeur.value == "")
            {
                valeur.value = 0;
                calculeNutriment(nutriment, valeur, fenetre_);
            }
            else
            {
                // console.log("\n\n\n\n\n\n\n\n====="+valeur.value)
                valeur.value = 0;
                calculeNutriment(nutriment, valeur, fenetre_);
                alert("LE POURCENTAGE DE LIPIDE COMPRISE ENTRE 0 ET "+MAX_LIPIDES+" SVP !");
            }
            valeurDesNutriments[2] = sommeLipides;
    }
    return valeurDesNutriments;
}

// LA FONCTION POUR AJOUTER UN FORMULAIRE POUR UN ALIMENT DANS UN GROUPE D'ALIMENT
function ajouterChampsGroupeAliment(groupe, avntElt, fenetre)
{
    let avntElt1 = document.querySelector(avntElt);
    if(groupe == "Fruits et Légumes")
    {
        let elt = document.createElement('div')
        elt.innerHTML = `
                                    <div class="enteteAlimentGroupe" groupeAliment = "Fruits et Legumes" >
                                        <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicide">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                               `;
            let valeurSommeGlucideTableau = (calculeNutriment('glucides', elt.childNodes[3].childNodes[3], fenetre)[0]);
            let valeurSommeProteineTableau = (calculeNutriment('proteines', elt.childNodes[5].childNodes[3], fenetre)[1]);
            let valeurSommeLipideTableau = (calculeNutriment('lipides', elt.childNodes[7].childNodes[3], fenetre)[2]);
            if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
            {
                elt.innerHTML = `
                                            <div class="enteteAlimentGroupe" groupeAliment = "Fruits et Legumes">
                                                <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Glucides :</p> 
                                                <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Protéines :</p>
                                                <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Lipide :</p>
                                                <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                       `;
                avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment = "Fruits et Legumes">
                                                    <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment = "Fruits et Legumes">
                                                    <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment = "Fruits et Legumes">
                                                    <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment = "Fruits et Legumes">
                                                    <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment = "Fruits et Legumes">
                                                    <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment = "Fruits et Legumes">
                                                    <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment = "Fruits et Legumes">
                                                    <input id="FruitsLegumesNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FruitsLegumesNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FruitsLegumesNouveauRepasProteines" class="proteines" type="number" min="0" max="30"  placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FruitsLegumesNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
    }
    else if(groupe == "Produit laitier")
    {
        let elt = document.createElement('div')
        elt.innerHTML = `
                                    <div class="enteteAlimentGroupe" groupeAliment ="Produit laitier">
                                        <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicide">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                               `;
            let valeurSommeGlucideTableau = (calculeNutriment('glucides', elt.childNodes[3].childNodes[3], fenetre)[0]);
            let valeurSommeProteineTableau = (calculeNutriment('proteines', elt.childNodes[5].childNodes[3], fenetre)[1]);
            let valeurSommeLipideTableau = (calculeNutriment('lipides', elt.childNodes[7].childNodes[3], fenetre)[2]);
            if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
            {
                elt.innerHTML = `
                                            <div class="enteteAlimentGroupe" groupeAliment ="Produit laitier">
                                                <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Glucides :</p> 
                                                <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Protéines :</p>
                                                <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Lipide :</p>
                                                <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                       `;
                avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit laitier">
                                                    <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit laitier">
                                                    <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit laitier">
                                                    <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit laitier">
                                                    <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit laitier">
                                                    <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit laitier">
                                                    <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit laitier">
                                                    <input id="ProduisLaitierNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisLaitierNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisLaitierNouveauRepasProteines" class="proteines" type="number" min="0" max="30"  placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisLaitierNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
    }
    else if(groupe == "Viandes, Poissons, Oeufs")
    {
        let elt = document.createElement('div')
        elt.innerHTML = `
                                    <div class="enteteAlimentGroupe" groupeAliment ="Viandes, Poissons, Oeufs">
                                        <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicide">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                               `;
            let valeurSommeGlucideTableau = (calculeNutriment('glucides', elt.childNodes[3].childNodes[3], fenetre)[0]);
            let valeurSommeProteineTableau = (calculeNutriment('proteines', elt.childNodes[5].childNodes[3], fenetre)[1]);
            let valeurSommeLipideTableau = (calculeNutriment('lipides', elt.childNodes[7].childNodes[3], fenetre)[2]);
            if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
            {
                elt.innerHTML = `
                                            <div class="enteteAlimentGroupe" groupeAliment ="Viandes, Poissons, Oeufs">
                                                <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Glucides :</p> 
                                                <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Protéines :</p>
                                                <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Lipide :</p>
                                                <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                       `;
                avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Viandes, Poissons, Oeufs">
                                                    <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Viandes, Poissons, Oeufs">
                                                    <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Viandes, Poissons, Oeufs">
                                                    <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Viandes, Poissons, Oeufs">
                                                    <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Viandes, Poissons, Oeufs">
                                                    <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Viandes, Poissons, Oeufs">
                                                    <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Viandes, Poissons, Oeufs">
                                                    <input id="ViandesPoissonsOeufsNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ViandesPoissonsOeufsNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ViandesPoissonsOeufsNouveauRepasProteines" class="proteines" type="number" min="0" max="30"  placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ViandesPoissonsOeufsNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
    }
    else if(groupe == "Féculents")
    {
        let elt = document.createElement('div')
        elt.innerHTML = `
                                    <div class="enteteAlimentGroupe" groupeAliment ="Feculents">
                                        <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicide">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                               `;
            let valeurSommeGlucideTableau = (calculeNutriment('glucides', elt.childNodes[3].childNodes[3], fenetre)[0]);
            let valeurSommeProteineTableau = (calculeNutriment('proteines', elt.childNodes[5].childNodes[3], fenetre)[1]);
            let valeurSommeLipideTableau = (calculeNutriment('lipides', elt.childNodes[7].childNodes[3], fenetre)[2]);
            if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
            {
                elt.innerHTML = `
                                            <div class="enteteAlimentGroupe" groupeAliment ="Feculents">
                                                <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Glucides :</p> 
                                                <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Protéines :</p>
                                                <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Lipide :</p>
                                                <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                       `;
                avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Feculents">
                                                    <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Feculents">
                                                    <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Feculents">
                                                    <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Feculents">
                                                    <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Feculents">
                                                    <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Feculents">
                                                    <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Feculents">
                                                    <input id="FeculentNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="FeculentNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="FeculentNouveauRepasProteines" class="proteines" type="number" min="0" max="30"  placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="FeculentNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
    }
    else if(groupe == "Corps gras")
    {
        let elt = document.createElement('div')
        elt.innerHTML = `
                                    <div class="enteteAlimentGroupe" groupeAliment ="Corps gras">
                                        <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicide">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                               `;
            let valeurSommeGlucideTableau = (calculeNutriment('glucides', elt.childNodes[3].childNodes[3], fenetre)[0]);
            let valeurSommeProteineTableau = (calculeNutriment('proteines', elt.childNodes[5].childNodes[3], fenetre)[1]);
            let valeurSommeLipideTableau = (calculeNutriment('lipides', elt.childNodes[7].childNodes[3], fenetre)[2]);
            if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
            {
                elt.innerHTML = `
                                            <div class="enteteAlimentGroupe" groupeAliment ="Corps gras">
                                                <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Glucides :</p> 
                                                <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Protéines :</p>
                                                <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Lipide :</p>
                                                <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                       `;
                avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Corps gras">
                                                    <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Corps gras">
                                                    <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Corps gras">
                                                    <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Corps gras">
                                                    <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Corps gras">
                                                    <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Corps gras">
                                                    <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Corps gras">
                                                    <input id="CorpsGrasNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="CorpsGrasNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="CorpsGrasNouveauRepasProteines" class="proteines" type="number" min="0" max="30"  placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="CorpsGrasNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
    }
    else if(groupe == "Produit sucré")
    {
        let elt = document.createElement('div')
        elt.innerHTML = `
                                    <div class="enteteAlimentGroupe" groupeAliment ="Produit sucre">
                                        <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                        <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Glucides :</p> 
                                        <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicide">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Protéines :</p>
                                        <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines">
                                    </div>
                                    <div class="NutrimentEtAutres">
                                        <p>Lipide :</p>
                                        <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                               `;
            let valeurSommeGlucideTableau = (calculeNutriment('glucides', elt.childNodes[3].childNodes[3], fenetre)[0]);
            let valeurSommeProteineTableau = (calculeNutriment('proteines', elt.childNodes[5].childNodes[3], fenetre)[1]);
            let valeurSommeLipideTableau = (calculeNutriment('lipides', elt.childNodes[7].childNodes[3], fenetre)[2]);
            if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
            {
                elt.innerHTML = `
                                            <div class="enteteAlimentGroupe" groupeAliment ="Produit sucre">
                                                <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Glucides :</p> 
                                                <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Protéines :</p>
                                                <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                            </div>
                                            <div class="NutrimentEtAutres">
                                                <p>Lipide :</p>
                                                <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                       `;
                avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit sucre">
                                                    <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit sucre">
                                                    <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit sucre">
                                                    <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit sucre">
                                                    <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit sucre">
                                                    <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
            else if( (valeurSommeGlucideTableau < MAX_GLUCIDES) && (valeurSommeProteineTableau >= MAX_PROTEINES) && (valeurSommeLipideTableau < MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit sucre">
                                                    <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="Pourcentage de gluicde" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="Pourcentage de lipides">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            } 
            else if( (valeurSommeGlucideTableau >= MAX_GLUCIDES) && (valeurSommeProteineTableau < MAX_PROTEINES) && (valeurSommeLipideTableau >= MAX_LIPIDES) )
                {
                    elt.innerHTML = `
                                                <div class="enteteAlimentGroupe" groupeAliment ="Produit sucre">
                                                    <input id="ProduisSucreNouveauRepas" type="text" placeholder="Nom du fruit et ou légume present dans le repas?">
                                                    <img onclick="supprimerChampsGroupeAliment(this)" src="./images/bouton_close.svg" alt="Fermer" class="bouton_close">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Glucides :</p> 
                                                    <input onchange="calculeNutriment('glucides', this, '`+fenetre+`')" class="glucides" id="ProduisSucreNouveauRepasGlucides" type="number" min="0" max="50" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Protéines :</p>
                                                    <input onchange="calculeNutriment('proteines', this, '`+fenetre+`')" class="proteines" id="ProduisSucreNouveauRepasProteines" class="proteines" type="number" min="0" max="30"  placeholder="Pourcentage de protéines" >
                                                </div>
                                                <div class="NutrimentEtAutres">
                                                    <p>Lipide :</p>
                                                    <input onchange="calculeNutriment('lipides', this, '`+fenetre+`')" class="lipides" id="ProduisSucreNouveauRepasLipide" class="lipides" type="number" min="0" max="20" placeholder="COMPLET" disabled style="background-color:#F6CD00" value="0">
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
                                           `;
                    avntElt1.parentNode.insertBefore( elt, avntElt1)
            }
    }
}
// LA FONCTION POUR SUPPRIMER UN FORMULAIRE POUR UN ALIMENT DANS UN GROUPE D'ALIMENT
function supprimerChampsGroupeAliment(elt)
{
    for(var i = 3; i <= 7; i = i + 2)
    {
        let glucidesSupprimer = elt.parentNode.parentNode.childNodes[i].childNodes[3];
        glucidesSupprimer.value = 0;
        if(i == 3)
        {
            calculeNutriment('glucides', glucidesSupprimer);
        }
        else if(i == 5)
        {
            calculeNutriment('proteines', glucidesSupprimer);
        }if(i == 7)
        {
            calculeNutriment('lipides', glucidesSupprimer);
        }
    
        elt.parentNode.parentNode.remove();
    }
}
// let tousLesChamps = document.querySelectorAll("input");
//     tousLesChamps.forEach(inputElt => {
//         console.log(inputElt.name+"=___="+inputElt.value)
//     });

// FONCTION POUR ENREGISTRER LE REPAS CREER
function enregistrerRepas(elt)
{
    // ON VERIFI D'ABORD SI TOUS LE CHAMPS SONT REMPLIS
    let champAChoisir = document.querySelector(elt);
    let tousLesChamps = champAChoisir.querySelectorAll("input");
    let remplis = true;
    for(var i = 0; i < tousLesChamps.length; i++)
    {
        if(tousLesChamps[i].value == '' || typeof(tousLesChamps[i].value) == undefined )
        {
            // remplis = false;
            console.log(tousLesChamps[i].innerHTML)
            tousLesChamps[i].style.border = '2px solid red';
            break;
        }
        else
        {
            tousLesChamps[i].style.border = '0px solid red';
        }
    }
    if(remplis)
    {
        if( parseFloat(valeurGlucides.innerHTML) < MAX_GLUCIDES || parseFloat(valeurProteines.innerHTML) < MAX_PROTEINES || parseFloat(valeurLipides.innerHTML) < MAX_LIPIDES )
        {
            alert("VOTRE REPAS N'EST PAS EQUILIBRER!\nAJOUTEZ DES ALIMENTS POUR LE RENDRE EQUILIBRE");
        }
        else
        {
            // ON RECUPERE L'IMAGE, LE NOM, L'HEURE, L'AGE ET LES POURCENTAGE DE NUTRIMENT DU REPAS AINSI QUE LE NOM DU RESTAURANT
            let imageNouveauRepas = document.querySelector("#imageNouveauRepas");
            let nomDuRepasNouveau = document.querySelector("#nomDuRepasNouveau");
            let heureDuRepasNouveau = document.querySelector("#heureDuRepasNouveau");
            let AgeConsommateurDuRepasNouveau = document.querySelector("#AgeConsommateurDuRepasNouveau");
            let nomRestaurant = document.querySelector(".nomRestaurant");
        
            // ON CREE LA REQUETE POUR ENREGISTRER LES INFORMATIONS DU REPAS
            let infosPrincipaleDuRepas = new FormData();
            infosPrincipaleDuRepas.append("image", imageNouveauRepas.files[0]);
            infosPrincipaleDuRepas.append("nom", nomDuRepasNouveau.value);
            infosPrincipaleDuRepas.append("heure", heureDuRepasNouveau.value);
            infosPrincipaleDuRepas.append("age", AgeConsommateurDuRepasNouveau.value);
            infosPrincipaleDuRepas.append("glucides", valeurGlucides.innerHTML);
            infosPrincipaleDuRepas.append("proteines", valeurProteines.innerHTML);
            infosPrincipaleDuRepas.append("lipides", valeurLipides.innerHTML);
            infosPrincipaleDuRepas.append("nomRestaurant", nomRestaurant.innerHTML);
            infosPrincipaleDuRepas.append("infos", "principale");

            let xhrInfosPrincipaleDuRepas = new XMLHttpRequest();
            xhrInfosPrincipaleDuRepas.open('POST', './php/requetes_ajax/enregistrerRepas.php');
            xhrInfosPrincipaleDuRepas.send(infosPrincipaleDuRepas);
            xhrInfosPrincipaleDuRepas.onreadystatechange = function ()
            {
                if(xhrInfosPrincipaleDuRepas.readyState == 4 && xhrInfosPrincipaleDuRepas.status == 200)
                {
                    if(xhrInfosPrincipaleDuRepas.responseText == "succes")
                    {
                        // MAINTENANT QUE LES INFORMATIONSPRINCIPALES SONT ENREGSITRES NOUS ALLONS A PRESNT ENREGISTRER LES ALIMENTS
                        // ON SELECTIONNE TOUS LES GROUPE D'ALIMENT
                        let tousLesGroupesDaliment = champAChoisir.querySelectorAll('.groupeDaliment');
                        for(var i = 0; i <= (tousLesGroupesDaliment.length - 1); i++)
                        {
                            // ON RECUPERE LE NOM DU GROUPE D'ALIMENT
                            let nomDuGroupeDaliment = tousLesGroupesDaliment[i].getAttribute('groupealiment');

                            // ON DOIS RECUPERER TOUS LES ENFANT(LesAlimentsDuGroupe) QUI SONT DANS LE GROUPE
                            let LesAlimentsDuGroupe = tousLesGroupesDaliment[i].childNodes;

                            // ON PARCOUR TOUS LES ENFANT ET ON RECUPERE LES ENFANT DONT ON A BESOIN
                            for(var j = 0; j <= (LesAlimentsDuGroupe.length - 1); j++)
                            {
                                // ON VERIFI SI L'ENFANT ACTUEL EST CELUI QU'ON VEUT
                                if(LesAlimentsDuGroupe[j].tagName == 'DIV' && LesAlimentsDuGroupe[j].childNodes[1].getAttribute('class') == 'enteteAlimentGroupe')
                                {
                                    // ON RECUPER LE NOM DE L'ALIMENT
                                    let nomAliment;
                                    // ON VERIFI SI SON CHAMP NOM EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[1].childNodes[1].value == '' || LesAlimentsDuGroupe[j].childNodes[1].childNodes[1].value == 0 || LesAlimentsDuGroupe[j].childNodes[1].childNodes[1].value == undefined)
                                    {
                                        nomAliment = nomDuGroupeDaliment+"_"+j;
                                        // console.log("Aliment="+nomAliment);
                                    }
                                    else
                                    {
                                        
                                        nomAliment = LesAlimentsDuGroupe[j].childNodes[1].childNodes[1].value;
                                        // console.log("Aliment="+nomAliment);
                                    }


                                    // ON RECUPERE LES GLUCIDS DE L'ALIMENT
                                    let glucides = 0;
                                    // ON VERIFI SI SON CHAMP GLUCIDE EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[3].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[3].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[3].childNodes[3].value == undefined)
                                    {
                                        glucides = 0;
                                        // console.log("glucides="+glucides);
                                    }
                                    else
                                    {
                                        
                                        glucides = LesAlimentsDuGroupe[j].childNodes[3].childNodes[3].value;
                                        // console.log("glucides="+glucides);
                                    }

                                    // ON RECUPERE LES PROTEINE DE L'ALIMENT
                                    let proteines = 0;
                                    // ON VERIFI SI SON CHAMP PROTEINES EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[5].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[5].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[5].childNodes[3].value == undefined )
                                    {
                                        proteines = 0;
                                        // console.log("proteines="+proteines);
                                    }
                                    else
                                    {
                                        
                                        proteines = LesAlimentsDuGroupe[j].childNodes[5].childNodes[3].value;
                                        // console.log("proteines="+proteines);
                                    }

                                    // ON RECUPERE LES LIPIDES DE L'ALIMENT
                                    let lipides = 0;
                                    // ON VERIFI SI SON CHAMP LIPIDES EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[7].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[7].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[7].childNodes[3].value == undefined)
                                    {
                                        lipides = 0;
                                        // console.log("lipides="+lipides);
                                    }
                                    else
                                    {
                                        
                                        lipides = LesAlimentsDuGroupe[j].childNodes[7].childNodes[3].value;
                                        // console.log("lipides="+lipides);
                                    }

                                    // ON RECUPERE LES MINERAUX DE L'ALIMENT
                                    let mineraux = 0;
                                    // ON VERIFI SI SON CHAMP MINERAUX EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[9].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[9].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[9].childNodes[3].value == undefined )
                                    {
                                        mineraux = 0;
                                        // console.log("mineraux="+mineraux);
                                    }
                                    else
                                    {
                                        
                                        mineraux = LesAlimentsDuGroupe[j].childNodes[9].childNodes[3].value;
                                        // console.log("mineraux="+mineraux);
                                    }

                                    // ON RECUPERE LES VITAMINES DE L'ALIMENT
                                    let vitamines = 0;
                                    // ON VERIFI SI SON CHAMP VITAMINES EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[11].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[11].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[11].childNodes[3].value == undefined)
                                    {
                                        vitamines = 0;
                                        // console.log("vitamines="+vitamines);
                                    }
                                    else
                                    {
                                        
                                        vitamines = LesAlimentsDuGroupe[j].childNodes[11].childNodes[3].value;
                                        // console.log("vitamines="+vitamines);
                                    }

                                    // ON RECUPERE LES FIBRES DE L'ALIMENT
                                    let fibres = 0;
                                    // ON VERIFI SI SON CHAMP FIBRES EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[13].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[13].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[13].childNodes[3].value == undefined)
                                    {
                                        fibres = 0;
                                        // console.log("fibres="+fibres);
                                    }
                                    else
                                    {
                                        
                                        fibres = LesAlimentsDuGroupe[j].childNodes[13].childNodes[3].value;
                                        // console.log("fibres="+fibres);
                                    }

                                    // ON CREER LA REQUETTE POUR ENREGISTRER

                                    let xhr_Aliment = new XMLHttpRequest();
                                    let formAliment = new FormData();
                                    // formAliment.append('nomRepas', "nomDuRepasNouveau");
                                    formAliment.append('nomRepas', nomDuRepasNouveau.value);
                                    formAliment.append('nomAliment', nomAliment);
                                    formAliment.append('groupeAliment', nomDuGroupeDaliment);
                                    formAliment.append('glucides', glucides);
                                    formAliment.append('proteines', proteines);
                                    formAliment.append('lipides', lipides);
                                    formAliment.append('mineraux', mineraux);
                                    formAliment.append('vitamines', vitamines);
                                    formAliment.append('fibres', fibres);
                                    // formAliment.append("nomRestaurant","nomRestaurant.innerHTML");
                                    formAliment.append("nomRestaurant", nomRestaurant.innerHTML);
                                    formAliment.append("infos", "secondaire");
                                    xhr_Aliment.open('POST', './php/requetes_ajax/enregistrerRepas.php');
                                    xhr_Aliment.send(formAliment);
                                    xhr_Aliment.onreadystatechange = function ()
                                    {
                                        if(xhr_Aliment.readyState == 4 && xhr_Aliment.status == 200)
                                        {
                                            console.log(xhr_Aliment.responseText)
                                        }
                                    }

                                }
                            }
                        }
                        
                        for(var i = 0; i <= (tousLesChamps.length - 1); i++)
                        {
                            tousLesChamps[i].value = ''
                        }
                        alert(nomDuRepasNouveau.value+":\n ENREISTREMENT EFFECTUE");
                    }
                }
            }
        }
    }
    else
    {
        alert("REMPLISSEZ CORRECTEMENT TOUS LES CHAMPS SVP !");
    }
}
// FONCTION POUR ENREGISTRER LE REPAS CREER
function modifierRepas(elt)
{
    // ON VERIFI D'ABORD SI TOUS LE CHAMPS SONT REMPLIS
    let champAChoisir = document.querySelector(elt);
    let tousLesChamps = champAChoisir.querySelectorAll("input");
    let remplis = true;
    for(var i = 0; i < tousLesChamps.length; i++)
    {
        if(tousLesChamps[i].value == '' || typeof(tousLesChamps[i].value) == undefined )
        {
            // remplis = false;
            console.log(tousLesChamps[i].innerHTML)
            tousLesChamps[i].style.border = '2px solid red';
            break;
        }
        else
        {
            tousLesChamps[i].style.border = '0px solid red';
        }
    }
    if(remplis)
    {
        if( parseFloat(valeurGlucides.innerHTML) < MAX_GLUCIDES || parseFloat(valeurProteines.innerHTML) < MAX_PROTEINES || parseFloat(valeurLipides.innerHTML) < MAX_LIPIDES )
        {
            alert("VOTRE REPAS N'EST PAS EQUILIBRER!\nAJOUTEZ DES ALIMENTS POUR LE RENDRE EQUILIBRE");
        }
        else
        {
            // ON RECUPERE L'IMAGE, LE NOM, L'HEURE, L'AGE ET LES POURCENTAGE DE NUTRIMENT DU REPAS AINSI QUE LE NOM DU RESTAURANT
            let imageNouveauRepas = document.querySelector("#imageNouveauRepas");
            let nomDuRepasNouveau = document.querySelector("#nomDuRepasNouveau");
            let heureDuRepasNouveau = document.querySelector("#heureDuRepasNouveau");
            let AgeConsommateurDuRepasNouveau = document.querySelector("#AgeConsommateurDuRepasNouveau");
            let nomRestaurant = document.querySelector(".nomRestaurant");
        
            // ON CREE LA REQUETE POUR ENREGISTRER LES INFORMATIONS DU REPAS
            let infosPrincipaleDuRepas = new FormData();
            infosPrincipaleDuRepas.append("image", imageNouveauRepas.files[0]);
            infosPrincipaleDuRepas.append("nom", nomDuRepasNouveau.value);
            infosPrincipaleDuRepas.append("heure", heureDuRepasNouveau.value);
            infosPrincipaleDuRepas.append("age", AgeConsommateurDuRepasNouveau.value);
            infosPrincipaleDuRepas.append("glucides", valeurGlucides.innerHTML);
            infosPrincipaleDuRepas.append("proteines", valeurProteines.innerHTML);
            infosPrincipaleDuRepas.append("lipides", valeurLipides.innerHTML);
            infosPrincipaleDuRepas.append("nomRestaurant", nomRestaurant.innerHTML);
            infosPrincipaleDuRepas.append("infos", "principale");

            let xhrInfosPrincipaleDuRepas = new XMLHttpRequest();
            xhrInfosPrincipaleDuRepas.open('POST', './php/requetes_ajax/enregistrerRepas.php');
            xhrInfosPrincipaleDuRepas.send(infosPrincipaleDuRepas);
            xhrInfosPrincipaleDuRepas.onreadystatechange = function ()
            {
                if(xhrInfosPrincipaleDuRepas.readyState == 4 && xhrInfosPrincipaleDuRepas.status == 200)
                {
                    if(xhrInfosPrincipaleDuRepas.responseText == "succes")
                    {
                        // MAINTENANT QUE LES INFORMATIONSPRINCIPALES SONT ENREGSITRES NOUS ALLONS A PRESNT ENREGISTRER LES ALIMENTS
                        // ON SELECTIONNE TOUS LES GROUPE D'ALIMENT
                        let tousLesGroupesDaliment = champAChoisir.querySelectorAll('.groupeDaliment');
                        for(var i = 0; i <= (tousLesGroupesDaliment.length - 1); i++)
                        {
                            // ON RECUPERE LE NOM DU GROUPE D'ALIMENT
                            let nomDuGroupeDaliment = tousLesGroupesDaliment[i].getAttribute('groupealiment');

                            // ON DOIS RECUPERER TOUS LES ENFANT(LesAlimentsDuGroupe) QUI SONT DANS LE GROUPE
                            let LesAlimentsDuGroupe = tousLesGroupesDaliment[i].childNodes;

                            // ON PARCOUR TOUS LES ENFANT ET ON RECUPERE LES ENFANT DONT ON A BESOIN
                            for(var j = 0; j <= (LesAlimentsDuGroupe.length - 1); j++)
                            {
                                // ON VERIFI SI L'ENFANT ACTUEL EST CELUI QU'ON VEUT
                                if(LesAlimentsDuGroupe[j].tagName == 'DIV' && LesAlimentsDuGroupe[j].childNodes[1].getAttribute('class') == 'enteteAlimentGroupe')
                                {
                                    // ON RECUPER LE NOM DE L'ALIMENT
                                    let nomAliment;
                                    // ON VERIFI SI SON CHAMP NOM EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[1].childNodes[1].value == '' || LesAlimentsDuGroupe[j].childNodes[1].childNodes[1].value == 0 || LesAlimentsDuGroupe[j].childNodes[1].childNodes[1].value == undefined)
                                    {
                                        nomAliment = nomDuGroupeDaliment+"_"+j;
                                        // console.log("Aliment="+nomAliment);
                                    }
                                    else
                                    {
                                        
                                        nomAliment = LesAlimentsDuGroupe[j].childNodes[1].childNodes[1].value;
                                        // console.log("Aliment="+nomAliment);
                                    }


                                    // ON RECUPERE LES GLUCIDS DE L'ALIMENT
                                    let glucides = 0;
                                    // ON VERIFI SI SON CHAMP GLUCIDE EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[3].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[3].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[3].childNodes[3].value == undefined)
                                    {
                                        glucides = 0;
                                        // console.log("glucides="+glucides);
                                    }
                                    else
                                    {
                                        
                                        glucides = LesAlimentsDuGroupe[j].childNodes[3].childNodes[3].value;
                                        // console.log("glucides="+glucides);
                                    }

                                    // ON RECUPERE LES PROTEINE DE L'ALIMENT
                                    let proteines = 0;
                                    // ON VERIFI SI SON CHAMP PROTEINES EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[5].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[5].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[5].childNodes[3].value == undefined )
                                    {
                                        proteines = 0;
                                        // console.log("proteines="+proteines);
                                    }
                                    else
                                    {
                                        
                                        proteines = LesAlimentsDuGroupe[j].childNodes[5].childNodes[3].value;
                                        // console.log("proteines="+proteines);
                                    }

                                    // ON RECUPERE LES LIPIDES DE L'ALIMENT
                                    let lipides = 0;
                                    // ON VERIFI SI SON CHAMP LIPIDES EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[7].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[7].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[7].childNodes[3].value == undefined)
                                    {
                                        lipides = 0;
                                        // console.log("lipides="+lipides);
                                    }
                                    else
                                    {
                                        
                                        lipides = LesAlimentsDuGroupe[j].childNodes[7].childNodes[3].value;
                                        // console.log("lipides="+lipides);
                                    }

                                    // ON RECUPERE LES MINERAUX DE L'ALIMENT
                                    let mineraux = 0;
                                    // ON VERIFI SI SON CHAMP MINERAUX EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[9].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[9].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[9].childNodes[3].value == undefined )
                                    {
                                        mineraux = 0;
                                        // console.log("mineraux="+mineraux);
                                    }
                                    else
                                    {
                                        
                                        mineraux = LesAlimentsDuGroupe[j].childNodes[9].childNodes[3].value;
                                        // console.log("mineraux="+mineraux);
                                    }

                                    // ON RECUPERE LES VITAMINES DE L'ALIMENT
                                    let vitamines = 0;
                                    // ON VERIFI SI SON CHAMP VITAMINES EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[11].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[11].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[11].childNodes[3].value == undefined)
                                    {
                                        vitamines = 0;
                                        // console.log("vitamines="+vitamines);
                                    }
                                    else
                                    {
                                        
                                        vitamines = LesAlimentsDuGroupe[j].childNodes[11].childNodes[3].value;
                                        // console.log("vitamines="+vitamines);
                                    }

                                    // ON RECUPERE LES FIBRES DE L'ALIMENT
                                    let fibres = 0;
                                    // ON VERIFI SI SON CHAMP FIBRES EST BIEN REMPLI
                                    if(LesAlimentsDuGroupe[j].childNodes[13].childNodes[3].value == '' || LesAlimentsDuGroupe[j].childNodes[13].childNodes[3].value == 0 || LesAlimentsDuGroupe[j].childNodes[13].childNodes[3].value == undefined)
                                    {
                                        fibres = 0;
                                        // console.log("fibres="+fibres);
                                    }
                                    else
                                    {
                                        
                                        fibres = LesAlimentsDuGroupe[j].childNodes[13].childNodes[3].value;
                                        // console.log("fibres="+fibres);
                                    }

                                    // ON CREER LA REQUETTE POUR ENREGISTRER

                                    let xhr_Aliment = new XMLHttpRequest();
                                    let formAliment = new FormData();
                                    // formAliment.append('nomRepas', "nomDuRepasNouveau");
                                    formAliment.append('nomRepas', nomDuRepasNouveau.value);
                                    formAliment.append('nomAliment', nomAliment);
                                    formAliment.append('groupeAliment', nomDuGroupeDaliment);
                                    formAliment.append('glucides', glucides);
                                    formAliment.append('proteines', proteines);
                                    formAliment.append('lipides', lipides);
                                    formAliment.append('mineraux', mineraux);
                                    formAliment.append('vitamines', vitamines);
                                    formAliment.append('fibres', fibres);
                                    // formAliment.append("nomRestaurant","nomRestaurant.innerHTML");
                                    formAliment.append("nomRestaurant", nomRestaurant.innerHTML);
                                    formAliment.append("infos", "secondaire");
                                    xhr_Aliment.open('POST', './php/requetes_ajax/enregistrerRepas.php');
                                    xhr_Aliment.send(formAliment);
                                    xhr_Aliment.onreadystatechange = function ()
                                    {
                                        if(xhr_Aliment.readyState == 4 && xhr_Aliment.status == 200)
                                        {
                                            console.log(xhr_Aliment.responseText)
                                        }
                                    }

                                }
                            }
                        }
                        
                        for(var i = 0; i <= (tousLesChamps.length - 1); i++)
                        {
                            tousLesChamps[i].value = ''
                        }
                        alert(nomDuRepasNouveau.value+":\n ENREISTREMENT EFFECTUE");
                    }
                }
            }
        }
    }
    else
    {
        alert("REMPLISSEZ CORRECTEMENT TOUS LES CHAMPS SVP !");
    }
}

function afficherAppercu(elt, afficheur)
{
    let imageRepas = document.querySelector(afficheur);
    console.log(elt.files)
    if(elt.files && elt.files[0])
    {
         const reader = new FileReader();
         reader.onload = function (e)
         {
            imageRepas.src = e.target.result;
         }
         reader.readAsDataURL(elt.files[0]);
    }
}
function afficherTousLesRepas(nomRestaurant)
{
    // ON RECUPERE L'ELEMENT QUI VA CONTENIR LES PLAT 
    let boiteAfficheRepas = document.querySelector(".boiteAfficheListeRepas");

    // ON CREE LA REQUETE
    let xhr_TousLesPlat = new XMLHttpRequest();
    let formulaire =  new FormData();
    formulaire.append('nomRestaurant', nomRestaurant);
    xhr_TousLesPlat.open('POST', './php/requetes_ajax/tous_les_repas.php');
    xhr_TousLesPlat.send(formulaire);
    xhr_TousLesPlat.onreadystatechange = function ()
    {
        if(xhr_TousLesPlat.readyState == 4 && xhr_TousLesPlat.status == 200 )
        {
            boiteAfficheRepas.innerHTML = xhr_TousLesPlat.responseText;
        }
    }
}

function afficherLesDetailsDuRepas(nomRestaurant, nomRepas, utilisateur)
{
    // ON RECUPERE L'ELEMENT QUI VA CONTENIR LES PLAT 
    let boiteAfficheRepas = document.querySelector(".boiteAfficheDetailsRepas");

    // ON CREE LA REQUETE
    let xhr_DetailsDuPlat = new XMLHttpRequest();
    let formulaire =  new FormData();
    formulaire.append('nomRestaurant', nomRestaurant);
    formulaire.append('nomRepas', nomRepas);
    formulaire.append('utilisateur', utilisateur);
    xhr_DetailsDuPlat.open('POST', './php/requetes_ajax/details_repas.php');
    xhr_DetailsDuPlat.send(formulaire);
    xhr_DetailsDuPlat.onreadystatechange = function ()
    {
        if(xhr_DetailsDuPlat.readyState == 4 && xhr_DetailsDuPlat.status == 200 )
        {
            boiteAfficheRepas.innerHTML = xhr_DetailsDuPlat.responseText;
        }
    }
}

function afficherRepasAmodifier(nomRestaurant, nomRepas, utilisateur)
{
    // ON RECUPERE L'ELEMENT QUI VA CONTENIR LES PLAT 
    let boiteAfficheRepas = document.querySelector(".boiteAfficheDetailsRepasAmodifier");

    // ON CREE LA REQUETE
    let xhr_DetailsDuPlat = new XMLHttpRequest();
    let formulaire =  new FormData();
    formulaire.append('nomRestaurant', nomRestaurant);
    formulaire.append('nomRepas', nomRepas);
    formulaire.append('utilisateur', utilisateur);
    xhr_DetailsDuPlat.open('POST', './php/requetes_ajax/infosRepasAModifier.php');
    xhr_DetailsDuPlat.send(formulaire);
    xhr_DetailsDuPlat.onreadystatechange = function ()
    {
        if(xhr_DetailsDuPlat.readyState == 4 && xhr_DetailsDuPlat.status == 200 )
        {
            boiteAfficheRepas.innerHTML = xhr_DetailsDuPlat.responseText;
        }
    }
}


function afficherTousLesRepas2()
{
    // ON RECUPERE L'ELEMENT QUI VA CONTENIR LES PLAT 
    let boiteListeRepasConsommateur = document.querySelector(".boiteAfficheListeRepas");

    // ON CREE LA REQUETE
    let xhr_TousLesPlat = new XMLHttpRequest();
    let formulaire =  new FormData();
    formulaire.append('tout', 'tout');
    xhr_TousLesPlat.open('POST', './php/requetes_ajax/tous_les_repas.php');
    xhr_TousLesPlat.send(formulaire);
    xhr_TousLesPlat.onreadystatechange = function ()
    {
        if(xhr_TousLesPlat.readyState == 4 && xhr_TousLesPlat.status == 200 )
        {
            boiteListeRepasConsommateur.innerHTML = xhr_TousLesPlat.responseText;
        }
    }
}

function commanderRepas(elt)
{
    let quantite = elt.parentNode.parentNode.childNodes[5].childNodes[3].value;
    let nomRepas = elt.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML;
    let nomRestaurant = elt.parentNode.parentNode.childNodes[5].childNodes[1].innerHTML;
    if(quantite == '0' || quantite <= 0)
    {
        alert("Ajouter une quantité raisonnable svp");
    }
    else
    {
        // ON CREE LA REQUETE POUR ENREGISTRER ET ENVOYER LA COMMANDE
        let xhr_commande = new XMLHttpRequest();
        xhr_commande.open('POST', './php/requetes_ajax/commande.php');
    
        let formulaire = new FormData();
        formulaire.append('quantite', quantite);
        formulaire.append('nomRepas', nomRepas )
        formulaire.append('nomRestaurant', nomRestaurant);
    
        xhr_commande.send(formulaire);
        xhr_commande.onreadystatechange = function ()
        {
            if(xhr_commande.readyState == 4 && xhr_commande.status == 200)
            {
                elt.parentNode.parentNode.childNodes[5].childNodes[3].value = "";
                elt.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute('placeholder', 'Augmenter quantité');
                alert(xhr_commande.responseText);
            }
        }
    
    }
}
function commanderRepas2(elt)
{
    let quantite = elt.parentNode.childNodes[1].value;
    let nomRepas = elt.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML;
    let nomRestaurant = elt.parentNode.parentNode.childNodes[5].innerHTML;
    
    if(quantite == '0' || quantite <= 0)
    {
        alert("Ajouter une quantité raisonnable svp");
    }
    else
    {
        // ON CREE LA REQUETE POUR ENREGISTRER ET ENVOYER LA COMMANDE
        let xhr_commande = new XMLHttpRequest();
        xhr_commande.open('POST', './php/requetes_ajax/commande.php');
    
        let formulaire = new FormData();
        formulaire.append('quantite', quantite);
        formulaire.append('nomRepas', nomRepas )
        formulaire.append('nomRestaurant', nomRestaurant);
    
        xhr_commande.send(formulaire);
        xhr_commande.onreadystatechange = function ()
        {
            if(xhr_commande.readyState == 4 && xhr_commande.status == 200)
            {
                elt.parentNode.childNodes[1].value = "";
                elt.parentNode.childNodes[1].setAttribute('placeholder', 'Augmenter quantité');
                alert(xhr_commande.responseText);
            }
        }
    }

}


function consommateurRechercherLesRepas(elt)
{
    // ON RECUPERE L'ELEMENT QUI VA CONTENIR LES PLAT 
    let boiteListeRepasConsommateur = document.querySelector(".boiteAfficheListeRepas");

    // ON CREE LA REQUETE
    let xhr_TousLesPlat = new XMLHttpRequest();
    let formulaire =  new FormData();
    formulaire.append('recherche', elt.value);
    xhr_TousLesPlat.open('POST', './php/requetes_ajax/tous_les_repas.php');
    xhr_TousLesPlat.send(formulaire);
    xhr_TousLesPlat.onreadystatechange = function ()
    {
        if(xhr_TousLesPlat.readyState == 4 && xhr_TousLesPlat.status == 200 )
        {
            boiteListeRepasConsommateur.innerHTML = xhr_TousLesPlat.responseText;
        }
    }
}