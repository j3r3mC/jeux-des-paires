//déclarations des variables
var carte1 = document.getElementById("0");
var carte2 = document.getElementById("1");
var carte3 = document.getElementById("2");
var carte4 = document.getElementById("3");
var carte5 = document.getElementById("4");
var carte6 = document.getElementById("5");
var carte7 = document.getElementById("6");
var carte8 = document.getElementById("7");
var carte9 = document.getElementById("8");
var carte10 = document.getElementById("9");
var carte11 = document.getElementById("10");
var carte12 = document.getElementById("11");
var carte13 = document.getElementById("12");
var carte14 = document.getElementById("13");
var carte15 = document.getElementById("14");
var carte16 = document.getElementById("15");
var carte17 = document.getElementById("16");
var carte18 = document.getElementById("17");
var seconde = 0;
var minutes = 0;
var timerTotal;
var image1="img/Card.jpg";
var tours = 0;
var carteretour;
var paires = 0
var check;

//fonction pour lancer le jeux
function start(){
    document.getElementById("message").style.visibility="visible";
    document.getElementById("timer").style.visibility="visible"; 
    document.getElementById("tapis").style.visibility="visible";
    document.getElementById("bst").style.visibility="hidden";
    timerTotal = window.setInterval(startTimer,1000);
  
  

}
// Initialisation tableau.



//mélanger les cartes du tapis
    var tab= ["img/Dardevil1.jpg", "img/Dardevil1.jpg", "img/DrStrange1.jpg", "img/DrStrange1.jpg", "img/Ghost-Rider1.jpg", "img/Ghost-Rider1.jpg", "img/Hulk.jpg", "img/Hulk.jpg", "img/HumanTorch.jpg", "img/HumanTorch.jpg", "img/ScarletWitch1.jpg", "img/ScarletWitch1.jpg", "img/Spiderman.jpg", "img/Spiderman.jpg", "img/Thor.jpg", "img/Thor.jpg", "img/Vision.jpg", "img/Vision.jpg"];
    for (let i = tab.length - 1; i > 0; i--) {
        
        const j = Math.floor(Math.random() * (i + 1));
        [tab[i], tab[j]] = [tab[j], tab[i]];
    }
// fonction pour afficher la carte cliquer
function changeImg(carte) { 

    if(carte.src != "https://gitlab.com/dwwm_bze_05/groupe_2-jeux-des-paires/-/raw/CORBEILLA_JEREMY/img/Card.jpg"){
        alert("N'essaye pas de casser le code !")
    }
    else{
        //reset la phrase bien jouer ou ce n'est pas la bonne carte
        document.getElementById("message").innerHTML= "";

        carte.src = tab[carte.id];
        tours++
        //comparaison des deux cartes retournées
        if(tours >= 2 && carte.src == carteretour[0]){
            
            
            tours = 0;
            paires++;
            document.getElementById("message").innerHTML= "Bien jouer !" + " 😎";
            //condition de victoire
            if (paires == 9){
                confirm("You win !");
                clearInterval(timerTotal);
                var confirmation = confirm("Vous avez gagné. Voulez vous rejouer ?");
                if(confirmation == true){
                    window.location.href = "index.html";
                }else {
                    return false;
                }

        };
            }
        // codition si les cartes sont différentes
        else if(tours >= 2 && carte.src != carteretour[0]){
            check = carteretour[1];

            document.getElementById("message").innerHTML= "Ce n'est pas la bonne carte" + " 😒";            
            setTimeout(function(){carte.src = "https://gitlab.com/dwwm_bze_05/groupe_2-jeux-des-paires/-/raw/CORBEILLA_JEREMY/img/Card.jpg"; document.getElementById(check).src = "https://gitlab.com/dwwm_bze_05/groupe_2-jeux-des-paires/-/raw/CORBEILLA_JEREMY/img/Card.jpg"; }, 1000);
            tours = 0;
            
        }
        carteretour = [carte.src, carte.id];
    }

}
//timer
function startTimer(){
    seconde++;
  
    // si seconde/ 60 est Strictement egale a 1 alors seconde sera egale a 0 et minute
    // augmente de 1
    if (seconde/60 ===1){
      seconde=0;
      minutes++;
  
    }
    // si les secondes son inferieur a 10 tu rajoute un 0 devant 
    if (seconde < 10){
      seconde = "0"+seconde;
    } else { 
        
        
       
    }
     
    // permet d'afficher le temps sur html
    document.getElementById('timer').innerHTML = minutes +":"+seconde;
}