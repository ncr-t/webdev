
let count = 0;
let inputnumber;
let randomnumber= Math.floor(Math.random()*100+1);
console.log(randomnumber);
document.getElementById("button1").onclick=function(){
    inputnumber = document.getElementById("input").value;
    console.log(inputnumber);
    document.getElementById("count").innerHTML=count+1;
    if(count<9){
            //j'aurais VRAIMENT aimé utiliser un switch mais je suis pas sur de comment faire xd
            if(inputnumber==randomnumber){document.getElementById("textepic").innerHTML="Gagné !"
            alert("Gagné !")
        }
            else if(inputnumber>randomnumber) { 
                document.getElementById("textepic").innerHTML="ton nombre est trop grand, réessaye !"
                 count+=1  
                 console.log(count)
                 }
            else if(inputnumber<randomnumber){document.getElementById("textepic").innerHTML="ton nombre est trop petit, réessaye !"
                count+=1
                console.log(count)
            }
                
            }
    else{
        alert("you loose")
    }
        }

/*pro tip : utiliser l'extension "live server" permet d'aller super vite....

...enfin a la vitesse max de javascript 
*/