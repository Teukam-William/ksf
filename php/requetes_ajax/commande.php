<?php
    if(isset($_POST['quantite']) && isset($_POST['nomRepas']) && isset($_POST['nomRestaurant']))
    {
        $quantite = $_POST['quantite'];
        $nomRepas = $_POST['nomRepas'];
        $nomRestaurant = $_POST['nomRestaurant'];
        $id = $nomRestaurant."_".$nomRepas;
        include('connexion_bd.php');

        $repas = $connexion->query("SELECT * FROM repas WHERE id_plat = '$id'");
        $detailsRepas = $repas->fetchAll();

        if(json_encode($detailsRepas))
        {
            session_start();
            $nomClient = $_SESSION['nom'];
            $eMail = $_SESSION['email'];
            $tel = $_SESSION['tel'];

            $idCommande = uniqid()."_".$nomClient."_".$nomRepas."_".$quantite;

            $commande = $connexion->query("INSERT INTO commande VALUE( '$idCommande', '$nomClient', '$nomRepas', '$quantite', '$nomRestaurant', CURRENT_TIMESTAMP()   )" );
            if(json_encode($commande))
            {
                // $dest = $eMail;
                // $objet="NOUVELLE COMMANDE SUR KSF";
                // $message='<html>
                //         <body>
                //             <h2>
                //                 UNE COMMANDE DE : '.$nomClient.'
                //             </h2>
                //             <p>REPAS : '.$nomRepas.'</p>
                //             <Bbr/>
                //             <p>QUANTITE : '.$quantite.'</p>
                //             <Bbr/>
                //             <p>Contact client : '.$tel.'</p>
                //             <Bbr/>
                //             <p>e-mail client : '.$eMail.'</p>
                            
                //             <p>Merci et à bientôt </p>.
                //         </body>
                //     </html>';

                // $entetes = "MIME-Version: 1.0"."\r\n";
                // $entetes.="Content-Type:text/html; charset='iso-8895-1'\r\n";
                // $entetes.="Content-Transfer-Encoding:8bit\r\n";
                // $entetes.="From:jean@tradingfox.online\r\n";
                // $entetes.="Reply-To:jean@tradingfox.online";
                // mail($dest,$objet,$message,$entetes);

                echo "effectuer";
            }
            else
            {
                echo "Erreur...";
            }
        }
    }
?>