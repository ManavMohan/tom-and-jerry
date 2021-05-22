var  bgImg,cat;
function preload() {
    //load the images here
catImg1=loadAnimation("images/cat1.png")
 bgImg=loadImage("images/garden.png")
  mouseImage=loadAnimation("images/mouse1.png")
 catImg2=loadAnimation("images/cat2.png","images/cat3.png" )
  mouseImage2=loadAnimation("images/mouse2.png","images/mouse4.png")
  catImg3=loadAnimation("images/cat4.png")
  mouseImage3=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    
     
    

      

     cat=createSprite(700,700,50,20)
     cat.addAnimation("catsleeping",catImg1)
     cat.scale=0.15

      mouse=createSprite(50,650,50,20)
     mouse.addAnimation(" mousestanding",mouseImage)
     mouse.scale=0.15

     
     


}

function draw() {

    background( bgImg );
    //Write condition here to evalute if tom and jerry collide
      if (cat.x-mouse.x< (cat.width-mouse.width)/2){
         cat.velocityX=0;
         cat.x=200
         cat.addAnimation("catstanding",catImg3)
         cat.changeAnimation("catstanding")

         mouse.addAnimation("mousestanding",mouseImage3)
         mouse.changeAnimation("mousestanding")
          
      }

       
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===RIGHT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImage2)

mouse.frameDelay=25
mouse.changeAnimation("mouseTeasing")
cat.velocityX=-3
cat.addAnimation("catrunning",catImg2)
cat.changeAnimation("catrunning")
}

}
