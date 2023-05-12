

gsap.registerPlugin(MorphSVGPlugin);

gsap.registerPlugin(DrawSVGPlugin);




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
const chapitrewidth = document.querySelector("#chapitre1").scrollWidth;



gsap.timeline({ scrollTrigger: {

    scrub: true,
  
    pin: true,
  
    markers: true,
  
    start: 'top top',
  
    end: '300% bottom',
  
    trigger: 'header',
  
  }})


.fromTo('#dessin', { drawSVG:'0% 0%' },{duration: 30,drawSVG:'0% 100%', ease: "linear"}) 






/* chapitre 1 */
gsap.timeline({ scrollTrigger: {

    scrub: true,
  
    pin: true,
  
    markers: true,
  
    start: 'top top',
  
    end: '300% bottom',
  
    trigger: '#chapitre1',
  
  }})


.fromTo('.sprite', 
{ x: "0%" }, 
{duration: 30, x:"50%", ease: "linear"})

  .fromTo('.montagne', 
    {  x:'10%' }, 
    {duration: 30,  x: '7%', ease: "linear",},
      '<'   
  )
  .fromTo('.plaine', 
  {  x:'0%' }, 
  {duration: 30,  x: '-40%', ease: "linear",},
    '<'   
)
.fromTo('.foret', 
{  x:'5%' }, 
{duration: 30,  x: '-10%', ease: "linear",},
  '<'   
),
  
/* chapitre 2 */
  

gsap.to("#dague", {duration:3, morphSVG: {shape:"#katana"},scrollTrigger: {

    scrub: true,
  
    pin: true,
  
    markers: true,
  
    start: 'top top',
  
    end: '300% bottom',
  
    trigger: '#chapitre2',

  
  
  }}),

      

/* chapitre 3 */


gsap.timeline({ scrollTrigger: {

    scrub: true,
  
    pin: true,
  
    markers: true,
  
    start: 'top top',
  
    end: '300% bottom',
  
    trigger: '#chapitre3',
  
  }})

  .fromTo('.lame', 
  { y: "0%" }, 
  {duration: 6, y:"10%", ease: "linear", },'<'  )
  .fromTo('.socle', 
  { y: "0%", x:'0%' }, 
  {duration: 6, y:"160vh%",x:'-18vw', ease: "linear", },'<'  )

  .fromTo('.soutien', 
  { y: "0%",x:'0%' }, 
  {duration: 6, y:"150vh%",x:'9.5vw', ease: "linear", },'<'  )




/* chapitre 4 */
gsap
.timeline({ scrollTrigger: {

    scrub: true,
  
    pin: true,
  
    markers: true,
  
    start: 'top top',
  
    end: '300% bottom',
  
    trigger: '#chapitre4',

  toggleActions: 'play pause resume pause',
  
  }})

  .fromTo('.dude_medit_sprite', 
  { y: "0%" }, 
  {duration: 6, y:"20%", ease: "linear",repeat: 4, yoyo: true , }, )

.fromTo('.arbre1', 
    { rotation: '-10deg' }, 
    {duration: 3, rotation:"10deg", ease: "linear", yoyo: true, repeat:8,},
    '<'      
  )
  .fromTo('.arbre2', 
    { rotation: '-10deg' }, 
    {duration: 3, rotation:"10deg", ease: "linear", yoyo: true, repeat:8,},
    '<'    
  )
  .fromTo('.arbre3', 
    { rotation: '-10deg' }, 
    {duration: 3, rotation:"10deg", ease: "linear", yoyo: true, repeat:8,},
    '<'
  )

 
  .fromTo('.soleil', 
  { rotation: '0deg' }, 
  {duration: 6, rotation:"360deg", ease: "linear",repeat:3}, '<'
          
);


/* chapitre 5 */
gsap
.fromTo('.vague', 
{ x: "0%",y:"0%" }, 
{duration: 30, x:"50%",y:"50%", ease: "linear",repeat: 2,scrollTrigger: {

    scrub: true,
  
    pin: true,
  
    markers: true,
  
    start: 'top top',
  
    end: '300% bottom',
  
    trigger: '#chapitre5',

  
  
  }}),
        


/* chapitre 6 */

gsap.timeline({ scrollTrigger: {

    scrub: true,
  
    pin: true,
  
    markers: true,
  
    start: 'top top',
  
    end: '300% bottom',
  
    trigger: '#chapitre6',
  
  toggleActions: 'restart complete reversereset',
  }})

  
.fromTo('.bulle2', 
{ x:"-10%",rotation: '-10deg' }, 
{duration: 3,x:"10%", rotation:"10deg", ease: "linear", yoyo: true,repeat: 4,},
"<"
            
  )
  .fromTo('.bulle3', 
  { x:"-10%",rotation: '-10deg' }, 
  {duration: 3,x:"10%", rotation:"10deg", ease: "linear", yoyo: true,repeat: 4,},
  "<"     
  )
  .fromTo('.bulle4', 
    { x:"-10%",rotation: '-10deg' }, 
    {duration: 3,x:"10%", rotation:"10deg", ease: "linear", yoyo: true,repeat: 4,},
    "<"
  ).to('.perso_tue', 
  { motionPath:'#ligne_drop',align:"#ligne_drop",alignOrigin:[0.5,0.5],duration:30, }, 
 
  "<"     
  )
  .fromTo('.fantome_gauche', 
  { x:"0%"}, 
  {duration: 3,x:"-20%", ease: "linear"}, 
 
  '-=20'     
  )

  .fromTo('.fantome_droite', 
  { x:"0%"}, 
  {duration: 3,x:"20%", ease: "linear"}, 
 
  '<'     
  )
  
  
  ;
