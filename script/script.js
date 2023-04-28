const fleche = document.querySelector('.fleche');
const body = document.querySelector('body');
const sprite= document.querySelector(".sprite");
const medite= document.querySelector(".dude_medit_sprite");
  gsap.fromTo('.fleche', 
    { y: '-50%' }, 
    {duration: 1, y: '0%', ease: "expo.in" , yoyo: true,  repeat: -1},
              { }
  );


window.addEventListener("scroll",function(){

    sprite.style.animationPlayState="running"
    setTimeout(function(){sprite.style.animationPlayState="paused"}, 200)
  
//1:je ne comprend pas pourquoi ca ne marche pas mais jai mis mes demarche (jessaie davoir le plus de point pour passer mon annee)
   // body.classList.add('.is-scrolling'),
    //setTimeout(function(){ body.classList.remove(".is-scrolling")}, 100)
   
  });
 
  

//1:
//if(body.classList.contains(".is-scrolling")) {sprite.style.animationPlayState="running"}

//else if(sprite.style.animationPlayState="paused");
 

window.addEventListener("scroll",function(){

  medite.style.animationPlayState="running"
 
  setTimeout(function(){medite.style.animationPlayState="paused"}, 1000)


});