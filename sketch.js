const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,ballI;
var stand,stdI;
var blockI;
var grnd;

var score = 0;
var bg = "bg.png";

var gameState = "ready"
var GameState = "start"

var backgroundImage;

function preload(){

  getBackgroundImage();
}

function setup() {
  var canvas = createCanvas(1515,600);
  engine = Engine.create();
    world = engine.world;

  stand = new Ground(1240, 500, 500, 10);
  grnd = new Ground(758,590,1515,20);

  //Row 1
  b1 = new PurpleBox(1015,470);
  b2 = new PurpleBox(1065,470);
  b3 = new PurpleBox(1115,470);
  b4 = new PurpleBox(1165,470);
  b5 = new PurpleBox(1215,470);
  b6 = new PurpleBox(1265,470);
  b7 = new PurpleBox(1315,470);
  b8 = new PurpleBox(1365,470);
  b9 = new PurpleBox(1415,470);
  b10 = new PurpleBox(1465,470);
  
 
  //Row 2

  a1 = new GreenBox(1015,420);
  a2 = new GreenBox(1115,420);
  a3 = new GreenBox(1165,420);
  a4 = new GreenBox(1215,420);
  a5 = new GreenBox(1265,420);
  a6 = new GreenBox(1315,420);
  a7 = new GreenBox(1365,420);
  a8 = new GreenBox(1465,420);
 
 //Row 3

 c1 = new YellowBox(1015,370); 
 c2 = new YellowBox(1165,370); 
 c3 = new YellowBox(1215,370); 
 c4 = new YellowBox(1265,370); 
 c5 = new YellowBox(1315,370); 
 c6 = new YellowBox(1465,370);
 
//Row 4

d1 = new CyanBox(1015,320); 
d2 = new CyanBox(1215,320);
d3 = new CyanBox(1265,320);
d4 = new CyanBox(1465,320);

//Row 5

e1 = new RedBox(1015,270); 
e2 = new RedBox(1240,270);
e3 = new RedBox(1465,270);

ball = new Ball(300,300,50,45);


slingshot = new Slingshot(ball.body,{x:300,y:300});

}

function draw() {
  if(backgroundImage!= null){

    background(backgroundImage);
}

  //Engine.update(engine);

  noStroke();
  textSize(35);
  fill("white");
  text("Score"+score,width-300,50);

  if(score == 31){

    fill("red");
    textSize(100);
    textFont("BOLD")
    text("You Won",600,300)
  }


 stand.display();
grnd.display();

 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();

 b1.score();
 b2.score();
 b3.score();
 b4.score();
 b5.score();
 b6.score();
 b7.score();
 b8.score();
 b9.score();
 b10.score();

 a1.display();
 a2.display();
 a3.display();
 a4.display();
 a5.display();
 a6.display();
 a7.display();
 a8.display();

 a1.score();
 a2.score();
 a3.score();
 a4.score();
 a5.score();
 a6.score();
 a7.score();
 a8.score();

 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();
 c6.display();

 c1.score();
 c2.score();
 c3.score();
 c4.score();
 c5.score();
 c6.score();

 d1.display();
 d2.display();
 d3.display();
 d4.display();

 d1.score();
 d2.score();
 d3.score();
 d4.score();

 e1.display();
 e2.display();
 e3.display();

 e1.score();
 e2.score();
 e3.score();

 ball.display();

 slingshot.display();

}

function mouseDragged(){

  if(gameState == "ready"){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
}

function mouseReleased(){

  slingshot.fly();
  gameState = "launch";
  GameState = "play";

}

function keyPressed(){

  if(keyCode == 32){

      slingshot.attach(ball.body);
      gameState = "ready"
  }
}

async function getBackgroundImage(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") ;
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);

  if(hour>=06 && hour<=18){

   bg = "bg.png"
  }else{

   bg  = "bg2.jpg";
  }

  backgroundImage = loadImage(bg)
}
