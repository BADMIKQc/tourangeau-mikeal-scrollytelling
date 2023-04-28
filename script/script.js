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


//P2.2 B - INSTRUCTIONS 4

const arbre1= document.querySelector(".arbre1");
const arbre2= document.querySelector(".arbre2");
const arbre3= document.querySelector(".arbre3");
const soleil= document.querySelector(".soleil");
const vague= document.querySelector(".vague");
const bulle2= document.querySelector(".bulle2");
const bulle3= document.querySelector(".bulle3");
const bulle4= document.querySelector(".bulle4");



gsap
.timeline()

.fromTo('.arbre1', 
    { rotation: '-10deg' }, 
    {duration: 1, rotation:"10deg", ease: "linear", yoyo: true,repeat: -1,},
            
  )
  .fromTo('.arbre2', 
    { rotation: '-10deg' }, 
    {duration: 1, rotation:"10deg", ease: "linear", yoyo: true,repeat: -1,},
    "-=1.3"     
  )
  .fromTo('.arbre3', 
    { rotation: '-10deg' }, 
    {duration: 1, rotation:"10deg", ease: "linear", yoyo: true,repeat: -1,},
    "-=1.3"
  );

  gsap
  .fromTo('.soleil', 
  { rotation: '0deg' }, 
  {duration: 3, rotation:"360deg", ease: "linear",repeat: -1,},
          
)

gsap
.fromTo('.vague', 
{ x: "0%",y:"0%" }, 
{duration: 30, x:"50%",y:"50%", ease: "linear",repeat: -1,},
        
)


gsap
.timeline()

.fromTo('.bulle2', 
{ x:"-10%",rotation: '-10deg' }, 
{duration: 3,x:"10%", rotation:"10deg", ease: "linear", yoyo: true,repeat: -1,},
"-=1.3"
            
  )
  .fromTo('.bulle3', 
  { x:"-10%",rotation: '-10deg' }, 
  {duration: 1,x:"10%", rotation:"10deg", ease: "linear", yoyo: true,repeat: -1,},
  "-=1.3"     
  )
  .fromTo('.bulle4', 
    { x:"-10%",rotation: '-10deg' }, 
    {duration: 3,x:"10%", rotation:"10deg", ease: "linear", yoyo: true,repeat: -1,},
    "-=1.3"
  );