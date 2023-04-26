var compteur = 0
var cible = document.querySelector('.cible')
var bouton = document.querySelector('.bouton')
var Score = document.querySelector('.score')
var mut = document.querySelector('.x2')





bouton.addEventListener( "click",function (){
    mut.style.display='flex'
    bouton.style.display= 'none'
    cible.style.display= 'flex'
    cible.addEventListener("click",function () {
        if (compteur<10) {
            function getRandom(min, max){
                return Math.floor(Math.random()*(max-min+1)+min);
            }
            Score.innerHTML = 'score :' + compteur
            if(mut.addEventListener("click",function(){   
                 for(var i=0;i=3;i++) {
                cible.addEventListener("click",function () {
                    if (compteur<10) {
                        function getRandom(min, max){
                            return Math.floor(Math.random()*(max-min+1)+min);
                        }
                        Score.innerHTML = 'score :' + compteur
                        compteur=2+compteur;
                        cible.style.top= getRandom(0,500) + 'px';
                        cible.style.left= getRandom(0,1000)+'px';
                     }
                    else {
                    alert('Bien joué')
                    }
                    }
                    )           
                  }
             }
         {
            
         }
         else {
            compteur=1+compteur;
            cible.style.top= getRandom(0,500) + 'px';
            cible.style.left= getRandom(0,1000)+'px';}
            ))
            }           
                }
            }) )


         }
        else {
        alert('Bien joué')
    }

    })

    

})

