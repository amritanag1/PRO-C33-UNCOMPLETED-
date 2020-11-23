const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var PLAY = 1;
var gamestate = 1;
var particle;
var turn = 0;
var count;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(20);
  text("Score : " +score,20,30);
  text("900", 25,530);
  text("800", 105,530);
  text("700", 185,530);
  text("600", 265,530);
  text("500", 345,530);
  text("400", 425,530);
  text("300", 505,530);
  text("200", 585,530);
  text("100", 665,530);
  text("50", 745,530);
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     turn++;
   }
 
   for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particle !== null){
      particle.display();
     if(particle.body.position.y > 760){
       if(particle.body.position.x < 300){
         score = score+500;
         particle = null
         if(turn >= 5)gamestate = "end";
       }
     }
   }

  }

function mousePressed() {
  if (gamestate !== "end"){
     turn++;
     particle = new Particle(mouseX ,10, 10, 10);
  }
}