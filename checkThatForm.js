//Entrée du formulaire 
//Définition du tableau avec toutes les erreurs, debase elles sont settées sur erreur et on les active uniquement au passage sur un des champs du formulaire
tableau_erreur1={
    'presence-nom': 0,
    'validation-nom': 1,
    'presence-prenom': 0,
    'validation-prenom': 1,
    'presence-date': 0,
    'validation-date': 1,
    'presence-sexe': 0};
    tableau_erreur2={
        'presence-password': 0,
        'validation-password': 1,
        'presence-password2': 0,
        'validation-password2': 1,
        'presence-email': 0,
        'validation-email': 1,
        'presence-adresseblog': 0,
        'validation-adresseblog':1
    };
    tableau_erreur3={
        'presence-bachelor': 0,
        'validation-bachelor': 1,
        'presence-promo': 0,
        'validation-promo': 1,
        'presence-tome': 0,
        'validation-tome': 1,
        'presence-textarea': 1
    }

    const PHRASES = [
        'The wheels on the bus go round and round, round and round, round and round. The wheels on the bus go round and round, all through the town!',
        'Dibidi ba didi dou dou, Di ba didi dou, Didi didldildidldidl houdihoudi dey dou',
        'I like fuzzy kittycats, warm eyes, and pretending household appliances have feelings',
        'I\'ve never seen the inside of my own mouth because it scares me to death.',
        'hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw',
        'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaak',
        'eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo'
      ]
      function getRandomArrayEntry (arr) {
        return arr[Math.floor(Math.random() * arr.length)]
      }
    function speak (phrase) {
        if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
        window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
      }
      speak()

    function ValidDate(dateVar) {
        var pattern = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
        return pattern.test(dateVar);
    }
function myValidation(tableauerreur,ecran)
{
    var compteurTab;
    var resultatFinal;
    var tableauAfficheErreur=[];
    var erreur=0;
   
   for(val in tableauerreur){
        resultatFinal=resultatFinal+tableauerreur[val];
        compteurTab++;
        //Si au moins une erreur alors on evoie pas le form puis on affiche les erreurs
        if(tableauerreur[val]==0){
            erreur=1;
        //Plutot que faire un gros switch case je me ses que génériquemenet mes variables d'erreurs soient soit des validation soit des présences
        //J'ai juste à récup le label puis le nom de l'objet js
            if(val.includes('validation')){
                var res = val.substr(11);
                tableauAfficheErreur.push("Le champ "+res+ " n'est pas valide!!!");
            }
            else{
                var res = val.substr(9);
                tableauAfficheErreur.push("Le champ "+res+ " n'est pas rempli!!!");
            }
        }
   }
   if(erreur==1){
    alert(tableauAfficheErreur.join("\n"));
      return false;
   }
   else if(ecran == 1){
       var range_val = document.getElementById('range').value;
       range_val=range_val*1000;
    document.getElementById('first').style.animation='slide-out-elliptic-top-bck 0.7s ease-in both';
    setTimeout(function(){
        document.getElementById('flex1').style.display='flex';
        var vid = document.getElementById('hassan');
        vid.play();
        var vid2 = document.getElementById('yeah');
        vid2.play();
        var rick = document.getElementById('rick');
        rick.play();
             setTimeout(function(){
                        document.getElementById('first').style.display='none';
                        document.getElementById('first').style.animation='none';
                        document.getElementById('second').style.display='block';
                        document.getElementById('second').style.animation='flicker-in-1 2s linear both';
                        document.getElementById('flex1').style.display='none';
                        vid.pause();
                        vid2.pause();
                        rick.pause();
             },range_val)
     },2000)   
   }
   else if(ecran == 2){
    var range_val2 = document.getElementById('range2').value;
    range_val2=range_val2*1000;
    document.getElementById('second').style.display='none';
    setTimeout(function(){
        document.getElementById('flex2').style.display='flex';
       
        var heman = document.getElementById('heman');
        heman.play();
        var albundy = document.getElementById('albundy');
        albundy.play();
        var space = document.getElementById('space');
        space.play();
        var trolol = document.getElementById('trolol');
        trolol.play();

        setTimeout(function(){
            document.getElementById('flex2').style.display='none';
            heman.pause();
            albundy.pause();
             space.pause();
            trolol.pause();
        document.getElementById('third').style.display='block';
             },range_val2)
    },2000)
   }
   else if(ecran ==3){
    var range_val3 = document.getElementById('range3').value;
    range_val3=range_val3*1000;
    event.preventDefault();
          alert("Bravo toutes les entrées sont validées!!! Let's play fun begin ^_^");
          document.getElementById('nyan').style.display='block';
          document.getElementById('nyan2').style.display='block';
          document.getElementById('nyan3').style.display='block';
          document.getElementById('nyan4').style.display='block';
          document.getElementById('form').style.display='none';
          document.getElementById('lastform').style.display='block';
        document.getElementsByTagName("BODY")[0].style.animation='BGC 1s infinite';
          var a = document.getElementById('audio');
          a.play();
         
       
       window.setInterval(() => {
            explode(options);
         }, 2000/60);
        
       setTimeout(function(){
            document.myform.submit();
         }, range_val3);
        


       
   }
}

//Fonction qui servira à afficher les erreurs lors de l'appel de nos events listeners pour les inputs
//D'abord on teste la présence puis la validation et on affiche ensuite l'erreur, 
//la dernière étape consiste à setter la variable correspondante dans le tableau d'erreur
function valider(objet){
    var password1=document.getElementById('password').value;
    var password2=document.getElementById('password2').value;
    var valeur=objet.value;
    var erreur = document.getElementById(objet.id+'Faux');
    erreur.innerHTML='';
     if(valeur==''){
        objet.classList.remove("good");
         objet.classList.add('bad');
        erreur.innerHTML='Le champ '+objet.id+' est vide!!!';
        if(objet.id=='nom' || objet.id=='prenom' || objet.id=='date' || objet.id=='sexe'){
           tableau_erreur1['presence-'+objet.id]=0;
        }
        else if(objet.id=='password' || objet.id=='password2' || objet.id=='email' || objet.id=='adresseblog'){
            tableau_erreur2['presence-'+objet.id]=0;
         }
         else{
            tableau_erreur3['presence-'+objet.id]=0;
         }
     }
     else if(objet.id == 'nom' || objet.id == 'prenom'){
        tableau_erreur1['presence-'+objet.id]=1;
        if(!(/^[A-z]+$/.test(valeur))){
            objet.classList.remove("good");
            objet.classList.add('bad');
            erreur.innerHTML="Le champ ne contient pas que des lettres!!!"; 
            tableau_erreur1['validation-'+objet.id]=0;
        }
        else{
            objet.classList.remove("bad");
            objet.classList.add('good');
            tableau_erreur1['validation-'+objet.id]=1;
        }
    }
    else if(objet.id=='password'){
        tableau_erreur2['presence-'+objet.id]=1;
        if(!(password2 == '')){
            if(password1 != password2){
                objet.classList.remove("good");
                objet.classList.add('bad');
                erreur.innerHTML='Le champ '+objet.id+' ne correspond pas au second mot de passe!!!';
                tableau_erreur2['validation-'+objet.id]=0;
            }
            else{
                objet.classList.remove("bad");
                objet.classList.add('good');
                erreur.innerHTML='';
                tableau_erreur2['validation-'+objet.id]=1;
            }
        }
    }
    else if(objet.id=='password2'){
        tableau_erreur2['presence-'+objet.id]=1;
        if(!(password == '')){
            if(password1 != password2){
                objet.classList.remove("good");
                objet.classList.add('bad');
                erreur.innerHTML='Le champ '+objet.id+' ne correspond pas au second mot de passe!!!';
                tableau_erreur2['validation-'+objet.id]=0;
            }
            else{
                console.log('toto');
                objet.classList.remove("bad");
                objet.classList.add('good');
                erreur.innerHTML='';
                tableau_erreur2['validation-'+objet.id]=1;
            }
        }
    }
    else if(objet.id=='date'){
        tableau_erreur1['presence-'+objet.id]=1;
        if(!(ValidDate(valeur))){
            objet.classList.remove("good");
            objet.classList.add('bad');
            erreur.innerHTML='Le champ '+objet.id+' n\'est pas une date!!!';
            tableau_erreur1['validation-'+objet.id]=0;
        }
        else{
            objet.classList.remove("bad");
            objet.classList.add('good');
            tableau_erreur1['validation-'+objet.id]=1;
        }
    }
    else if(objet.id=='promo'){
        tableau_erreur3['presence-'+objet.id]=1;
        if(!(/^[0-9]+$/.test(valeur))){
            objet.classList.remove("good");
            objet.classList.add('bad');
            erreur.innerHTML='Le champ '+objet.id+' ne contient pas que des chiffres!!!';
            tableau_erreur3['validation-'+objet.id]=0;
        }
        else{
            objet.classList.remove("bad");
            objet.classList.add('good');
            tableau_erreur3['validation-'+objet.id]=1;
        }
    }
    else if(objet.id=='bachelor'){
        tableau_erreur3['presence-'+objet.id]=1;
        if(valeur!='dev'&& valeur !='business'&& valeur !='design'){
            objet.classList.remove("good");
            objet.classList.add('bad');
            erreur.innerHTML='Le champ '+objet.id+' ne contient pas une des valeurs requises!!!';
            tableau_erreur3['validation-'+objet.id]=0;
        }
        else{
            objet.classList.remove("bad");
            objet.classList.add('good');
            tableau_erreur3['validation-'+objet.id]=1;
        }
    }
    else if(objet.id=='email'){
        tableau_erreur2['presence-'+objet.id]=1;
        if(!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(valeur))){
            objet.classList.remove("good");
            objet.classList.add('bad');
            erreur.innerHTML='Le champ '+objet.id+' ne correspond pas à un mail!!!';
            tableau_erreur2['validation-'+objet.id]=0;
        }
        else{
            objet.classList.remove("bad");
            objet.classList.add('good');
            tableau_erreur2['validation-'+objet.id]=1;
        }
    }
    else if(objet.id=='adresseblog'){
        tableau_erreur2['presence-'+objet.id]=1;
        if(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(valeur)){
            tableau_erreur2['validation-'+objet.id]=1;
            objet.classList.remove("bad");
            objet.classList.add('good');
        }
        else{
            objet.classList.remove("good");
            objet.classList.add('bad');
            tableau_erreur2['validation-'+objet.id]=0;
            erreur.innerHTML='Le champ '+objet.id+' ne correspond pas à une adresse valide!!!';
        }

    }
    else{
        
        objet.classList.add('good');
        tableau_erreur3['presence-'+objet.id]=1;
    }
}
//Fonction pour la vérification des checkboxes
function checkMyBox(objet){
    var erreur = document.getElementById('tomeFaux');
    var x = document.getElementsByClassName('check');
    var test=0;
    erreur.innerHTML='';
    var radioGroup = document.getElementsByName('sexe');
    var n = radioGroup.length;
//Si sexe alors traitement pour les 2 boutons radios
    if(objet.name=="sexe"){
        tableau_erreur1['presence-sexe']=1;
        for (var i=0;i<n;i++){
            if (radioGroup[i].checked){
                tableau_erreur1['validation-sexe']=1;
            }
        }
    }
//Si les checkboxes alors on ajoute le traitement plus la boucle
	else{
        for (var i = 0; i < x.length; i++) {
            var actuel = x[i];
            if (actuel.checked) {
              test=test+1;
            }
          }   
          if(test>2){
              erreur.innerHTML='Vous avez rentré plus de 2 choix!!!';
              tableau_erreur3['validation_tome']=0;
              tableau_erreur3['presence-tome']=1;
          }
          else if(test>0 && test<=2){
              tableau_erreur3['validation-tome']=1;
              tableau_erreur3['presence-tome']=1;
          }
          else if(test==0){
            tableau_erreur3['validation-tome']=1;
            tableau_erreur3['presence-tome']=0;
          }
    }   
}

//Ajout des différents events listeners pour les inputs
var liste = document.getElementsByTagName('input');
for(i=0;i<liste.length;i++){
    if(liste[i].id!='' && liste[i].id!='range'){
//On ajoute une fonction pour les checkbox et radio
            if(liste[i].id=='check1'||liste[i].id=='check2'||liste[i].id=='check3'||liste[i].id=='check4'||liste[i].id=='check5'||liste[i].id=='homme'||liste[i].id=='femme'){
                liste[i].addEventListener('click', function(){ 
                     checkMyBox(this);
                    });
            }
//On ajoute une fonction pour les inputs basiques
            else{
                liste[i].addEventListener('input', function(){ 
                     valider(this);  
        });
    }
}
}
//Ajout de l'addevent listener sur le champ Textarea
    document.getElementById('textarea').addEventListener('input', function(){
        valider(this);
    });

    document.getElementById('premierepage').addEventListener('click', function(){
        myValidation(tableau_erreur1,1);
      
    });
    document.getElementById('seconde_page').addEventListener('click', function(){
        document.getElementById('first').style.display='block';
        document.getElementById('second').style.display='none';
    });
    document.getElementById('troisieme_page').addEventListener('click', function(){

    //Fonction AJAx pour tester le mail 
        function showHint(str) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                     var ReponseJson = JSON.parse(this.responseText);
                  if(ReponseJson=='glop'){
                        myValidation(tableau_erreur2,2);
                   }else{
                         alert('Vous avez rentré un mail déjà inséré');
               }
            }
        };
            xmlhttp.open("GET", "check-if-mail-exists.php?email="+ str, true);
            xmlhttp.send();
     
        }
        var mail = document.getElementById('email').value;
        showHint(mail);
    });

    document.getElementById('inscription').addEventListener('click', function(){
        myValidation(tableau_erreur3,3);
    });


    document.getElementById('retour_deuxieme_page').addEventListener('click', function(){
        document.getElementById('third').style.display='none';
        document.getElementById('second').style.display='block';
    });

//Fonction pour afficher la superbe animation des licornes ^_^
// ===============
// Variables
const options = {
	radius: 900, // explosion size
	variation: 20, // randomized variation on each point's angle
	points: 19, // number of points in explosion
	character: '🦄' // the character in each particle
}
const main = document.querySelector('main');
let clicked = false;

// ==============
// Functions

function explode(options) {
	const container = document.createElement('div');
	container.classList.add('particles-container');
	 container.style.left = "50%";
	container.style.top = "50%";
	document.body.appendChild(container);
	
  for (let i = 0; i < options.points; i++) {
		const referenceAngle = (360 / options.points) * (i + 1);
		const maxAngle = referenceAngle + parseFloat(options.variation);
		const minAngle = referenceAngle - parseFloat(options.variation);
		
		const angle = randomAngleBetween(minAngle, maxAngle);

		const x = Math.cos(angle) * options.radius;
		const y = Math.sin(angle) * options.radius;
		const popup = document.createElement('div');
		popup.textContent = `${options.character}`;
		popup.classList.add('particle');
		popup.style.top = y + "px";
		popup.style.left = x + "px";
		container.appendChild(popup);
		
		if (i == 0) {
			popup.addEventListener('animationend', () => {
				document.body.removeChild(container);
			});
		}
	}
}

function randomAngleBetween(minAngle, maxAngle) {
	return (Math.random() * (maxAngle - minAngle) + minAngle) / 180 * Math.PI - Math.PI/2;
}