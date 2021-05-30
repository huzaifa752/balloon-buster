var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;
var pink,green,red,blue;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //balloon group
  
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
  arrowgroup = new Group();
}

function draw() {
 background(0);
  
  if (arrowgroup.isTouching(redB)){
    redB.destroyEach();
    arrowgroup.destroyEach();
    score=score+1
    
  }
   if (arrowgroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowgroup.destroyEach();
    score=score+1
    
  }
   if (arrowgroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowgroup.destroyEach();
    score=score+1
    
  }
   if (arrowgroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowgroup.destroyEach();
    score=score+1
    
  }
    
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }else if (select_balloon ==2){
      greenBalloon();
    }else if (select_balloon ==3){
      blueBalloon();
    }
    if(select_balloon == 4){
      pinkBalloon();
    }
  }
  
  drawSprites();
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow
 function createArrow() {
   arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -8;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
   arrowgroup.add(arrow)
}


function redBalloon() {
  //write code for spwaning pink balloons
  r =createSprite(0,Math.round(random(20,370)),10,10)
  r.addImage(red_balloonImage);
  r.velocityX= 5;
  r.lifetime=150;
  r.scale=0.1;
  redB.add(r);
}

function greenBalloon() {
  //write code for spwaning pink balloons
  g =createSprite(0,Math.round(random(20,370)),10,10)
  g.addImage(green_balloonImage);
  g.velocityX= 5;
  g.lifetime=150;
  g.scale=0.1;
  greenB.add(g);

  
}

function blueBalloon() {
  //write code for spwaning pink balloons
  b =createSprite(0,Math.round(random(20,370)),10,10)
  b.addImage(pink_balloonImage);
  b.velocityX= 5;
  b.lifetime=150;
  b.scale=0.1;
  blueB.add(b);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  pink =createSprite(0,Math.round(random(20,370)),10,10)
  pink.addImage(pink_balloonImage);
  pink.velocityX= 5;
  pink.lifetime=150;
  pink.scale=0.1;
  pinkB.add(pink);
}

