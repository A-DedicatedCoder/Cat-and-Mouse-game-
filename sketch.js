var cat, catImage, catImage2;
var mouse, mouseImage,mouseImage2;
var background, backgroundImage;

function preload() {
    //load the images here
    catImage = loadImage("cat1.png");
    mouseImage = loadImage("mouse3.png");
    backgroundImage = loadImage("garden.png");
    catImage2 = loadImage("cat2.png");
    mouseImage2 = loadImage("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite(500,500,800,800);
    background.addImage(backgroundImage);

    cat = createSprite(750,700,20,40);
    cat.scale = 0.2;
    cat.addImage(catImage);

    mouse = createSprite(100,700,20,30);
    mouse.scale = 0.2;
    mouse.addImage(mouseImage);
}

function draw() {
    
   

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
      cat.addAnimation("cat",catImage2);
      cat.changeAnimation("cat");
      mouse.addAnimation("mouse",mouseImage2);
      mouse.changeAnimation("mouse");
    }
  //For moving and changing animation write code here

}


