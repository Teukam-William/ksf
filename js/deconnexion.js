
function deconnexion()
{
    let xhr_deconexion = new XMLHttpRequest();
    xhr_deconexion.open("POST", "./php/requetes_ajax/deconnexion.php");
    xhr_deconexion.send();
    xhr_deconexion.onreadystatechange = function ()
    {
        if(xhr_deconexion.readyState == 4 && xhr_deconexion.status == 200)
        {
            alert("Deconnexion...");
            window.location.replace("./");

        }
    }
}