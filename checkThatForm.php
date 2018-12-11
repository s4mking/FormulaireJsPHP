<?php
          $rendu_html ="<table border='6'>";
          $rendu_erreur="<ul>";
          $tableau_erreur=[];
          $liste_input=['prenom','nom','email','age','bachelor','motdepasse','motdepasse2','sexe','tome','textarea'];
        foreach($liste_input as $valeur){
            if(empty($_POST[$valeur])){
                array_push($tableau_erreur,"Le champ ".$valeur." n'est pas rempli.");
            }
        }
        
        $from = new DateTime($_POST['age']);
        $to   = new DateTime('today');
        $age_user =  $from->diff($to)->y;
          if(strlen($_POST['prenom'])<2){
            array_push($tableau_erreur,"Le champ prénom ne contient pas au moins 2 caractères.");
          }
          if(!ctype_alpha($_POST['prenom'])){
            array_push($tableau_erreur,"Le champ prénom ne contient pas que des lettres.");
          }
        if(strlen($_POST['nom'])<2){
            array_push($tableau_erreur,"Le champ nom ne contient pas au moins 2 caractères.");
        }
        if(!ctype_alpha($_POST['nom'])){
            array_push($tableau_erreur,"Le champ nom ne contient pas que des lettres.");
        }
        if (!filter_var(($_POST['email']),FILTER_VALIDATE_EMAIL)) {
            array_push($tableau_erreur,"Le champ mail n'est pas une adresse mail.");
          }
        if($age_user>160){
            array_push($tableau_erreur,"Le champ age doit etre inférieur à 160.");
        }
        if($age_user<13){
            array_push($tableau_erreur,"Le champ age doit etre supérieur à 13.");
        }
        if (!(preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/",$_POST['age']))) {
            array_push($tableau_erreur,"Le champ age doit etre une date.");
        } 
         if($_POST['bachelor']!='dev' && $_POST['bachelor']!='market' && $_POST['bachelor']!='design'){
             array_push($tableau_erreur,"Le champ bachelor ne correspond pas.");
        }
        if(strlen($_POST['motdepasse'])<12){
            array_push($tableau_erreur,"Le champ password doit etre supérieur à 12.");
        }
        if(strlen($_POST['motdepasse2'])<12){
            array_push($tableau_erreur,"Le champ password2 doit etre supérieur à 12.");
        }
        if(strcmp($_POST['motdepasse2'],$_POST['motdepasse'])!== 0){
            array_push($tableau_erreur,"Le champ password2 n'est pas pareil que password.");
        }
        if((($_POST['sexe']!="femme")&&($_POST['sexe']!="homme"))){
            array_push($tableau_erreur,"Le champ sexe doit etre homme ou femme.");
        }
        if($_POST['textarea']!="<b>si ce texte s'affiche en gras, u lost the game</b>"){
            array_push($tableau_erreur,"Le champ textarea a été modifié.");
        }
        if(count($_POST['tome'])<1){
            array_push($tableau_erreur,"Le champ tome doit contenir au moins un élèment.");
        }
        if(count($tableau_erreur)>0){
           foreach($tableau_erreur as $erreur){
            $rendu_erreur=$rendu_erreur."<li>".$erreur."</li>";
           }
           echo($rendu_erreur."</li>");
           echo("<img src='https://risibank.fr/cache/stickers/d311/31114-full.jpg'>");
        }
        else{
            $resultat_tome=implode(", ", ($_POST['tome']));
            $_POST['tome']=$resultat_tome;
            foreach($_POST as $key => $value){
                switch($key){
                    case 'prenom':
                    $key='Prénom :';
                    break;
                    case 'nom':
                    $key='Nom :';
                    break;
                    case 'email':
                    $key='E - Mail :';
                    break;
                    case 'age':
                    $key='Age :';
                    break;
                    case 'bachelor':
                    $key='Bachelor :';
                    break;
                    case 'motdepasse':
                    $key='Mot de passe :';
                    break;
                    case 'motdepasse2':
                    $key='Mot de passe vérifié :';
                    break;
                    case 'sexe':
                    $key='Sexe :';
                    break;
                    case 'tome':
                    $key='Tome(s) favoris de H2G2 :';
                    break;
                    case 'textarea':
                    $key='SCommentaire :';
                    break;
                }
                $rendu_html=$rendu_html."<tr><td>".$key."</td><td>".htmlspecialchars($value)."</td></tr>";
            }
            echo ($rendu_html.'</table><video width="700" height="700" autoplay loop><source src="https://theannoyingsite.com/hasan.mp4" type="video/mp4"></video>'); 
        }